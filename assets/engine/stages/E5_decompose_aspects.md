<!--
PROMPT-QUALITY GATE (GOVERNANCE §2) — clear all 8 before marking this file "done":
[x] a. DoD quantified      — Acceptance checks enumerate four binary YES/NO checks, each tied to a named DoD item or output artifact.
[x] b. Scope manifest      — Four DoD items listed in task-12-report.md §manifest; reconciled with file:line evidence in §reconciliation before commit.
[x] c. Levers, deliberate  — Five-step build-mode Protocol (re-read+mode-select → derive candidates → padding gate → red-team taxonomy → finalize) isolates each sub-task independently; decision-mode variant handled as a separately-labeled Protocol branch, not interleaved. Effort-calibration lever: padding gate is per-candidate binary (YES/NO), preventing both over-inflation and silent omission without a count mandate. Verifying-subagents: N/A — E5 produces aspect_map.md, not a go/no-go verdict requiring cross-family overturn; L-A adversarial posture is applied structurally as the Step 4 red-team-the-taxonomy. No ritual MAX.
[x] d. Countermeasures     — Context-rot: intent_brief.md re-read from file at Step 1, not recalled from context. Satisficing: 4 binary acceptance checks + per-candidate padding gate at Step 3. Sycophancy: Step 4 red-team forces the engine to adversarially probe its own aspect-map at the category level before recording it — a flattering "map is complete" finding receives more scrutiny, not less (L-A asymmetry). Hallucination: aspect_map.md is the persisted artifact; "good coverage" is not accepted as self-report — the artifact and Ledger entry are the evidence.
[x] e. Cross-family audit  — codex (gpt, task-12-codex-audit.txt): DoD 1-3 done, 4 shallow; perfection-claim/count-floor/domain-specificity/refs all CLEAN (proactive teeth worked). Caught: decision-mode padding gate had INVERTED polarity (fixed — YES⇒padding⇒reject) + §5 referent over-credited as no-count-floor (fixed — §5 carried a "hundreds" floor; count-emergent comes from the dual-convergence correction). Recorded B-0017. ("persisted [x]" two-phase-commit artifact resolves at this commit; GOVERNANCE short-path deferred to Task 20.)
[x] f. Alignment trace     — UP: E5 → engine README stages table ("Decompose the goal into aspects") → GOVERNANCE.md §2 → engine mission (domain-agnostic ingestion/research). DOWN: two-mode structure keyed to E1 project-type is coherent with spec §E5 + §E8 dual-convergence and Theory §6 correction; count-emergent framing is coherent with Theory §6 convergence model; no contradictions found.
[x] g. Persisted           — Commit records this file; build LEDGER entry (task-12-report.md §manifest) links to it; reachable from REGISTER task entry.
[x] h. Honest ceiling      — The Honest ceiling section names the specific residual failure mode: an aspect nobody — operator, research, or red-team — thought of stays absent until E9's build-probe trips over it or, worse, until real use; E5 cannot enumerate an unknown unknown.
-->

# E5 — Decompose the goal into aspects

