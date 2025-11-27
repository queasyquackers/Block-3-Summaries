export const L126_content = {
    id: "L126",
    title: "L126 - Pharmacology: Folate Synthesis Inhibitors & Fluoroquinolones",
    module: "Pharmacology",
    tags: ["Pharmacology", "Antibiotics", "Sulfonamides", "Trimethoprim", "Fluoroquinolones", "Ciprofloxacin", "Levofloxacin", "Moxifloxacin", "Delafloxacin"],
    createdAt: "2024-11-26",
    summary: `
# Pharmacology: Folate Synthesis Inhibitors & Fluoroquinolones

## Folate Synthesis Inhibitors
*   **Mechanism:** Sequential blockade of folate synthesis pathway.
    *   **Sulfonamides (e.g., Sulfamethoxazole):** Structural analogs of PABA. Inhibit **Dihydropteroate Synthase** (Step 1). Bacteriostatic alone.
    *   **Trimethoprim:** Analog of dihydrofolate. Inhibits **Dihydrofolate Reductase** (Step 2). Bacteriostatic alone.
    *   **Combination (TMP-SMX):** Synergistic and **Bactericidal**.
*   **Selectivity:** Mammals do not synthesize folate (dietary) and have low affinity for Trimethoprim.
*   **Pharmacokinetics:**
    *   **Metabolism:** Acetylation (NAT2) in liver. **Slow Acetylators** $\\rightarrow$ Increased toxicity.
    *   **Excretion:** Renal. High urine levels (Good for UTI).
*   **Clinical Uses:**
    *   **UTI:** Uncomplicated cystitis (E. coli, Klebsiella).
    *   **Pneumocystis jirovecii (PCP):** Drug of choice for treatment and prophylaxis (AIDS).
    *   **Nocardia:** Drug of choice.
    *   **Toxoplasmosis:** Sulfadiazine + Pyrimethamine.
    *   **Burns:** Silver Sulfadiazine (Topical). Mafenide (Topical - causes metabolic acidosis/pain).
*   **Adverse Effects:**
    *   **Hypersensitivity:** Rash, **Stevens-Johnson Syndrome (SJS)**, Toxic Epidermal Necrolysis (TEN).
    *   **Hematologic:** Hemolytic anemia (**G6PD Deficiency**), Agranulocytosis, Aplastic Anemia.
    *   **Crystalluria:** Precipitation in acidic urine (Hydration is key!).
    *   **Kernicterus:** Displaces bilirubin from albumin in neonates $\\rightarrow$ Brain damage. **Contraindicated in 3rd Trimester & Neonates (< 2 months).**
    *   **Hyperkalemia:** Trimethoprim blocks ENaC channels (like Amiloride).

## Fluoroquinolones
*   **Drugs:** **Ciprofloxacin**, **Levofloxacin**, **Moxifloxacin**, **Delafloxacin**, Ofloxacin.
*   **Mechanism:** Inhibit **DNA Gyrase (Topoisomerase II)** (prevents supercoiling - Gram Neg) and **Topoisomerase IV** (prevents daughter cell separation - Gram Pos). **Bactericidal**. Concentration-dependent killing (AUC/MIC).
*   **Spectrum & Uses:**
    *   **Ciprofloxacin:** Excellent **Gram-Negative** coverage (**Pseudomonas**). Poor Gram-Positive. Uses: UTI, Pyelonephritis, Gastroenteritis, Anthrax.
    *   **Respiratory Fluoroquinolones (Levofloxacin, Moxifloxacin):** Excellent activity against **Strep pneumoniae** and Atypicals (*Legionella, Mycoplasma, Chlamydia*). Used for CAP.
    *   **Moxifloxacin:** Hepatic metabolism (Low urine levels - **NOT for UTI**). Anaerobic activity (Lung abscess).
    *   **Delafloxacin:** Active against **MRSA**.
*   **Pharmacokinetics:**
    *   **Absorption:** Good oral bioavailability. **Chelation** with multivalent cations (Ca, Mg, Fe, Al - Antacids/Vitamins) $\\rightarrow$ Significantly reduced absorption. Separate dosing.
    *   **Excretion:** Renal (adjust for failure) except Moxifloxacin (Hepatic).
*   **Adverse Effects (Black Box Warnings):**
    *   **Tendinopathy:** Tendonitis and **Tendon Rupture** (Achilles). Risk increased with age > 60, steroids, organ transplant.
    *   **Peripheral Neuropathy:** Can be permanent.
    *   **CNS Effects:** Seizures, confusion, hallucinations.
    *   **Myasthenia Gravis:** Exacerbates muscle weakness.
    *   **QT Prolongation:** Risk of Torsades. Moxifloxacin > Levofloxacin > Ciprofloxacin.
    *   **Aortic Aneurysm/Dissection:** Avoid in at-risk patients.
    *   **Dysglycemia:** Hypo/Hyperglycemia.
    *   **Phototoxicity:** Severe sunburn.
*   **Contraindications:**
    *   **Pregnancy/Children:** Generally avoided due to risk of cartilage damage (arthropathy). Used only if benefit > risk (e.g., Anthrax, CF).

## Drug Interactions
*   **Ciprofloxacin:** Inhibits **CYP1A2**. Increases levels of **Theophylline** (seizures/arrhythmias) and Caffeine.
*   **QT Prolonging Drugs:** Additive risk (Macrolides, Antipsychotics, etc.).
*   **Warfarin:** Increased INR (displacement/flora changes).
`,
    questions: [
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
            explanation: "Sulfonamides displace unconjugated bilirubin from albumin binding sites. In neonates with an immature blood-brain barrier, this free bilirubin can deposit in the brain, causing kernicterus (brain damage)."
        },
        {
            question: "Which of the following instructions should be given to a patient prescribed Ciprofloxacin to ensure optimal absorption?",
            options: [
                "Take with a glass of milk to prevent stomach upset",
                "Take with an antacid to prevent heartburn",
                "Take with iron supplements if you are anemic",
                "Avoid taking with dairy products, antacids, or vitamins containing minerals"
            ],
            answer: 3,
            explanation: "Fluoroquinolones chelate with multivalent cations (Calcium, Magnesium, Aluminum, Iron), forming insoluble complexes that are not absorbed. Patients should avoid taking them with dairy, antacids, or mineral supplements."
        }
    ],
    glossary: [
        { term: "Kernicterus", definition: "Bilirubin-induced brain dysfunction in neonates, a risk with Sulfonamides due to bilirubin displacement." },
        { term: "Stevens-Johnson Syndrome (SJS)", definition: "A severe hypersensitivity reaction affecting skin and mucous membranes, associated with Sulfonamides." },
        { term: "Tendon Rupture", definition: "A serious adverse effect of Fluoroquinolones, particularly affecting the Achilles tendon." },
        { term: "Respiratory Fluoroquinolone", definition: "Fluoroquinolones (Levo, Moxi, Dela) with enhanced activity against Strep pneumoniae and atypical respiratory pathogens." },
        { term: "Qnr Proteins", definition: "Plasmid-mediated proteins that protect DNA gyrase/topoisomerase IV from fluoroquinolone binding, conferring low-level resistance." }
    ],
  "mnemonics": [
    {
      "heading": "Card #1",
      "mnemonic": "What drugs have the suffix -oxacin?   Fluoroquinolones",
      "meaning": "Fluoroquinolones"
    },
    {
      "heading": "Card #2",
      "mnemonic": "Trimethoprim (TMP) inhibits the enzyme dihydrofolate reductase in prokaryotes::eu/pro (pyrimidine synthesis)",
      "meaning": "Trimethoprim (TMP), dihydrofolate reductase, prokaryotes::eu/pro"
    },
    {
      "heading": "Card #3",
      "mnemonic": "Trimethoprim can produce what teratogenic defects?   Neural tube defects",
      "meaning": "Neural tube defects"
    },
    {
      "heading": "Card #4",
      "mnemonic": "What is the recommended treatment for Legionnaire's disease?   macrolides or respiratory fluoroquinolones (e.g. levofloxacin, moxifloxacin)",
      "meaning": "macrolides or respiratory fluoroquinolones (e.g. levofloxacin, moxifloxacin)"
    },
    {
      "heading": "Card #5",
      "mnemonic": "What is the treatment for a UTI caused by Pseudomonas aeruginosa?   Ciprofloxacin; Levofloxacin::2 specific",
      "meaning": "Ciprofloxacin; Levofloxacin::2 specific"
    },
    {
      "heading": "Card #6",
      "mnemonic": "What are the two starting substrates of folate synthesis (prokaryotes)?   PABA and pteridine",
      "meaning": "PABA and pteridine"
    },
    {
      "heading": "Card #7",
      "mnemonic": "PABA and Pteridine are combined by dihydropteroate synthase to form dihydropteroic acid (prokaryotic folate synthesis)",
      "meaning": "dihydropteroate synthase"
    },
    {
      "heading": "Card #8",
      "mnemonic": "Dihydropteroic acid is converted to dihydrofolic acid (prokaryotic folate synthesis)",
      "meaning": "dihydrofolic acid"
    },
    {
      "heading": "Card #9",
      "mnemonic": "Which enzyme is inhibited by trimethoprim (TMP)?   Dihydrofolate reductase (prokaryotic)",
      "meaning": "Dihydrofolate reductase (prokaryotic)"
    },
    {
      "heading": "Card #10",
      "mnemonic": "Hematological complications of Trimethoprim (TMP) use include pancytopenia (granulocytopenia, leukopenia) and megaloblastic anemia",
      "meaning": "pancytopenia, megaloblastic anemia"
    },
    {
      "heading": "Card #11",
      "mnemonic": "The fluoroquinolones levofloxacin and moxifloxacin can be used to treat Streptococcus pneumoniae, Haemophilus spp. (community-acquired pneumonia)",
      "meaning": "levofloxacin, moxifloxacin"
    },
    {
      "heading": "Card #12",
      "mnemonic": "The fluoroquinolones levofloxacin and moxifloxacin can be used to treat Mycoplasma pneumoniae, Legionella pneumophila (atypical pneumonia)",
      "meaning": "levofloxacin, moxifloxacin"
    },
    {
      "heading": "Card #13",
      "mnemonic": "Fluoroquinolones can be used for atypical-pneumonias",
      "meaning": "atypical"
    },
    {
      "heading": "Card #14",
      "mnemonic": "Trimethoprim inhibits the enzyme Dihydrofolate Reductase",
      "meaning": "Dihydrofolate Reductase"
    },
    {
      "heading": "Card #15",
      "mnemonic": "Trimethoprim is often combined with Sulfamethoxazole",
      "meaning": "Sulfamethoxazole"
    }
  ]
};
