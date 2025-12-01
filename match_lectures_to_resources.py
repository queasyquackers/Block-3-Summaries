"""
Match lectures to Anking resources based on topic keywords.
"""

import json
import re
from collections import defaultdict

# Module to resource priority mapping
MODULE_PRIORITY = {
    'OMM': ['B&B', 'Bootcamp'],
    'Anatomy': ['B&B', 'FirstAid', 'Bootcamp'],
    'Pharmacology': ['SketchyPharm', 'B&B', 'FirstAid', 'Bootcamp'],  # Sketchy FIRST
    'Microbiology': ['SketchyMicro', 'Physeo', 'FirstAid', 'Bootcamp'],
    'Pathology': ['Pathoma', 'SketchyPath', 'FirstAid', 'Bootcamp'],  # Pathoma FIRST
    'Physiology': ['B&B', 'Physeo', 'FirstAid', 'Bootcamp'],
    'Biochemistry': ['Pixorize', 'B&B', 'FirstAid', 'Bootcamp'],
    'Immunology': ['Pixorize', 'B&B', 'FirstAid', 'Bootcamp'],
}

def load_resource_index(filepath):
    """Load the resource index created by parse_anking_tags.py"""
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)

def load_lectures(filepath):
    """Extract lecture data from lectures_data.js"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lectures = []
    
    # Split by lecture boundaries - each starts with "  {\n    id:"
    # But we need to handle both 'l102' and "L120" formats
    parts = content.split('  {')
    
    for part in parts[1:]:  # Skip first empty part
        # Extract id - handle both single and double quotes, both l and L
        id_match = re.search(r"id:\s*['\"]([lL]\d+[^'\"]*)['\"]", part)
        if not id_match:
            continue
        
        lecture_id = id_match.group(1)
        
        # Skip question IDs
        if '-q' in lecture_id:
            continue
        
        # Normalize to lowercase
        lecture_id = lecture_id.lower()
        
        # Extract title - handle both quote types
        title_match = re.search(r"title:\s*['\"]([^'\"]+)['\"]", part)
        if not title_match:
            continue
        
        # Extract module - handle both quote types and array format
        module_match = re.search(r"module:\s*['\"]([^'\"]+)['\"]", part)
        if not module_match:
            continue
        
        # Extract tags - handle both string and array formats
        tags_match = re.search(r"tags:\s*(?:['\"]([^'\"]*)['\"]|\[([^\]]+)\])", part)
        if tags_match:
            tags = tags_match.group(1) or tags_match.group(2) or ''
            # Clean array format
            tags = tags.replace('"', '').replace("'", '').replace(',', ' ')
        else:
            tags = ''
        
        lectures.append({
            'id': lecture_id,
            'title': title_match.group(1),
            'module': module_match.group(1),
            'tags': tags
        })
    
    return lectures

def extract_keywords(title, tags):
    """Extract meaningful keywords from title and tags"""
    # Clean up title
    title_clean = re.sub(r'L\d+\s*-\s*', '', title)  # Remove L102 -
    title_clean = re.sub(r'[:\(\),]', ' ', title_clean)  # Remove punctuation
    
    # Combine title and tags
    text = f"{title_clean} {tags}".lower()
    
    # Extract meaningful words (3+ chars, not common words)
    stop_words = {'the', 'and', 'for', 'with', 'part', 'lecture', 'prep', 'lab'}
    words = re.findall(r'\b\w{3,}\b', text)
    keywords = [w for w in words if w not in stop_words]
    
    return keywords

def score_resource_matches(keywords, resource_topics):
    """
    Score how well keywords match resource topics.
    Returns dict of {topic: score}
    """
    scores = defaultdict(int)
    
    for topic, count in resource_topics.items():
        topic_lower = topic.lower()
        
        # Check each keyword
        for keyword in keywords:
            if keyword in topic_lower:
                # Weight by tag frequency
                scores[topic] += count
    
    return dict(scores)

def find_best_resource(lecture, resource_index, module_priority):
    """Find the best resource and chapter for a lecture"""
    keywords = extract_keywords(lecture['title'], lecture['tags'])
    module = lecture['module']
    
    # Get priority order for this module
    priority_resources = MODULE_PRIORITY.get(module, list(resource_index.keys()))
    
    best_match = None
    best_score = 0
    best_resource = None
    
    # Score each resource
    for resource_name in priority_resources:
        if resource_name not in resource_index:
            continue
        
        resource_topics = resource_index[resource_name]
        scores = score_resource_matches(keywords, resource_topics)
        
        if scores:
            # Get top-scoring topic
            top_topic = max(scores, key=scores.get)
            top_score = scores[top_topic]
            
            # Boost score for prioritized resources
            priority_boost = (len(priority_resources) - priority_resources.index(resource_name)) * 10
            adjusted_score = top_score + priority_boost
            
            if adjusted_score > best_score:
                best_score = adjusted_score
                best_match = top_topic
                best_resource = resource_name
    
    if best_match:
        # Get alternative resources - include ALL that match (even weakly)
        alternatives = []
        
        # Mandatory resources based on module
        mandatory = []
        if 'pharmacology' in module.lower():
            mandatory = ['SketchyPharm']
        elif 'pathology' in module.lower():
            mandatory = ['Pathoma']
        
        for resource_name in resource_index.keys():
            if resource_name == best_resource:
                continue
            
            scores = score_resource_matches(keywords, resource_index[resource_name])
            
            # For mandatory resources, include even if no match
            if resource_name in mandatory:
                if scores:
                    top_topic = max(scores, key=scores.get)
                else:
                    # Get ANY topic from this resource as fallback
                    top_topic = list(resource_index[resource_name].keys())[0] if resource_index[resource_name] else "General"
                alternatives.append({
                    'resource': resource_name,
                    'chapter': top_topic,
                    'score': scores.get(top_topic, 0) if scores else 0,
                    'mandatory': True
                })
            elif scores:
                top_topic = max(scores, key=scores.get)
                # Include ALL matches, no threshold
                alternatives.append({
                    'resource': resource_name,
                    'chapter': top_topic,
                    'score': scores[top_topic],
                    'mandatory': False
                })
        
        # Sort alternatives by mandatory first, then score
        alternatives.sort(key=lambda x: (not x.get('mandatory', False), -x['score']))
        # Remove score and mandatory flag before returning
        alternatives = [{'resource': alt['resource'], 'chapter': alt['chapter']} for alt in alternatives]
        
        return {
            'primarySource': best_resource,
            'chapter': best_match,
            'alternatives': alternatives  # All alternatives, sorted by relevance
        }
    
    return None

def match_all_lectures(lectures, resource_index):
    """Match all lectures to resources"""
    results = {}
    
    for lecture in lectures:
        print(f"Matching {lecture['id']}: {lecture['title']}")
        match = find_best_resource(lecture, resource_index, MODULE_PRIORITY)
        
        if match:
            results[lecture['id']] = match
            print(f"  [OK] {match['primarySource']}: {match['chapter']}")
        else:
            results[lecture['id']] = None
            print(f"  [--] No good match (in-house lecture)")
    
    return results

def save_mappings(mappings, output_path):
    """Save lecture-resource mappings to JSON"""

def load_lectures(filepath):
    """Extract lecture data from lectures_data.js"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lectures = []
    
    # Split by lecture boundaries - each starts with "  {\n    id:"
    # But we need to handle both 'l102' and "L120" formats
    parts = content.split('  {')
    
    for part in parts[1:]:  # Skip first empty part
        # Extract id - handle both single and double quotes, both l and L
        id_match = re.search(r"id:\s*['\"]([lL]\d+[^'\"]*)['\"]", part)
        if not id_match:
            continue
        
        lecture_id = id_match.group(1)
        
        # Skip question IDs
        if '-q' in lecture_id:
            continue
        
        # Normalize to lowercase
        lecture_id = lecture_id.lower()
        
        # Extract title - handle both quote types
        title_match = re.search(r"title:\s*['\"]([^'\"]+)['\"]", part)
        if not title_match:
            continue
        
        # Extract module - handle both quote types and array format
        module_match = re.search(r"module:\s*['\"]([^'\"]+)['\"]", part)
        if not module_match:
            continue
        
        # Extract tags - handle both string and array formats
        tags_match = re.search(r"tags:\s*(?:['\"]([^'\"]*)['\"]|\[([^\]]+)\])", part)
        if tags_match:
            tags = tags_match.group(1) or tags_match.group(2) or ''
            # Clean array format
            tags = tags.replace('"', '').replace("'", '').replace(',', ' ')
        else:
            tags = ''
        
        lectures.append({
            'id': lecture_id,
            'title': title_match.group(1),
            'module': module_match.group(1),
            'tags': tags
        })
    
    return lectures