### Binding · Load WHEN:
INITIATOR loads this stage immediately after E1 is complete and `intent_brief.md` is confirmed produced (E1's Step 6 confirm gate explicitly cleared). Trigger: `intent_brief.md` exists at `work/<session-id>/intent_brief.md` with the project-type field set to `build` or `decision`. E5 is complete when (a) `aspect_map.md` (build-mode) or `decision_subquestions.md` (decision-mode) is written to `work/<session-id>/`, (b) the E5 Ledger entry is appended under `## E5 Aspect Decomposition — <goal name>` (build) or `## E5 Decision Decomposition — <decision name>` (decision), and (c) the Step 5 sign-off (build) or Step D4 sign-off (decision) is explicitly cleared by the operator or controller. Do not load before E1 is signed off. **E6 cannot run until E5 is signed off; E8 cannot evaluate build-convergence until E5 is signed off.**

## Purpose (one paragraph)
E5 is the build-mode convergence spine of the engine. Its job is to decompose the confirmed goal — as stated in `intent_brief.md` — into the set of aspects the goal must satisfy to be built well: each aspect names a distinct dimension of excellence where failure in that dimension means the goal is not built well. The resulting aspect-map is what E8 uses to judge convergence in build-mode: every aspect must be answered to build-depth before convergence is declared. Coverage is per-aspect and question-count is emergent — the engine generates questions until each aspect is fully answered, not until it reaches a number. The map is produced as the best current understanding, not a proved-complete enumeration: it is explicitly revisable when E9's build-probe or E7's adversarial kill-loop surfaces a missed aspect. A mandatory red-team step probes for missed categories of aspect before the map is finalized, reducing the residual gap between "current best map" and "complete map." For decision projects, E5 has a parallel variant: it decomposes the central decision into the sub-questions whose answers would definitively determine the decision, and that sub-question map is what E8 uses to judge decision-saturation. The two modes share the same key disciplines — derive from the specific goal, reject padding at the source, frame the map as revisable — but produce structurally different outputs consumed by E6 and E8 in correspondingly different ways.

## Kalshi referent (what proven mechanism this generalizes)
**IRON_LAW.md §5 — the A–J question-category taxonomy** from the Kalshi alpha-engine project. In its original context, §5 established that questions must span ten named categories (A: market mechanics; B: edge sources; C: data; D: modeling; E: backtesting; F: risk; G: execution; H: monitoring; I: compliance; J: meta-project) to constitute full coverage of the question space — each category naming a dimension of the project where failure in that dimension produces a fatally incomplete algorithm. The category list was the exhaustiveness target: convergence required every category to be covered. (In its original form §5 *also* carried a volume heuristic — "generate hundreds," a "natural floor" — so coverage and a count expectation coexisted there; the count-is-emergent-not-a-floor stance E5 adopts comes from the later dual-convergence correction cited below, which revised that heuristic, not from §5 alone.) A question that did not advance coverage of any category was padding. E5 generalizes this pattern from question-categories to goal-aspects: instead of "enumerate the categories that questions must cover," E5 enumerates "the dimensions the goal must satisfy to be built well." The two operations are structurally identical — both decompose a goal space into named axes of coverage, both make the axis-set (not a count) the convergence criterion, and both reject items that do not advance coverage of any real axis as padding. The A–J taxonomy was specific to one domain (its categories were derived from the structure of that project); E5's aspect-map is derived from the specific goal stated in `intent_brief.md` for the current domain — it is not a template. Companion referent: **`adapter/notes/10_theory_of_excellence.md` §6** (dual-convergence correction, operator 2026-06-24): build projects converge on total-aspect-coverage; the question count is emergent from covering every aspect, never a target; count-floors degrade quality; padding is rejected because it does not advance coverage of any real aspect.

## Protocol (the steps the INITIATOR executes)

### Step 1 — Re-anchor from intent_brief.md; select mode

Re-read `intent_brief.md` from the file at `work/<session-id>/intent_brief.md`. Do not rely on a recalled version from context — context degrades across long sessions; re-reading from the file is the context-rot countermeasure. Place the mission field and success criteria at the top of working context before proceeding.

From `intent_brief.md`, read the **project-type** field (set by E1):
- **`build`** — a deliverable must be constructed; proceed with Steps 2–5 (build-mode).
- **`decision`** — a go/no-go or choice must be made; skip to the **Decision-mode variant** (Steps D1–D4).

Do not begin deriving aspects or sub-questions before this re-read is complete and the mode is selected.

---

### BUILD-MODE (Steps 2–5)

### Step 2 — Derive candidate aspects

From the mission statement and success criteria in `intent_brief.md`, ask: *"What are the distinct dimensions of excellence for this goal — where failure in any one dimension means the goal is not built well?"*

Work through the goal systematically. For each candidate aspect:

**(a) Name it.** Give it a short, concrete label — a two-to-four word noun phrase a domain practitioner would recognize as a real concern. A vague label usually signals the aspect is not yet clearly understood; sharpen it before recording it as a candidate.

**(b) Distinguish it.** A candidate that can be fully subsumed into another candidate without any coverage loss is not a separate aspect — merge it rather than inflate the list.

**(c) Derive it from the specific goal.** The aspect-map for this goal is derived from *this* goal's structure as stated in `intent_brief.md`, informed by E2's domain knowledge-base. A generic list of "typical aspects" not derived from this goal is not an aspect-map — it is a template, and templates are the documented AI-slop failure.

Supplement the derivation with the E2 knowledge-base (Tier-1 Ledger entry): the "how practitioners in this domain fail" findings reveal aspects the mission statement alone may not make explicit. Record these candidates as `[domain-informed]` in the candidate list.

Record the full candidate list — each with its label and a one-sentence rationale stating what failure in that dimension looks like — in working context before proceeding to Step 3.

*Calibration note:* Generate broadly here. The padding gate in Step 3 filters, so over-generating candidates is safer than under-generating them. An under-generated candidate list propagates as a thin aspect-map with gaps E8 cannot catch because the gap is not on the map.

<example>
For a goal of "redesign this web store so a first-time mobile visitor instantly believes it is a legitimate business and stays to browse and buy" (a build project), Step 2 might surface candidate aspects such as: credibility on first glance, perceived load speed, information scent, checkout friction, retention hooks, legitimacy signals, accessibility, error-state handling. Each would then go through the Step 3 padding gate to confirm it is a real, distinct dimension of excellence for this specific goal — not a generic web checklist — before entering the map.
</example>

### Step 3 — Padding gate: reject non-aspects at source

For each candidate aspect from Step 2, apply the following binary test before it enters the aspect-map:

> **"Would a build that satisfies every other candidate aspect on this list, but fails on this candidate alone, be materially worse in a way the operator's success criteria would reject?"**

- **YES** → the candidate is a real aspect; include it.
- **NO** → reject it as padding. A candidate that produces no material degradation when omitted is not a real aspect of this goal; including it dilutes the convergence signal downstream.

Additionally, for each candidate that passes the materiality test:

> **"Can this candidate be fully absorbed into an already-accepted aspect without any coverage loss?"**

- **YES** → merge it into the absorbing aspect; do not add a separate entry.
- **NO** → include it as a distinct aspect.

**This gate operates at source.** Padding is rejected here — at the moment of generation — not left for E8 or downstream stages to catch. An aspect that passes this gate is a real facet of the goal; an aspect that fails it is discarded with a brief note of why.

Record the verdict (ACCEPTED or REJECTED + reason) for each candidate in working context before proceeding. This record is the audit trail for which candidates were accepted as real aspects and which were filtered as filler or duplicates.

### Step 4 — Red-team the taxonomy (adversarial coverage check)

After completing Steps 2–3, apply an adversarial probe to the accepted aspect-map before finalizing it. This step is the E5 application of L-A's adversarial posture: the INITIATOR attacks its own map at the category level before recording it. A finding that "the map is complete" is flattering; it receives more scrutiny here, not less.

Ask: **"What CATEGORY of aspect does this map miss?"**

This is a different question from "did I miss an aspect?" (which invites a confident no). It probes at the level of whole families of concern and is more effective at surfacing structural blind spots.

Systematically probe each of the following category-axes against the current map:

1. **Foundational / structural** — does the map cover what must be true by design (core architecture, non-negotiables from the operator's constraints, invariants that cannot be compromised)?
2. **Experiential / user-facing** — does the map cover how the output must feel or appear to the end-user or operator at the moment of actual use?
3. **Operational / lifecycle** — does the map cover how the build must function over time (maintenance, graceful degradation, extension, failure recovery)?
4. **Integrity / error-state** — does the map cover what must not go wrong, and what happens when it does (the scar-tissue dimension E3 is also designed to surface)?
5. **Constraint / compliance** — does the map cover external constraints (resource, timing, regulatory, legal) the build must satisfy independent of quality choices?

For each category-axis where the current map is empty or thin, ask whether a real aspect belongs there. If yes, generate the candidate and put it through the Step 3 padding gate. If the gate accepts it, add it to the map with a `[red-team-surfaced]` provenance tag.

Record the red-team results in working context: which category-axes were checked, which were empty or thin on the current map, and which (if any) surfaced new accepted aspects.

**What this step cannot guarantee:** The five category-axes above are a structured probe, not a complete taxonomy of all possible aspect categories. If a category-axis is itself missing — an entire kind of concern this project has that does not fit any of the five above — the red-team will not surface it. That is the residual failure mode named in the Honest ceiling section; the red-team reduces but does not close the gap.

### Step 5 — Finalize and record the aspect-map

After Steps 2–4, assemble the final aspect-map. For each accepted aspect, record:
- **Label** — the short noun phrase from Step 2(a).
- **Description** — one or two sentences stating what this aspect covers and what failure in this dimension looks like for this specific goal.
- **Provenance** — one of: `[goal-derived]` (came from the goal statement and success criteria), `[domain-informed]` (surfaced by E2's knowledge-base), or `[red-team-surfaced]` (added by Step 4).

**Two statements required, verbatim, at the top of `aspect_map.md`:**

> *This is the best current aspect-map for this goal. It is NOT a proved-complete enumeration. E9's build-probe and E7's adversarial kill-loop can surface a missed aspect; when surfaced, the aspect is added to this map and E8 re-evaluates convergence against the updated map. The count of aspects is what it is — there is no floor and no target.*

> *E8 build-mode convergence is judged against this map: convergence is declared only when every aspect listed here is answered to build-depth. Coverage is per-aspect; question-count is emergent from that coverage, never a target.*

Write `aspect_map.md` to `work/<session-id>/aspect_map.md`. Append a summary Ledger entry under `## E5 Aspect Decomposition — <goal name>` recording: all accepted aspects (labels + descriptions + provenance), the red-team results (which category-axes were checked, which surfaced new aspects), and all rejected candidates with rejection reasons. This Ledger entry is the audit trail for the map's derivation; a reviewer can reconstruct why each aspect is on the map from the entry alone. The entry is append-only per L-B; do not overwrite it.

**Extending the map (when E9 or E7 surfaces a missed aspect after sign-off):**
The aspect-map is revisable. When E9's build-probe or E7's kill-loop surfaces a candidate aspect not on the current map, run the candidate through the Step 3 padding gate. If accepted: (a) add it to `aspect_map.md`, (b) append a supplementary Ledger entry under `## E5 Aspect Decomposition — <goal name> (extension, <date>)` linking back to the original entry — do not overwrite the original. Then E8 re-evaluates convergence against the extended map. If rejected by the gate, record the rejection in the Ledger and do not extend the map.

**Hard gate: E6 cannot run until E5 is signed off.** E6 must tag every generated question to an E5 aspect; without a signed-off aspect-map, E6 has no tagging target and E8 cannot evaluate per-aspect convergence.

E5 (build-mode) is signed off when the operator or controller explicitly clears this step.

---

### DECISION-MODE VARIANT (Steps D1–D4)

*Load when `intent_brief.md` carries `project-type: decision` (set by E1).*

When the project-type is `decision`, E5 does not produce an aspect-map. Instead, it decomposes the central decision into the sub-questions whose answers would together definitively determine it.

#### Step D1 — Re-anchor from intent_brief.md

Re-read `intent_brief.md` from the file. Identify the central decision (from the mission field) and the explicit success criteria (what would make the decision clearly right or clearly wrong). Place these at the top of working context before proceeding.

#### Step D2 — Derive candidate decision sub-questions

Ask: *"What sub-questions, if each were answered, would together definitively determine the central decision?"*

For each candidate sub-question, it must be:

**(a) Answerable** — it is possible in principle to research and answer it; it is not merely rhetorical or definitional.
**(b) Decision-relevant** — its answer changes, constrains, or confirms the central decision. A sub-question that would not alter the decision regardless of how it resolves is not a real decision sub-question.
**(c) Scoped** — it asks one thing. Over-broad candidates should be split into distinct entries.

Supplement the derivation with the E2 knowledge-base (what evidence has justified analogous decisions before) and E1's success criteria (what conditions constitute a clearly right answer). Generate broadly; the padding gate in Step D3 filters.

#### Step D3 — Sub-question padding gate

For each candidate sub-question, apply the binary test:

> **"Would answering every other sub-question on this list, but leaving this candidate unanswered, still leave the central decision effectively answerable?"**

- **YES** (the decision is still answerable without this candidate) → reject it; it does not change the decision and is padding.
- **NO** (the decision is NOT effectively answerable without this candidate's answer) → the candidate is load-bearing; include it.

Record the verdict (ACCEPTED or REJECTED + reason) for each candidate before proceeding.

#### Step D4 — Finalize and record the decision sub-question map

Assemble the accepted sub-questions into `decision_subquestions.md`. For each, record: the sub-question text, a one-sentence rationale stating why its answer is load-bearing for the central decision, and a provenance note.

Include at the top of `decision_subquestions.md`:

> *This is the best current decision sub-question map. E8 decision-saturation is judged against this map: convergence is declared when the central decision is answerable and no new materially-distinct sub-question would change it. The count of sub-questions is emergent, not a target.*

Write `decision_subquestions.md` to `work/<session-id>/decision_subquestions.md`. Append a Ledger entry under `## E5 Decision Decomposition — <decision name>` recording the accepted sub-questions, rejected candidates with reasons, and the sign-off. E5 (decision-mode) is signed off when the operator or controller explicitly clears this step.

---

## Inputs / Outputs

**Inputs:**

- **`intent_brief.md`** — the operator-confirmed Intent Brief produced by E1. Format: Markdown file. Location: `work/<session-id>/intent_brief.md`. E5 reads the mission, success criteria, operator-edge, and project-type fields. Re-read from file at Step 1 (build) or Step D1 (decision); do not rely on context recall.

- **E2 knowledge-base (Tier-1 Ledger entry)** — the structured domain knowledge-base appended by E2, specifically the "how practitioners fail" findings and vocabulary. Format: Markdown section in the Tier-1 Ledger, under `## E2 Knowledge-Base — <domain name>`. Location: session Ledger file. Used in Step 2 (build) and Step D2 (decision) to supplement goal-derived candidates with domain-informed ones.

**Outputs:**

- **`aspect_map.md`** (build-mode) — the aspect-map produced by Steps 2–5. Format: Markdown file, one entry per accepted aspect with label, description, and provenance tag. Location: `work/<session-id>/aspect_map.md`. Must include the two required statements from Step 5 (revisable-map framing + E8-wiring statement). Consumed by: E6 (to tag every generated question to an E5 aspect), E8 (to judge per-aspect convergence in build-mode), E9 (to evaluate whether build-probe surprises surface a missed aspect), E7 (adversarial kill-loop may surface a missed aspect and trigger a map extension).

- **`decision_subquestions.md`** (decision-mode) — the decision sub-question map produced by Steps D1–D4. Format: Markdown file, one entry per accepted sub-question with rationale and provenance. Location: `work/<session-id>/decision_subquestions.md`. Consumed by: E6 (question tagging), E8 (decision-saturation judgement).

- **E5 Ledger section** — a summary entry appended to the Tier-1 Ledger (append-only per L-B). Format: Markdown section. Location: session Ledger file. Build-mode: `## E5 Aspect Decomposition — <goal name>` — records all accepted aspects (labels, descriptions, provenance), red-team results (category-axes checked, new aspects surfaced), rejected candidates with reasons. Decision-mode: `## E5 Decision Decomposition — <decision name>` — records accepted sub-questions, rejected candidates with reasons.

## Acceptance checks (binary)

1. **Build-mode aspect-map present and derived from the specific goal?** YES if Steps 2–5 produce `aspect_map.md` at `work/<session-id>/aspect_map.md` containing a labeled, described set of aspects with provenance tags distinguishing `[goal-derived]`, `[domain-informed]`, and `[red-team-surfaced]` entries, all derived from the goal as stated in `intent_brief.md`. NO if `aspect_map.md` is absent; if its aspects were generated from a generic template rather than from this goal's mission and success criteria; or if aspects carry no provenance record.

2. **E8 wiring and count-emergent statements present in `aspect_map.md`?** YES if `aspect_map.md` includes both required Step 5 statements: (a) the revisable-map framing ("best current aspect-map … NOT a proved-complete enumeration … count … no floor and no target"), and (b) the E8-wiring statement ("E8 build-mode convergence is judged against this map … every aspect answered to build-depth … count emergent … never a target"). NO if either statement is absent, or if any count floor or count target is stated anywhere in the file or the Protocol.

3. **Decision-mode variant present and keyed to E1 project-type?** YES if Steps D1–D4 are present as a separately-labeled Protocol section triggered explicitly by `project-type: decision` from `intent_brief.md`; `decision_subquestions.md` is a named output in Inputs / Outputs; and the Binding section references the project-type field from E1 as the mode selector. NO if the decision-mode variant is absent; if it is not keyed to E1's project-type field; or if `decision_subquestions.md` is not a named output.

4. **Padding gate operating at source?** YES if Step 3 (build) and Step D3 (decision) each contain an explicit binary gate — applied per-candidate, at the point of generation, before any aspect or sub-question enters the map — with a stated rejection criterion (materiality test for build; decision-relevance test for decision) and a requirement to record the verdict for each candidate before proceeding. NO if the padding-rejection mechanism is absent; if it is described only as a downstream check rather than a per-candidate gate at the source; or if the gate is stated as guidance rather than as a binding step with a record requirement.

## Honest ceiling
E5 cannot enumerate an aspect that nobody — operator, research, or the Step 4 red-team — thought of. The red-team step probes for missed categories of concern across five named category-axes (foundational, experiential, operational, integrity, constraint), reducing but not eliminating the residual gap. The specific failure mode that survives a full E5 execution: an aspect that is genuinely novel — one that does not fit any category that is itself represented in the current map or on the red-team's probe axes — stays absent until E9's build-probe trips over it (the best-case catch, bounded and designed for this purpose) or until real downstream use encounters the missing dimension (the worst-case catch, after resources have been committed). There is no procedural step that can surface a blind spot that is itself outside the space of conceivable blind spots at the time of execution. A green E5 sign-off means the best current aspect-map has been produced with adversarial coverage-checking and a revisable-map framing — it does not mean the map is complete.

## Cross-references
- **E1** (`stages/E1_operator_interview.md`) — E5's required upstream producer. E1 produces `intent_brief.md` including the project-type field (`build` or `decision`) that selects E5's operating mode. E5 must not begin before E1's confirm gate is cleared. E5 re-reads `intent_brief.md` from file at Step 1 (or D1).
- **E2** (`stages/E2_domain_expert.md`) — E5's supplementary upstream input. E2's knowledge-base ("how practitioners fail" findings) provides domain-informed aspect candidates that the goal statement alone may not surface; these enter E5's Step 2 candidate list as `[domain-informed]` entries.
- **E6** (`stages/E6_question_battery.md`) — E5's primary downstream consumer for question-tagging. E6 tags every generated question to an E5 aspect; without a signed-off aspect-map (or decision sub-question map), E6 cannot tag its output and E8 cannot evaluate per-aspect coverage. E6's hard gate depends on E5 sign-off.
- **E8** (`stages/E8_convergence_gate.md`) — E5's primary downstream consumer for convergence judgement. E8 judges build-mode convergence against `aspect_map.md` (every aspect answered to build-depth; count emergent, not a target) and decision-mode convergence against `decision_subquestions.md` (decision-saturation). The wiring from E5's output to E8's convergence criterion is established here and must not be overridden downstream without an operator gate.
- **E9** (`stages/E9_build_probe.md`) — can surface a missed aspect during the mandated build-probe pass. When E9 surfaces a missed aspect, the Step 5 extension protocol runs: padding gate → if accepted, add to `aspect_map.md` + append supplementary Ledger entry → E8 re-evaluates. E9 is the primary designed catch-point for missed aspects after E5 sign-off.
- **E7** (`stages/E7_answer_kill_loop.md`) — the adversarial kill-loop can also surface a missed aspect when a load-bearing answer reveals a dimension not on the current map. Same extension protocol as E9 applies.
- **L-A** (`laws/L-A_adversarial_posture.md`) — Step 4 (red-team-the-taxonomy) is the E5 application of L-A's adversarial posture: the engine attacks its own aspect-map at the category level before recording it. L-A's asymmetry rule applies at Step 5 sign-off — a positive "map is complete" finding receives more scrutiny, not less. L-A also governs any map-extension decision triggered by E9 or E7 (a flattering "no missed aspects" from the build-probe is treated as a provisional result, not a confirmation).
- **L-B** (`laws/L-B_3tier_memory.md`) — the E5 Ledger entries (Step 5 and D4) are appended to the Tier-1 Ledger append-only; they must never be overwritten or summarized over. Map extensions (Step 5 extension protocol) produce supplementary Ledger entries linked to the original, not replacements. The Ledger entry is the durable audit trail for the map's derivation across context resets.
- **L-E** (`laws/L-E_evidence_over_assertion.md`) — provenance tags on every accepted aspect (`[goal-derived]`, `[domain-informed]`, `[red-team-surfaced]`) are the E5 application of L-E's evidence-over-assertion principle: every aspect is traceable to its derivation source, and "this is the current best map" is an explicit evidence-of-process statement, not an unverifiable completeness claim. The revisable-map framing required by Step 5 is the direct application of L-E's honest-ceiling requirement.
- **GOVERNANCE.md §2** — the 8-line prompt-quality gate this file must clear; gate line (e) is the controller's responsibility and requires a codex audit result recorded in the LEDGER before this file is finalized.

---

## Additive clause A1 — Load-timing precision + multi-source provenance (appended 2026-06-29; B-0035; L-D append-by-reference)

> **L-D note:** ADDITIVE. Does NOT modify the Binding, Steps 1–5 / D1–D4, or acceptance checks 1–4 above; the prior content of this file is a strict prefix of this version. §4 prompt-quality clearance + cross-family codex audit recorded in BUILD-LEDGER B-0035.

**Gap filled (source):** the P5-DRY plumbing-proof walk of E5 (BUILD-LEDGER B-0035), cross-family-codex-confirmed, surfaced two internal-consistency gaps in the frozen text above. Both clarifications codify the behavior the live run already (correctly) exhibited.

**A1.1 — LOAD-TIMING PRECISION.** The Binding says E5 "loads immediately after E1 is complete," but the engine's authoritative run-order (`engine/INITIATOR.md` §Ordered walk; `engine/README.md`) places E5 SIXTH — after E4 — not immediately after E1; and E5's only HARD upstream is `intent_brief.md` (E1), while the E2 knowledge-base is a SUPPLEMENT (§Inputs; §Cross-references E2: "supplementary upstream input"). **Clarification (binding):** E5's sole REQUIRED upstream is E1's confirmed `intent_brief.md`. In the standard E0→E11 walk the INITIATOR runs E5 in walk-order position after E4, so the E2 knowledge-base is normally available and is used as a SUPPLEMENT (the `[domain-informed]` candidates) when present. The Binding phrase "immediately after E1" denotes E5's hard DEPENDENCY (E1), NOT a literal instruction to run E5 before E2–E4; **the INITIATOR run-order governs sequencing.** If E5 is ever run before E2 exists, it proceeds on `intent_brief.md` alone and records that no `[domain-informed]` candidates were available (a thinner map) rather than blocking.

**A1.2 — MULTI-SOURCE PROVENANCE.** Step 5's "Provenance — one of: `[goal-derived]` / `[domain-informed]` / `[red-team-surfaced]`" is too restrictive: an aspect can legitimately derive from MORE THAN ONE source (e.g. a goal-stated dimension that E2's failure-mode register also documents). **Clarification (binding):** provenance is **one OR MORE** of the three tags — an aspect carries every tag whose derivation source genuinely contributed (e.g. `[goal-derived] + [domain-informed]`). Recording only a single tag when multiple sources contributed LOSES provenance and is the failure this clause prevents. No precedence ordering is imposed; list all contributing tags. (`[red-team-surfaced]` still additionally marks aspects first surfaced by the Step-4 red-team.)

**Acceptance check 5 (binary): Load-timing + multi-source provenance honored?** YES if (a) E5 treats `intent_brief.md` as its required input and the E2 KB as a supplement — it does not block when E2 is absent, recording a thinner (goal-derived-only) map instead; AND (b) `aspect_map.md` aspects may carry one OR MORE provenance tags, with every contributing source tagged (no forced single-tag when multiple sources contributed). NO if E5 blocks for want of the supplementary E2 KB, or if a genuinely multi-source aspect is forced to a single provenance tag with the other contributing sources dropped.

**Does not contradict:** the Binding's "do not load before E1 is signed off" (still binding — E1 IS the hard dependency), Step 2's "Supplement the derivation with the E2 knowledge-base" (this clause aligns the Binding to that supplementary framing), or Step 5's three provenance-tag definitions (this clause permits COMBINING them, not redefining them).
