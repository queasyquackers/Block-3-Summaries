
const L117_DATA = {
    id: 'l117',
    title: 'L117 - Pharmacology: Drug Toxicities and Pharmacogenomics',
    module: 'Pharmacology',
    tags: 'Drug Toxicity, Pharmacogenomics, Teratogenicity, Adverse Drug Reactions, CYP2D6, G6PD, HLA-B*5701',
    createdAt: new Date('2024-11-26'),
    summary: `# Lecture #117: Drug Toxicities and Pharmacogenomics

**Lecturer:** L. Goldstein, Pharm.D.
**Session:** Lecture #117

-----\n\n## Adverse Drug Reactions (ADRs)\n\n### Classification\n*   **Type A (Predictable):** Dose-dependent, related to the drug's pharmacological action. Common (e.g., overdose, side effects, withdrawal, drug interactions).\n*   **Type B (Unpredictable):** Idiosyncratic, often immunologic (allergic). Rare and not dose-dependent (e.g., anaphylaxis, SJS).\n\n### Mechanisms of Toxicity\n*   **On-Target:** Exaggerated effect at the target receptor (e.g., hypoglycemia from insulin).\n*   **Off-Target:** Interaction with unintended receptors (e.g., antihistamines causing drowsiness via muscarinic receptors).\n*   **Cellular Toxicity:** Apoptosis (programmed cell death, less inflammation) vs. Necrosis (cell lysis, significant inflammation).\n*   **Organ Toxicity:** Hepatotoxicity, Nephrotoxicity, Neurotoxicity (peripheral neuropathy), Bone Marrow Suppression.\n\n## Special Populations\n\n### Pregnancy & Lactation\n*   **Pregnancy and Lactation Labeling Rule (PLLR):** Replaced the old A, B, C, D, X categories. Now provides:\n    1.  **Pregnancy:** Risk summary, clinical considerations, data.\n    2.  **Lactation:** Risk to infant, drug presence in milk.\n    3.  **Females/Males of Reproductive Potential:** Testing, contraception, infertility.\n*   **Teratogenesis:** Drug-induced defects during organogenesis (embryonic period).\n*   **Fetotoxicity:** Injury to fetus at any stage (e.g., growth restriction, death).\n*   **Neonatal Abstinence Syndrome (NAS):** Withdrawal syndrome in neonates exposed to opioids, alcohol, or sedatives in utero.\n\n## Pharmacogenomics\n\n### Key Gene-Drug Interactions\n\n#### 1. N-acetyltransferase 2 (NAT2)\n*   **Phenotype:** Slow Acetylators.\n*   **Risk:** Increased risk of **Drug-Induced Lupus** (Hydralazine, Procainamide, Isoniazid) and peripheral neuropathy (Isoniazid).\n\n#### 2. CYP2D6\n*   **Substrate:** Codeine (prodrug converted to Morphine).\n*   **Ultra-Rapid Metabolizers (UM):** Rapid conversion to Morphine $\\rightarrow$ **Respiratory Depression/Death** (especially in children/breastfed infants).\n*   **Poor Metabolizers (PM):** Little conversion $\\rightarrow$ Lack of analgesic efficacy.\n\n#### 3. UGT1A1\n*   **Function:** Conjugates bilirubin.\n*   **Variant:** Reduced activity (Gilbert Syndrome).\n*   **Drug:** **Irinotecan** (chemotherapy). Reduced clearance leads to severe neutropenia and diarrhea.\n\n#### 4. G6PD Deficiency\n*   **Mechanism:** Reduced NADPH production $\\rightarrow$ inability to neutralize oxidative stress (glutathione).\n*   **Risk:** **Hemolytic Anemia** upon exposure to oxidizing drugs (Sulfonamides, Nitrofurantoin, Primaquine, Fava beans).\n\n#### 5. HLA-B*5701\n*   **Drug:** **Abacavir** (HIV antiviral).\n*   **Risk:** Severe, life-threatening hypersensitivity reaction (SJS/TEN).\n*   **Action:** **Screening is mandatory** before starting Abacavir.\n\n#### 6. VKORC1\n*   **Drug:** Warfarin.\n*   **Variant:** Polymorphisms affect sensitivity to Warfarin, requiring dose adjustments.\n`,
    questions: [
        {
            id: 'l117-q1',
            question: 'A breastfeeding mother is prescribed Codeine for pain. Her infant becomes lethargic and develops respiratory depression. Which pharmacogenomic phenotype in the mother would most likely explain this adverse event?',
            options: [
                'CYP2D6 Poor Metabolizer',
                'CYP2D6 Ultra-Rapid Metabolizer',
                'CYP3A4 Poor Metabolizer',
                'NAT2 Slow Acetylator',
                'UGT1A1 Reduced Activity'
            ],
            correctAnswer: 1,
            rationale: 'Codeine is a prodrug converted to Morphine by **CYP2D6**. An **Ultra-Rapid Metabolizer (UM)** mother converts Codeine to Morphine at a high rate, leading to high Morphine levels in breast milk and toxicity (respiratory depression) in the infant.'
        },
        {
            id: 'l117-q2',
            question: 'Which of the following drugs requires mandatory screening for the HLA-B*5701 allele before initiation to prevent a life-threatening hypersensitivity reaction?',
            options: [
                'Warfarin',
                'Isoniazid',
                'Abacavir',
                'Codeine',
                'Irinotecan'
            ],
            correctAnswer: 2,
            rationale: '**Abacavir** is associated with a severe, potentially fatal hypersensitivity reaction in patients carrying the **HLA-B*5701** allele. Screening is standard of care.'
        },
        {
            id: 'l117-q3',
            question: 'Patients who are "slow acetylators" due to genetic variants in NAT2 are at increased risk for which adverse effect when taking Hydralazine or Procainamide?',
            options: [
                'Hemolytic Anemia',
                'Respiratory Depression',
                'Drug-Induced Lupus Erythematosus',
                'Stevens-Johnson Syndrome',
                'Torsades de Pointes'
            ],
            correctAnswer: 2,
            rationale: 'Slow acetylation (NAT2 deficiency) leads to accumulation of drugs like Hydralazine, Procainamide, and Isoniazid, increasing the risk of **Drug-Induced Lupus Erythematosus**.'
        },
        {
            id: 'l117-q4',
            question: 'A patient with G6PD deficiency develops dark urine and fatigue after taking a course of Sulfamethoxazole/Trimethoprim. What is the underlying mechanism of this toxicity?',
            options: [
                'Immune-mediated destruction of platelets.',
                'Oxidative stress leading to red blood cell hemolysis.',
                'Accumulation of toxic metabolites in the liver.',
                'Direct nephrotoxicity.',
                'Bone marrow suppression.'
            ],
            correctAnswer: 1,
            rationale: 'In **G6PD deficiency**, red blood cells lack sufficient NADPH/glutathione to protect against oxidative stress. Oxidizing drugs (like Sulfonamides) cause oxidative damage to hemoglobin and RBC membranes, leading to **hemolytic anemia**.'
        },
        {
            id: 'l117-q5',
            question: 'The Pregnancy and Lactation Labeling Rule (PLLR) replaced the old letter categories (A, B, C, D, X) with which of the following?',
            options: [
                'A numerical scoring system for teratogenicity.',
                'Narrative sections including a Risk Summary, Clinical Considerations, and Data.',
                'A simple "Safe" or "Unsafe" designation.',
                'A color-coded warning system.',
                'A list of alternative medications only.'
            ],
            correctAnswer: 1,
            rationale: 'The **PLLR** replaced the letter categories with detailed narrative sections: **Pregnancy (Risk Summary, Clinical Considerations, Data)**, Lactation, and Females/Males of Reproductive Potential.'
        }
    ],
    glossary: [
        {
            term: "Pharmacogenomics",
            definition: "The study of how a person's genes affect their response to drugs."
        },
        {
            term: "Teratogen",
            definition: "An agent that causes malformation of an embryo."
        },
        {
            term: "Idiosyncratic Reaction",
            definition: "An unpredictable, abnormal drug response not related to the drug's known pharmacology, often immune-mediated."
        },
        {
            term: "Hapten",
            definition: "A small molecule (e.g., drug) that elicits an immune response only when attached to a large carrier such as a protein."
        },
        {
            term: "Neonatal Abstinence Syndrome (NAS)",
            definition: "A group of conditions caused when a baby withdraws from certain drugs (usually opioids) exposed in utero."
        },
        {
            term: "Polymorphism",
            definition: "A genetic variation resulting in the occurrence of several different forms or types of individuals among the members of a single species."
        }
    ],
  "mnemonics": [
    {
      "heading": "Card #1",
      "mnemonic": "One adverse effect of sulfasalazine is reversible oligospermia",
      "meaning": "oligospermia"
    },
    {
      "heading": "Card #2",
      "mnemonic": "One adverse effect associated with digoxin is bradycardia::HR",
      "meaning": "bradycardia::HR"
    },
    {
      "heading": "Card #3",
      "mnemonic": "One adverse effect associated with digoxin is heart block due to parasympathetic activity at AV node",
      "meaning": "heart block"
    },
    {
      "heading": "Card #4",
      "mnemonic": "Loop diuretics may cause hypo-magnesemia as an adverse effect",
      "meaning": "hypo"
    },
    {
      "heading": "Card #5",
      "mnemonic": "Loop diuretics may cause hypo-calcemia as an adverse effect",
      "meaning": "hypo"
    },
    {
      "heading": "Card #6",
      "mnemonic": "Adverse effects of chronic aspirin use include:   - acute renal injury - acute interstitial nephritis - GI bleeding",
      "meaning": "acute renal, acute interstitial, GI"
    },
    {
      "heading": "Card #7",
      "mnemonic": "The inhaled anesthetic halothane is most commonly associated with hepatotoxicity as an adverse effect",
      "meaning": "halothane, hepatotoxicity"
    },
    {
      "heading": "Card #8",
      "mnemonic": "Adverse effects of vortioxetine include anti-cholinergic effects, sleep disturbances (abnormal dreams), and sexual dysfunction",
      "meaning": "cholinergic"
    },
    {
      "heading": "Card #9",
      "mnemonic": "Topiramate increases GABA action and thus may cause sedation and fatigue as adverse effects",
      "meaning": "sedation"
    },
    {
      "heading": "Card #10",
      "mnemonic": "Non-specific adverse effects associated with carbamazepine include diplopia and ataxia",
      "meaning": "diplopia, ataxia"
    },
    {
      "heading": "Card #11",
      "mnemonic": "Carbamazepine is associated with liver toxicity as an adverse effect",
      "meaning": "liver"
    },
    {
      "heading": "Card #12",
      "mnemonic": "Adverse effects associated with phenytoin include diplopia and nystagmus (eye complications)",
      "meaning": "nystagmus"
    },
    {
      "heading": "Card #13",
      "mnemonic": "Adverse effects of gabapentin include sedation and ataxia",
      "meaning": "sedation, ataxia"
    },
    {
      "heading": "Card #14",
      "mnemonic": "Selegiline and rasagiline may exacerbate the adverse effects of levodopa",
      "meaning": "exacerbate"
    },
    {
      "heading": "Card #15",
      "mnemonic": "Adverse effects associated with amantadine include ataxia and livedo reticularis",
      "meaning": "ataxia, livedo reticularis"
    }
  ]
};
