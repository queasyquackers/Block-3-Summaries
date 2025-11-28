
import pypdf
import sys
import os
import re
from collections import Counter

def get_page_score(page, page_num):
    text = ""
    bold_text = ""
    
    def visitor_body(text_chunk, cm, tm, fontDict, fontSize):
        nonlocal text, bold_text
        if text_chunk:
            text += text_chunk
            if fontDict:
                font_name = fontDict.get('/BaseFont', '')
                # Remove subsetting tag (e.g., ABCDEF+FontName -> FontName)
                if '+' in font_name:
                    font_name = font_name.split('+', 1)[1]
                
                # Check for Bold in font name
                # Common indicators: Bold, Bd, -b (at end)
                lower_name = font_name.lower()
                if 'bold' in lower_name or 'black' in lower_name:
                    bold_text += text_chunk

    try:
        page.extract_text(visitor_text=visitor_body)
    except Exception as e:
        print(f"Error extracting text on page {page_num}: {e}")
        return 0, {}

    clean_text = text.strip()
    if not clean_text:
        return 0, {"reason": "empty"}

    # Heuristic 1: Bold Ratio
    # We count characters to avoid issues with word splitting
    total_chars = len(re.sub(r'\s+', '', clean_text))
    bold_chars = len(re.sub(r'\s+', '', bold_text))
    
    if total_chars == 0:
        return 0, {"reason": "no content"}

    bold_ratio = bold_chars / total_chars
    
    # Heuristic 2: Keywords
    # Positive Keywords
    pos_keywords = ["high yield", "important", "summary", "key points", "remember", "take home", "exam", "test", "clinical correlate", "mechanism", "black box", "warning", "adverse effect", "treatment", "management"]
    # Negative Keywords (Slides to skip)
    neg_keywords = ["objectives", "references", "questions?", "thank you", "disclosure", "agenda", "overview"]
    
    keyword_hits = [k for k in pos_keywords if k in clean_text.lower()]
    neg_hits = [k for k in neg_keywords if k in clean_text.lower()]
    
    # Heuristic 3: Word Repetition (simple)
    # Filter for meaningful words
    words = re.findall(r'\b[a-zA-Z]{5,}\b', clean_text.lower())
    word_counts = Counter(words)
    top_words = word_counts.most_common(3)
    repeated_score = 0
    if top_words and top_words[0][1] > 3: # If top word appears more than 3 times
        repeated_score = 1

    # Scoring
    # Base score from bold ratio (0-20)
    score = bold_ratio * 20
    
    # Boost for keywords
    if keyword_hits:
        score += 5 * len(keyword_hits)
        
    # Penalty for negative keywords
    if neg_hits:
        score -= 10 * len(neg_hits)
        
    # Boost for repetition (maybe less important)
    if repeated_score:
        score += 2
        
    # Penalty for low text content (likely just an image without much explanation)
    if total_chars < 50:
        score -= 5
    
    details = {
        "bold_ratio": f"{bold_ratio:.2f}",
        "keywords": keyword_hits,
        "neg_keywords": neg_hits,
        "top_words": top_words,
        "score": f"{score:.2f}"
    }
    
    return score, details

def generate_high_yield(pdf_path, output_path, top_n=15, dry_run=False):
    print(f"Processing {pdf_path}...")
    reader = pypdf.PdfReader(pdf_path)
    writer = pypdf.PdfWriter()
    
    page_scores = []
    
    for i, page in enumerate(reader.pages):
        page_num = i + 1
        score, details = get_page_score(page, page_num)
        
        if dry_run:
            print(f"Page {page_num}: Score {details.get('score')} | Bold: {details.get('bold_ratio')} | Keywords: {details.get('keywords')}")
        
        page_scores.append((page_num, score, page))
            
    # Sort by score descending
    page_scores.sort(key=lambda x: x[1], reverse=True)
    
    # Take top N
    top_pages = page_scores[:top_n]
    
    # Sort back by page number to maintain lecture order
    top_pages.sort(key=lambda x: x[0])
    
    selected_page_nums = [p[0] for p in top_pages]
    print(f"\nSelected {len(selected_page_nums)} pages: {selected_page_nums}")
    
    if not dry_run and top_pages:
        for _, _, page in top_pages:
            writer.add_page(page)
            
        with open(output_path, "wb") as f:
            writer.write(f)
        print(f"Saved to {output_path}")
    elif not top_pages:
        print("No pages selected.")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python generate_high_yield.py <input_pdf> <output_pdf> [top_n]")
        sys.exit(1)
        
    input_pdf = sys.argv[1]
    output_pdf = sys.argv[2]
    top_n = int(sys.argv[3]) if len(sys.argv) > 3 else 15
    
    # Check if we want a dry run (env var or flag, but simple arg is easier for now)
    dry_run = output_pdf == "dry_run"
    
    generate_high_yield(input_pdf, output_pdf, top_n, dry_run)
