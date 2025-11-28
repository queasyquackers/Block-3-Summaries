import os
import glob
import json
import re
from generate_high_yield import get_page_score
import pypdf

pdf_dir = "c:/Users/quazi/Downloads/Block-3-Summaries/pdfs"
output_file = "c:/Users/quazi/Downloads/Block-3-Summaries/correlates_report.json"

def extract_correlates():
    pdf_files = glob.glob(os.path.join(pdf_dir, "*.pdf"))
    report = {}

    for pdf_path in pdf_files:
        filename = os.path.basename(pdf_path)
        match = re.search(r'(?:Lecture\s*#\s*|L)(\d+)', filename, re.IGNORECASE)
        
        if not match:
            continue
            
        lecture_id = f"L{match.group(1)}"
        print(f"Processing {lecture_id}...")
        
        try:
            reader = pypdf.PdfReader(pdf_path)
            correlate_pages = []
            
            for i, page in enumerate(reader.pages):
                score, details = get_page_score(page, i + 1)
                keywords = details.get('keywords', [])
                
                # Check for specific correlate keywords
                correlate_keywords = ["clinical correlate", "syndrome", "disease", "adverse effect", "toxicity", "deficiency"]
                hits = [k for k in keywords if k in correlate_keywords]
                
                if hits or score > 40: # High score or specific hits
                    text = page.extract_text()
                    correlate_pages.append({
                        "page": i + 1,
                        "keywords": hits,
                        "text": text[:500] + "..." # Truncate for report
                    })
            
            if correlate_pages:
                report[lecture_id] = correlate_pages
                
        except Exception as e:
            print(f"Error processing {filename}: {e}")

    with open(output_file, 'w') as f:
        json.dump(report, f, indent=2)
    
    print(f"Report saved to {output_file}")

if __name__ == "__main__":
    extract_correlates()
