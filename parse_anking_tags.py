"""
Parse Anking tags from the massive tag file and extract resource mappings.
Creates an index of topics -> resources for matching with lectures.
"""

import json
import re
from collections import defaultdict

# Resources to extract (including Bootcamp as requested)
RESOURCES = {
    'B&B': r'#AK_Step1_v11::#B&B::([^#\s]+)',
    'FirstAid': r'#AK_Step1_v11::#FirstAid::([^#\s]+)',
    'SketchyMicro': r'#AK_Step1_v11::#SketchyMicro::([^#\s]+)',
    'SketchyPath': r'#AK_Step1_v11::#SketchyPath::([^#\s]+)',
    'SketchyPharm': r'#AK_Step1_v11::#SketchyPharm::([^#\s]+)',
    'Pathoma': r'#AK_Step1_v11::#Pathoma::([^#\s]+)',
    'Physeo': r'#AK_Step1_v11::#Physeo::([^#\s]+)',
    'Pixorize': r'#AK_Step1_v11::#Pixorize::([^#\s]+)',
    'Bootcamp': r'#AK_Step1_v11::#Bootcamp::([^#\s]+)',
}

def parse_tags_file(filepath, max_lines=None):
    """
    Parse the tags file and extract resource mappings.
    
    Args:
        filepath: Path to the tags file
        max_lines: Maximum lines to process (for testing, None for all)
    
    Returns:
        dict: {resource: {topic: count}}
    """
    resource_index = defaultdict(lambda: defaultdict(int))
    
    print(f"Parsing tags file: {filepath}")
    if max_lines:
        print(f"Processing first {max_lines} lines only (test mode)")
    
    lines_processed = 0
    
    with open(filepath, 'r', encoding='utf-8') as f:
        # Skip header lines
        f.readline()  # #separator:tab
        f.readline()  # #html:true
        
        for line in f:
            lines_processed += 1
            
            if max_lines and lines_processed > max_lines:
                break
            
            if lines_processed % 10000 == 0:
                print(f"Processed {lines_processed} lines...")
            
            # Extract all tags from the line
            # Tags are in the last column, separated by spaces
            parts = line.split('\t')
            if len(parts) < 2:
                continue
            
            tags_column = parts[-1]  # Last column contains tags
            
            # Extract resource tags
            for resource_name, pattern in RESOURCES.items():
                matches = re.findall(pattern, tags_column)
                for match in matches:
                    # Clean up the topic path
                    topic = match.replace('::', ' > ').strip()
                    resource_index[resource_name][topic] += 1
    
    print(f"\nProcessing complete! Processed {lines_processed} lines")
    print(f"Found {len(resource_index)} resources")
    
    for resource, topics in resource_index.items():
        print(f"  {resource}: {len(topics)} unique topics")
    
    return dict(resource_index)

def save_index(index, output_path):
    """Save the resource index to JSON."""
    # Convert defaultdict to regular dict for JSON serialization
    regular_dict = {
        resource: dict(topics) 
        for resource, topics in index.items()
    }
    
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(regular_dict, f, indent=2)
    
    print(f"\nSaved resource index to {output_path}")

if __name__ == "__main__":
    import argparse
    
    parser = argparse.ArgumentParser(description="Parse Anking tags to extract resource mappings")
    parser.add_argument("--input", default="Make it stop (tags).txt", help="Path to tags file")
    parser.add_argument("--output", default="anking_resource_index.json", help="Output JSON file")
    parser.add_argument("--test", action="store_true", help="Test mode - process only first 100k lines")
    
    args = parser.parse_args()
    
    max_lines = 100000 if args.test else None
    
    index = parse_tags_file(args.input, max_lines=max_lines)
    save_index(index, args.output)
