export const L122_content = {
    id: "L122",
    title: "L122 - DPR: History and Physical Exam of the Gastroenterology II",
    module: "DPR",
    tags: ["DPR", "Gastroenterology", "Abdominal Pain", "Constipation", "Physical Exam"],
    createdAt: "2024-11-26",
    summary: `
# DPR: History and Physical Exam of the Gastroenterology II

## Abdominal Pain Assessment
*   **HPI Key Elements:**
    *   **Onset:** Sudden (Perforation, Rupture, Stone) vs. Gradual (Inflammation like Cholecystitis, Diverticulitis).
    *   **Palliation/Provocation:** Antacids relieve Peptic Ulcer; Movement worsens Peritonitis (patient lies still).
    *   **Quality:** Colicky (Obstruction, Stones), Tearing (Aneurysm), Dull ache (Appendicitis).
    *   **Radiation:** Right Scapula (Gallbladder), Left Shoulder (Spleen/Pancreas), Groin (Renal), Back (Pancreas/Aneurysm).
*   **Location & Pathology:**
    *   **RUQ:** Cholecystitis, Hepatitis, Perforated Duodenal Ulcer.
    *   **LUQ:** Gastritis, Splenic rupture/infarct.
    *   **RLQ:** Appendicitis, Cecal Diverticulitis, Ectopic Pregnancy, PID.
    *   **LLQ:** Sigmoid Diverticulitis, Ectopic Pregnancy.
    *   **Diffuse:** Pancreatitis, Peritonitis, Obstruction, Ischemia.

## Special Abdominal Examination Techniques
*   **Ascites Assessment:**
    *   **Shifting Dullness:** Percuss supine (tympany central, dull lateral) $\\rightarrow$ Lateral recumbent (dullness shifts to dependent side).
    *   **Fluid Wave:** Requires assistant. Tap flank, feel impulse on opposite side.
    *   **Fluid Wave:** Requires assistant. Tap flank, feel impulse on opposite side.
:::correlate
**Lloyd's Sign (CVA Tenderness)**
*   **Technique:** Percuss Costovertebral Angle (posteriorly).
*   **Positive:** Pain.
*   **Indicates:** **Pyelonephritis**, Nephrolithiasis, Perirenal Abscess.
:::
:::correlate
**Murphy's Sign (Acute Cholecystitis)**
*   **Technique:** Palpate RUQ under costal margin while patient inspires.
*   **Positive:** Sharp pain + **Inspiratory Arrest** (patient stops breathing in due to pain).
*   **Indicates:** inflamed gallbladder contacting the examining hand.
:::
:::correlate
**Appendicitis Signs**
*   **McBurney's Point:** Tenderness at 1/3 distance from ASIS to Umbilicus.
*   **Rovsing's Sign:** Palpation of LLQ causes pain in **RLQ** (Referred Rebound).
*   **Obturator Sign:** RLQ pain on internal rotation of flexed hip (Pelvic Appendix).
*   **Psoas Sign:** RLQ pain on extension of right hip (Retrocecal Appendix).
:::

## Evaluation of Constipation
*   **Definition:** < 3 bowel movements/week, straining, hard stools, incomplete evacuation.
*   **Etiologies:**
    *   **Primary:** Normal Transit (IBS-C), Slow Transit, Defecatory Disorders (Dyssynergia, Anismus).
    *   **Secondary:** Medications (Opioids, CCBs, Iron, Anticholinergics), Hypothyroidism, Diabetes, Hypercalcemia, Dehydration, Immobility, Colon Cancer.
*   **Red Flags (Alarm Symptoms):**
    *   New onset > 50 years old.
    *   Blood in stool (Hematochezia/Melena).
    *   Unintentional weight loss.
    *   Family history of Colon Cancer.
    *   Iron deficiency anemia.
*   **Physical Exam:**
    *   **Abdominal:** Distension, masses, bowel sounds.
    *   **Rectal:** Sphincter tone, masses, blood, fecal impaction.
    *   **Perineal:** Hemorrhoids, fissures, prolapse, anal wink (sacral reflex).
*   **Management:**
    *   Rule out secondary causes (TSH, Calcium, Colonoscopy if indicated).
    *   Lifestyle: Fiber, Fluid, Exercise.
    *   Laxatives if needed.
    *   Biofeedback for defecatory disorders.

## Clinical Case Summary
*   **Patient:** 62yo Female with chronic worsening constipation.
*   **History:** Hypothyroidism (on meds), straining, hard stools. No alarm symptoms.
*   **Exam:** Normal except OMM (L1 dysfunction).
*   **Plan:** Check TSH (ensure euthyroid), CBC/CMP, Colonoscopy (age/symptoms), Lifestyle modifications.
`,
    questions: [
        {
            question: "A patient presents with right upper quadrant pain that radiates to the right scapula. On physical exam, there is an inspiratory arrest upon deep palpation of the right upper quadrant. What is the most likely diagnosis?",
            options: [
                "Acute Pancreatitis",
                "Acute Cholecystitis",
                "Peptic Ulcer Disease",
                "Nephrolithiasis"
            ],
            answer: 1,
            explanation: "The presentation of RUQ pain radiating to the right scapula (Boas' sign) combined with a positive Murphy's sign (inspiratory arrest on RUQ palpation) is classic for Acute Cholecystitis."
        },
        {
            question: "Which physical exam maneuver involves palpating the left lower quadrant to elicit pain in the right lower quadrant?",
            options: [
                "Obturator Sign",
                "Psoas Sign",
                "Rovsing's Sign",
                "Murphy's Sign"
            ],
            answer: 2,
            explanation: "Rovsing's sign is referred rebound tenderness where palpation of the LLQ causes pain in the RLQ, suggestive of appendicitis."
        },
        {
            question: "A positive Psoas sign (pain on extension of the right hip) suggests that an inflamed appendix is located in which position?",
            options: [
                "Pelvic",
                "Retrocecal",
                "Pre-ileal",
                "Subhepatic"
            ],
            answer: 1,
            explanation: "A positive Psoas sign indicates irritation of the psoas muscle, which typically occurs when the appendix is in a retrocecal position."
        },
        {
            question: "Which of the following is considered an 'alarm symptom' or 'red flag' in a patient presenting with constipation?",
            options: [
                "Straining during defecation",
                "Sensation of incomplete evacuation",
                "Unintentional weight loss",
                "Hard, lumpy stools"
            ],
            answer: 2,
            explanation: "Unintentional weight loss is a red flag that may suggest malignancy (colon cancer) or other serious organic pathology. The other options are typical symptoms of functional constipation."
        },
        {
            question: "Lloyd's sign (CVA tenderness) is most useful for assessing pathology in which organ?",
            options: [
                "Gallbladder",
                "Spleen",
                "Kidney",
                "Liver"
            ],
            answer: 2,
            explanation: "Lloyd's sign or Costovertebral Angle (CVA) tenderness is elicited by percussion over the kidney area and suggests renal pathology such as pyelonephritis, stones, or abscess."
        }
    ],
    glossary: [
        { term: "Murphy's Sign", definition: "Inspiratory arrest caused by pain upon palpation of the right upper quadrant; indicates acute cholecystitis." },
        { term: "McBurney's Point", definition: "A point 1/3 of the distance from the anterior superior iliac spine (ASIS) to the umbilicus; tenderness here suggests appendicitis." },
        { term: "Rovsing's Sign", definition: "Pain in the RLQ elicited by palpation of the LLQ; suggests appendicitis." },
        { term: "Obturator Sign", definition: "RLQ pain on internal rotation of the flexed right hip; suggests a pelvic appendix." },
        { term: "Psoas Sign", definition: "RLQ pain on extension of the right hip; suggests a retrocecal appendix." },
        { term: "Lloyd's Sign", definition: "Tenderness on percussion of the costovertebral angle (CVA); suggests renal pathology." },
        { term: "Dyssynergia", definition: "Paradoxical contraction or failure to relax the pelvic floor muscles during defecation." },
        { term: "Hematochezia", definition: "Passage of fresh blood through the anus, usually in or with stools." }
    ]
};
