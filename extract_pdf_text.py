
import pypdf
import os

def extract_text_from_pdfs(pdf_paths, output_filename):
    full_text = ""
    for pdf_path in pdf_paths:
        if not os.path.exists(pdf_path):
            print(f"Warning: File not found: {pdf_path}")
            continue
        
        try:
            reader = pypdf.PdfReader(pdf_path)
            print(f"Processing {pdf_path} ({len(reader.pages)} pages)...")
            for i, page in enumerate(reader.pages):
                text = page.extract_text()
                if text:
                    full_text += f"\n--- Source: {os.path.basename(pdf_path)} | Page {i+1} ---\n"
                    full_text += text + "\n"
        except Exception as e:
            print(f"Error reading {pdf_path}: {e}")

    with open(output_filename, "w", encoding="utf-8") as f:
        f.write(full_text)
    print(f"Saved extracted text to {output_filename}")

l131_pdfs = [
    "c:/Users/quazi/Downloads/Block-3-Summaries/pdfs/L131_1.pdf",
    "c:/Users/quazi/Downloads/Block-3-Summaries/pdfs/L131_2.pdf",
    "c:/Users/quazi/Downloads/Block-3-Summaries/pdfs/L131_3.pdf",
    "c:/Users/quazi/Downloads/Block-3-Summaries/pdfs/L131_4.pdf"
]

l132_pdfs = [
    "c:/Users/quazi/Downloads/Block-3-Summaries/pdfs/L132_1.pdf",
    "c:/Users/quazi/Downloads/Block-3-Summaries/pdfs/L132_2.pdf",
    "c:/Users/quazi/Downloads/Block-3-Summaries/pdfs/L132_3.pdf",
    "c:/Users/quazi/Downloads/Block-3-Summaries/pdfs/L132_4.pdf"
]

extract_text_from_pdfs(l131_pdfs, "c:/Users/quazi/Downloads/Block-3-Summaries/L131_extracted_text.txt")
extract_text_from_pdfs(l132_pdfs, "c:/Users/quazi/Downloads/Block-3-Summaries/L132_extracted_text.txt")
