export const L120_content = {
  id: "L120",
  title: "L120 - Pharmacology: Penicillins",
  module: "Pharmacology",
  tags: ["Pharmacology", "Antibiotics", "Penicillins", "Beta-lactams"],
  createdAt: "2024-11-26",
  summary: `
# Pharmacology: Penicillins

## Overview
Penicillins are beta-lactam antibiotics that inhibit bacterial cell wall synthesis by binding to Penicillin-Binding Proteins (PBPs). They are bactericidal and exhibit time-dependent killing (Time > MIC).

## Mechanism of Action
*   Bind to PBPs (transpeptidases)
*   Inhibit peptidoglycan cross-linking
*   Activate autolysins -> cell death

## Resistance Mechanisms
1.  **Beta-lactamases:** Hydrolyze the beta-lactam ring (most common).
2.  **Altered PBPs:** Reduced affinity for beta-lactams (e.g., MRSA, Strep pneumo).
3.  **Porin Channel Mutation:** Impaired penetration (Gram-negatives).
4.  **Efflux Pumps:** Active removal of drug.

### Beta-Lactamase Inhibitors
*   **Mechanism:** "Suicide inhibitors" that irreversibly bind to bacterial beta-lactamases, protecting the penicillin from destruction.
*   **Drugs:** Clavulanic Acid, Sulbactam, Tazobactam.
*   **Common Combinations:**
    *   **Amoxicillin + Clavulanate (Augmentin):** PO. Otitis media, sinusitis, bites.
    *   **Ampicillin + Sulbactam (Unasyn):** IV. Skin/soft tissue, intra-abdominal, diabetic foot.
    *   **Piperacillin + Tazobactam (Zosyn):** IV. Pseudomonas, HAP/VAP, complicated intra-abdominal.
`,
  drugData: [
    {
      "Class": "Natural Penicillins",
      "Drugs": "Penicillin G (IV)\nPenicillin V (PO)",
      "Spectrum": "Gram-positive cocci (Streptococci), Spirochetes (Treponema pallidum - Syphilis)",
      "Notes": "Susceptible to beta-lactamases. Short half-life. Renal elimination."
    },
    {
      "Class": "Anti-Staphylococcal",
      "Drugs": "Nafcillin (IV)\nOxacillin (IV)\nDicloxacillin (PO)",
      "Spectrum": "MSSA (Methicillin-Sensitive Staph Aureus), Streptococci",
      "Notes": "Resistant to Staphylococcal penicillinase. Biliary elimination (no renal adjustment needed). Risk of Interstitial Nephritis."
    },
    {
      "Class": "Aminopenicillins",
      "Drugs": "Amoxicillin (PO)\nAmpicillin (IV)",
      "Spectrum": "Gram-positives + HELPS (H. influenzae, E. coli, Listeria, Proteus, Salmonella)",
      "Notes": "Susceptible to beta-lactamases. Rash in Mono (EBV). Amoxicillin > oral bioavailability than Ampicillin."
    },
    {
      "Class": "Antipseudomonal",
      "Drugs": "Piperacillin (IV)\nTicarcillin (IV)",
      "Spectrum": "Pseudomonas aeruginosa, Gram-negatives, Anaerobes",
      "Notes": "Susceptible to beta-lactamases (usually given with BLI like Tazobactam). Broadest spectrum penicillin."
    }
  ],
  quiz: [
    {
      question: "Which penicillin class does not require dosage adjustment in patients with renal impairment?",
      options: [
        "Natural Penicillins (e.g., Penicillin G)",
        "Aminopenicillins (e.g., Amoxicillin)",
        "Anti-Staphylococcal Penicillins (e.g., Nafcillin)",
        "Antipseudomonal Penicillins (e.g., Piperacillin)"
      ],
      answer: 2,
      explanation: "Anti-Staphylococcal penicillins (Nafcillin, Oxacillin, Dicloxacillin) are primarily eliminated by the liver (biliary excretion) and do not require renal dosage adjustment. Most other beta-lactams are renally eliminated."
    },
    {
      question: "A patient with Mononucleosis (EBV infection) is prescribed an antibiotic for a suspected secondary bacterial infection and develops a diffuse maculopapular rash. Which antibiotic was most likely prescribed?",
      options: [
        "Penicillin V",
        "Amoxicillin",
        "Cephalexin",
        "Azithromycin"
      ],
      answer: 1,
      explanation: "Aminopenicillins (Amoxicillin, Ampicillin) are associated with a high incidence of a non-allergic maculopapular rash when administered to patients with viral infections like Mononucleosis (EBV) or those taking Allopurinol."
    },
    {
      question: "Which beta-lactam/beta-lactamase inhibitor combination is effective against *Pseudomonas aeruginosa*?",
      options: [
        "Amoxicillin/Clavulanate",
        "Ampicillin/Sulbactam",
        "Piperacillin/Tazobactam",
        "Penicillin G"
      ],
      answer: 2,
      explanation: "Piperacillin is an antipseudomonal penicillin. When combined with Tazobactam (Zosyn), it retains activity against *Pseudomonas* and covers beta-lactamase-producing strains. The other options do not cover *Pseudomonas*."
    },
    {
      question: "What is the primary purpose of adding Probenicid to Penicillin therapy?",
      options: [
        "To enhance bactericidal activity",
        "To prevent hypersensitivity reactions",
        "To inhibit renal tubular secretion and prolong half-life",
        "To expand the spectrum to Gram-negatives"
      ],
      answer: 2,
      explanation: "Probenicid inhibits the organic anion transporter in the renal proximal tubule, blocking the secretion of penicillins. This increases their plasma concentration and prolongs their half-life."
    },
    {
      question: "Which of the following adverse effects is most specifically associated with Methicillin (historically) and can occur rarely with other anti-staphylococcal penicillins?",
      options: [
        "Seizures",
        "Interstitial Nephritis",
        "Hemolytic Anemia",
        "Disulfiram-like reaction"
      ],
      answer: 1,
      explanation: "Acute Interstitial Nephritis (AIN) is a classic adverse effect of Methicillin (which led to its withdrawal). It can also occur with other penicillins, particularly Nafcillin and Oxacillin, but is less common."
    }
  ],
  glossary: [
    { term: "Beta-lactam Ring", definition: "A four-membered lactam ring that is the essential structural component for the antibacterial activity of penicillins, cephalosporins, carbapenems, and monobactams." },
    { term: "PBP (Penicillin-Binding Protein)", definition: "Bacterial transpeptidases involved in peptidoglycan cross-linking; the target of beta-lactam antibiotics." },
    { term: "Beta-lactamase", definition: "Bacterial enzyme that hydrolyzes the beta-lactam ring, inactivating the antibiotic." },
    { term: "ESBL (Extended Spectrum Beta-Lactamase)", definition: "Beta-lactamases capable of hydrolyzing penicillins, cephalosporins (including 3rd gen), and monobactams; inhibited by newer BLIs." },
    { term: "MRSA", definition: "Methicillin-Resistant Staphylococcus aureus; resistant to all beta-lactams (except 5th gen cephalosporins) due to altered PBP2a." },
    { term: "MSSA", definition: "Methicillin-Sensitive Staphylococcus aureus; susceptible to anti-staphylococcal penicillins (Nafcillin, Oxacillin) and 1st gen cephalosporins." },
    { term: "Jarisch-Herxheimer Reaction", definition: "Acute febrile reaction after starting treatment for spirochetal infections (Syphilis), caused by release of endotoxin-like products from dying bacteria." },
    { term: "Time > MIC", definition: "The pharmacodynamic parameter that best predicts efficacy for beta-lactams; the time the drug concentration remains above the Minimum Inhibitory Concentration." },
    { term: "Autolysin", definition: "Bacterial enzymes that break down the cell wall; triggered by beta-lactam binding to PBPs, leading to cell lysis." },
    { term: "Probenicid", definition: "A drug that inhibits renal tubular secretion of penicillins, increasing their plasma levels and half-life." }
  ],
  mnemonics: [
    {
      "heading": "HELPS kill Enterococci",
      "mnemonic": "Ampicillin/Amoxicillin spectrum",
      "meaning": "H. influenzae, E. coli, Listeria, Proteus, Salmonella (+ Enterococci)"
    }
  ]
};
