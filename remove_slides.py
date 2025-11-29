import re

def remove_slides():
    data_file = "lectures_data.js"
    with open(data_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Regex to find and remove :::slides ... ::: blocks
    # We match :::slides followed by anything until the closing :::
    # We use non-greedy match .*?
    pattern = re.compile(r':::slides.*?\n.*?\n:::\n?', re.DOTALL)
    
    new_content = re.sub(pattern, '', content)
    
    # Also clean up any double newlines that might result
    # new_content = re.sub(r'\n{3,}', '\n\n', new_content)
    
    if content == new_content:
        print("No slides blocks found to remove.")
    else:
        print("Removed slides blocks.")
        
    with open(data_file, 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == "__main__":
    remove_slides()
