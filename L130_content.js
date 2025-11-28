export const L130_content = {
  id: "L130",
  title: "L130 - Pathology: Healing and Repair",
  module: "Pathology",
  tags: ["Pathology", "Healing", "Repair", "Regeneration", "Scar", "Collagen", "Granulation Tissue", "Wound Healing"],
  createdAt: "2024-11-26",
  summary: `
# Pathology: Healing and Repair

## Overview
*   **Healing:** Restoration of tissue architecture and function after injury.
*   **Regeneration:** Replacement of damaged cells by cells of the same type. Requires intact basement membrane and connective tissue scaffold.
*   **Repair (Scar Formation):** Replacement of damaged tissue with connective tissue (fibrosis/scar). Occurs when regeneration is not possible or damage is extensive.

## Cell Types (Proliferative Capacity)
*   **Labile Cells:** Continuously dividing.
    *   *Examples:* Skin, GI mucosa, Bone marrow.
*   **Stable Cells:** Quiescent (G0 phase) but can enter cell cycle if stimulated.
    *   *Examples:* Liver (hepatocytes), Kidney, Pancreas, Smooth muscle.
*   **Permanent Cells:** Terminally differentiated, non-dividing.
    *   *Examples:* Neurons, Cardiac muscle, Skeletal muscle. (Healing is always by scar).

## Growth Factors
*   **PDGF (Platelet-Derived Growth Factor):** Migration/proliferation of fibroblasts, smooth muscle, monocytes.
*   **VEGF (Vascular Endothelial Growth Factor):** **Angiogenesis** (new blood vessel formation), vascular permeability.
*   **FGF (Fibroblast Growth Factor):** Angiogenesis, wound contraction, re-epithelialization.
*   **TGF-beta (Transforming Growth Factor-beta):** **Potent fibrogenic agent**. Stimulates collagen synthesis, inhibits degradation, anti-inflammatory.

## Extracellular Matrix (ECM)
*   **Collagen:**
    *   **Type I:** Mature scar, bone, tendon (High tensile strength).
    *   **Type II:** Cartilage.
    *   **Type III:** **Immature** scar (Granulation tissue), reticular fibers, blood vessels. First collagen deposited in wounds.
    *   **Type IV:** Basement membrane.
*   **Components:** Glycoproteins (Fibronectin, Laminin) for adhesion; Proteoglycans for hydration.
*   **Matrix Metalloproteinases (MMPs):** Degrade collagen/ECM during remodeling. Inhibited by TIMPs (Tissue Inhibitors of Metalloproteinases).

:::correlate
**Scurvy (Vitamin C Deficiency)**
*   **Pathology:** Vitamin C is a cofactor for **Lysyl Hydroxylase**, essential for collagen cross-linking.
*   **Defect:** Defective collagen synthesis (especially Type I).
*   **Symptoms:** Poor wound healing, bleeding gums, easy bruising.
:::

## Phases of Cutaneous Wound Healing (Detailed Timeline)
1.  **Inflammation (0-3 days):**
    *   Clot formation (fibrin, platelets).
    *   Neutrophils arrive first, most prominent by **24 hours**.
    *   Macrophages predominate by **48-72 hours**.
2.  **Proliferation (3 days - weeks):** **Granulation Tissue** formation.
    *   **24-48 hours:** Epithelial cells migrate from wound edge along cut margins, deposit basement membrane.
    *   **By 5-7 days:** Fibroblasts and vascular endothelial cells proliferate to form granulation tissue (fills wound, neovascularization maximal).
        *   Granulation tissue = **new vessels + macrophages + fibroblasts**.
        *   Fibroblasts begin depositing **Type III collagen** (will eventually form scar).
    *   **Second week:** WBC infiltrate, edema, increased vascularity disappear.
    *   **TGF-beta** is most important fibrogenic agent: causes fibroblast migration/proliferation, increased collagen synthesis, decreased ECM degradation by MMPs.
3.  **Maturation (weeks - months):** Remodeling.
    *   Increased collagen accumulation, regression of vascular channels.
    *   Original granulation tissue scaffold converted to pale, avascular scar (fibroblasts, dense collagen, elastic tissue, ECM).
    *   **By end of 1st-2nd month:** Scar composed of acellular connective tissue without inflammation, covered by intact epithelium.
    *   Type III Collagen replaced by **Type I Collagen**.
    *   Tensile strength plateaus at **70-80% around 3 months** (never returns to full strength).

## Healing Patterns
*   **First Intention (Primary Union):** Clean, uninfected surgical incision. Minimal tissue loss, minimal scar.
*   **Second Intention (Secondary Union):** Large wound, extensive tissue loss.
    *   More inflammation, more granulation tissue.
    *   **Wound Contraction:** Mediated by **Myofibroblasts**.
    *   Large scar.

:::correlate
**Abnormal Scarring: Keloid vs. Hypertrophic Scar**
*   **Keloid:** Excessive collagen (Type I & III) that extends **beyond** the original wound boundaries. High recurrence rate; genetic predisposition.
*   **Hypertrophic Scar:** Excessive collagen that remains **confined** to the wound boundaries. Often improves with time.
:::

## Complications & Deterrents to Healing
*   **Infection:** Most common cause of delayed healing.
*   **Debris in wound:** Foreign objects, dirt, glass, rocks → must be debrided.
*   **Nutritional Deficiency:** Protein malnutrition.
*   **Obesity:** Impaired healing.
*   **Vomiting:** Increased abdominal pressure → risk of **Dehiscence** (rupture of wound).
*   **Contracture:** Excessive contraction (e.g., palms, soles, burns).
`,
  questions: [
    {
      question: "A 45-year-old male undergoes a partial hepatectomy (removal of 60% of the liver). Weeks later, the liver mass has largely been restored. This is an example of regeneration involving which cell type?",
      options: [
        "Labile cells",
        "Stable cells",
        "Permanent cells",
        "Stem cells only"
      ],
      answer: 1,
      explanation: "Hepatocytes are stable cells (quiescent) that can re-enter the cell cycle and proliferate in response to injury or tissue loss."
    },
    {
      question: "During the proliferative phase of wound healing, which tissue type is characterized by the presence of new capillaries (angiogenesis), fibroblasts, and loose connective tissue?",
      options: [
        "Granulation tissue",
        "Caseous necrosis",
        "Keloid",
        "Mature scar"
      ],
      answer: 0,
      explanation: "Granulation tissue is the hallmark of the proliferative phase, consisting of new blood vessels (angiogenesis), fibroblasts, and inflammatory cells in a loose matrix."
    },
    {
      question: "Which growth factor is considered the most potent fibrogenic agent, stimulating collagen synthesis and inhibiting its degradation?",
      options: [
        "VEGF",
        "PDGF",
        "TGF-beta",
        "EGF"
      ],
      answer: 2,
      explanation: "TGF-beta is the most important cytokine for the synthesis and deposition of connective tissue proteins (fibrosis)."
    },
    {
      question: "A patient presents with a raised, irregular scar on their earlobe following a piercing. The scar extends well beyond the original site of injury. What is the diagnosis?",
      options: [
        "Hypertrophic scar",
        "Keloid",
        "Granuloma",
        "Dehiscence"
      ],
      answer: 1,
      explanation: "Keloids are characterized by excessive scar tissue formation that grows beyond the boundaries of the original wound. Hypertrophic scars remain confined to the wound."
    },
    {
      question: "In the maturation phase of wound healing, the tensile strength of the wound increases primarily due to the replacement of Type III collagen with which collagen type?",
      options: [
        "Type I",
        "Type II",
        "Type IV",
        "Type V"
      ],
      answer: 0,
      explanation: "Type III collagen (immature) is replaced by Type I collagen (mature, high tensile strength) during the remodeling/maturation phase."
    }
  ],
  glossary: [
    { term: "Granulation Tissue", definition: "New tissue formed during wound healing, characterized by angiogenesis (new vessels) and fibroblast proliferation." },
    { term: "Angiogenesis", definition: "The formation of new blood vessels from pre-existing vessels, critical for healing and tumor growth." },
    { term: "Myofibroblast", definition: "A fibroblast with contractile properties (smooth muscle actin) responsible for wound contraction." },
    { term: "Keloid", definition: "Excessive scar tissue that extends beyond the boundaries of the original wound." },
    { term: "Dehiscence", definition: "The splitting or bursting open of a wound, often a surgical incision." }
  ],
  "mnemonics": [
    {
      "heading": "Card #1",
      "mnemonic": "Granulation tissue consists of type III collagen, capillaries, and myofibroblasts",
      "meaning": "III"
    },
    {
      "heading": "Card #2",
      "mnemonic": "What component of granulation tissue deposits type III collagen?    Fibroblasts",
      "meaning": "Fibroblasts"
    },
    {
      "heading": "Card #3",
      "mnemonic": "Cutaneous Injury Wound Healing Phase 2: Proliferation::inflammation, proliferation, maturation   •2 days to 3 weeks  •formation of Granulation tissue-     1- fibroblasts: to lay down collagen    2- angiogenesis : to supply the repair/regeneration process",
      "meaning": "Proliferation::inflammation, proliferation, maturation, Granulation"
    },
    {
      "heading": "Card #4",
      "mnemonic": "What component of granulation tissue mediates wound contraction?   Myofibroblasts",
      "meaning": "Myofibroblasts"
    },
    {
      "heading": "Card #5",
      "mnemonic": "TGF-beta::what cytokine is most important fibrogenic agent: causes fibroblast migration (chemotaxis) and proliferation, increased synthesis of collagen and fibronectin, anti-inflammatory, and decreased ECM degradation by MMPs",
      "meaning": "TGF-beta::what cytokine"
    },
    {
      "heading": "Card #6",
      "mnemonic": "Cutaneous Injury Wound Healing Phase 3: Maturation::inflammation, proliferation, maturation   •Type III collagen is replaced by Type I  •Acquires final tensile strength    •Remodeling: scar tissue becomes avascular and acellular  •Wound contraction- wound edges pull together to close the defect    –",
      "meaning": "Maturation::inflammation, proliferation, maturation, III, I, Remodeling, Myofibroblasts"
    },
    {
      "heading": "Card #7",
      "mnemonic": "What type of collagen is found in scars?   Type I",
      "meaning": "Type I"
    },
    {
      "heading": "Card #8",
      "mnemonic": "What component of granulation tissue provides nutrients?   Capillaries",
      "meaning": "Capillaries"
    },
    {
      "heading": "Card #9",
      "mnemonic": "\"Wound repair eventually results in scar formation, in which type III collagen is replaced with type I collagen (\"\"remodeling\"\")\"",
      "meaning": "III, I"
    },
    {
      "heading": "Card #10",
      "mnemonic": "Collagenase is a metalloproteinase enzyme that removes type III collagen",
      "meaning": "Collagenase"
    },
    {
      "heading": "Card #11",
      "mnemonic": "Collagenase requires zinc as a cofactor",
      "meaning": "zinc"
    },
    {
      "heading": "Card #12",
      "mnemonic": "PDGF stimulates fibroblast growth for collagen synthesis",
      "meaning": "PDGF, fibroblast"
    },
    {
      "heading": "Card #13",
      "mnemonic": "What is the primary role of fibroblast growth factor (FGF-2)?    Angiogenesis",
      "meaning": "Angiogenesis"
    },
    {
      "heading": "Card #14",
      "mnemonic": "Cutaneous healing by secondary intention results in scar formation",
      "meaning": "secondary"
    },
    {
      "heading": "Card #15",
      "mnemonic": "What vitamin deficiency is associated with delayed wound healing?    Vitamin C",
      "meaning": "Vitamin C"
    }
  ]
};