def extract_keywords(title, tags):
    """Extract meaningful keywords from title and tags"""
    # Clean up title
    title_clean = re.sub(r'L\d+\s*-\s*', '', title)  # Remove L102 -
    title_clean = re.sub(r'[:\(\),]', ' ', title_clean)  # Remove punctuation
    
    # Combine title and tags
    text = f"{title_clean} {tags}".lower()
    
    # Extract meaningful words (3+ chars, not common words)
    stop_words = {'the', 'and', 'for', 'with', 'part', 'lecture', 'prep', 'lab'}
    words = re.findall(r'\b\w{3,}\b', text)
    keywords = [w for w in words if w not in stop_words]
    
    return keywords

def score_resource_matches(keywords, resource_topics):
    """
    Score how well keywords match resource topics.
    Returns dict of {topic: score}
    """
    scores = defaultdict(int)
    
    for topic, count in resource_topics.items():
        topic_lower = topic.lower()
        
        # Check each keyword
        for keyword in keywords:
            if keyword in topic_lower:
                # Weight by tag frequency
                scores[topic] += count
    
    return dict(scores)

def find_best_resource(lecture, resource_index, module_priority):
    """Find the best resource and chapter for a lecture"""
    keywords = extract_keywords(lecture['title'], lecture['tags'])
    module = lecture['module']
    
    # Get priority order for this module
    priority_resources = MODULE_PRIORITY.get(module, list(resource_index.keys()))
    
    best_match = None
    best_score = 0
    best_resource = None
    
    # Score each resource
    for resource_name in priority_resources:
        if resource_name not in resource_index:
            continue
        
        resource_topics = resource_index[resource_name]
        scores = score_resource_matches(keywords, resource_topics)
        
        if scores:
            # Get top-scoring topic
            top_topic = max(scores, key=scores.get)
            top_score = scores[top_topic]
            
            # Boost score for prioritized resources
            priority_boost = (len(priority_resources) - priority_resources.index(resource_name)) * 10
            adjusted_score = top_score + priority_boost
            
            if adjusted_score > best_score:
                best_score = adjusted_score
                best_match = top_topic
                best_resource = resource_name
    
    if best_match:
        # Get alternative resources - include ALL that match (even weakly)
        alternatives = []
        
        # Mandatory resources based on module
        mandatory = []
        if 'pharmacology' in module.lower():
            mandatory = ['SketchyPharm']
        elif 'pathology' in module.lower():
            mandatory = ['Pathoma']
        
        for resource_name in resource_index.keys():
            if resource_name == best_resource:
                continue
            
            scores = score_resource_matches(keywords, resource_index[resource_name])
            
            # For mandatory resources, include even if no match
            if resource_name in mandatory:
                if scores:
                    top_topic = max(scores, key=scores.get)
                else:
                    # Get ANY topic from this resource as fallback
                    top_topic = list(resource_index[resource_name].keys())[0] if resource_index[resource_name] else "General"
                alternatives.append({
                    'resource': resource_name,
                    'chapter': top_topic,
                    'score': scores.get(top_topic, 0) if scores else 0,
                    'mandatory': True
                })
            elif scores:
                top_topic = max(scores, key=scores.get)
                # Include ALL matches, no threshold
                alternatives.append({
                    'resource': resource_name,
                    'chapter': top_topic,
                    'score': scores[top_topic],
                    'mandatory': False
                })
        
        # Sort alternatives by mandatory first, then score
        alternatives.sort(key=lambda x: (not x.get('mandatory', False), -x['score']))
        # Remove score and mandatory flag before returning
        alternatives = [{'resource': alt['resource'], 'chapter': alt['chapter']} for alt in alternatives]
        
        return {
            'primarySource': best_resource,
            'chapter': best_match,
            'alternatives': alternatives  # All alternatives, sorted by relevance
        }
    
    return None

