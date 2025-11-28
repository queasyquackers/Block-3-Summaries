export const L123_content = {
  id: "L123",
  title: "L123 - Pharmacology: Cephalosporins & Other Cell Wall Inhibitors",
  module: "Pharmacology",
  tags: ["Pharmacology", "Antibiotics", "Cephalosporins", "Carbapenems", "Vancomycin", "Daptomycin"],
  createdAt: "2024-11-26",
  summary: `
# Pharmacology: Cephalosporins, Carbapenems, & Others

## Cephalosporins
Beta-lactam antibiotics with a 6-membered ring attached to the beta-lactam ring.
**LAME:** Cephalosporins do NOT cover **L**isteria, **A**typicals (Chlamydia, Mycoplasma), **M**RSA (except 5th gen), **E**nterococci.

| Generation | Drugs | Spectrum | Notes |
| :--- | :--- | :--- | :--- |
| **1st Gen** | **Cefazolin** (IV)<br>**Cephalexin** (PO) | Gram(+) cocci (Strep, Staph)<br>PEcK (Proteus, E. coli, Klebsiella) | Surgical prophylaxis (Cefazolin). Skin infections. |
| **2nd Gen** | **Cefoxitin** (IV)<br>**Cefuroxime** (PO/IV) | Gram(+) + HENS PEcK (H. flu, Enterobacter, Neisseria, Serratia...) | Cefoxitin: Anaerobes (Bacteroides) - intra-abdominal infections. |
| **3rd Gen** | **Ceftriaxone** (IV)<br>**Cefotaxime** (IV)<br>**Ceftazidime** (IV) | Serious Gram(-). Cross BBB (Meningitis). | Ceftriaxone: Gonorrhea, Meningitis, Lyme. Biliary sludge. Avoid in neonates. Ceftazidime: Pseudomonas. |
| **4th Gen** | **Cefepime** (IV) | Broad spectrum. Gram(+) + Gram(-) (Pseudomonas). | Febrile neutropenia. Neurotoxicity risk. |
| **5th Gen** | **Ceftaroline** (IV) | Broad spectrum + **MRSA**. | Binds PBP2a. No Pseudomonas coverage. |

## Carbapenems
Broadest spectrum beta-lactams. Resistant to most beta-lactamases (ESBLs).
**Side Effects:** Seizures (Imipenem > others), especially in renal failure.

| Drug | Spectrum | Notes |
| :--- | :--- | :--- |
| **Imipenem** | Broad: Gram(+), Gram(-), Anaerobes, Pseudomonas | Always given with **Cilastatin** (inhibits renal dehydropeptidase I). Seizure risk. |
| **Meropenem** | Similar to Imipenem | Less seizure risk. Stable to dehydropeptidase I. |
| **Ertapenem** | Broad but **NO** Pseudomonas, Acinetobacter, Enterococcus (APE) | Once daily dosing. |
| **Doripenem** | Similar to Meropenem | - |

## Monobactams
| Drug | Spectrum | Notes |
| :--- | :--- | :--- |
| **Aztreonam** | Gram(-) aerobes **ONLY** (including Pseudomonas) | No cross-allergenicity with Penicillins (safe in PCN allergy). No Gram(+) or Anaerobe coverage. |

## Glycopeptides
Inhibits cell wall synthesis by binding to **D-Ala-D-Ala** terminus of peptidoglycan precursors.

| Drug | Spectrum | Notes |
| :--- | :--- | :--- |
| **Vancomycin** | Gram(+) **ONLY** (MRSA, Enterococcus, C. diff - PO only) | **Red Man Syndrome** (histamine release). Nephrotoxicity, Ototoxicity. Monitor trough levels. |

## Lipopeptides
Disrupts cell membrane causing depolarization.

| Drug | Spectrum | Notes |
| :--- | :--- | :--- |
| **Daptomycin** | VRE, MRSA, Gram(+) skin/blood infections | **Inactivated by pulmonary surfactant** (DO NOT use for pneumonia). Myopathy/Rhabdomyolysis (monitor CPK). |
`,
  drugData: [],
  quiz: [
    {
      question: "Why is Ceftriaxone contraindicated in neonates?",
      options: [
        "It causes Gray Baby Syndrome",
        "It displaces bilirubin from albumin causing Kernicterus",
        "It causes severe ototoxicity",
        "It is inactivated by pulmonary surfactant"
      ],
      answer: 1,
      explanation: "Ceftriaxone is highly protein-bound and can displace bilirubin, leading to kernicterus in neonates. It can also precipitate with calcium. Cefotaxime is preferred."
    },
    {
      question: "A patient is being treated for a Gram-positive infection and develops muscle pain and elevated CPK levels. Which antibiotic is most likely responsible?",
      options: [
        "Vancomycin",
        "Daptomycin",
        "Linezolid",
        "Ceftriaxone"
      ],
      answer: 1,
      explanation: "Daptomycin can cause myopathy and rhabdomyolysis. CPK levels must be monitored weekly during therapy."
    },
    {
      question: "Which antibiotic is always administered with Cilastatin?",
      options: [
        "Meropenem",
        "Ertapenem",
        "Imipenem",
        "Doripenem"
      ],
      answer: 2,
      explanation: "Imipenem is rapidly inactivated by renal dehydropeptidase I. Cilastatin inhibits this enzyme, increasing the half-life and urinary concentration of Imipenem."
    },
    {
      question: "What is the mechanism of resistance of Vancomycin-Resistant Enterococci (VRE)?",
      options: [
        "Production of beta-lactamase",
        "Efflux pump",
        "Methylation of the ribosome",
        "Modification of D-Ala-D-Ala to D-Ala-D-Lactate"
      ],
      answer: 3,
      explanation: "VRE resistance is mediated by the modification of the D-Ala-D-Ala binding site to D-Ala-D-Lactate, which prevents Vancomycin from binding."
    },
    {
      question: "Which cephalosporin has activity against MRSA?",
      options: [
        "Ceftriaxone",
        "Cefepime",
        "Ceftaroline",
        "Cefazolin"
      ],
      answer: 2,
      explanation: "Ceftaroline (5th generation) is the only beta-lactam with activity against MRSA due to its ability to bind PBP2a."
    }
  ],
  glossary: [
    { term: "Red Man Syndrome", definition: "An infusion-related reaction to Vancomycin caused by direct histamine release from mast cells; characterized by flushing and pruritus. Prevented by slower infusion." },
    { term: "ESBL", definition: "Extended Spectrum Beta-Lactamase; enzymes that confer resistance to most cephalosporins and monobactams. Carbapenems are the treatment of choice." },
    { term: "D-Ala-D-Ala", definition: "The terminal amino acid sequence of peptidoglycan precursors where Vancomycin binds to inhibit cell wall synthesis." },
    { term: "Cilastatin", definition: "A dehydropeptidase I inhibitor administered with Imipenem to prevent its renal degradation." }
  ],
  mnemonics: [
    {
      "heading": "Cephalosporin Coverage Gaps",
      "mnemonic": "LAME",
      "meaning": "Listeria, Atypicals, MRSA (except 5th), Enterococci"
    },
    {
      "heading": "2nd Gen Cephalosporins",
      "mnemonic": "HENS PEcK",
      "meaning": "H. flu, Enterobacter, Neisseria, Serratia, Proteus, E. coli, Klebsiella"
    }
  ]
};
