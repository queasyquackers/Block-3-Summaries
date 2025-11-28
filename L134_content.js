export const L134_content = {
    id: "L134",
    title: "L134 - Epidemiology I",
    module: "Epidemiology/Public Health",
    tags: ["Epidemiology", "Incidence", "Prevalence", "Screening", "Sensitivity", "Specificity", "PPV", "NPV", "Bias", "Prevention"],
    createdAt: "2024-11-28",
    summary: `
# Epidemiology I

## Basic Epidemiological Measures
*   **Epidemiology:** Study of patterns, causes, and effects of health and disease in populations.
*   **Count:** Simplest measure. Number of cases (e.g., "2 people have Ebola"). Significant for rare diseases, less meaningful for common ones (e.g., allergies).
*   **Rate:** Ratio with time in the denominator. Elements: Disease frequency, Unit size of population, Time period.

## Incidence vs. Prevalence
*   **Incidence Rate:** Number of **NEW** cases during a specified time in a population **at risk**.
    *   **Measure of Risk:** Tells you the probability of getting the disease.
    *   **Denominator:** Must exclude those who already have the disease or are not at risk (e.g., exclude women who had a hysterectomy for uterine cancer rates).
    *   **Person-Years:** Used when follow-up time varies between individuals.
*   **Prevalence Rate:** Number of **EXISTING** cases (new + old) at a specific time divided by the **total population**.
    *   **Measure of Burden:** Indicates the extent of the health problem.
    *   **Relationship:** **Prevalence = Incidence &times; Duration**.
    *   **Factors Affecting Prevalence:**
        *   **Increase:** New cases (Incidence), longer duration (improved survival without cure).
        *   **Decrease:** Cure, Death (short duration).
        *   *Note:* Improved treatment that prevents death but doesn't cure will **increase** prevalence.

## Disease Occurrence Patterns
*   **Endemic:** Habitual presence of a disease within a given geographic area (expected rate).
*   **Epidemic:** Occurrence of disease in a community or region clearly in excess of normal expectancy.
*   **Pandemic:** An epidemic that spreads worldwide (multiple countries/continents).

## Types of Rates
*   **Crude Rate:** Simple division (Total cases / Total population). Does not account for demographics.
*   **Specific Rate:** Stratified by a specific characteristic (e.g., Age-specific rate, Sex-specific rate).
*   **Adjusted Rate:** Mathematically transformed to remove the effect of differences in population composition (e.g., Age-adjusted rate) to allow comparison between populations with different demographics.

## Disease Prevention
*   **Primary Prevention:** Preventing the **initial development** of disease (e.g., **Vaccination**).
*   **Secondary Prevention:** **Early detection** of existing disease to reduce severity/complications (e.g., **Screening** mammogram).
*   **Tertiary Prevention:** Reducing the **impact** of disease; treatment/rehabilitation (e.g., Chemotherapy, PT).

## Screening
*   **Definition:** Identification of unrecognized disease by administering a test. Classifies people as likely or unlikely to have disease.
*   **Reliability (Precision):** Consistency of results on repeated trials. (Can be reliable but wrong).
*   **Validity (Accuracy):** Ability of the test to measure what it is supposed to measure (True Positive/Negative).

### Screening Metrics (The 2x2 Table)

| Test Result | Disease Present | Disease Absent |
| :--- | :---: | :---: |
| **Test Positive** | True Positive (TP) | False Positive (FP) |
| **Test Negative** | False Negative (FN) | True Negative (TN) |

*   **Sensitivity:** Ability to correctly identify those **WITH** the disease.
    *   Formula: **TP / (TP + FN)**
    *   "SNOUT": Highly **S**e**N**sitive test rules **OUT** disease (few false negatives). Used for screening.
*   **Specificity:** Ability to correctly identify those **WITHOUT** the disease.
    *   Formula: **TN / (TN + FP)**
    *   "SPIN": Highly **SP**ecific test rules **IN** disease (few false positives). Used for confirmation.
*   **Positive Predictive Value (PPV):** Probability that a person with a positive test **actually has** the disease.
    *   Formula: **TP / (TP + FP)**
    *   *Dependent on Prevalence:* Higher prevalence &rarr; Higher PPV.
*   **Negative Predictive Value (NPV):** Probability that a person with a negative test **actually does not** have the disease.
    *   Formula: **TN / (TN + FN)**
    *   *Dependent on Prevalence:* Lower prevalence &rarr; Higher NPV.

## Survival Analysis
*   **5-Year Survival Rate:** Percentage of patients alive 5 years after diagnosis (common in cancer).
*   **Kaplan-Meier Curve:** Graphical representation of survival over time.

### Screening Biases
*   **Lead Time Bias:** Early detection makes it look like survival is longer, but the patient just knew about the disease longer (death occurs at the same time).
*   **Length Bias:** Screening tends to detect slowly progressing (less aggressive) cases with a longer preclinical phase, making it look like screening improves survival compared to aggressive, rapidly fatal cases that present clinically.
`,
    questions: [
        {
            question: "A new treatment for a chronic disease prevents death but does not cure the disease. What will happen to the incidence and prevalence of this disease?",
            options: [
                "Incidence increases, Prevalence increases",
                "Incidence stays the same, Prevalence increases",
                "Incidence decreases, Prevalence stays the same",
                "Incidence stays the same, Prevalence decreases",
                "Both Incidence and Prevalence decrease"
            ],
            answer: 1,
            explanation: "Incidence (new cases) is unaffected by treatment of existing cases. However, since patients are living longer with the disease (increased duration) and not being cured, the pool of existing cases (Prevalence) increases. Prevalence = Incidence × Duration."
        },
        {
            question: "A screening test for a rare disease is used in a population. A patient tests positive and asks, 'What are the chances I actually have this disease?' Which value best answers this question?",
            options: [
                "Sensitivity",
                "Specificity",
                "Positive Predictive Value (PPV)",
                "Negative Predictive Value (NPV)",
                "Likelihood Ratio"
            ],
            answer: 2,
            explanation: "Positive Predictive Value (PPV) answers the question: 'Given a positive test result, what is the probability of having the disease?' Note that for rare diseases (low prevalence), PPV can be low even with high sensitivity/specificity."
        },
        {
            question: "Which of the following is an example of Secondary Prevention?",
            options: [
                "Administering the HPV vaccine to adolescents",
                "Physical therapy for a stroke patient",
                "Colonoscopy to detect polyps in a 50-year-old man",
                "Prescribing antibiotics for strep throat",
                "Educating a community about the dangers of smoking"
            ],
            answer: 2,
            explanation: "Secondary prevention involves early detection of disease or precursors (screening). Colonoscopy detects polyps (precursors) or early cancer. Vaccination is Primary (prevention of onset). PT and Antibiotics are Tertiary (treatment/rehabilitation)."
        },
        {
            question: "Two studies compare survival rates for a cancer. Study A uses a screening program, while Study B relies on clinical diagnosis. Study A shows longer survival times, but patients in both studies die at the same age. This discrepancy is best explained by:",
            options: [
                "Selection Bias",
                "Length Bias",
                "Lead Time Bias",
                "Confounding",
                "Observer Bias"
            ],
            answer: 2,
            explanation: "Lead Time Bias occurs when screening detects disease earlier than clinical presentation, increasing the apparent 'survival time' (time from diagnosis to death) without actually changing the time of death or course of the disease."
        },
        {
            question: "To calculate the incidence rate of ovarian cancer in a population, which group must be excluded from the denominator?",
            options: [
                "Women over age 65",
                "Women with a family history of ovarian cancer",
                "Women who have had a bilateral oophorectomy (removal of ovaries)",
                "Women currently taking oral contraceptives",
                "Women who have never been pregnant"
            ],
            answer: 2,
            explanation: "The denominator for incidence rate must only include the population **at risk**. Women who have had their ovaries removed (bilateral oophorectomy) are not at risk for ovarian cancer and must be excluded."
        }
    ],
    glossary: [
        { term: "Incidence Rate", definition: "The number of new cases of a disease that occur during a specified period of time in a population at risk for developing the disease." },
        { term: "Prevalence Rate", definition: "The number of affected persons present in the population at a specific time divided by the number of persons in the population at that time." },
        { term: "Endemic", definition: "The habitual presence of a disease within a given geographic area." },
        { term: "Epidemic", definition: "The occurrence in a community or region of a group of illnesses of similar nature, clearly in excess of normal expectancy." },
        { term: "Pandemic", definition: "An epidemic that spreads over several countries or continents, usually affecting a large number of people." },
        { term: "Sensitivity", definition: "The ability of a test to correctly identify those who have the disease (True Positives / (True Positives + False Negatives))." },
        { term: "Specificity", definition: "The ability of a test to correctly identify those who do not have the disease (True Negatives / (True Negatives + False Positives))." },
        { term: "Lead Time Bias", definition: "Bias where early detection by screening makes survival appear longer because diagnosis was made earlier, even if the time of death is unchanged." },
        { term: "Length Bias", definition: "Bias where screening is more likely to detect slowly progressing cases (longer preclinical phase) than rapidly progressive ones, overestimating the benefit of screening." }
    ],
    mnemonics: [
        {
            "heading": "Sensitivity vs Specificity",
            "mnemonic": "**SNOUT** and **SPIN**",
            "meaning": "**S**e**N**sitive tests rule **OUT** (High Sensitivity = Low FN). **SP**ecific tests rule **IN** (High Specificity = Low FP)."
        }
    ]
};
