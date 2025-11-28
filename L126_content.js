export const L126_content = {
  id: "L126",
  title: "L126 - Pharmacology: Folate Antagonists & Fluoroquinolones",
  module: "Pharmacology",
  tags: ["Pharmacology", "Antibiotics", "Sulfonamides", "Fluoroquinolones", "UTI"],
  createdAt: "2024-11-26",
  summary: `
# Pharmacology: DNA & Folate Inhibitors

## Folate Antagonists
Inhibit bacterial folic acid synthesis (essential for DNA/RNA).
**Sulfonamides:** Inhibit Dihydropteroate Synthase.
**Trimethoprim:** Inhibits Dihydrofolate Reductase.
**TMP-SMX (Bactrim):** Synergistic bactericidal combination.

## Fluoroquinolones
Inhibit DNA Gyrase (Topoisomerase II) and Topoisomerase IV. Bactericidal.
**Spectrum:** Gram-negatives (excellent), some Gram-positives, Atypicals.
**Adverse Effects:** Tendonitis/Rupture (Achilles), QT prolongation, CNS effects, Cartilage damage (avoid in children/pregnancy).

## Urinary Tract Antiseptics
**Nitrofurantoin:** Uncomplicated cystitis only. Pulmonary toxicity.
`,
  drugData: [
    {
      "Class": "Folate Antagonists",
      "Drugs": "TMP-SMX (Bactrim)",
      "Spectrum": "Gram-negatives (E. coli), Gram-positives (MRSA), PCP (Pneumocystis), Nocardia.",
      "Notes": "UTI, SSTI (MRSA). Stevens-Johnson Syndrome, Hemolysis in G6PD deficiency, Hyperkalemia."
    },
    {
      "Class": "Fluoroquinolones",
      "Drugs": "Ciprofloxacin (PO/IV)\nLevofloxacin (PO/IV)\nMoxifloxacin (PO/IV)",
      "Spectrum": "Gram-negatives (Pseudomonas - Cipro/Levo), Gram-positives (Strep pneumo - Levo/Moxi), Atypicals.",
      "Notes": "Cipro: Best for Pseudomonas. Levo/Moxi: 'Respiratory Fluoroquinolones'. Moxi: No renal adjustment (hepatic), not for UTI."
    },
    {
      "Class": "Nitroimidazoles",
      "Drugs": "Metronidazole (PO/IV)",
      "Spectrum": "Anaerobes (Bacteroides, C. diff), Protozoa (Giardia, Trichomonas).",
      "Notes": "Disulfiram-like reaction with alcohol. Metallic taste. 'Below the diaphragm' anaerobes."
    }
  ],
  quiz: [
    {
      question: "A 32-year-old HIV-positive patient presents with shortness of breath and hypoxia. Chest X-ray shows diffuse interstitial infiltrates. He is diagnosed with Pneumocystis jirovecii pneumonia (PCP). What is the treatment of choice?",
      options: [
        "Ciprofloxacin",
        "Azithromycin",
        "Trimethoprim-Sulfamethoxazole (TMP-SMX)",
        "Doxycycline"
      ],
      answer: 2,
      explanation: "TMP-SMX is the drug of choice for both treatment and prophylaxis of Pneumocystis jirovecii pneumonia (PCP) in immunocompromised patients."
    },
    {
      question: "A 25-year-old woman is treated for a UTI with an antibiotic. A few days later, she develops severe pain in her right heel and difficulty walking. Which antibiotic was likely prescribed?",
      options: [
        "Nitrofurantoin",
        "Amoxicillin",
        "Ciprofloxacin",
        "Fosfomycin"
      ],
      answer: 2,
      explanation: "Fluoroquinolones like Ciprofloxacin have a Black Box Warning for tendonitis and tendon rupture, most commonly affecting the Achilles tendon."
    },
    {
      question: "Which fluoroquinolone is NOT suitable for the treatment of urinary tract infections due to low urinary concentrations?",
      options: [
        "Ciprofloxacin",
        "Levofloxacin",
        "Moxifloxacin",
        "Ofloxacin"
      ],
      answer: 2,
      explanation: "Moxifloxacin is primarily metabolized by the liver and excreted in the feces. It does not achieve adequate concentrations in the urine to treat UTIs."
    },
    {
      question: "A newborn develops jaundice and kernicterus after being treated for an infection. Which antibiotic is contraindicated in neonates due to displacement of bilirubin from albumin?",
      options: [
        "Ampicillin",
        "Gentamicin",
        "Sulfamethoxazole",
        "Cefotaxime"
      ],
      answer: 2,
      explanation: "Sulfonamides (like Sulfamethoxazole) can displace bilirubin from albumin, leading to kernicterus (brain damage) in neonates. They are contraindicated in the third trimester and in newborns."
    }
  ],
  glossary: [
    { term: "Kernicterus", definition: "Bilirubin-induced brain dysfunction. Sulfonamides can cause this in neonates by displacing bilirubin from albumin." },
    { term: "Stevens-Johnson Syndrome (SJS)", definition: "A severe, life-threatening skin reaction characterized by blistering and peeling. Sulfonamides are a common cause." },
    { term: "G6PD Deficiency", definition: "A genetic condition where red blood cells break down when exposed to certain drugs (like Sulfonamides, Nitrofurantoin), causing hemolytic anemia." }
  ],
  mnemonics: [
    {
      "heading": "Fluoroquinolone Side Effects",
      "mnemonic": "Fluoroquinolones hurt attachments to your bones",
      "meaning": "Tendonitis/Tendon Rupture"
    }
  ]
};