def main():
    """Main function"""
    import argparse
    
    parser = argparse.ArgumentParser(description="Match lectures to Anking resources")
    parser.add_argument("--resource-index", default="anking_resource_index.json", help="Path to resource index")
    parser.add_argument("--lectures", default="lectures_data.js", help="Path to lectures_data.js")
    parser.add_argument("--output", default="lecture_resource_mappings.json", help="Output file")
    
    args = parser.parse_args()
    
    # Lectures to exclude from matching (irrelevant matches)
    EXCLUDED_LECTURES = ['l102', 'l121', 'l137']
    
    print("Loading resource index...")
    resource_index = load_resource_index(args.resource_index)
    
    print("Loading lectures...")
    lectures = load_lectures(args.lectures)
    print(f"Found {len(lectures)} lectures")
    
    print("\nMatching lectures to resources...")
    mappings = {}
    
    for lecture in lectures:
        lecture_id = lecture['id']
        
        # Skip excluded lectures
        if lecture_id in EXCLUDED_LECTURES:
            print(f"Skipping {lecture_id}: {lecture['title']} (excluded - no good matches)")
            mappings[lecture_id] = None  # Set to None for in-house message
            continue
        
        print(f"Matching {lecture_id}: {lecture['title']}")
        
        result = find_best_resource(lecture, resource_index, MODULE_PRIORITY)
        
        if result:
            print(f"  [OK] {result['primarySource']}: {result['chapter']}")
            mappings[lecture_id] = result
        else:
            print(f"  [NO MATCH]")
            mappings[lecture_id] = None
    
    # Save mappings
    with open(args.output, 'w', encoding='utf-8') as f:
        json.dump(mappings, f, indent=2, ensure_ascii=False)
    
    print(f"\nSaved mappings to {args.output}")
    
    matched = sum(1 for v in mappings.values() if v is not None)
    print(f"\nSummary: {matched}/{len(lectures)} lectures matched to resources")

if __name__ == "__main__":
    main()
