import sys
import os
try:
    from pypdf import PdfReader, PdfWriter
except ImportError:
    print("pypdf not found. Please install it.")
    sys.exit(1)

def extract_pages(pdf_path, output_path, page_numbers):
    try:
        reader = PdfReader(pdf_path)
        writer = PdfWriter()
        
        # page_numbers is a comma-separated string of 1-based page numbers
        pages = [int(p.strip()) for p in page_numbers.split(',')]
        
        for p in pages:
            if 1 <= p <= len(reader.pages):
                writer.add_page(reader.pages[p-1])
            else:
                print(f"Warning: Page {p} is out of range. Skipping.")
        
        with open(output_path, 'wb') as f:
            writer.write(f)
        print(f"Successfully created {output_path} with pages {pages}")
    except Exception as e:
        print(f"Error extracting pages: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print("Usage: python extract_slides.py <pdf_path> <output_path> <page_numbers_comma_separated>")
        sys.exit(1)
    
    extract_pages(sys.argv[1], sys.argv[2], sys.argv[3])
