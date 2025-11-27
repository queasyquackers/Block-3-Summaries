
const L109_L110_DATA = {
    id: 'l109-l110',
    title: 'L109/L110 - Pharmacology: Pharmacokinetics Parts 1 & 2',
    module: 'Pharmacology',
    tags: 'Pharmacokinetics, Absorption, Distribution, Metabolism, Excretion, ADME, Bioavailability, First-Pass Effect, CYP450, Renal Clearance',
    createdAt: new Date('2024-11-26'),
    summary: `# Lecture #109 & #110: Pharmacology: Pharmacokinetics Parts 1 & 2

**Lecturer:** L. Goldstein
**Session:** Lectures #109-110

-----\n\n## Part 1: Absorption and Distribution (L109)\n\n### Absorption\n*   **Definition:** Movement of drug from site of administration into the central circulation.\n*   **Mechanisms of Permeation:**\n    1.  **Passive Diffusion:** Most common. Driven by concentration gradient (high to low). Depends on lipid solubility (lipid-water partition coefficient).\n        *   *Fick's Law:* Rate $\\propto$ (Area $\\times$ Permeability $\\times$ Concentration Gradient) / Thickness.\n    2.  **Carrier-Mediated Transport:**\n        *   **Facilitated Diffusion:** Down gradient, no energy, saturable (e.g., SLC family).\n        *   **Active Transport:** Against gradient, requires energy (ATP), saturable (e.g., ABC superfamily, P-glycoprotein).\n    3.  **Paracellular Transport:** Between cells (small polar molecules).\n\n### pH and Ionization (Henderson-Hasselbalch)\n*   **Key Concept:** Only **non-ionized** (uncharged) forms cross lipid membranes readily.\n*   **Weak Acids (HA $\\rightleftharpoons$ H$^+$ + A$^-$):**\n    *   Protonated form (HA) is non-ionized $\\rightarrow$ crosses membrane.\n    *   Accumulate in basic environments (ion trapping).\n*   **Weak Bases (BH$^+$ $\\rightleftharpoons$ H$^+$ + B):**\n    *   Protonated form (BH$^+$) is ionized $\\rightarrow$ does NOT cross.\n    *   Non-protonated form (B) crosses.\n    *   Accumulate in acidic environments.\n*   **Clinical Application (Ion Trapping):**\n    *   **Salicylate (Aspirin) Toxicity:** Weak acid. Alkalinize urine (increase pH) with bicarbonate $\\rightarrow$ traps drug in urine (A$^-$ form) $\\rightarrow$ increases excretion.\n\n### Bioavailability (F)\n*   **Definition:** Fraction of administered dose reaching systemic circulation unchanged.\n*   **IV Administration:** F = 100% (1.0).\n*   **Oral Administration:** F < 100% due to incomplete absorption and **First-Pass Effect**.\n*   **First-Pass Effect:** Metabolism of drug by gut wall and liver *before* reaching systemic circulation. Reduces bioavailability.\n\n### Distribution\n*   **Determinants:** Blood flow, capillary permeability, tissue volume, protein binding.\n*   **Protein Binding:**\n    *   **Albumin:** Major carrier for acidic drugs.\n    *   **Alpha-1-acid glycoprotein:** Binds basic drugs.\n    *   *Clinical Significance:* Only **free** (unbound) drug is active, metabolized, and excreted. Hypoalbuminemia $\\rightarrow$ increased free drug $\\rightarrow$ potential toxicity.\n*   **Redistribution:**\n    *   Mechanism for termination of action of highly lipid-soluble drugs (e.g., Thiopental).\n    *   Rapidly enters highly perfused organs (Brain) $\\rightarrow$ Effect.\n    *   Redistributes to less perfused tissues (Muscle, Fat) $\\rightarrow$ Termination of effect (plasma levels drop).\n\n-----\n\n## Part 2: Metabolism and Excretion (L110)\n\n### Metabolism (Biotransformation)\n*   **Goal:** Convert lipophilic drugs to hydrophilic metabolites for excretion.\n*   **Site:** Primarily liver (SER); also gut, kidney, lung.\n\n#### Phase I Reactions (Functionalization)\n*   **Reactions:** Oxidation, Reduction, Hydrolysis.\n*   **Enzymes:** **Cytochrome P450 (CYP)** system (Microsomal mixed-function oxidases).\n    *   Requires: NADPH, Oxygen, Heme.\n    *   **CYP3A4:** Metabolizes ~50% of drugs.\n    *   **CYP2D6:** Significant genetic polymorphism.\n*   **Outcome:** Usually inactivation, but can produce active metabolites (prodrugs) or toxic metabolites.\n\n#### Phase II Reactions (Conjugation)\n*   **Reactions:** Glucuronidation (most common), Sulfation, Acetylation, Glutathione conjugation.\n*   **Enzymes:** Transferases (e.g., UGT - UDP-glucuronosyltransferase).\n*   **Outcome:** Highly polar, inactive conjugates $\\rightarrow$ Excreted in urine/bile.\n*   *Note:* Phase II can occur without Phase I.\n\n### Factors Affecting Metabolism\n1.  **Enzyme Induction:**\n    *   Increased enzyme synthesis $\\rightarrow$ Increased metabolism $\\rightarrow$ Decreased drug effect.\n    *   *Examples:* Rifampin, Carbamazepine, St. John's Wort.\n2.  **Enzyme Inhibition:**\n    *   Decreased enzyme activity $\\rightarrow$ Decreased metabolism $\\rightarrow$ Increased drug levels (Toxicity).\n    *   *Examples:* Cimetidine, Ketoconazole, Grapefruit juice (CYP3A4).\n3.  **Pharmacogenomics:**\n    *   **Poor Metabolizers:** Risk of toxicity (active drug) or failure (prodrug).\n    *   **Ultra-rapid Metabolizers:** Risk of failure (active drug) or toxicity (prodrug).\n    *   *Example:* Acetylation (Fast vs. Slow acetylators - Isoniazid).\n\n### Excretion\n*   **Renal Excretion (Major):**\n    1.  **Glomerular Filtration:** Free drug only. Passive.\n    2.  **Active Tubular Secretion:** Proximal tubule. Carriers (OAT, OCT). Saturable.\n    3.  **Passive Tubular Reabsorption:** Distal tubule. Lipophilic drugs reabsorbed. Polar drugs excreted.\n*   **Clearance (CL):** Volume of blood cleared of drug per unit time.\n    *   **Creatinine Clearance (CrCl):** Estimates GFR. Used to adjust dosing in renal impairment.\n*   **Biliary Excretion & Enterohepatic Circulation:**\n    *   Drug/Metabolite secreted into bile $\\rightarrow$ Intestine.\n    *   Gut bacteria cleave conjugate $\\rightarrow$ Free drug reabsorbed $\\rightarrow$ Prolongs duration of action.\n\n### Special Populations\n*   **Neonates:** Immature liver/kidney function $\\rightarrow$ Reduced metabolism/excretion $\\rightarrow$ Toxicity risk (e.g., Gray Baby Syndrome - Chloramphenicol).\n*   **Elderly:** Decreased muscle mass (normal Creatinine but low GFR), reduced blood flow, polypharmacy.\n`,
    questions: [
        {
            id: 'l109-q1',
            question: 'A patient presents with salicylate (aspirin) overdose. Salicylate is a weak acid. Which of the following interventions would most effectively increase the renal excretion of salicylate?',
            options: [
                'Acidify the urine with ammonium chloride',
                'Alkalinize the urine with sodium bicarbonate',
                'Administer a CYP inducer',
                'Administer a P-glycoprotein inhibitor',
                'Decrease the glomerular filtration rate'
            ],
            correctAnswer: 1,
            rationale: 'Salicylate is a weak acid. In an alkaline environment (high pH), a weak acid donates its proton and becomes ionized (A-). Ionized molecules cannot passively diffuse back across the renal tubule membrane (reabsorption) and are "trapped" in the urine, leading to increased excretion. This is the principle of **ion trapping**.'
        },
        {
            id: 'l109-q2',
            question: 'A highly lipid-soluble anesthetic agent like thiopental has a rapid onset of action due to high brain perfusion. Its action is terminated rapidly primarily due to:',
            options: [
                'Rapid hepatic metabolism',
                'Rapid renal excretion',
                'Redistribution to skeletal muscle and adipose tissue',
                'Extensive plasma protein binding',
                'Biliary secretion'
            ],
            correctAnswer: 2,
            rationale: 'The termination of action of highly lipid-soluble drugs given as a single IV bolus (like thiopental) is primarily due to **redistribution** from the highly perfused vessel-rich group (brain) to less perfused tissues (muscle, fat), not metabolism or excretion.'
        },
        {
            id: 'l110-q1',
            question: 'A patient taking a drug that is a substrate for CYP3A4 consumes a large amount of grapefruit juice. What is the expected effect on the drug\'s plasma concentration?',
            options: [
                'Decrease due to enzyme induction',
                'Increase due to enzyme inhibition',
                'No change',
                'Decrease due to increased renal clearance',
                'Increase due to displacement from protein binding'
            ],
            correctAnswer: 1,
            rationale: 'Grapefruit juice contains furanocoumarins that **inhibit CYP3A4** enzymes in the gut wall. This reduces the first-pass metabolism of CYP3A4 substrates, leading to **increased** bioavailability and plasma concentrations, potentially causing toxicity.'
        },
        {
            id: 'l110-q2',
            question: 'Which of the following best describes the "First-Pass Effect"?',
            options: [
                'The rapid distribution of a drug to the brain',
                'The excretion of a drug by the kidneys before it acts',
                'The metabolism of an orally administered drug by the liver before reaching systemic circulation',
                'The binding of a drug to plasma albumin',
                'The reabsorption of a drug from the distal tubule'
            ],
            correctAnswer: 2,
            rationale: 'The **First-Pass Effect** refers to the metabolism of a drug (primarily by the liver, but also the gut wall) after oral administration and absorption from the GI tract, before it reaches the systemic circulation. This significantly reduces the bioavailability of some drugs.'
        },
        {
            id: 'l110-q3',
            question: 'Phase II metabolic reactions generally result in metabolites that are:',
            options: [
                'More lipophilic and active',
                'More hydrophilic and inactive',
                'Volatile and excreted via lungs',
                'Unchanged in polarity',
                'Substrates for CYP450 enzymes'
            ],
            correctAnswer: 1,
            rationale: 'Phase II reactions (conjugation) add large polar groups (like glucuronic acid) to the molecule, making it highly **hydrophilic** (water-soluble) and usually **inactive**, facilitating rapid excretion in urine or bile.'
        }
    ],
    glossary: [
        {
            term: "Bioavailability (F)",
            definition: "The fraction of an administered dose of unchanged drug that reaches the systemic circulation."
        },
        {
            term: "First-Pass Effect",
            definition: "The elimination of drug that occurs before it reaches the systemic circulation, primarily via metabolism in the liver and gut wall."
        },
        {
            term: "Volume of Distribution (Vd)",
            definition: "A theoretical volume relating the amount of drug in the body to the concentration of drug in the plasma."
        },
        {
            term: "Cytochrome P450 (CYP)",
            definition: "A superfamily of heme-containing enzymes involved in Phase I metabolism (oxidation) of drugs and endogenous substances."
        },
        {
            term: "Glucuronidation",
            definition: "A major Phase II metabolic reaction where glucuronic acid is transferred to a substrate by UDP-glucuronosyltransferase (UGT), increasing water solubility."
        },
        {
            term: "Enterohepatic Circulation",
            definition: "The cycle where a drug is secreted into bile, released into the intestine, and reabsorbed back into the bloodstream."
        },
        {
            term: "Clearance (CL)",
            definition: "The volume of plasma from which a substance is completely removed per unit time."
        },
        {
            term: "Ion Trapping",
            definition: "The phenomenon where a drug accumulates on the side of a membrane where the pH favors its ionization (charged form), preventing it from crossing back."
        },
        {
            term: "P-glycoprotein (P-gp)",
            definition: "An efflux transporter (ABC family) that pumps drugs out of cells, affecting absorption, distribution, and excretion."
        },
        {
            term: "Prodrug",
            definition: "An inactive compound that is metabolized within the body into an active pharmacologic agent."
        }
    ]
};
