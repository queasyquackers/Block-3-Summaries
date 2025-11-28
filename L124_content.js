export const L124_content = {
  id: "L124",
  title: "L124 - Pharmacology: Aminoglycosides",
  module: "Pharmacology",
  tags: ["Pharmacology", "Antibiotics", "Aminoglycosides"],
  createdAt: "2024-11-26",
  summary: `
# Pharmacology: Aminoglycosides

## Overview
Aminoglycosides are protein synthesis inhibitors (30S subunit). They are bactericidal and concentration-dependent.
**Mechanism:** Bind to 30S ribosome -> misreading of mRNA -> non-functional proteins.
**Synergy:** Often used with cell wall inhibitors (Beta-lactams, Vancomycin) to facilitate entry.

## Spectrum
**Aerobic Gram-Negative Bacilli** (Pseudomonas, Klebsiella, etc.).
**NO Anaerobic coverage** (require O2 for uptake).

## Adverse Effects
1.  **Nephrotoxicity:** Acute Tubular Necrosis (ATN). Reversible.
2.  **Ototoxicity:** Cochlear (hearing loss) and Vestibular (balance). Often irreversible.
3.  **Neuromuscular Blockade:** Contraindicated in Myasthenia Gravis.
`,
  drugData: [
    {
      "Drug": "Gentamicin (IV)",
      "Spectrum": "Severe Gram-negative infections (Pseudomonas, Enterobacter).",
      "Notes": "Synergy with Ampicillin for Listeria/Enterococcus. Nephrotoxic/Ototoxic."
    },
    {
      "Drug": "Tobramycin (IV)",
      "Spectrum": "Similar to Gentamicin. Better Pseudomonas coverage.",
      "Notes": "Inhalation form for Cystic Fibrosis."
    },
    {
      "Drug": "Amikacin (IV)",
      "Spectrum": "Broadest spectrum. Resistant to many inactivating enzymes.",
      "Notes": "Reserved for resistant infections."
    },
    {
      "Drug": "Streptomycin (IM)",
      "Spectrum": "Tuberculosis (2nd line), Plague (Yersinia), Tularemia.",
      "Notes": "Oldest aminoglycoside."
    },
    {
      "Drug": "Neomycin (PO/Topical)",
      "Spectrum": "Bowel prep (not absorbed), Hepatic Encephalopathy.",
      "Notes": "Too toxic for systemic use."
    }
  ],
  quiz: [
    {
      question: "Which aminoglycoside is most appropriate for a patient with a multidrug-resistant Gram-negative infection resistant to Gentamicin and Tobramycin?",
      options: [
        "Streptomycin",
        "Neomycin",
        "Amikacin",
        "Paromomycin"
      ],
      answer: 2,
      explanation: "Amikacin is resistant to many of the bacterial transferase enzymes that inactivate Gentamicin and Tobramycin, making it effective against resistant strains."
    },
    {
      question: "What is the primary mechanism of neuromuscular blockade caused by aminoglycosides?",
      options: [
        "Blockade of post-synaptic nicotinic receptors",
        "Inhibition of acetylcholinesterase",
        "Blockade of pre-synaptic calcium channels inhibiting ACh release",
        "Depletion of synaptic vesicles"
      ],
      answer: 2,
      explanation: "Aminoglycosides inhibit pre-synaptic voltage-gated calcium channels, preventing the influx of calcium required for the release of acetylcholine vesicles."
    },
    {
      question: "Why are aminoglycosides ineffective against anaerobic bacteria?",
      options: [
        "Anaerobes lack the 30S ribosome",
        "Anaerobes produce enzymes that degrade aminoglycosides",
        "Aminoglycoside uptake requires an oxygen-dependent active transport system",
        "Aminoglycosides cannot penetrate the anaerobic cell wall"
      ],
      answer: 2,
      explanation: "The transport of aminoglycosides across the bacterial cell membrane is an energy-dependent process that requires oxygen. Therefore, strict anaerobes are intrinsically resistant."
    },
    {
      question: "A patient treated with Gentamicin develops tinnitus and high-frequency hearing loss. This toxicity is primarily due to damage to which structure?",
      options: [
        "Tympanic membrane",
        "Hair cells in the Organ of Corti",
        "Auditory nerve myelin sheath",
        "Ossicles"
      ],
      answer: 1,
      explanation: "Aminoglycoside ototoxicity is caused by the destruction of hair cells in the Organ of Corti (cochlear toxicity) and hair cells in the ampullae (vestibular toxicity). This damage is often irreversible."
    }
  ],
  glossary: [
    { term: "Concentration-Dependent Killing", definition: "Efficacy correlates with the peak drug concentration relative to the MIC (Peak:MIC ratio). Allows for once-daily dosing." },
    { term: "Post-Antibiotic Effect (PAE)", definition: "Persistent suppression of bacterial growth even after drug levels fall below the MIC. Characteristic of aminoglycosides." },
    { term: "Acute Tubular Necrosis (ATN)", definition: "Kidney injury caused by damage to the tubule cells. Aminoglycosides accumulate in the proximal tubule cells causing ATN." }
  ],
  mnemonics: [
    {
      "heading": "Aminoglycoside Toxicities",
      "mnemonic": "NOT",
      "meaning": "Nephrotoxicity, Ototoxicity, Teratogenicity (rare)"
    }
  ]
};
