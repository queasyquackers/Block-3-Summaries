
            *   Use the "Red Block" syntax:
        ```markdown
        :::correlate
        **[Name of Condition]**
        *   [Concise point 1: Mechanism/Cause]
        *   [Concise point 2: Key Symptoms/Presentation]
        *   [Concise point 3: Treatment/Relevance]
        :::
        ```
    *   **Tables:** Use Markdown tables to organize complex data (e.g., muscle origins/insertions, nerve functions, drug classes).

### 3. Review Questions (Board-Style)
*   **Instructions:**
    *   Create 5 First-Order, Medical School level MCQs.
    *   **Format:**
        *   Question Stem (incorporate clinical scenarios).
        *   Options A-E (each on a new line).
        *   **Hidden Answer:** Use `<details>` tags to hide the answer and rationale.
    *   **Goal:** Ensure understanding of key concepts and session objectives.

    **Template:**
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
    [Detailed explanation of why the correct answer is right and why distractors are wrong, based ONLY on the lecture material.]
    </details>
    ```

### 4. Glossary
*   **Instructions:**
    *   Identify new or key terms defined in the lecture.
    *   Provide a concise definition for each.
    *   Format as a JSON array of objects, or a Markdown list if preferred (JSON is better for app integration).

    **JSON Format:**
    ```json
    [
        { "term": "Term 1", "definition": "Definition from lecture." },
        { "term": "Term 2", "definition": "Definition from lecture." }
    ]
    ```

### 5. High Yield Render Instructions
*   **Task:** Identify the slide numbers that are "High Yield".
*   **Criteria:**
    *   Concept repeated multiple times.
    *   Text is in **Red** or **Bold** on the slide.
    *   Lecturer explicitly says "This is high yield" or "Remember this".
*   **Output:** Provide a comma-separated list of slide numbers (e.g., `3, 5, 12-15, 20`). This will be used to generate the `L[#]_HighYield_Render.pdf`.

---

## Quality of Life (QoL) Checklist
- [ ] **Tables:** Did you use tables to improve organization?
- [ ] **Clinical Correlates:** Are they clearly marked in Red Blocks?
- [ ] **Narrative:** Is the summary a cohesive story, not just a list?
- [ ] **Completeness:** Did you cover ALL major and intermediate concepts?
- [ ] **No Hallucinations:** Did you stick strictly to the provided material?
