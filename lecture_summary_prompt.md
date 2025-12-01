
# Lecture Summary Generation Prompt

## Goal
Generate a comprehensive, high-yield summary of the provided lecture content, integrating insights from both the slides and the transcript analysis.

## Inputs
1.  **Lecture Slides (PDF):** The primary source of visual and structured information.
2.  **Transcript Analysis (`L[#]_Summary_Analysis.md`):** A generated report containing:
    *   **High Yield Transcript Points:** Concepts emphasized by the lecturer ("must know", "important").
    *   **Clinical Correlates:** Conditions mentioned in the transcript (even if not on slides).
    *   **High Yield Slides:** Slides identified as critical based on keyword scoring.

## Output Format

### 1. Lecture Metadata
*   **Format:**
    ```markdown
    # Lecture #[Number]: [Title]
    
    **Lecturer:** [Name]
    **Session:** Lecture #[Number]
    ```

### 2. Comprehensive Summary
*   **Instructions:**
    *   Synthesize content from slides and the transcript analysis.
    *   **Transcript Integration:**
        *   Prioritize concepts listed in the **High Yield Transcript Points** section of the analysis file.
        *   If the analysis identifies a **Clinical Correlate** not present on the slides, YOU MUST INCLUDE IT.
    *   **Clinical Correlates:**
        *   **CRITICAL:** Any and all clinical summaries mentioned in the lecture (slides OR transcript) MUST be included.
        *   Use the "Red Block" syntax:
        ```markdown
        :::correlate
        **[Name of Condition]**
        *   **Mechanism:** [Concise explanation]
        *   **Presentation:** [Key symptoms/signs]
        *   **Treatment:** [Management/Relevance]
        :::
        ```
    *   **Tables:** Use Markdown tables to organize complex data.

### 3. Review Questions (Board-Style)
*   **Instructions:**
    *   Create 5 First-Order, Medical School level MCQs.
    *   **Format:**
        *   Question Stem (incorporate clinical scenarios).
        *   Options A-E.
        *   **Hidden Answer:** Use `<details>` tags.
    *   **Template:**
    ```markdown
    **1. [Question Stem]**

    A. [Option A]
    B. [Option B]
    C. [Option C]
    D. [Option D]
    E. [Option E]

    <details>
    <summary><strong>Click to Reveal Answer</strong></summary>

    **Answer: [Correct Option Letter] ([Option Text])**

    **Rationale**:
    [Explanation]
    </details>
    ```

### 4. Glossary
*   **Instructions:**
    *   Define new or key terms.
    *   **JSON Format:**
# Lecture Summary Generation Prompt

## Goal
Generate a comprehensive, high-yield summary of the provided lecture content, integrating insights from both the slides and the transcript analysis.

## Inputs
1.  **Lecture Slides (PDF):** The primary source of visual and structured information.
2.  **Transcript Analysis (`L[#]_Summary_Analysis.md`):** A generated report containing:
    *   **High Yield Transcript Points:** Concepts emphasized by the lecturer ("must know", "important").
    *   **Clinical Correlates:** Conditions mentioned in the transcript (even if not on slides).
    *   **High Yield Slides:** Slides identified as critical based on keyword scoring.

## Output Format

### 1. Lecture Metadata
*   **Format:**
    ```markdown
    # Lecture #[Number]: [Title]
    
    **Lecturer:** [Name]
    **Session:** Lecture #[Number]
    ```

### 2. Comprehensive Summary
*   **Instructions:**
    *   Synthesize content from slides and the transcript analysis.
    *   **Transcript Integration:**
        *   Prioritize concepts listed in the **High Yield Transcript Points** section of the analysis file.
        *   If the analysis identifies a **Clinical Correlate** not present on the slides, YOU MUST INCLUDE IT.
    *   **Clinical Correlates:**
        *   **CRITICAL:** Any and all clinical summaries mentioned in the lecture (slides OR transcript) MUST be included.
        *   Use the "Red Block" syntax:
        ```markdown
        :::correlate
        **[Name of Condition]**
        *   **Mechanism:** [Concise explanation]
        *   **Presentation:** [Key symptoms/signs]
        *   **Treatment:** [Management/Relevance]
        :::
        ```
    *   **Tables:** Use Markdown tables to organize complex data.

### 3. Review Questions (Board-Style)
*   **Instructions:**
    *   Create 5 First-Order, Medical School level MCQs.
    *   **Format:**
        *   Question Stem (incorporate clinical scenarios).
        *   Options A-E.
        *   **Hidden Answer:** Use `<details>` tags.
    *   **Template:**
    ```markdown
    **1. [Question Stem]**

    A. [Option A]
    B. [Option B]
    C. [Option C]
    D. [Option D]
    E. [Option E]

    <details>
    <summary><strong>Click to Reveal Answer</strong></summary>

    **Answer: [Correct Option Letter] ([Option Text])**

    **Rationale**:
    [Explanation]
    </details>
    ```

### 4. Glossary
*   **Instructions:**
    *   Define new or key terms.
    *   **JSON Format:**
    ```json
    [
        { "term": "Term 1", "definition": "Definition." }
    ]
    ```

### 5. Anking Resource Recommendations
*   **Task:** Identify the best third-party resource for this lecture based on Anking tag mappings.
*   **Process:**
    1.  Run: `python match_lectures_to_resources.py` (this will analyze the lecture and match it to Anking resources).
    2.  The script outputs a mapping in `lecture_resource_mappings.json`.
    3.  Run: `python update_lectures_with_anking.py` to inject the recommendations into `lectures_data.js`.
*   **Resources Considered:** Boards & Beyond, First Aid, Sketchy (Micro/Path/Pharm), Pathoma, Physeo, Pixorize, Bootcamp.
*   **Output:** The recommendation will appear automatically in the "Anking" tab of the lecture interface.

### 6. High Yield Render Instructions
*   **Task:** Identify "High Yield" slide numbers.
*   **Sources:**
    *   Use the **High Yield Slides** list from the `L[#]_Summary_Analysis.md` file.
    *   Also include slides where the lecturer explicitly says "High yield" or "Remember this" (from Transcript Analysis).
*   **Output:** Comma-separated list (e.g., `3, 5, 12-15`).
