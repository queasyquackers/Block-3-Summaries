
const L114_DATA = {
    id: 'l114',
    title: 'L114 - DPR: History and Physical Exam of the Gastroenterology I',
    module: 'DPR',
    tags: 'GI Exam, Abdominal Exam, Constipation, History Taking, Physical Exam Maneuvers, Osteopathic Correlates',
    createdAt: new Date('2024-11-26'),
    summary: `# Lecture #114: DPR: History and Physical Exam of the Gastroenterology I

**Lecturer:** S. Rivera-Martinez, D.O.
**Session:** Lecture #114

-----\n\n## Part 1: History Taking (GI Complaint)\n\n### Case: Constipation\n*   **Definition:** < 3 bowel movements/week (Physician definition). Patients may define it as straining, hard stools, or incomplete evacuation.\n*   **HPI Key Points:**\n    *   **Onset:** Acute vs. Chronic. In elderly, new onset constipation $\\rightarrow$ Rule out **Colon Cancer**.\n    *   **Associated Symptoms (Red Flags):** Weight loss (>10 lbs), Blood in stool (Hematochezia/Melena), Fever, Nausea/Vomiting, Family History of Colon Cancer.\n    *   **Medications:** Opioids, Calcium Channel Blockers, Iron supplements cause constipation.\n    *   **Social:** Diet (Fiber/Fluid intake), Activity level (Sedentary lifestyle increases risk).\n\n## Part 2: Physical Exam of the Abdomen\n\n### **CRITICAL ORDER OF EXAM**\n1.  **Inspection**\n2.  **Auscultation** (Must be before percussion/palpation to avoid altering bowel sounds)\n3.  **Percussion**\n4.  **Palpation**\n\n### 1. Inspection\n*   **Contour:** Flat, Scaphoid, Protuberant, Distended.\n*   **Skin:**\n    *   **Striae:** Pink/Purple (Cushing's), Silver (Old stretch marks).\n    *   **Dilated Veins:** *Caput Medusae* (Portal Hypertension).\n    *   **Ecchymosis:**\n        *   **Cullen's Sign:** Periumbilical bruising (Hemoperitoneum/Pancreatitis).\n        *   **Grey Turner's Sign:** Flank bruising (Retroperitoneal bleed/Pancreatitis).\n\n### 2. Auscultation\n*   **Bowel Sounds:** Listen with **Diaphragm** in all 4 quadrants.\n    *   *Normal:* 5-34 clicks/gurgles per minute.\n    *   *Hypoactive:* Ileus, Peritonitis, Opioids.\n    *   *Hyperactive:* Diarrhea, Early obstruction, Gastroenteritis.\n    *   *Borborygmi:* Prolonged gurgles (stomach growling).\n*   **Bruits:** Listen with **Bell** over Aorta, Renal, Iliac, and Femoral arteries. (Renal artery stenosis $\\rightarrow$ Secondary HTN).\n\n### 3. Percussion\n*   **Sounds:** **Tympany** (predominates due to gas) vs. **Dullness** (organs, masses, fluid/ascites).\n*   **Liver Span:** Measure at **Right Mid-Clavicular Line (MCL)**. Normal: **6-12 cm**.\n*   **Spleen:** Percuss Traube's space (Left Anterior Axillary Line). Should remain tympanitic on inspiration. Dullness = Splenomegaly.\n*   **CVA Tenderness:** Percuss Costovertebral Angle (posteriorly) for Pyelonephritis.\n\n### 4. Palpation\n*   **Technique:** Light (tenderness, guarding) then Deep (masses, organs). **Examine painful area LAST.**\n*   **Liver:** Hooking technique or Bimanual. Palpate on inspiration.\n*   **Aorta:** Palpate upper abdomen, slightly left of midline. Normal width **< 3 cm**. > 3 cm suggests **AAA** (Abdominal Aortic Aneurysm).\n\n## Part 3: Osteopathic Considerations\n\n### Autonomics\n*   **Sympathetics:**\n    *   **Right Colon (Cecum to Proximal Transverse):** **T10-T11** (Superior Mesenteric Ganglion).\n    *   **Left Colon (Distal Transverse to Rectum):** **T12-L2** (Inferior Mesenteric Ganglion).\n*   **Parasympathetics:**\n    *   **Right Colon:** **Vagus Nerve (CN X)**.\n    *   **Left Colon:** **Pelvic Splanchnic Nerves (S2-S4)**.\n\n### Chapman's Points\n*   **Colon:** Anterior IT Band (Lateral thigh).\n`,
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
