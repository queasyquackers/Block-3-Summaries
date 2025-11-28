
const L113_DATA = {
    id: 'l113',
    title: 'L113 - Anatomy: Autonomics to Head and Neck',
    module: 'Anatomy',
    tags: 'Autonomics, Sympathetic, Parasympathetic, Cranial Nerves, Ganglia, Horner\'s Syndrome, Frey\'s Syndrome',
    createdAt: new Date('2024-11-26'),
    summary: `# Lecture #113: Anatomy: Autonomics to Head and Neck

**Lecturer:** S. Hoffmann, Ph.D.
**Session:** Lecture #113

-----

## Part 1: Sympathetic Innervation

### Pathway
1.  **Preganglionic Neurons:** Lateral horn of **T1-T2**. Ascend in Sympathetic Chain.
2.  **Ganglion:** Synapse in **Superior Cervical Ganglion** (C1-C4 level).
3.  **Postganglionic Neurons:** Follow carotid arteries.
    *   **Internal Carotid Nerve/Plexus:** To eye (Dilator pupillae, Superior tarsal muscle), forehead sweat glands, lacrimal gland (vasoconstriction).
    *   **External Carotid Plexus:** To face (Sweat glands, vascular smooth muscle).

### Functions
*   **Eye:** Dilation of pupil (Mydriasis), elevation of eyelid (Superior tarsal muscle).
*   **Skin:** Sweating (Sudomotor), Vasoconstriction (Pallor).
*   **Salivary Glands:** Thick, viscous saliva.

:::correlate
**Horner's Syndrome**
*   **Pathology:** Loss of sympathetic innervation to the head.
*   **Triad:** **Ptosis** (droopy eyelid), **Miosis** (constricted pupil), **Anhidrosis** (lack of sweating).
*   **Other:** Flushing (loss of vasoconstriction) on affected side.
*   **Causes:** Pancoast tumor (lung apex), neck trauma, dissection.
:::

## Part 2: Parasympathetic Innervation

### The 4 Parasympathetic Ganglia of the Head

#### 1. Ciliary Ganglion
*   **Preganglionic:** **Oculomotor Nerve (CN III)**.
*   **Postganglionic:** **Short Ciliary Nerves**.
*   **Target:** **Sphincter Pupillae** (Constriction), **Ciliary Muscle** (Accommodation).
*   *Function:* Miosis (constriction), Near vision (lens rounding).

#### 2. Pterygopalatine Ganglion
*   **Preganglionic:** **Facial Nerve (CN VII)** via **Greater Petrosal Nerve**.
*   **Postganglionic:** Branches of **V2 (Maxillary)**.
*   **Target:** **Lacrimal Gland**, Nasal/Palatine Mucosa.
*   *Function:* Tearing (Lacrimation), Mucus secretion.

#### 3. Submandibular Ganglion
*   **Preganglionic:** **Facial Nerve (CN VII)** via **Chorda Tympani** $\\rightarrow$ Lingual Nerve.
*   **Postganglionic:** Direct branches or via Lingual Nerve.
*   **Target:** **Submandibular** and **Sublingual Glands**.
*   *Function:* Salivation (watery).

#### 4. Otic Ganglion
*   **Preganglionic:** **Glossopharyngeal Nerve (CN IX)** via **Lesser Petrosal Nerve**.
*   **Postganglionic:** **Auriculotemporal Nerve** (branch of V3).
*   **Target:** **Parotid Gland**.
*   *Function:* Salivation (watery).

### Vagus Nerve (CN X)
Provides parasympathetics to the neck (Pharynx, Larynx, Thyroid) via Superior and Recurrent Laryngeal nerves.

:::correlate
**CN III Palsy**
*   **Pathology:** Damage to Oculomotor nerve.
*   **Symptoms:** **Ptosis** (severe, Levator palpebrae), **Mydriasis** (dilated pupil, unopposed sympathetics), **"Down and Out"** eye position.
*   **Contrast:** Horner's has constricted pupil; CN III palsy has dilated pupil.
:::

:::correlate
**Frey's Syndrome (Gustatory Sweating)**
*   **Pathology:** Aberrant regeneration of parasympathetic fibers (Auriculotemporal n.) after parotid surgery/trauma.
*   **Mechanism:** Fibers innervate sweat glands instead of the parotid.
*   **Symptom:** Sweating/Redness on cheek when eating.
:::
`,
    questions: [
        {
            id: 'l113-q1',
            question: 'A patient presents with ptosis, miosis, and anhidrosis on the right side of the face. Which of the following structures is most likely damaged?',
            options: [
                'Oculomotor Nerve (CN III)',
                'Facial Nerve (CN VII)',
                'Superior Cervical Ganglion',
                'Ciliary Ganglion',
                'Trigeminal Nerve (CN V)'
            ],
            correctAnswer: 2,
            rationale: 'This triad (Ptosis, Miosis, Anhidrosis) describes **Horner\'s Syndrome**, which results from a lesion in the **sympathetic pathway**. The **Superior Cervical Ganglion** contains the postganglionic sympathetic cell bodies for the head and neck. Damage here would cause these symptoms. CN III damage causes ptosis but with a *dilated* pupil (mydriasis).'
        },
        {
            id: 'l113-q2',
            question: 'Which ganglion houses the postganglionic parasympathetic cell bodies that innervate the parotid gland?',
            options: [
                'Ciliary Ganglion',
                'Pterygopalatine Ganglion',
                'Submandibular Ganglion',
                'Otic Ganglion',
                'Geniculate Ganglion'
            ],
            correctAnswer: 3,
            rationale: 'The **Otic Ganglion** receives preganglionic fibers from the **Glossopharyngeal Nerve (CN IX)** via the Lesser Petrosal Nerve. Postganglionic fibers travel with the **Auriculotemporal Nerve** (V3) to innervate the **Parotid Gland**.'
        },
        {
            id: 'l113-q3',
            question: 'Following a parotidectomy, a patient complains of sweating on their cheek while eating. This phenomenon (Frey\'s Syndrome) involves aberrant regeneration of fibers from which nerve?',
            options: [
                'Facial Nerve (CN VII)',
                'Auriculotemporal Nerve (V3)',
                'Great Auricular Nerve',
                'Lingual Nerve (V3)',
                'Buccal Nerve (V3)'
            ],
            correctAnswer: 1,
            rationale: '**Frey\'s Syndrome** (Gustatory Sweating) occurs when regenerating parasympathetic fibers from the **Auriculotemporal Nerve** (carrying secretomotor fibers from the Otic ganglion/CN IX) aberrantly innervate sympathetic sweat glands in the skin overlying the parotid bed.'
        },
        {
            id: 'l113-q4',
            question: 'Which nerve carries the preganglionic parasympathetic fibers to the Pterygopalatine Ganglion?',
            options: [
                'Deep Petrosal Nerve',
                'Lesser Petrosal Nerve',
                'Greater Petrosal Nerve',
                'Chorda Tympani',
                'Auriculotemporal Nerve'
            ],
            correctAnswer: 2,
            rationale: 'The **Greater Petrosal Nerve** (branch of **CN VII**) carries preganglionic parasympathetic fibers to the **Pterygopalatine Ganglion**. The Deep Petrosal nerve carries postganglionic *sympathetics*. The Lesser Petrosal is for the Otic ganglion (CN IX).'
        },
        {
            id: 'l113-q5',
            question: 'Accommodation of the lens for near vision is mediated by which autonomic ganglion?',
            options: [
                'Superior Cervical Ganglion',
                'Ciliary Ganglion',
                'Pterygopalatine Ganglion',
                'Otic Ganglion',
                'Trigeminal Ganglion'
            ],
            correctAnswer: 1,
            rationale: 'Accommodation involves contraction of the ciliary muscle, which is innervated by postganglionic parasympathetic fibers from the **Ciliary Ganglion** (via short ciliary nerves). The preganglionic fibers come from CN III.'
        }
    ],
    glossary: [
        {
            term: "Horner's Syndrome",
            definition: "A condition caused by damage to the sympathetic pathway to the head, characterized by ptosis, miosis, and anhidrosis."
        },
        {
            term: "Miosis",
            definition: "Constriction of the pupil."
        },
        {
            term: "Mydriasis",
            definition: "Dilation of the pupil."
        },
        {
            term: "Anhidrosis",
            definition: "Inability to sweat."
        },
        {
            term: "Ptosis",
            definition: "Drooping of the upper eyelid."
        },
        {
            term: "Frey's Syndrome",
            definition: "Gustatory sweating caused by aberrant regeneration of parasympathetic fibers to sweat glands after parotid surgery."
        },
        {
            term: "Ciliary Ganglion",
            definition: "Parasympathetic ganglion located in the orbit, innervating the sphincter pupillae and ciliary muscle."
        },
        {
            term: "Pterygopalatine Ganglion",
            definition: "Parasympathetic ganglion located in the pterygopalatine fossa, innervating the lacrimal gland and nasal mucosa."
        },
        {
            term: "Otic Ganglion",
            definition: "Parasympathetic ganglion located in the infratemporal fossa, innervating the parotid gland."
        },
        {
            term: "Superior Cervical Ganglion",
            definition: "The uppermost ganglion of the sympathetic chain, providing sympathetic innervation to the head and neck."
        }
    ]
};

if (typeof window !== 'undefined' && window.LECTURES_DATA) {
    window.LECTURES_DATA.push(L113_DATA);
} else if (typeof module !== 'undefined' && module.exports) {
    module.exports = L113_DATA;
}
