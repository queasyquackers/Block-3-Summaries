"""
Fix lecture titles for L120-L126 and L128-L133 to include lecture numbers
"""

import re

files_to_fix = [
    ("L120_content.js", "L120 - "),
    ("L121_content.js", "L121 - "),
    ("L122_content.js", "L122 - "),
    ("L123_content.js", "L123 - "),
    ("L124_content.js", "L124 - "),
    ("L125_content.js", "L125 - "),
    ("L126_content.js", "L126 - "),
    ("L128_content.js", "L128 - "),
    ("L129_content.js", "L129 - "),
    ("L130_content.js", "L130 - "),
    ("L131_content.js", "L131 - "),
    ("L132_content.js", "L132 - "),
    ("L133_content.js", "L133 - "),
]

base_path = "c:/Users/quazi/Downloads/Block-3-Summaries/"

for filename, prefix in files_to_fix:
    filepath = base_path + filename
    
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Find the title line and add prefix if not already there
        # Pattern: title: "Something" or title: 'Something'
        pattern = r'(title:\s*["\'])(?!' + re.escape(prefix) + r')([^"\']+)'
        
        def add_prefix(match):
            return match.group(1) + prefix + match.group(2)
        
        new_content = re.sub(pattern, add_prefix, content, count=1)
        
        if new_content != content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"[OK] Fixed {filename}")
        else:
            print(f"[-] {filename} already has prefix or not found")
    
    except FileNotFoundError:
        print(f"[X] {filename} not found")
    except Exception as e:
        print(f"[X] Error with {filename}: {e}")

print("\nDone!")
