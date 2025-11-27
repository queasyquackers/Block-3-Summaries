export const L123_content = {
    id: "L123",
    title: "L123 - Pharmacology: Beta-Lactam Antibiotics, Other Cell Wall Inhibitors, and Cell Membrane-Active Drugs",
    module: "Pharmacology",
    tags: ["Pharmacology", "Antibiotics", "Cephalosporins", "Carbapenems", "Vancomycin", "Daptomycin"],
    createdAt: "2024-11-26",
    summary: `
# Pharmacology: Beta-Lactam Antibiotics, Other Cell Wall Inhibitors, and Cell Membrane-Active Drugs

## Cephalosporins
*   **Mechanism:** Beta-lactams (inhibit cell wall synthesis).
*   **Generations & Spectrum:**
    *   **1st Gen (Cefazolin, Cephalexin):** Excellent **Gram-Positive** (MSSA, Strep). Gram-Negative: **PEcK** (*Proteus, E. coli, Klebsiella*). Use: Surgical prophylaxis (Cefazolin).
    *   **2nd Gen (Cefuroxime, Cefoxitin):** Added Gram-Negative coverage (**HEN PEcK**: *Haemophilus, Enterobacter, Neisseria*). **Cefoxitin** (Cephamycin) covers *Bacteroides fragilis* (Anaerobes).
    *   **3rd Gen (Ceftriaxone, Cefotaxime, Ceftazidime):** Enhanced Gram-Negative, crosses BBB (Meningitis).
        *   **Ceftriaxone:** Long half-life (QD dosing), Biliary excretion (no renal adjust). **Gonorrhea** (IM), Meningitis, Lyme. **Avoid in Neonates** (biliary sludging, displaces bilirubin $\\rightarrow$ Kernicterus).
        *   **Cefotaxime:** Renal excretion. **Preferred in Neonates**.
        *   **Ceftazidime:** **Pseudomonas** coverage.
    *   **4th Gen (Cefepime):** Broad spectrum. **Pseudomonas** + Gram-Positive. Stable against AmpC beta-lactamases.
    *   **Advanced (5th Gen):**
        *   **Ceftaroline:** **MRSA** activity (binds PBP2a).
        *   **Cefiderocol:** Siderophore (uses iron transport). MDR Gram-Negatives.
*   **Adverse Effects:** Hypersensitivity (cross-reactivity with Penicillins ~1-10%), Vitamin K deficiency (Hypoprothrombinemia - Cefotetan), Disulfiram-like reaction (Cefotetan).

## Carbapenems (Imipenem, Meropenem, Ertapenem)
*   **Spectrum:** Broadest beta-lactams. Gram-Pos, Gram-Neg, Anaerobes, **Pseudomonas** (Except Ertapenem).
*   **Use:** MDR infections, ESBL-producing bacteria.
*   **Imipenem:** Always administered with **Cilastatin** (inhibits renal dehydropeptidase I to prevent drug inactivation).
*   **Adverse Effects:** GI distress, Skin rash, **Seizures** (especially Imipenem in renal failure).

## Glycopeptides: Vancomycin
*   **Mechanism:** Binds **D-Ala-D-Ala** terminus of peptidoglycan pentapeptide $\\rightarrow$ Inhibits **Transglycosylation** (elongation).
*   **Spectrum:** **Gram-Positive ONLY**. MRSA, *Staph. epidermidis*, Enterococcus, *C. difficile* (Oral).
*   **Resistance:** Amino acid change from D-Ala-D-Ala to **D-Ala-D-Lactate** (VRE).
*   **Pharmacokinetics:** Not absorbed orally (IV for systemic, PO for *C. diff*). Renal elimination.
*   **Adverse Effects:**
    *   **Red Man Syndrome:** Flushing due to histamine release (infusion rate-dependent). Prevent by slow infusion/antihistamines.
    *   **Nephrotoxicity:** (Monitor trough levels).
    *   **Ototoxicity:** (Rare).

## Lipopeptides: Daptomycin
*   **Mechanism:** Inserts lipid tail into cell membrane $\\rightarrow$ Depolarization $\\rightarrow$ K+ efflux $\\rightarrow$ Rapid cell death (Bactericidal).
*   **Spectrum:** **Gram-Positive ONLY**. MRSA, VRE.
*   **Use:** Skin/soft tissue, Endocarditis, Bacteremia.
*   **Contraindication:** **Pneumonia** (Inactivated by **Pulmonary Surfactant**).
*   **Adverse Effects:** **Myopathy/Rhabdomyolysis** (Monitor **CPK** levels).
`,
    questions: [
        {
            question: "Which cephalosporin is active against Methicillin-Resistant Staphylococcus Aureus (MRSA)?",
            options: [
                "Ceftriaxone",
                "Cefepime",
                "Ceftaroline",
                "Cefazolin"
            ],
            answer: 2,
            explanation: "Ceftaroline (5th generation) is the only beta-lactam with activity against MRSA due to its ability to bind PBP2a."
        },
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
            explanation: "VRE resistance is mediated by the *van* gene cluster, which modifies the D-Ala-D-Ala binding site to D-Ala-D-Lactate, reducing Vancomycin's binding affinity."
        }
    ],
    glossary: [
        { term: "Red Man Syndrome", definition: "An infusion-related reaction to Vancomycin characterized by flushing and pruritus due to histamine release; managed by slowing the infusion rate." },
        { term: "Kernicterus", definition: "Bilirubin-induced brain dysfunction in neonates; a risk with Ceftriaxone use." },
        { term: "ESBL", definition: "Extended-Spectrum Beta-Lactamase; enzymes that confer resistance to most beta-lactams, often treated with Carbapenems." },
        { term: "PEcK", definition: "Mnemonic for organisms covered by 1st Gen Cephalosporins: Proteus, E. coli, Klebsiella." },
        { term: "HEN PEcK", definition: "Mnemonic for organisms covered by 2nd Gen Cephalosporins: Haemophilus, Enterobacter, Neisseria + PEcK." },
        { term: "Cilastatin", definition: "A renal dehydropeptidase I inhibitor used with Imipenem to prevent its degradation." }
    ],
  "mnemonics": [
    {
      "heading": "Card #1",
      "mnemonic": "How do Cephalosporin antibiotics influence the nephrotoxicity of Aminoglycosides?   Increase",
      "meaning": "Increase"
    },
    {
      "heading": "Card #2",
      "mnemonic": "Fluoroquinolones are a class of antibiotics that can possibly cause leg cramps and myalgias along with cartilage damage",
      "meaning": "Fluoroquinolones"
    },
    {
      "heading": "Card #3",
      "mnemonic": "Ampicillin is an aminopenicillin that can produce pseudomembranous colitis",
      "meaning": "Ampicillin"
    },
    {
      "heading": "Card #4",
      "mnemonic": "Disulfiram-like reaction is an adverse effect of what β-lactam antibiotics?    Cephalosporins",
      "meaning": "Cephalosporins"
    },
    {
      "heading": "Card #5",
      "mnemonic": "Fidaxomicin is a macrocyclic antibiotic that works by inhibiting the sigma subunit of RNA polymerase",
      "meaning": "sigma, RNA polymerase"
    },
    {
      "heading": "Card #6",
      "mnemonic": "Penicillins can result in autoimmune hemolytic anemia, which results in a positive direct Coombs test due to IgG against penicillin binding to RBCs",
      "meaning": "hemolytic anemia, G, penicillin"
    },
    {
      "heading": "Card #7",
      "mnemonic": "Direct Coombs Positive Hemolytic Anemia that develops as a result of Penicillin administration is a type II hypersensitivity reaction",
      "meaning": "II"
    },
    {
      "heading": "Card #8",
      "mnemonic": "1st generation cephalosporins can be used to treat GAS pharyngitis and cellulitis",
      "meaning": "pharyngitis"
    },
    {
      "heading": "Card #9",
      "mnemonic": "Cephalosporins have similar hypersensitivities to those seen in what drugs?   Penicillins",
      "meaning": "Penicillins"
    },
    {
      "heading": "Card #10",
      "mnemonic": "What β-lactam antibiotics result in increased nephrotoxicity when combined with aminoglycosides?   Cephalosporins",
      "meaning": "Cephalosporins"
    },
    {
      "heading": "Card #11",
      "mnemonic": "What class of drugs does aztreonam belong to?   Monobactams",
      "meaning": "Monobactams"
    },
    {
      "heading": "Card #12",
      "mnemonic": "Which β-lactam antibiotics can cause GI side effects?   Carbapenems",
      "meaning": "Carbapenems"
    },
    {
      "heading": "Card #13",
      "mnemonic": "Which β-lactam antibiotic lowers the seizure threshold?   Imipenem",
      "meaning": "Imipenem"
    },
    {
      "heading": "Card #14",
      "mnemonic": "Which carbapenem has a decreased risk of seizure?   Meropenem",
      "meaning": "Meropenem"
    },
    {
      "heading": "Card #15",
      "mnemonic": "What is the susceptibility of Vancomycin to β-lactamases?   Resistant (ineffective)",
      "meaning": "Resistant (ineffective)"
    }
  ]
};
