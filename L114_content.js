
const L114_DATA = {
    id: 'l114',
    title: 'L114 - DPR: History and Physical Exam of the Gastroenterology I',
    module: 'DPR',
    tags: 'GI Exam, Abdominal Exam, Constipation, History Taking, Physical Exam Maneuvers, Osteopathic Correlates',
    createdAt: new Date('2024-11-26'),
    summary: `# Lecture #114: DPR: History and Physical Exam of the Gastroenterology I

**Lecturer:** S. Rivera-Martinez, D.O.
**Session:** Lecture #114

-----

## Part 1: History Taking (GI Complaint)

### Case: Constipation
*   **Definition:** < 3 bowel movements/week (Physician definition). Patients may define it as straining, hard stools, or incomplete evacuation.
*   **HPI Key Points:**
    *   **Onset:** Acute vs. Chronic. In elderly, new onset constipation $\\rightarrow$ Rule out **Colon Cancer**.
    *   **Associated Symptoms (Red Flags):** Weight loss (>10 lbs), Blood in stool (Hematochezia/Melena), Fever, Nausea/Vomiting, Family History of Colon Cancer.
    *   **Medications:** Opioids, Calcium Channel Blockers, Iron supplements cause constipation.
    *   **Social:** Diet (Fiber/Fluid intake), Activity level (Sedentary lifestyle increases risk).

## Part 2: Physical Exam of the Abdomen

### **CRITICAL ORDER OF EXAM**
1.  **Inspection**
2.  **Auscultation** (Must be before percussion/palpation to avoid altering bowel sounds)
3.  **Percussion**
4.  **Palpation**

### 1. Inspection
*   **Contour:** Flat, Scaphoid, Protuberant, Distended.
*   **Skin:**
    *   **Striae:** Pink/Purple (Cushing's), Silver (Old stretch marks).
    :::correlate
    **Signs of Portal Hypertension**
    *   **Caput Medusae:** Dilated veins radiating from umbilicus.
    :::
    :::correlate
    **Signs of Retroperitoneal/Intraperitoneal Bleed**
    *   **Cullen's Sign:** Periumbilical bruising (Hemoperitoneum/Pancreatitis).
    *   **Grey Turner's Sign:** Flank bruising (Retroperitoneal bleed/Pancreatitis).
    :::

### 2. Auscultation
*   **Bowel Sounds:** Listen with **Diaphragm** in all 4 quadrants.
    *   *Normal:* 5-34 clicks/gurgles per minute.
    *   *Hypoactive:* Ileus, Peritonitis, Opioids.
    *   *Hyperactive:* Diarrhea, Early obstruction, Gastroenteritis.
    *   *Borborygmi:* Prolonged gurgles (stomach growling).
*   **Bruits:** Listen with **Bell** over Aorta, Renal, Iliac, and Femoral arteries. (Renal artery stenosis $\\rightarrow$ Secondary HTN).

### 3. Percussion
*   **Sounds:** **Tympany** (predominates due to gas) vs. **Dullness** (organs, masses, fluid/ascites).
*   **Liver Span:** Measure at **Right Mid-Clavicular Line (MCL)**. Normal: **6-12 cm**.
*   **Spleen:** Percuss Traube's space (Left Anterior Axillary Line). Should remain tympanitic on inspiration. Dullness = Splenomegaly.
*   **CVA Tenderness:** Percuss Costovertebral Angle (posteriorly) for Pyelonephritis.

### 4. Palpation
*   **Technique:** Light (tenderness, guarding) then Deep (masses, organs). **Examine painful area LAST.**
*   **Liver:** Hooking technique or Bimanual. Palpate on inspiration.
:::correlate
**Abdominal Aortic Aneurysm (AAA)**
*   **Screening:** Palpate upper abdomen, slightly left of midline.
*   **Normal:** Width < 3 cm.
*   **Pathology:** Width > 3 cm suggests AAA.
:::

## Part 3: Osteopathic Considerations

### Autonomics
*   **Sympathetics:**
    *   **Right Colon (Cecum to Proximal Transverse):** **T10-T11** (Superior Mesenteric Ganglion).
    *   **Left Colon (Distal Transverse to Rectum):** **T12-L2** (Inferior Mesenteric Ganglion).
*   **Parasympathetics:**
    *   **Right Colon:** **Vagus Nerve (CN X)**.
    *   **Left Colon:** **Pelvic Splanchnic Nerves (S2-S4)**.

### Chapman's Points
*   **Colon:** Anterior IT Band (Lateral thigh).
`,
    questions: [
        {
            id: 'l114-q1',
            question: 'A 65-year-old male presents for a routine checkup. On abdominal examination, you palpate a pulsatile mass in the epigastrium slightly to the left of the midline. The mass is estimated to be 5 cm wide. What is the most likely diagnosis?',
            options: [
                'Renal Artery Stenosis',
                'Abdominal Aortic Aneurysm (AAA)',
                'Splenomegaly',
                'Hepatomegaly',
                'Gastric Tumor'
            ],
            correctAnswer: 1,
            rationale: 'A pulsatile abdominal mass > 3 cm in width is highly suggestive of an **Abdominal Aortic Aneurysm (AAA)**. Normal aortic width is < 3 cm.'
        },
        {
            id: 'l114-q2',
            question: 'Which of the following is the correct sequence for the abdominal physical examination?',
            options: [
                'Inspection, Palpation, Percussion, Auscultation',
                'Inspection, Percussion, Palpation, Auscultation',
                'Inspection, Auscultation, Percussion, Palpation',
                'Auscultation, Inspection, Percussion, Palpation',
                'Palpation, Inspection, Auscultation, Percussion'
            ],
            correctAnswer: 2,
            rationale: 'The correct order is **Inspection, Auscultation, Percussion, Palpation**. Auscultation is performed *before* percussion and palpation because handling the bowel can alter bowel sounds.'
        },
        {
            id: 'l114-q3',
            question: 'During an abdominal exam, you note ecchymosis around the umbilicus. This finding is known as:',
            options: [
                'Grey Turner\'s Sign',
                'Cullen\'s Sign',
                'Murphy\'s Sign',
                'McBurney\'s Sign',
                'Rovsing\'s Sign'
            ],
            correctAnswer: 1,
            rationale: '**Cullen\'s Sign** is periumbilical ecchymosis, indicative of hemoperitoneum (e.g., ruptured ectopic pregnancy, hemorrhagic pancreatitis). **Grey Turner\'s Sign** is flank ecchymosis.'
        },
        {
            id: 'l114-q4',
            question: 'A patient presents with constipation. Osteopathic examination reveals tissue texture changes at T12-L2. This finding corresponds to increased sympathetic tone to which segment of the GI tract?',
            options: [
                'Stomach',
                'Small Intestine',
                'Right Colon (Ascending)',
                'Left Colon (Descending/Sigmoid)',
                'Esophagus'
            ],
            correctAnswer: 3,
            rationale: 'The sympathetic innervation to the **Left Colon** (distal transverse, descending, sigmoid) arises from **T12-L2** (via the Inferior Mesenteric Ganglion). The Right Colon is T10-T11.'
        },
        {
            id: 'l114-q5',
            question: 'You are percussing the liver span in the mid-clavicular line. What is the normal range for liver span in an adult?',
            options: [
                '2-4 cm',
                '4-8 cm',
                '6-12 cm',
                '12-15 cm',
                '15-20 cm'
            ],
            correctAnswer: 2,
            rationale: 'The normal liver span measured at the **Right Mid-Clavicular Line** is **6-12 cm**.'
        }
    ],
    glossary: [
        {
            term: "Cullen's Sign",
            definition: "Ecchymosis (bruising) around the umbilicus, indicative of hemoperitoneum or pancreatitis."
        },
        {
            term: "Grey Turner's Sign",
            definition: "Ecchymosis on the flanks, indicative of retroperitoneal bleeding or pancreatitis."
        },
        {
            term: "Caput Medusae",
            definition: "Dilated veins radiating from the umbilicus, a sign of portal hypertension."
        },
        {
            term: "Borborygmi",
            definition: "Prolonged gurgling bowel sounds indicating hyperperistalsis (stomach growling)."
        },
        {
            term: "Traube's Space",
            definition: "An area in the left anterior axillary line where the spleen is percussed; dullness here suggests splenomegaly."
        },
        {
            term: "Costovertebral Angle (CVA) Tenderness",
            definition: "Tenderness on percussion of the area between the 12th rib and spine, suggestive of pyelonephritis (kidney infection)."
        }
    ]
};

if (typeof window !== 'undefined' && window.LECTURES_DATA) {
    window.LECTURES_DATA.push(L114_DATA);
} else if (typeof module !== 'undefined' && module.exports) {
    module.exports = L114_DATA;
}
