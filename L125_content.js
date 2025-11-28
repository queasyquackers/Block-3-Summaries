export const L125_content = {
  id: "L125",
  title: "L125 - Pharmacology: Protein Synthesis Inhibitors",
  module: "Pharmacology",
  tags: ["Pharmacology", "Antibiotics", "Tetracyclines", "Macrolides", "Clindamycin", "Linezolid"],
  createdAt: "2024-11-26",
  summary: `
# Pharmacology: Protein Synthesis Inhibitors

## Overview
"Buy **AT** 30, **C**ELL at 50"
**30S Inhibitors:** **A**minoglycosides, **T**etracyclines.
**50S Inhibitors:** **C**hloramphenicol, **E**rythromycin (Macrolides), **L**inezolid, **L**incosamides (Clindamycin).

## Tetracyclines (30S)
Bacteriostatic. Broad spectrum (Gram-pos, Gram-neg, Atypicals, Rickettsia, Spirochetes).
**Adverse Effects:** Teeth discoloration (avoid in children <8, pregnancy), Photosensitivity.
**Resistance:** Efflux pumps.

## Macrolides (50S)
Bacteriostatic. Atypicals (Pneumonia), Gram-positives (PCN allergy).
**Adverse Effects:** GI motility (motilin receptor), QT prolongation, CYP450 inhibition (Erythro/Clarithro).

## Others (50S)
*   **Clindamycin:** Anaerobes (above diaphragm) + Gram-positives (MRSA). C. diff risk.
*   **Linezolid:** MRSA, VRE. MAO inhibitor (Serotonin Syndrome). Bone marrow suppression.
*   **Chloramphenicol:** Meningitis (backup). Gray Baby Syndrome, Aplastic Anemia.
`,
  drugData: [
    {
      "Class": "Tetracyclines",
      "Drugs": "Doxycycline (PO/IV)\nMinocycline (PO)",
      "Spectrum": "MRSA, Lyme, Rickettsia, Chlamydia, Mycoplasma.",
      "Notes": "Doxy: Drug of choice for Lyme/RMSF. Chelation with Ca/Fe/Mg (avoid milk/antacids)."
    },
    {
      "Class": "Macrolides",
      "Drugs": "Azithromycin (PO/IV)\nClarithromycin (PO)\nErythromycin (PO/IV)",
      "Spectrum": "Atypical Pneumonia (Mycoplasma, Legionella, Chlamydia), Strep.",
      "Notes": "Azithro: Long half-life (Z-pak). No CYP inhibition. Clarithro: H. pylori. CYP inhibitor."
    },
    {
      "Class": "Lincosamides",
      "Drugs": "Clindamycin (PO/IV)",
      "Spectrum": "Anaerobes (Bacteroides, Clostridium perfringens), Gram-positives (MRSA).",
      "Notes": "Highest risk of C. diff colitis. 'Above the diaphragm' anaerobes."
    },
    {
      "Class": "Oxazolidinones",
      "Drugs": "Linezolid (PO/IV)",
      "Spectrum": "Resistant Gram-positives (MRSA, VRE).",
      "Notes": "Serotonin Syndrome risk (MAOI). Thrombocytopenia."
    }
  ],
  quiz: [
    {
      question: "Which antibiotic is contraindicated in children under 8 years of age due to the risk of teeth discoloration?",
      options: [
        "Tetracycline",
        "Doxycycline",
        "Ciprofloxacin",
        "Chloramphenicol"
      ],
      answer: 1,
      explanation: "Doxycycline is the drug of choice for Lyme disease. Although tetracyclines are generally contraindicated in children < 8 years due to teeth staining, the AAP allows Doxycycline for short courses (< 21 days) as it binds calcium less avidly than other tetracyclines."
    },
    {
      question: "A patient taking Simvastatin for high cholesterol is prescribed an antibiotic for pneumonia. A few days later, he develops severe muscle pain and dark urine (rhabdomyolysis). Which antibiotic was likely prescribed?",
      options: [
        "Azithromycin",
        "Clarithromycin",
        "Doxycycline",
        "Amoxicillin"
      ],
      answer: 1,
      explanation: "Clarithromycin (and Erythromycin) is a potent inhibitor of CYP3A4. Simvastatin is metabolized by CYP3A4. Inhibition leads to increased statin levels and toxicity (rhabdomyolysis). Azithromycin does not inhibit CYP3A4."
    },
    {
      question: "Which antibiotic is associated with a risk of Serotonin Syndrome if co-administered with SSRIs?",
      options: [
        "Clindamycin",
        "Linezolid",
        "Vancomycin",
        "Doxycycline"
      ],
      answer: 1,
      explanation: "Linezolid is a weak inhibitor of Monoamine Oxidase (MAO). Co-administration with serotonergic drugs (like SSRIs) can lead to Serotonin Syndrome."
    },
    {
      question: "A 'D-test' is performed on a Staphylococcus aureus isolate. There is a flattening of the zone of inhibition around the Clindamycin disk adjacent to the Erythromycin disk. What does this indicate?",
      options: [
        "The isolate is susceptible to Clindamycin",
        "The isolate has constitutive resistance to Clindamycin",
        "The isolate has inducible resistance to Clindamycin (erm gene)",
        "The isolate is resistant to Erythromycin but susceptible to Clindamycin"
      ],
      answer: 2,
      explanation: "A positive D-test indicates inducible Clindamycin resistance (erm gene). Erythromycin induces the methylase enzyme, which then confers resistance to Clindamycin. Clindamycin should NOT be used."
    }
  ],
  glossary: [
    { term: "Gray Baby Syndrome", definition: "A serious side effect of Chloramphenicol in neonates due to lack of glucuronidation (UDP-glucuronyl transferase), leading to drug accumulation, hypotension, and cyanosis." },
    { term: "Serotonin Syndrome", definition: "A potentially life-threatening condition caused by excessive serotonin activity, characterized by agitation, hyperthermia, and neuromuscular hyperactivity. Can be precipitated by Linezolid + SSRIs." },
    { term: "D-Test", definition: "A microbiological test used to detect inducible Clindamycin resistance in Staph aureus isolates that are Erythromycin-resistant but Clindamycin-susceptible." }
  ],
  mnemonics: [
    {
      "heading": "Protein Synthesis Inhibitors",
      "mnemonic": "Buy AT 30, CELL at 50",
      "meaning": "30S: Aminoglycosides, Tetracyclines. 50S: Chloramphenicol, Erythromycin, Linezolid, Lincosamides"
    }
  ]
};
