
import pypdf

input_pdf = "c:/Users/quazi/Downloads/Block-3-Summaries/pdfs/Lecture # 128. M. Plummer, M.D. (PPT).pdf"
output_pdf = "c:/Users/quazi/Downloads/Block-3-Summaries/L128_HighYield_Render.pdf"

# Slide numbers (1-based)
slides_to_extract = [7, 17, 22, 23, 26, 35, 36, 41, 48, 50, 53, 55, 56, 60, 67, 68]
slides_to_extract.sort()

reader = pypdf.PdfReader(input_pdf)
writer = pypdf.PdfWriter()

for slide_num in slides_to_extract:
    # Convert to 0-based index
    page_index = slide_num - 1
    if 0 <= page_index < len(reader.pages):
        writer.add_page(reader.pages[page_index])

with open(output_pdf, "wb") as f:
    writer.write(f)

print(f"Created {output_pdf} with {len(slides_to_extract)} slides.")
