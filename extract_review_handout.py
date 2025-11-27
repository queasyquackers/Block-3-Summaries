import pypdf
import os

pdf_path = "c:/Users/quazi/Downloads/Block-3-Summaries/pdfs/Lecture 128-133. M. Plummer, M.D. (Pathology Review Handout).pdf"
output_path = "c:/Users/quazi/Downloads/Block-3-Summaries/L128-133_review_handout.txt"

if not os.path.exists(pdf_path):
    print(f"Error: File not found: {pdf_path}")
else:
    try:
        reader = pypdf.PdfReader(pdf_path)
        full_text = ""
        print(f"Processing {len(reader.pages)} pages...")
        for i, page in enumerate(reader.pages):
            text = page.extract_text()
            if text:
                full_text += f"\n--- Page {i+1} ---\n"
                full_text += text + "\n"
        
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(full_text)
        print(f"Saved extracted text to {output_path}")
    except Exception as e:
        print(f"Error reading PDF: {e}")
