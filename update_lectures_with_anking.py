import json
import re
import sys

def update_lectures_data(json_file_path, js_file_path):
    # Load the new Anking mappings
    try:
        with open(json_file_path, 'r', encoding='utf-8') as f:
            anking_data = json.load(f)
    except FileNotFoundError:
        print(f"Error: {json_file_path} not found.")
        return

    # Read the existing lectures_data.js
    try:
        with open(js_file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: {js_file_path} not found.")
        return

    print(f"Loaded {len(anking_data)} mappings from {json_file_path}")

    # Pattern to find lecture blocks. 
    # We look for { followed by id: ... and ending before the next lecture start or end of array.
    lecture_split_pattern = r'(?=\{\s*id:\s*[\'"]l\d+[\'"]|^\s*\{\s*id:\s*[\'"]L\d+[\'"])'
    
    parts = re.split(lecture_split_pattern, content, flags=re.MULTILINE)
    
    updated_parts = []
    lectures_updated = 0
    
    for part in parts:
        # Check if this part is a lecture block
        id_match = re.search(r'id:\s*[\'"]([lL]\d+)[\'"]', part)
        if not id_match:
            updated_parts.append(part)
            continue
            
        lecture_id = id_match.group(1)
        # Normalize ID for lookup (e.g. L102 -> l102)
        lookup_id = lecture_id.lower()
        
        # Remove existing ankingResource field(s)
        part = re.sub(r'^\s*ankingResource:.*?,?\n', '', part, flags=re.MULTILINE)
        
        # Get new anking data
        if lookup_id in anking_data:
            resource_data = anking_data[lookup_id]
            # Format the new field
            # We use json.dumps but need to ensure keys are unquoted if we want strict JS style, 
            # but standard JSON is valid JS too. However, to match existing style, let's just use JSON string
            # and maybe clean up quotes around keys if we want to be fancy, but standard JSON is fine.
            # actually the file uses single quotes and unquoted keys often.
            # Let's just dump as JSON for reliability.
            new_field = f"    ankingResource: {json.dumps(resource_data, ensure_ascii=False)},\n"
            
            # Insert after createdAt
            part = re.sub(
                r'(createdAt:[^,\n]+,)\n',
                r'\1\n' + new_field,
                part
            )
            lectures_updated += 1
        else:
            # If no data, insert null
            new_field = "    ankingResource: null,\n"
            part = re.sub(
                r'(createdAt:[^,\n]+,)\n',
                r'\1\n' + new_field,
                part
            )

        updated_parts.append(part)

    # Join everything back together
    new_content = ''.join(updated_parts)

    # Write back to file
    with open(js_file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"Successfully updated {lectures_updated} lectures in {js_file_path}")

if __name__ == "__main__":
    update_lectures_data('anking_mappings.json', 'lectures_data.js')
