
import pypdf
import json

pdf_path = "c:/Users/quazi/Downloads/Block-3-Summaries/pdfs/Lecture # 128. M. Plummer, M.D. (PPT).pdf"

def analyze_pdf(path):
    reader = pypdf.PdfReader(path)
    results = {}
    
    keywords = {
        "Hypertrophy": ["hypertrophy", "size"],
        "Hyperplasia": ["hyperplasia", "number"],
        "Atrophy": ["atrophy", "decrease"],
        "Metaplasia": ["metaplasia", "change"],
        "Reversible Injury": ["reversible", "swelling"],
        "Irreversible Injury": ["irreversible", "membrane"],
        "Coagulative Necrosis": ["coagulative", "ischemia"],
        "Liquefactive Necrosis": ["liquefactive", "brain"],
        "Caseous Necrosis": ["caseous", "cheese"],
        "Fat Necrosis": ["fat", "saponification"],
        "Apoptosis": ["apoptosis", "programmed"],
        "Mitochondrial Pathway": ["mitochondrial", "cytochrome"],
        "Death Receptor Pathway": ["death receptor", "fas"],
    }
    
    for i, page in enumerate(reader.pages):
        text = page.extract_text().lower()
        page_num = i + 1
        
        for topic, words in keywords.items():
            if all(word in text for word in words):
                if topic not in results:
                    results[topic] = []
                results[topic].append(page_num)
                
    print(json.dumps(results, indent=2))

if __name__ == "__main__":
    analyze_pdf(pdf_path)
