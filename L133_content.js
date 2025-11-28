export const L133_content = {
  id: "L133",
  title: "L133 - Introduction to the Nervous System",
  module: "Neuroscience",
  tags: ["Neuroscience", "Neuron", "Glia", "Synapse", "Myelin", "Astrocytes", "Microglia", "Oligodendrocytes", "Schwann Cells"],
  createdAt: "2024-11-26",
  summary: `
# Introduction to the Nervous System

## Overview
*   **Nervous System Function:** Neural activity creates behavior. Changes in anatomy/physiology (development, aging, disease, learning) lead to changes in behavior.
*   **Histology:** Understanding cell types and their connections is critical for understanding function and disease.

## Neurons: Information Carriers
*   **Structure:**
    *   **Soma (Cell Body):** Contains organelles.
    *   **Dendrites:** Information receiving (the "ears"). Often have **dendritic spines** (sites of excitatory synapses).
    *   **Symptoms:** Midbrain/hindbrain malformations ("Molar Tooth Sign"), intellectual disability, ataxia.

## Synapses
*   **Chemical Synapse:**
    *   Presynaptic axon terminal releases neurotransmitter vesicles into the **synaptic cleft**.
    *   Neurotransmitter binds to receptors on postsynaptic dendrite/spine.
    *   Unidirectional, slower (1-5 ms).
    :::correlate
    **Synaptic Proteins & Autism**
    *   **SHANK3:** Scaffolding protein at postsynaptic density.
    *   **Mutation:** Associated with **Autism Spectrum Disorder** and Phelan-McDermid syndrome.
    :::
*   **Electrical Synapse (Gap Junctions):**
    *   Direct connection via **Connexin** proteins forming channels.
    *   Bidirectional flow of ions and small molecules.
    *   Very fast (<1 ms).
    *   Allows for synchronization of neuronal activity.
    :::correlate
    **Connexin Mutations**
    *   Gap junctions are made of **Connexins**.
    *   Mutations cause ~30 diseases (e.g., Deafness, Skin disorders like Vohwinkel syndrome).
    :::

## Glial Cells: Support and Defense
*   **Astrocytes:**
    *   Structural support at synapses.
    *   Regulate extracellular ions (K<sup>+</sup>) and neurotransmitters (Glutamate uptake).
    *   **Blood-Brain Barrier (BBB):** End-feet contact blood vessels to regulate hemodynamics (neurovascular coupling).
    *   **Reactive Astrocytes:** Respond to injury (gliosis/glial scar). Marker: **GFAP** (Glial Fibrillary Acidic Protein).
    :::correlate
    **Alexander Disease**
    *   **Cause:** **GFAP** mutation (Astrocytes).
    *   **Pathology:** Leukodystrophy (white matter deficits), Rosenthal fibers.
    *   **Symptoms:** Macrocephaly, seizures, developmental delay.
    :::
*   **Microglia:**
    *   Immune cells of the CNS (phagocytes).
    *   Respond to injury/infection by changing shape (ramified &rarr; amoeboid) and phagocytosing debris/dying neurons.
    *   Release cytokines.
*   **Oligodendrocytes (CNS):**
    *   Produce **myelin** in the CNS.
    *   One oligo myelinate multiple axon segments.
    *   Marker: **Olig2**.
    :::correlate
    **Oligodendrocyte Pathologies**
    *   **Multiple Sclerosis:** Autoimmune demyelination in CNS.
    *   **Oligodendroglioma:** Tumor derived from oligodendrocytes ("Fried egg" appearance).
    *   **MOGAD:** Antibody against MOG (Myelin Oligodendrocyte Glycoprotein) &rarr; Inflammation/Demyelination.
    :::
*   **Schwann Cells (PNS):**

## Other Cells
*   **Ependymal Cells:** Line ventricles, produce CSF.
*   **Pericytes:** Contractile cells around capillaries, regulate blood flow.
`,
  questions: [
    {
      question: "A pathologist examines a brain specimen from a patient with a history of severe head trauma. They observe a dense network of cells staining positive for GFAP (Glial Fibrillary Acidic Protein) around the injury site. Which cell type is primarily responsible for this 'glial scar'?",
      options: [
        "Microglia",
        "Oligodendrocytes",
        "Astrocytes",
        "Schwann cells"
      ],
      answer: 2,
      explanation: "Astrocytes become reactive following injury (gliosis) and upregulate GFAP, forming a glial scar."
    },
    {
      question: "A child presents with intellectual disability, ataxia, and characteristic midbrain malformations ('molar tooth sign'). Genetic testing reveals a mutation in a gene required for the formation of the primary cilium in neurons. What is the most likely diagnosis?",
      options: [
        "Fragile X Syndrome",
        "Joubert Syndrome",
        "Alexander Disease",
        "Multiple Sclerosis"
      ],
      answer: 1,
      explanation: "Joubert syndrome is a ciliopathy caused by mutations in genes like ARL13B, affecting the neuronal primary cilium."
    },
    {
      question: "Which of the following best describes the function of the Node of Ranvier?",
      options: [
        "Synthesis of neurotransmitters",
        "Insulation of the axon to prevent ion leakage",
        "Regeneration of the action potential via high density of ion channels",
        "Phagocytosis of cellular debris"
      ],
      answer: 2,
      explanation: "Nodes of Ranvier are gaps in the myelin sheath where voltage-gated ion channels are clustered to regenerate the action potential (saltatory conduction)."
    },
    {
      question: "In contrast to chemical synapses, electrical synapses are characterized by:",
      options: [
        "Unidirectional information flow",
        "Significant synaptic delay (1-5 ms)",
        "Use of vesicles for transmission",
        "Bidirectional flow of ions through connexin channels"
      ],
      answer: 3,
      explanation: "Electrical synapses (gap junctions) allow direct, bidirectional, and very fast flow of ions and small molecules between cells."
    },
    {
      question: "A patient is diagnosed with an autoimmune disorder where antibodies attack Myelin Oligodendrocyte Glycoprotein (MOG). Which cell type is the primary target of this attack?",
      options: [
        "Schwann cells",
        "Oligodendrocytes",
        "Astrocytes",
        "Microglia"
      ],
      answer: 1,
      explanation: "MOG is a protein found on the surface of oligodendrocytes and their myelin sheaths in the CNS. MOGAD is a demyelinating disease."
    }
  ],
  glossary: [
    { term: "Dendritic Spine", definition: "Small protrusion on a dendrite that typically receives excitatory input; site of synaptic plasticity." },
    { term: "Node of Ranvier", definition: "Gap in the myelin sheath of a nerve, between adjacent Schwann cells or oligodendrocytes, where action potentials are regenerated." },
    { term: "Saltatory Conduction", definition: "Rapid transmission of a nerve impulse along an axon, resulting from the action potential jumping from one node of Ranvier to another." },
    { term: "Gliosis", definition: "Proliferation or hypertrophy of glial cells (usually astrocytes) in response to damage to the central nervous system." },
    { term: "Wallerian Degeneration", definition: "Degeneration of the distal portion of an axon and its myelin sheath following injury." }
  ],
  "mnemonics": [
    {
      "heading": "Card #1",
      "mnemonic": "γ-Aminobutyric acid (GABA) is a neurotransmitter derived from the amino acid glutamate",
      "meaning": "γ-Aminobutyric acid (GABA), glutamate"
    },
    {
      "heading": "Card #2",
      "mnemonic": "The basal nucleus of Meynert is responsible for the synthesis of acetylcholine",
      "meaning": "basal nucleus of Meynert, acetylcholine"
    },
    {
      "heading": "Card #3",
      "mnemonic": "What pathology is characterized by degeneration of the basal nucleus of Meynert?    Alzheimer disease",
      "meaning": "Alzheimer disease"
    },
    {
      "heading": "Card #4",
      "mnemonic": "GABA is the main inhibitory neurotransmitter of the CNS",
      "meaning": "GABA, inhibitory"
    },
    {
      "heading": "Card #5",
      "mnemonic": "Synthesis of GABA from glutamate requires vitamin B6 as a cofactor",
      "meaning": "vitamin B6"
    },
    {
      "heading": "Card #6",
      "mnemonic": "The nucleus accumbens is responsible for synthesis of the neurotransmitter GABA",
      "meaning": "nucleus accumbens, GABA"
    },
    {
      "heading": "Card #7",
      "mnemonic": "Anxiety::depression or anxiety is characterized by decreased GABA",
      "meaning": "Anxiety::depression or anxiety, decreased"
    },
    {
      "heading": "Card #8",
      "mnemonic": "Depression::depression or anxiety is characterized by decreased norepinephrine",
      "meaning": "Depression::depression or anxiety, decreased"
    },
    {
      "heading": "Card #9",
      "mnemonic": "Depression is characterized by decreased serotonin",
      "meaning": "decreased"
    },
    {
      "heading": "Card #10",
      "mnemonic": "Anxiety is characterized by decreased serotonin",
      "meaning": "decreased"
    },
    {
      "heading": "Card #11",
      "mnemonic": "What neurotransmitter is increased in anxiety?    Norepinephrine",
      "meaning": "Norepinephrine"
    },
    {
      "heading": "Card #12",
      "mnemonic": "What neurotransmitters are decreased in anxiety?    Serotonin and GABA",
      "meaning": "Serotonin, GABA"
    },
    {
      "heading": "Card #13",
      "mnemonic": "What neurotransmitter is increased in Huntington disease?    Dopamine",
      "meaning": "Dopamine"
    },
    {
      "heading": "Card #14",
      "mnemonic": "What neurotransmitters are decreased in Huntington disease?    Acetylcholine, GABA, and substance P",
      "meaning": "Acetylcholine, GABA"
    },
    {
      "heading": "Card #15",
      "mnemonic": "What neurotransmitter is increased in Parkinson disease?    Acetylcholine",
      "meaning": "Acetylcholine"
    }
  ]
};
