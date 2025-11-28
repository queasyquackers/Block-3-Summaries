export const L135_content = {
    id: "L135",
    title: "L135 - Epidemiology II",
    module: "Epidemiology/Public Health",
    tags: ["Epidemiology", "Study Design", "Case Control", "Cohort", "RCT", "Odds Ratio", "Relative Risk", "Confounding", "Bias"],
    createdAt: "2024-11-28",
    summary: `
# Epidemiology II

## Study Designs Overview
*   Each study design has **benefits and limitations**.
*   **Measures vary** depending on the design.
*   Selection depends on: Disease rarity, Exposure rarity, Timeframe, Resources.

## Cross-Sectional Study
*   **Design:** One-time snapshot at a single time point.
*   **Purpose:** Assess **prevalence** of variables, diseases, and risk factors.
*   **Limitations:** 
    *   No element of time → Cannot calculate **risk** or **incidence**.
    *   Cannot infer causality (temporal relationship unclear).
*   **Example:** Survey a general population asking about cold status and hat usage, then look for associations.

## Case-Control Study
*   **Design:** Select groups based on **disease status** (Cases vs. Controls).
    *   **Cases:** Have the disease.
    *   **Controls:** Free from disease.
*   **Process:** Look backward (retrospective) to identify **past exposures**.
*   **Measure:** **Odds Ratio (OR)**
    *   Formula: **OR = (Odds of exposure in diseased) / (Odds of exposure in healthy)** = **(a/c) / (b/d)** = **ad/bc**
    *   Interpretation: OR > 1 = increased risk; OR = 1 = no association; OR < 1 = protective.

### Selecting Controls
*   **General Population Controls:** Random digit dialing, residence lists (now difficult due to privacy/lack of landlines).
*   **Hospital/Clinic Controls:** Easier access, similar health-seeking behavior, but may not represent general population.
*   **Matched Controls:** Friends, spouses, siblings (requires special statistical methods).

### Case-Control Study: Strengths
*   **Good for rare diseases** (efficient to find cases first).
*   **Good for diseases with long latency** (can study what happened in the past).
*   **Can evaluate multiple risk factors** for one disease.

### Case-Control Study: Weaknesses
*   **Poor for rare exposures** (most people will say "no").
*   **Retrospective → vulnerable to recall bias** (people may not accurately remember exposures).
*   **Hard to infer temporal relationship** (exposure may have occurred after disease).

## Cohort Study
*   **Design:** Select groups based on **exposure status** (Exposed vs. Unexposed).
*   **Hallmark:** **Everyone is disease-free at baseline**.
*   **Process:** Follow forward in time to see who develops disease.
*   **Types:**
    *   **Prospective:** Follow participants in real-time.
    *   **Retrospective:** Use existing medical records (imaginary "time travel" back to baseline).
*   **Measure:** **Relative Risk (RR)**
    *   Formula: **RR = (Incidence in exposed) / (Incidence in unexposed)**
    *   Interpretation: RR > 1 = increased risk; RR = 1 = no association; RR < 1 = protective.
*   **Additional Measures:**
    *   **Attributable Risk (AR):** (Incidence in exposed) - (Incidence in unexposed) (subtraction, not division).

### Cohort Study: Strengths
*   **Good for rare exposures** (can find and follow exposed individuals).
*   **Retrospective cohort good for diseases with long latency** (read through records efficiently).
*   **Can evaluate multiple outcomes** from one exposure.
*   **Clear temporal relationship** (especially prospective).
*   **Less vulnerable to bias** (especially prospective).

### Cohort Study: Weaknesses
*   **Poor for rare diseases** (may not observe enough cases).
*   **Prospective studies:** Expensive, time-consuming, not practical for long latency.
*   **Retrospective studies:** Poor exposure information (records not designed for research).

## Randomized Controlled Trial (RCT)
*   **Gold Standard** for establishing causality.
*   **Design:** **Randomize** subjects to exposure (treatment) or placebo groups.
*   **Key Features:**
    *   **Placebo:** Makes groups as comparable as possible.
    *   **Blinding:** 
        *   **Single-blind:** Subjects don't know their group.
        *   **Double-blind:** Neither subjects nor investigators know.
    *   **Purpose:** Minimize bias from self-selection and expectation.
*   **Measure:** **Relative Risk (RR)** (same as cohort).
*   **Required for:** New drug approval, recommending new procedures.

## Statistical Significance
*   **P-value:** p < 0.05 generally considered significant.
*   **95% Confidence Interval (CI):**
    *   For ratios (OR, RR): **Null value = 1** (not zero).
    *   If CI **includes 1** → Not statistically significant.
    *   If CI **excludes 1** → Statistically significant.

## Confounding
*   **Definition:** An alternate explanation for an observed association between exposure and disease.
*   **Example:** Hat wearers get fewer colds, but they also wear scarves. The scarf (not the hat) might be protective → Scarf is a **confounder**.
*   **Detection:** Stratify by suspected confounder (e.g., gender, age).
*   **Characteristic:** After stratification, the measure (OR/RR) is **similar in all strata** but different from the crude (composite) measure.
*   **Solution:** Stratification or regression analysis.

## Effect Modification (Interaction)
*   **Definition:** An exposure behaves **differently in different groups**.
*   **Example:** Smoking increases heart attack risk **much more in males** than females.
*   **Detection:** Stratify by the modifier (e.g., gender).
*   **Characteristic:** After stratification, the measure (OR/RR) is **different across strata**.
*   **Solution:** Report stratified results separately (not combine).

### Confounding vs. Effect Modification

| Characteristic | Confounding | Effect Modification |
| :--- | :--- | :--- |
| **Definition** | Alternate explanation | Exposure acts differently in subgroups |
| **Stratified Results** | Similar across strata | Different across strata |
| **Action** | Control for it (stratify/adjust) | Report separately by strata |

## Bias
*   **Definition:** Systematic error in study design/conduct leading to incorrect estimates.
*   **Cannot be fixed** with statistics after data collection.
*   **Occurs in all study types** (experimental, cohort, case-control).

### Types of Bias
*   **Selection Bias:** Procedures used to select subjects lead to a particular result.
    *   Example: Studying physical activity and Parkinson's by recruiting from an exercise clinic (all are exercisers).
*   **Recall Bias:** People with disease remember/report exposures differently.
    *   May over-report (searching for explanation) or under-report (guilt).
    *   Solutions: Use sick controls, standardize questionnaires, mask subjects.
`,
    questions: [
        {
            question: "A researcher wants to study the association between a rare occupational exposure (working with asbestos) and lung cancer. Which study design is most appropriate?",
            options: [
                "Cross-sectional study",
                "Case-control study",
                "Prospective cohort study",
                "Randomized controlled trial",
                "Ecological study"
            ],
            answer: 2,
            explanation: "A cohort study is best for rare exposures. By recruiting workers exposed to asbestos (rare exposure) and following them over time, you can efficiently assess lung cancer incidence. A case-control study would be better for rare diseases, not rare exposures."
        },
        {
            question: "In a case-control study of smoking and myocardial infarction, the odds ratio is calculated to be 2.5 with a 95% CI of 1.8-3.5. What is the correct interpretation?",
            options: [
                "Smoking decreases the risk of MI",
                "There is no association between smoking and MI",
                "Patients with MI are 2.5 times as likely to have been smokers compared to controls",
                "The result is not statistically significant",
                "2.5% of MI patients were smokers"
            ],
            answer: 2,
            explanation: "An OR of 2.5 means MI patients are 2.5 times as likely to have been smokers compared to healthy controls. The 95% CI excludes 1, indicating statistical significance. OR > 1 indicates increased odds of exposure (smoking) in the diseased group."
        },
        {
            question: "A study finds that coffee consumption is associated with reduced risk of Parkinson's disease. However, when stratified by gender, the relative risk is 0.4 in males but 0.9 in females. This is an example of:",
            options: [
                "Confounding by gender",
                "Selection bias",
                "Effect modification by gender",
                "Recall bias",
                "Lead time bias"
            ],
            answer: 2,
            explanation: "Effect modification (interaction) occurs when an exposure behaves differently in different subgroups. Here, coffee's protective effect is much stronger in males (RR=0.4) than females (RR=0.9). If it were confounding, the RR would be similar in both strata after stratification."
        },
        {
            question: "Which of the following is a major advantage of a randomized controlled trial over an observational cohort study?",
            options: [
                "Less expensive to conduct",
                "Better for studying rare diseases",
                "Eliminates selection bias through randomization",
                "Easier to recruit participants",
                "Can study multiple exposures simultaneously"
            ],
            answer: 2,
            explanation: "RCTs use randomization to assign exposure, which minimizes selection bias and confounding by distributing known and unknown confounders equally between groups. RCTs are typically more expensive, not better for rare diseases, and study fewer exposures than cohort studies."
        },
        {
            question: "A researcher studying the association between diet and heart disease recruits all participants from a cardiology clinic. This study is most susceptible to:",
            options: [
                "Recall bias",
                "Selection bias",
                "Lead time bias",
                "Effect modification",
                "Confounding"
            ],
            answer: 1,
            explanation: "Selection bias occurs when the method of selecting subjects leads to a non-representative sample. Recruiting from a cardiology clinic means participants are likely to have cardiovascular issues or risk factors, making them unrepresentative of the general population regarding diet and heart disease."
        }
    ],
    glossary: [
        { term: "Case-Control Study", definition: "A study design that selects participants based on disease status (cases have the disease, controls do not) and looks backward to assess past exposures." },
        { term: "Cohort Study", definition: "A study design that selects participants based on exposure status (all are disease-free at baseline) and follows them forward in time to see who develops the disease." },
        { term: "Odds Ratio (OR)", definition: "A measure of association used in case-control studies, calculated as the odds of exposure in diseased individuals divided by the odds of exposure in healthy individuals." },
        { term: "Relative Risk (RR)", definition: "A measure of association used in cohort studies and RCTs, calculated as the incidence rate in the exposed group divided by the incidence rate in the unexposed group." },
        { term: "Confounding", definition: "An alternate explanation for an observed association, where a third variable is associated with both the exposure and the outcome, distorting the true relationship." },
        { term: "Effect Modification", definition: "A phenomenon where an exposure has different effects in different subgroups of the population (also called interaction)." },
        { term: "Selection Bias", definition: "Bias that results from the procedures used to select subjects, leading to a non-representative sample." },
        { term: "Recall Bias", definition: "Bias where individuals with disease remember or report past exposures differently than those without disease." },
        { term: "Attributable Risk", definition: "The difference in incidence rates between exposed and unexposed groups, representing the additional risk attributable to the exposure." }
    ],
    mnemonics: [
        {
            "heading": "Study Design Selection",
            "mnemonic": "**RARE Disease = CASE-control; RARE Exposure = COHORT**",
            "meaning": "Case-control studies are efficient for rare diseases (find cases first). Cohort studies are efficient for rare exposures (find exposed individuals first)."
        },
        {
            "heading": "Confounding vs Effect Modification",
            "mnemonic": "**Confounding = SAME after stratification; Effect modification = DIFFERENT after stratification**",
            "meaning": "If stratified results are similar, it's confounding. If stratified results differ, it's effect modification."
        }
    ]
};
