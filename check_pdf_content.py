
import pypdf

pdf_path = "c:/Users/quazi/Downloads/Block-3-Summaries/pdfs/Lecture # 128. M. Plummer, M.D. (PPT).pdf"

reader = pypdf.PdfReader(pdf_path)
print(f"Total pages: {len(reader.pages)}")
print("--- Page 1 Content ---")
print(reader.pages[0].extract_text())
