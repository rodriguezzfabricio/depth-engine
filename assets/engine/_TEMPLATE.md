<!--
PROMPT-QUALITY GATE (GOVERNANCE §2) — clear all 8 before marking this file "done":
[ ] a. DoD quantified      — the stage's deliverable enumerated, each with a binary acceptance check (NOT "feels complete")
[ ] b. Scope manifest      — list what the stage covers BEFORE drafting; reconcile each item (done/shallow/skipped + evidence) AFTER
[ ] c. Levers, deliberate  — name decomposition / effort-calibration / verifying-subagents / N-attempts used + WHY (no ritual MAX)
[ ] d. Countermeasures     — context-rot→reset+constraints-at-top · satisficing→manifest+audit · sycophancy→evidence+cross-family · hallucination→artifact-pin
[ ] e. Cross-family audit  — codex rates every item (incl. N/A claims) done/shallow/skipped w/ evidence; verify-in-file; load-bearing disagreement → operator gate (self-grading ≠ audit)
[ ] f. Alignment trace     — UP (stage → engine spine → mission/DoD) AND DOWN (is the stage coherent? flag contradictions, don't silently fix)
[ ] g. Persisted           — the stage is recorded in the build LEDGER + reachable from STATE/REGISTER (re-read every context)
[ ] h. Honest ceiling      — no unverifiable "perfect/complete"; a green audit = complete PROCESS, not a proven-right OUTCOME
-->

# <ID> — <Name>
<!-- Section instruction: Replace <ID> with the stage/law identifier (e.g. E3, L-A) and <Name> with the full human-readable name. Acceptance check: ID and Name match the entry in engine/README.md. -->

### Binding · Load WHEN:
<!-- Section instruction: State which agent role loads this file and the trigger condition (e.g. "INITIATOR loads this at the start of stage E3, after E2 is signed off"). The condition should be specific enough that an agent can decide to load or skip without ambiguity. Acceptance check: a load condition is stated and refers to a concrete trigger, not a vague instruction. -->

## Purpose (one paragraph)
<!-- Section instruction: One plain-language paragraph — what this stage/law does and why it exists in the engine. Avoid jargon that is not defined within this file. Acceptance check: a reader who has not seen the engine spec can state the stage's goal after reading this paragraph alone. -->

## Kalshi referent (what proven mechanism this generalizes)
<!-- Section instruction: Name the Kalshi mechanism this protocol generalizes (e.g. "D3 — adversarial kill-loop from the Kalshi question-research system"). Explain in one sentence what that mechanism did in its original context and why the pattern is domain-general. "Kalshi" appears in this section only as a named referent, never as a domain requirement that constrains the protocol. Acceptance check: the referent is traceable to a specific Kalshi artifact or design decision (not a generic attribution). -->

## Protocol (the steps the INITIATOR executes)
<!-- Section instruction: Numbered steps the INITIATOR follows, in execution order. Prefer "use X when Y" and "prefer X over Y" framing over unconditional mandates. Each step should be self-contained enough to act on without recalling earlier context. Where a sub-procedure is complex, name it and describe it inline or reference a specific law file. Acceptance check: an independent agent following only this section, plus the referenced laws, would produce the expected output artifact(s) listed in Inputs / Outputs. -->

## Inputs / Outputs
<!-- Section instruction: List every artifact this stage/law consumes (inputs) and produces (outputs). For each, state: artifact name, format (e.g. Markdown section, JSON file, context block), and location (file path or context anchor). Acceptance check: every artifact named in the Protocol section appears here, and every artifact listed here is referenced in the Protocol. -->

## Acceptance checks (binary)
<!-- Section instruction: Binary pass/fail checks that confirm this stage/law is complete. Each check must be answerable YES or NO — no "feels complete" language. Include at minimum: (1) a YES/NO check for every output artifact's existence and basic integrity, (2) confirmation that all 8 §4 gate lines are checked off, and (3) confirmation that a cross-family audit result is recorded in the build LEDGER. Acceptance check: every output artifact in Inputs / Outputs has a corresponding check here. -->

## Honest ceiling
<!-- Section instruction: State explicitly what this stage/law does NOT guarantee. A well-run process is not a proven-correct outcome. Name the main failure mode that can still occur even after full compliance (e.g. "cross-family review has correlated error and can miss the same blind spot as the INITIATOR"). Acceptance check: at least one specific, named failure mode is stated — not a generic disclaimer. -->

## Cross-references
<!-- Section instruction: List (a) related stage/law files by ID with a one-line note on the dependency (e.g. "E2 — gold-standard exemplars from this stage anchor question generation"), (b) the GOVERNANCE.md section(s) that bind this file, and (c) any external protocol document this stage depends on (e.g. PROMPT_ENGINEERING.md §4). Acceptance check: every stage/law referenced in the Protocol section appears here, and the GOVERNANCE.md binding is stated. -->
