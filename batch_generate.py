
import os
import glob
import subprocess

pdf_dir = "c:/Users/quazi/Downloads/Block-3-Summaries/pdfs"
output_dir = "c:/Users/quazi/Downloads/Block-3-Summaries"
script_path = "c:/Users/quazi/Downloads/Block-3-Summaries/generate_high_yield.py"

# Get all PDF files
pdf_files = glob.glob(os.path.join(pdf_dir, "*.pdf"))

for pdf_file in pdf_files:
    filename = os.path.basename(pdf_file)
    
    # Extract lecture number (e.g., Lecture # 120... -> L120)
    # Heuristic: Look for "Lecture #" or "L" followed by digits
    import re
    match = re.search(r'(?:Lecture\s*#\s*|L)(\d+)', filename, re.IGNORECASE)
    
    if match:
        lecture_num = match.group(1)
        output_filename = f"L{lecture_num}_HighYield_Render.pdf"
        output_path = os.path.join(output_dir, output_filename)
        
        print(f"Generating {output_filename} from {filename}...")
        
        try:
            subprocess.run(["python", script_path, pdf_file, output_path, "15"], check=True)
        except subprocess.CalledProcessError as e:
            print(f"Error generating {output_filename}: {e}")
    else:
        print(f"Skipping {filename} (Could not parse lecture number)")
