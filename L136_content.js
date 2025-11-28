export const L136_content = {
    id: "L136",
    title: "L136 - Overview of Gross Divisions of the CNS",
    module: "Neuroscience/Neuroanatomy",
    tags: ["CNS", "PNS", "Brain", "Cerebrum", "Brainstem", "Cerebellum", "Spinal Cord", "Lobes", "Gray Matter", "White Matter"],
    createdAt: "2024-11-28",
    summary: `
# Overview of Gross Divisions of the CNS

## Central vs. Peripheral Nervous System

### CNS (Central Nervous System)
*   **Components:** Brain + Spinal Cord
*   **Brain subdivisions:**
    *   **Forebrain:** Cerebrum (cerebral hemispheres) + Diencephalon (thalamus, hypothalamus)
    *   **Cerebellum:** Underneath the cerebrum, behind the brainstem
    *   **Brainstem:** Midbrain, Pons, Medulla (connects forebrain to spinal cord)

### PNS (Peripheral Nervous System)
*   **Components:** Nerves (cranial & spinal) + Ganglia
*   **Nerves:** Bundles of axons connecting CNS to periphery
*   **Ganglia:** Clusters of cell bodies outside the CNS
    *   Sensory ganglia (e.g., Dorsal Root Ganglia - DRG)
    *   Autonomic ganglia (sympathetic, parasympathetic)
    *   **Exception:** **Basal Ganglia** (also called Basal Nuclei) - Located in CNS, not PNS

## Gray vs. White Matter

| Feature | Gray Matter | White Matter |
| :--- | :--- | :--- |
| **Color** | Grayish/darker (natural) | Whitish/lighter (natural) |
| **Components** | Cell bodies + Dendrites | Myelinated axons |
| **CNS Terminology** | Cortex, Nucleus/Nuclei, (Basal Ganglia*) | Tract, Fasciculus, Lemniscus, Peduncle, Capsule |

*   **Gray Matter in CNS:**
    *   **Cortex:** Outer layer of cerebrum and cerebellum
    *   **Nucleus/Nuclei:** Deep clusters of neurons
*   **White Matter in CNS:**
    *   **Tract, Fasciculus, Lemniscus:** Bundles of axons
    *   **Peduncle:** "Stalk" connecting structures
    *   **Capsule:** White matter surrounding nuclei

## Major Brain Structures

### Cerebrum (Cerebral Hemispheres)
*   **Features:** Bilaterally symmetric, two hemispheres separated by **longitudinal fissure**
*   **Surface:** Folded with **gyri** (ridges) and **sulci** (grooves)
*   **Major Landmarks:**
    *   **Central Sulcus:** Separates frontal and parietal lobes
    *   **Lateral Sulcus (Sylvian Fissure):** Separates temporal lobe
    *   **Transverse Fissure:** Separates cerebrum from cerebellum

### Lobes of the Cerebrum

#### Frontal Lobe
*   **Location:** Anterior to central sulcus
*   **Functions:**
    *   **Planning & Executive Function**
    *   **Primary Motor Cortex (Precentral Gyrus):** Controls voluntary movement
    *   **Prefrontal Cortex:** Personality, inhibition, impulse control

:::correlate
**Phineas Gage Case (Prefrontal Cortex Damage)**
*   Railroad worker who survived a metal bar penetrating through his prefrontal cortex.
*   Survived >10 years but experienced profound personality changes.
*   Lost impulse control and inhibition, becoming "a different person" according to family.
*   Helped define the role of the prefrontal cortex in personality and executive function.
:::

#### Parietal Lobe
*   **Location:** Posterior to central sulcus
*   **Functions:**
    *   **Primary Somatosensory Cortex (Postcentral Gyrus):** Receives sensory information from entire body
    *   **Sensory Association Area:** Spatial awareness

#### Occipital Lobe
*   **Location:** Posterior (back) of brain
*   **Function:**
    *   **Primary Visual Cortex:** Located along calcarine sulcus

#### Temporal Lobe
*   **Location:** Inferior to lateral sulcus
*   **Functions:**
    *   **Primary Auditory Cortex:** Hearing
    *   **Memory, Language comprehension**

### Diencephalon
*   **Location:** Deep within forebrain, between cerebral hemispheres
*   **Components:**
    *   **Thalamus:** Relay station for sensory information
    *   **Hypothalamus:** Regulates homeostasis, autonomic functions, hormones

### Brainstem
*   **Location:** Connects forebrain to spinal cord, anterior to cerebellum
*   **Three Parts:**
    *   **Midbrain:** Superior, has two bumps (superior/inferior colliculi)
    *   **Pons:** Middle, large "belly"
    *   **Medulla:** Inferior, skinny, connects to spinal cord
*   **Functions:** Cranial nerves, vital functions (breathing, heart rate), relay pathways

### Cerebellum
*   **Location:** Posterior to brainstem, inferior to cerebrum
*   **Features:** Two cerebellar hemispheres
*   **Functions:** Coordination, balance, motor learning

### Spinal Cord
*   **Location:** Extends from medulla through vertebral column
*   **Function:** Relay between brain and body, spinal reflexes

## Key Gyri

| Gyrus | Location | Function |
| :--- | :--- | :--- |
| **Precentral Gyrus** | Frontal lobe, anterior to central sulcus | Primary Motor Cortex (voluntary movement) |
| **Postcentral Gyrus** | Parietal lobe, posterior to central sulcus | Primary Somatosensory Cortex (touch, pain, temperature) |
`,
    questions: [
        {
            question: "A patient presents with difficulty initiating voluntary movements of the right hand. Which brain structure is most likely affected?",
            options: [
                "Right precentral gyrus",
                "Left precentral gyrus",
                "Right postcentral gyrus",
                "Left postcentral gyrus",
                "Right prefrontal cortex"
            ],
            answer: 1,
            explanation: "The primary motor cortex is located in the precentral gyrus. Motor pathways cross (decussate), so the left precentral gyrus controls the right side of the body. Damage to the left precentral gyrus would impair voluntary movement of the right hand."
        },
        {
            question: "Which of the following structures is considered part of the CNS, despite its name suggesting it should be in the PNS?",
            options: [
                "Dorsal root ganglia",
                "Basal ganglia",
                "Sympathetic ganglia",
                "Spinal nerves",
                "Cranial nerves"
            ],
            answer: 1,
            explanation: "Basal ganglia (also called basal nuclei) are located within the CNS (deep in the cerebral hemispheres), making them an exception to the rule that ganglia are PNS structures. Dorsal root ganglia and sympathetic ganglia are part of the PNS."
        },
        {
            question: "A stroke affecting the area posterior to the central sulcus would most likely result in:",
            options: [
                "Loss of voluntary movement",
                "Loss of sensation (touch, pain, temperature)",
                "Personality changes",
                "Visual deficits",
                "Hearing loss"
            ],
            answer: 1,
            explanation: "The postcentral gyrus (posterior to the central sulcus) contains the primary somatosensory cortex, which receives sensory information from the body. Damage here would result in loss of sensation. Loss of voluntary movement would result from precentral gyrus (motor cortex) damage."
        },
        {
            question: "Which component of the brainstem is characterized by a large 'belly' appearance and serves as a relay station between the cerebrum and cerebellum?",
            options: [
                "Midbrain",
                "Pons",
                "Medulla",
                "Thalamus",
                "Diencephalon"
            ],
            answer: 1,
            explanation: "The pons is the middle portion of the brainstem and has a characteristic large, bulging 'belly' appearance. It serves as a relay station and contains nuclei important for connecting the cerebrum and cerebellum."
        },
        {
            question: "White matter in the CNS differs from gray matter primarily because white matter:",
            options: [
                "Contains cell bodies and dendrites",
                "Contains myelinated axons",
                "Is located only in the cortex",
                "Contains unmyelinated neurons",
                "Is found only in the peripheral nervous system"
            ],
            answer: 1,
            explanation: "White matter consists of myelinated axons (the myelin's high fat content gives it a white appearance), while gray matter contains cell bodies and dendrites. White matter forms tracts that connect different brain regions."
        }
    ],
    glossary: [
        { term: "Central Nervous System (CNS)", definition: "The brain and spinal cord." },
        { term: "Peripheral Nervous System (PNS)", definition: "All nervous tissue outside the CNS, including nerves and ganglia." },
        { term: "Gray Matter", definition: "Neural tissue containing cell bodies and dendrites; appears darker than white matter." },
        { term: "White Matter", definition: "Neural tissue containing myelinated axons; appears lighter due to high fat content of myelin." },
        { term: "Gyrus (plural: Gyri)", definition: "Ridge or elevated fold on the surface of the cerebrum." },
        { term: "Sulcus (plural: Sulci)", definition: "Groove or depression on the surface of the cerebrum." },
        { term: "Central Sulcus", definition: "Major landmark separating the frontal lobe from the parietal lobe." },
        { term: "Precentral Gyrus", definition: "Location of the primary motor cortex in the frontal lobe." },
        { term: "Postcentral Gyrus", definition: "Location of the primary somatosensory cortex in the parietal lobe." },
        { term: "Brainstem", definition: "Midbrain, pons, and medulla; connects the forebrain to the spinal cord." },
        { term: "Diencephalon", definition: "Deep brain structure including the thalamus and hypothalamus." },
        { term: "Basal Ganglia", definition: "Group of nuclei deep in the cerebral hemispheres; part of CNS despite 'ganglia' terminology." }
    ],
    mnemonics: [
        {
            "heading": "Motor vs. Sensory Cortex",
            "mnemonic": "**PRE**central = **PRE**pare to move; **POST**central = **POST**-touch sensation",
            "meaning": "Precentral gyrus = Primary Motor Cortex (controls movement). Postcentral gyrus = Primary Somatosensory Cortex (receives sensation)."
        },
        {
            "heading": "Brainstem Parts (Superior to Inferior)",
            "mnemonic": "**M**y **P**rofessor **M**akes = **M**idbrain, **P**ons, **M**edulla",
            "meaning": "The three parts of the brainstem from top to bottom."
        }
    ]
};
