export const L137_content = {
    id: "L137",
    title: "L137 - Physiology: Neurons and Synapse",
    module: "Neuroscience/Neurophysiology",
    tags: ["Neuron", "Action Potential", "Resting Membrane Potential", "Ion Channels", "Synapse", "Voltage-Gated Channels", "Neurotransmitters"],
    createdAt: "2024-11-28",
    summary: `
# Physiology: Neurons and Synapse

## Resting Membrane Potential

*   **Definition:** The voltage across the neuronal membrane at rest (no stimulation)
*   **Typical Value:** ~**-65 mV** (hyperpolarized, negative inside relative to outside)
*   **Factors Determining RMP:**

### 1. Na<sup>+</sup>/K<sup>+</sup> ATPase Pump
*   **Function:** Actively pumps 3 Na<sup>+</sup> **out** and 2 K<sup>+</sup> **in**
*   **Effect:** Net loss of positive charge inside &rarr; Makes cell more negative
*   **Energy:** Requires ATP

### 2. Leak Channels
*   **K<sup>+</sup> Leak Channels:** Always open, allow K<sup>+</sup> to flow **out** (down concentration gradient)
*   **Na<sup>+</sup> Leak Channels:** Always open, allow Na<sup>+</sup> to flow **in**
*   **Key Point:** **40× more K<sup>+</sup> leak channels than Na<sup>+</sup> leak channels**
*   **Net Effect:** More K<sup>+</sup> leaves than Na<sup>+</sup> enters &rarr; Hyperpolarization

### 3. Ion Concentration Gradients

| Ion | Inside Cell | Outside Cell | Direction of Flow |
| :--- | :---: | :---: | :--- |
| **K<sup>+</sup>** | High (~100 mM) | Low (~5 mM) | Out |
| **Na<sup>+</sup>** | Low (~15 mM) | High (~145 mM) | In |
| **Cl<sup>-</sup>** | Low | High | In |
| **Ca<sup>2+</sup>** | Very Low | High | In |

*   **Nernst Equation:** Calculates equilibrium potential for a single ion
    *   E<sub>K</sub> ≈ **-80 mV**
    *   E<sub>Na</sub> ≈ **+60 mV**
*   **Goldman-Hodgkin-Katz (GHK) Equation:** Accounts for multiple ions and their permeabilities &rarr; RMP ≈ -65 mV

## Action Potential

*   **Definition:** Rapid, transient reversal of membrane potential
*   **All-or-None:** Once threshold is reached, AP fires completely
*   **Threshold:** ~**-55 mV**

### Phases of Action Potential

#### 1. Resting State
*   Membrane at -65 mV
*   Voltage-gated Na<sup>+</sup> and K<sup>+</sup> channels **closed**

#### 2. Depolarization (Rising Phase)
*   **Trigger:** Stimulus brings membrane to threshold (-55 mV)
*   **Voltage-Gated Na<sup>+</sup> Channels Open:** Na<sup>+</sup> rushes **in**
*   **Positive Feedback:** Depolarization &rarr; more Na<sup>+</sup> channels open &rarr; more depolarization
*   **Peak:** Membrane reaches ~**+40 mV**

#### 3. Repolarization (Falling Phase)
*   **Voltage-Gated Na<sup>+</sup> Channels Inactivate:** Na<sup>+</sup> influx stops
*   **Voltage-Gated K<sup>+</sup> Channels Open:** K<sup>+</sup> rushes **out**
*   **Result:** Membrane returns toward resting potential

#### 4. Hyperpolarization (Undershoot)
*   **K<sup>+</sup> channels slow to close:** More K<sup>+</sup> leaves than needed
*   **Membrane briefly more negative than RMP** (~-70 to -80 mV)
*   **Returns to -65 mV** as K<sup>+</sup> channels close

### Refractory Periods
*   **Absolute Refractory Period:** 
    *   Na<sup>+</sup> channels inactivated (cannot fire another AP)
    *   Ensures unidirectional propagation
*   **Relative Refractory Period:** 
    *   Na<sup>+</sup> channels recovering, K<sup>+</sup> channels still open
    *   Stronger stimulus needed to fire AP

## Ion Channels

### Voltage-Gated Channels
*   **Activation:** Open in response to membrane depolarization
*   **Types:**
    *   **Voltage-Gated Na<sup>+</sup> Channels:** Responsible for depolarization
        *   **States:** Closed (rest) &rarr; Open (activated) &rarr; Inactivated
    *   **Voltage-Gated K<sup>+</sup> Channels:** Responsible for repolarization
        *   Open more slowly than Na<sup>+</sup> channels

### Ligand-Gated Channels
*   **Activation:** Open when neurotransmitter binds
*   **Location:** Typically at synapses
*   **Examples:** Ionotropic receptors (e.g., nicotinic ACh receptors, NMDA receptors)

## Clinical Correlates

### Ion Channel Toxins

:::correlate
**Tetrodotoxin (TTX) - Voltage-Gated Na<sup>+</sup> Channel Blocker**
*   **Source:** Pufferfish (fugu)
*   **Mechanism:** Blocks voltage-gated Na<sup>+</sup> channels &rarr; prevents action potentials
*   **Effects:** 
    *   Small amounts: Tingling, numbness (sensory neuron block)
    *   Large amounts: Limb weakness, respiratory failure, cardiac arrest &rarr; death
:::

:::correlate
**Saxitoxin - Voltage-Gated Na<sup>+</sup> Channel Blocker**
*   **Source:** Shellfish (from microbes)
*   **Mechanism:** Similar to TTX - blocks Na<sup>+</sup> channels
*   **Effects:** Similar to TTX poisoning
:::

:::correlate
**Dendrotoxin - Voltage-Gated K<sup>+</sup> Channel Blocker**
*   **Source:** Green mamba snake venom
*   **Mechanism:** Blocks voltage-gated K<sup>+</sup> channels &rarr; prevents repolarization
*   **Effects:** Prolongs action potentials, disrupts neural function, can cause death
:::

### Therapeutic Applications

:::correlate
**Lidocaine - Local Anesthetic (Na<sup>+</sup> Channel Blocker)**
*   **Mechanism:** Blocks voltage-gated Na<sup>+</sup> channels in peripheral sensory neurons
*   **Uses:** Dental procedures, topical pain relief creams (4%), patches for back pain
*   **Effect:** Prevents pain signals from reaching CNS
:::

:::correlate
**Jourenvax (Suzetrigine) - Selective Na<sub>V</sub>1.8 Blocker**
*   **FDA Approved:** 2024
*   **Target:** Na<sub>V</sub>1.8 voltage-gated Na<sup>+</sup> channels (specific to dorsal root ganglion neurons)
*   **Advantage:** Blocks peripheral pain signals without affecting CNS (avoids sensory/motor deficits)
*   **Uses:** Post-surgical pain (abdominal surgery, bunion surgery)
*   **Significance:** Alternative to opiates for pain management
:::

### Genetic Pain Syndromes

:::correlate
**Na<sub>V</sub>1.8 Gain-of-Function Mutations**
*   **Inherited Primary Erythromelalgia (IEM):** Activating mutation &rarr; too many action potentials &rarr; abnormal pain signals
    *   **Symptoms:** Intermittent red, hot, painful extremities (especially lower)
*   **Familial Episodic Pain Syndrome:** Na<sub>V</sub>1.7 channel mutation
    *   **Symptoms:** Episodic intense pain
:::

## Action Potential Propagation

*   **Continuous Conduction:** Unmyelinated axons
    *   AP regenerated at each point along axon
    *   **Slow** (~1 m/s)
*   **Saltatory Conduction:** Myelinated axons
    *   AP "jumps" between Nodes of Ranvier
    *   **Fast** (~100 m/s)
`,
    questions: [
        {
            question: "A toxin that blocks voltage-gated K<sup>+</sup> channels is administered to a neuron. What effect would this have on action potentials?",
            options: [
                "Action potentials would fail to depolarize",
                "Action potentials would have prolonged repolarization",
                "Action potentials would have increased amplitude",
                "Action potentials would occur spontaneously without stimulation",
                "No effect on action potentials"
            ],
            answer: 1,
            explanation: "Voltage-gated K<sup>+</sup> channels are responsible for repolarization during an action potential. Blocking them would prevent or delay K<sup>+</sup> efflux, prolonging the repolarization phase and extending the duration of the action potential."
        },
        {
            question: "Why is the resting membrane potential of a neuron closer to the equilibrium potential for K<sup>+</sup> (-80 mV) than Na<sup>+</sup> (+60 mV)?",
            options: [
                "The Na<sup>+</sup>/K<sup>+</sup> ATPase pumps more Na<sup>+</sup> out than K<sup>+</sup> in",
                "There are 40 times more K<sup>+</sup> leak channels than Na<sup>+</sup> leak channels",
                "Na<sup>+</sup> concentration is higher outside the cell",
                "K<sup>+</sup> concentration is higher inside the cell",
                "Voltage-gated Na<sup>+</sup> channels are closed at rest"
            ],
            answer: 1,
            explanation: "The resting membrane potential is determined primarily by the relative permeabilities to different ions. Since there are 40× more K<sup>+</sup> leak channels open at rest compared to Na<sup>+</sup> leak channels, the membrane is much more permeable to K<sup>+</sup>, pulling the RMP closer to E<sub>K</sub> (-80 mV)."
        },
        {
            question: "A patient receives lidocaine injection before a dental procedure. What is the mechanism of pain relief?",
            options: [
                "Lidocaine activates inhibitory neurons in the CNS",
                "Lidocaine blocks voltage-gated Na<sup>+</sup> channels in peripheral sensory neurons",
                "Lidocaine blocks voltage-gated K<sup>+</sup> channels",
                "Lidocaine enhances GABA transmission",
                "Lidocaine blocks Ca<sup>2+</sup> channels at the synapse"
            ],
            answer: 1,
            explanation: "Lidocaine is a local anesthetic that blocks voltage-gated Na<sup>+</sup> channels in peripheral sensory neurons. This prevents action potential generation and propagation, blocking pain signals from reaching the CNS."
        },
        {
            question: "During the absolute refractory period of an action potential, why is it impossible to generate another action potential?",
            options: [
                "All K<sup>+</sup> channels are open",
                "Voltage-gated Na<sup>+</sup> channels are in the inactivated state",
                "The membrane is hyperpolarized beyond threshold",
                "The Na<sup>+</sup>/K<sup>+</sup> ATPase is not functioning",
                "Voltage-gated Ca<sup>2+</sup> channels are inactivated"
            ],
            answer: 1,
            explanation: "During the absolute refractory period, voltage-gated Na<sup>+</sup> channels are in the inactivated state and cannot be opened regardless of stimulus strength. They must first return to the closed (resting) state before another action potential can be generated."
        },
        {
            question: "Jourenvax (Suzetrigine) is a selective blocker of which ion channel subtype, making it useful for post-surgical pain without CNS side effects?",
            options: [
                "Na<sub>V</sub>1.7 channels found throughout the nervous system",
                "Na<sub>V</sub>1.8 channels specific to dorsal root ganglion neurons",
                "Ca<sub>V</sub>2.1 channels in presynaptic terminals",
                "K<sub>V</sub>1.1 channels in all neurons",
                "HCN channels in cardiac pacemaker cells"
            ],
            answer: 1,
            explanation: "Jourenvax specifically targets Na<sub>V</sub>1.8 voltage-gated sodium channels, which are expressed in dorsal root ganglion (DRG) neurons but not in CNS neurons. This selectivity allows it to block peripheral pain signals without causing sensory or motor deficits from CNS Na<sup>+</sup> channel blockade."
        }
    ],
    glossary: [
        { term: "Resting Membrane Potential (RMP)", definition: "The voltage across the neuronal membrane at rest, typically around -65 mV in CNS neurons." },
        { term: "Action Potential", definition: "A rapid, transient, all-or-none reversal of membrane potential that propagates along an axon." },
        { term: "Threshold", definition: "The membrane potential (~-55 mV) at which voltage-gated Na<sup>+</sup> channels open, triggering an action potential." },
        { term: "Depolarization", definition: "Movement of membrane potential toward less negative (or positive) values." },
        { term: "Repolarization", definition: "Return of membrane potential toward resting value after depolarization." },
        { term: "Hyperpolarization", definition: "Movement of membrane potential to more negative values than resting potential." },
        { term: "Absolute Refractory Period", definition: "Time period during which a second action potential cannot be generated, regardless of stimulus strength, due to Na<sup>+</sup> channel inactivation." },
        { term: "Relative Refractory Period", definition: "Time period after absolute refractory period during which a stronger-than-normal stimulus is required to generate an action potential." },
        { term: "Nernst Equation", definition: "Formula that calculates the equilibrium potential for a single ion based on its concentration gradient." },
        { term: "Saltatory Conduction", definition: "Rapid propagation of action potentials in myelinated axons by 'jumping' between Nodes of Ranvier." }
    ],
    mnemonics: [
        {
            "heading": "Na<sup>+</sup>/K<sup>+</sup> ATPase",
            "mnemonic": "**3 out, 2 in** (Sodium Kicks Na out)",
            "meaning": "The pump moves 3 Na<sup>+</sup> out and 2 K<sup>+</sup> in, creating a net loss of positive charge inside the cell."
        },
        {
            "heading": "Ion Flow Direction",
            "mnemonic": "**K Out, Na In** (KONI)",
            "meaning": "K<sup>+</sup> wants to leave the cell (high inside), Na<sup>+</sup> wants to enter (high outside)."
        }
    ]
};
