
import re

def remove_transcript_analysis():
    file_path = "lectures_data.js"
    
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Regex to find the specific block we added and remove it.
    # It starts with the separator and header, and goes until the end of the summary string (marked by `)
    # We use non-greedy match .*? to stop at the first backtick found after the header.
    
    # The pattern we added was:
    # \n\n-----\n\n## High Yield Transcript Analysis\n\n... content ...
    
    pattern = r"\n\n-----\n\n## High Yield Transcript Analysis.*?(?=`)"
    
    new_content, count = re.subn(pattern, "", content, flags=re.DOTALL)
    
    if count > 0:
        print(f"Removed {count} instances of 'High Yield Transcript Analysis'.")
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print("Successfully updated lectures_data.js")
    else:
        print("No instances found to remove.")

if __name__ == "__main__":
    remove_transcript_analysis()
