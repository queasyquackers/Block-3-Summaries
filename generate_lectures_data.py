"""
Generate a complete lectures_data.js file that imports all lecture content files.
"""

import os
import re

# List all content files
content_dir = "c:/Users/quazi/Downloads/Block-3-Summaries"
content_files = [
    "L102_content.js", "L103_content.js", "L104_content.js", "L105_content.js", "L106_content.js",
    "L107_L108_content.js", "L109_L110_content.js",
    "L112_content.js", "L113_content.js", "L114_content.js", "L115_content.js", "L116_content.js",
    "L117_content.js", "L118_content.js", "L119_content.js", "L120_content.js", "L121_content.js",
    "L122_content.js", "L123_content.js", "L124_content.js", "L125_content.js", "L126_content.js", "L127_content.js",
    "L128_content.js", "L129_content.js", "L130_content.js", "L131_content.js", "L132_content.js", "L133_content.js", "L134_content.js", "L135_content.js", "L136_content.js", "L137_content.js", "L138_content.js"
]

# Start building the lectures_data.js file
output = """// Lectures Data - Auto-generated
// This file contains all lecture data to keep the main HTML clean

const LECTURES_DATA = [
"""

for content_file in content_files:
    file_path = os.path.join(content_dir, content_file)
    
    if not os.path.exists(file_path):
        print(f"Warning: {content_file} not found, skipping...")
        continue
    
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Extract the data object by finding the first { and the last }; before the boilerplate
        start_match = re.search(r'(?:const|export const)\s+\w+\s*=\s*\{', content)
        
        if start_match:
            start_index = start_match.end() - 1 # Start at the opening brace
            
            # Find the start of the boilerplate code at the end of the file
            boilerplate_start = content.rfind('if (typeof window')
            if boilerplate_start == -1:
                boilerplate_start = len(content)
            
            # Find the last closing brace before the boilerplate
            end_index = content.rfind('}', 0, boilerplate_start) + 1
            
            if end_index > start_index:
                obj_content = content[start_index:end_index]
                # Add to output with proper indentation
                output += "    " + obj_content + ",\n"
                print(f"Added {content_file}")
            else:
                print(f"Warning: Could not find closing brace in {content_file}")
        else:
            print(f"Warning: Could not find object definition in {content_file}")
    
    except Exception as e:
        print(f"Error processing {content_file}: {e}")

# Close the array and add the global assignment
output += """];

// Make it available globally for the HTML to access
if (typeof window !== 'undefined') {
    window.LECTURES_DATA = LECTURES_DATA;
}
"""

# Write the output file
output_path = os.path.join(content_dir, "lectures_data.js")
with open(output_path, "w", encoding="utf-8") as f:
    f.write(output)

print(f"\nSuccessfully generated lectures_data.js with {len([f for f in content_files if os.path.exists(os.path.join(content_dir, f))])} lectures!")
