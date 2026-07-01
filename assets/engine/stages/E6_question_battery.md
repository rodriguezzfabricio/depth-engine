<!--
PROMPT-QUALITY GATE (GOVERNANCE §2) — clear all 8 before marking this file "done":
[x] a. DoD quantified      — Acceptance checks enumerate five binary YES/NO checks, each tied to a named DoD item or output artifact: spawn sources, per-question acceptance gate, E2-exemplar anchoring + partial-return, taxonomy red-team, effective-yield + diversity reporting + count-floor-as-hazard.
[x] b. Scope manifest      — Five DoD items listed in task-13-report.md §manifest; reconciled with file:line evidence in §reconciliation before commit.
[x] c. Levers, deliberate  — Decomposition: nine steps isolate each sub-task independently (gate check, exemplar calibration, spawn pass, chained generation, per-question gate, red-team, dedup+yield, persist, sign-off). Effort-calibration lever: per-question acceptance gate operates at source — padding is rejected at the moment of generation, not deferred to E8. Partial-return path for weak exemplars prevents anchoring on a generic floor and halts the stage rather than proceeding on an unsound foundation. Chained generation is taxonomy-sliced (per-aspect) so coverage gaps are targeted rather than relying on volume. No ritual MAX; no count floor; the acceptance gate enforces quality/coverage, not quantity.
[x] d. Countermeasures     — Context-rot: domain_exemplars.md and aspect_map.md (or decision_subquestions.md) are re-read from file at Step 1, not recalled from context. Satisficing: per-question binary provenance gate (Step 5) enforces spawn-source + aspect-tag before any question is counted; manifest + acceptance checks enforce coverage. Sycophancy: L-A asymmetry applied at taxonomy red-team (Step 6) — a "covered everything" claim is flattering and receives more scrutiny, not less; red-team probes six category-axes adversarially. Hallucination: question_battery.md is the pinned artifact; "we have good coverage" is not accepted as a self-report — the artifact is the evidence (per C2).
[x] e. Cross-family audit  — codex (gpt, task-13-codex-audit.txt): all 5 DoD items DONE; ALL load-bearing categories CLEAN (count-floor, anti-AI-slop binary teeth, red-team, perfection-claims, referent fidelity, domain-specificity) — proactive teeth eliminated fix rounds. Only minors: "eight steps"→nine (fixed); persisted-[x] two-phase artifact; GOVERNANCE short-path → Task 20. Recorded B-0018.
[x] f. Alignment trace     — UP: E6 → engine README stages table ("Generate the question battery") → GOVERNANCE.md §2 → engine mission (manufacture depth for any domain). DOWN: dual-mode structure (build/decision) is coherent with E5's two modes and E8's two convergence criteria; count-emergent framing is coherent with Theory §6 dual-convergence correction; partial-return path is coherent with E2's hard gate; reopen loop is coherent with E7's kill-loop design; no contradictions found.
[x] g. Persisted           — Commit records this file; build LEDGER entry (task-13-report.md §manifest) links to it; reachable from REGISTER task entry.
[x] h. Honest ceiling      — The Honest ceiling section names the specific residual failure mode: the battery can be voluminous and well-tagged yet still miss the one pivotal question that a lived practitioner would ask — exemplar-anchoring raises the floor but does not guarantee the ceiling; only E7's kill-loop and E9's build-probe can surface what generation alone did not imagine.
-->

# E6 — Generate the question battery

### Binding · Load WHEN:
INITIATOR loads this stage after BOTH E2 AND E5 are explicitly signed off. Trigger: (a) `domain_exemplars.md` exists at `work/<session-id>/domain_exemplars.md` and E2's Step 5 sign-off gate is confirmed in the Tier-1 Ledger; AND (b) `aspect_map.md` (build-mode) or `decision_subquestions.md` (decision-mode) exists at `work/<session-id>/` and E5's sign-off is confirmed in the Tier-1 Ledger. Do not load before both conditions are met — a missing exemplar set or an unsigned-off aspect-map makes generation anchored and targeted generation impossible.

**Reopen mode (E7/E8/E9-triggered):** E6 can be reopened from three upstream stages, all entering as Source 5 (Step 3): (a) E7's adversarial kill-loop produces audit defects or negative results (`E7/audit-defect/<ref>` / `E7/negative-result/<ref>`); (b) E8's NOT-YET-CONVERGED verdict produces spawned questions via three mechanisms — aspect-coverage gap (`E8/aspect-coverage-gap/<ref>`), adversarial generation pass (`E8/adversarial-gen/<ref>`), and cross-family overturn (`E8/cross-family-overturn/<ref>`) — collectively the E8/* reopen family; (c) E9's build-probe surfaces a load-bearing surprise (`E9/probe-surprise/<ref>`). On any reopen, re-enter at Step 3 with the triggering items as the active spawn source. Steps 5–9 re-run on the new questions; they are appended to the existing `question_battery.md` (do not replace the prior battery). See Step 9 for the reopen procedure.

**Hard gate:** E6 cannot run until E2 is signed off AND E5 is signed off. This is a structural gate, not guidance. E2 produces the gold-standard exemplars without which generation lacks a quality anchor. E5 produces the aspect-map without which generated questions cannot be tagged and E8 cannot evaluate per-aspect convergence.

## Purpose (one paragraph)
E6 is the engine's question-generation stage — the component that must produce a battery sharp enough to drive E7's research toward the depth a new project needs but has not yet lived. It is the AI-slop danger zone: a generic question list applied to a generic taxonomy, generated without domain knowledge or exemplar anchoring, is exactly the failure mode this stage exists to prevent. E6 defeats that failure mode through four interlocking disciplines: it anchors generation on E2's gold-standard exemplars (so "what sharp looks like" is defined before generation begins, and the bar is domain-specific); it mandates spawning from every distinct source in the project's knowledge record (synthesis, each research finding, each scar protocol, each operator clarification, each audit defect and negative result); it applies a binary acceptance gate at the moment of generation (every question must trace to a named spawn source AND carry an E5 aspect tag — a question lacking either is rejected, not counted); and it red-teams the taxonomy at the category level before finalizing the battery (asking what entire class of question the current buckets miss, not merely whether more questions could be written). Coverage is measured by deduped effective-yield and aspect diversity, never by raw count. The count-floor is a named hazard: accepting questions to meet a number degrades quality by introducing padding that dilutes the signal E8 uses to judge convergence.

## Kalshi referent (what proven mechanism this generalizes)
**D4** (`adapter/notes/10_theory_of_excellence.md` §6, D4 bullet) from the standard-workflow theory-of-excellence analysis. In the original Kalshi question-research project, the question battery's depth came from two sources that a templated approach cannot reproduce: the questioner's deep prior knowledge of the domain's microstructure, and the recursive loop that spawned new questions from audits and surprises — audit defects and negative results were empirically the richest spawn sources, generating the sharpest follow-up questions in the project history. D4 names the compensating mechanism: enumerate and mandate every spawn source (synthesis, each research answer, each operator clarification, each audit defect, each negative result); derive then red-team the taxonomy at the category level; anchor generation on domain-specific gold-standard exemplars manufactured in D1; and operationalize convergence as deduped effective-yield plus diversity tied to the decision, never a row-count floor (count floors degrade quality). Companion referent: **IRON_LAW.md §5** (question quality bar — every question must materially advance the build, change a decision, fill a real unknown, be specific and answerable) and **IRON_LAW.md §8** (exhaustiveness-via-register: completion is defined by coverage, not by effort running out; red-team pass before any finding is trusted).

## Protocol (the steps the INITIATOR executes)

### Step 1 — Hard gate check and file reload

Verify both preconditions before doing anything else:

**(a) E2 sign-off confirmed.** Find the E2 sign-off entry in the Tier-1 Ledger (the explicit operator or controller confirmation from E2's Step 5 gate). If absent, do not proceed — E6 cannot run without it.

**(b) E5 sign-off confirmed.** Find the E5 sign-off entry in the Tier-1 Ledger (build-mode or decision-mode). If absent, do not proceed.

**(c) Re-read `domain_exemplars.md` from file.** Read `work/<session-id>/domain_exemplars.md` from the file system — do not rely on a recalled version from context; context across long sessions is unreliable. Place the exemplar questions at the top of working context.

**(d) Re-read `aspect_map.md` or `decision_subquestions.md` from file.** For build-mode, read `work/<session-id>/aspect_map.md`. For decision-mode, read `work/<session-id>/decision_subquestions.md`. Place at the top of working context alongside the exemplars.

**(e) Record the mode** (build or decision) in working context. The mode governs which output artifact is tagged (aspect-map entries for build; decision sub-questions for decision).

Do not proceed past Step 1 if any file is missing or any gate is uncleared.

---

### Step 2 — Exemplar calibration: test anchors before anchoring

Read the gold-standard exemplar questions from `domain_exemplars.md`. Before using them as anchors, apply the **specificity test** to each:

> **"Could this exemplar question be asked, without any modification, about a domain different from the one E2 researched — and still make sense?"**

- **YES** (it could be asked of any domain without change) → the exemplar is too generic. It will produce a generic battery if used as an anchor. Mark it GENERIC.
- **NO** (it is specific to this domain's microstructure, vocabulary, failure modes, or prior art) → the exemplar is a valid anchor. Mark it SPECIFIC.

**Threshold for proceeding:** At least **2 of the 3–5 exemplars** must pass the specificity test (marked SPECIFIC) before E6 proceeds.

**If the threshold is NOT met (fewer than 2 pass):** Do not proceed. Trigger the **partial-return path**:

1. Write `work/<session-id>/E6_exemplar_defect.md` recording: each failing exemplar's text, why it fails the specificity test, and what domain-specific content it lacks (e.g., "does not reference any domain failure mode, vocabulary term, or microstructure constraint from E2's knowledge-base").
2. Append a note to the Tier-1 Ledger under `## E6 Exemplar Defect — <goal name>` documenting the defect and the partial-return trigger.
3. Return to E2 with the defect report. E2 must regenerate exemplars that pass the specificity test before E6 can proceed.

**If the threshold IS met:** Proceed. Note any GENERIC exemplars and exclude them from the anchor set (use only the SPECIFIC ones as few-shot anchors). The SPECIFIC exemplars define "what sharp looks like" for this domain — they are the reference against which the quality of each generated question is implicitly held.

<example>
For a domain researched in E2 where a key finding was that practitioners systematically underestimate data-freshness decay in their decision inputs: a SPECIFIC exemplar might be "For our primary data source, what is the empirically observed decay rate of predictive signal as a function of time since collection, and at what staleness threshold does our decision model become unreliable?" A GENERIC exemplar would be "What are the data requirements for this project?" — that question could be asked about any project, carries no domain-specific knowledge, and would anchor E6 on a shallow floor.
</example>

---

### Step 3 — Spawn pass from all mandated sources

Execute a generation pass against each of the five mandated spawn sources. For each question generated, record it in a working draft alongside its spawn-source identifier. The identifier is required for the Step 5 acceptance gate.

Do not filter questions here — generate broadly. The Step 5 gate filters.

**Source 1 — Synthesis**
Synthesize across all upstream knowledge: the project intent and operator's stated edge from `intent_brief.md`, the domain summary and failure-mode register from the E2 knowledge-base, and the scar protocols from E3. From this combined picture, ask: "What questions does this synthesis demand?" Questions from this source carry spawn-source identifier: `synthesis`.

Calibration: synthesis-spawned questions tend to cover the project's high-level choices and structural constraints. When the SPECIFIC E2 exemplars are used as a few-shot anchor here, the synthesis questions should aim for the exemplars' level of specificity — not shallower.

**Source 2 — E2 research answers**
Work through the E2 knowledge-base section by section (domain summary, vocabulary glossary, prior-art map, failure-mode register). For each finding:
- What does this finding make uncertain or demand we investigate further?
- What is the practical implication of this finding for the build or decision, and is that implication tested anywhere in our current question draft?

Generate questions that each finding makes necessary. Questions from this source carry spawn-source identifier: `E2/research/<finding-ref>` (use a short reference to the knowledge-base section or finding, e.g., `E2/research/failure-mode-3`).

Calibration: the failure-mode register (Target D from E2) is load-bearing — the richest questions from this source tend to come from failure modes, because questions that cannot surface a known failure mode will not protect the project from it.

**Source 3 — E3 scar protocols**
Work through each entry in `work/<session-id>/scar_protocols.md`. For each scar protocol:
- Does the project's current design make this failure mode possible? Is there a question that would surface whether the structural prevention is actually in place?
- Could the failure mode appear in a form the structural prevention does not cover? What question would probe that?

Generate questions that each scar protocol demands. Questions from this source carry spawn-source identifier: `E3/scar/<entry-ref>`.

**Source 4 — Operator clarifications**
Re-read `work/<session-id>/intent_brief.md`. Identify items marked `[unknown — flag for E2/E3]` that were not fully resolved, operator clarifications that revealed partial rather than complete information, and places where the operator's intent was completed by the engine rather than explicitly stated. For each, ask: "What question would either confirm the engine's completion of intent or surface the case where it was wrong?"

Questions from this source carry spawn-source identifier: `operator-clarification/<ref>`.

**Source 5 — Unified reopen source (E7 / E8 / E9 — reopen mode only)**
*This source is empty on the first run of E6. It activates only when an upstream stage triggers an E6 reopen. Three upstream stages are accepted origins; E7 carries two ref prefixes, E8 carries three ref prefixes (the E8/* reopen family), and E9 carries one ref prefix — six total:*

**(a) E7 audit defects and negative results** (`E7/audit-defect/<ref>` or `E7/negative-result/<ref>`): when E7's adversarial kill-loop finds an audit defect (a flaw, gap, or unverifiable claim in a current answer) or a negative result (a hypothesis is false or a candidate approach fails), read the E7 Ledger entries for the current reopen cycle and ask: "What question would fix this defect, deepen this negative, or probe whether the defect/negative applies more broadly?"

**(b) E8 NOT-YET-CONVERGED spawned questions** (the `E8/*` reopen family — three ref prefixes accepted): E8 produces reopened questions via three mechanisms, each with its own spawn-source prefix:
- *`E8/aspect-coverage-gap/<ref>`*: when E8's NOT-YET-CONVERGED verdict (Step 2 diversity gate or Step 3 per-aspect coverage assessment) identifies an aspect or sub-question with zero addressed questions, read the E8 Ledger entry identifying the gap and ask: "What question would specifically target the uncovered aspect or decision sub-question?"
- *`E8/adversarial-gen/<ref>`*: when E8's Step 4 adversarial "missing question" generation pass produces a materially-distinct question (a FAIL result routed to E6), read the spawned question recorded in the E8 Ledger entry and ask: "What question at E6 would generate the evidence needed to address what this adversarial finding exposed?"
- *`E8/cross-family-overturn/<ref>`*: when E8's Step 5 cross-family overturn attempt produces a materially-distinct question (a verifier-surfaced question that triggers NOT-YET-CONVERGED), read the spawned question from the E8 Ledger entry and ask: "What follow-on questions does this cross-family finding demand?"

**(c) E9 build-probe surprise** (`E9/probe-surprise/<ref>`): when E9's build-probe surfaces a load-bearing surprise that spawns a reopened question, read the E9 Ledger entry for the surprise and ask: "What question would investigate the build-revealed gap and establish what the converged knowledge failed to reach?"

An E6 reopen triggered by any of these three upstream stages is accepted (using the six prefixes listed above: E7×2, E8×3, E9×1). Any reopen from a source NOT in this taxonomy (i.e., a spawn-source identifier other than the six prefixes listed above) is rejected — log the rejection and request a valid spawn-source before proceeding.

---

### Step 4 — Chained generation (taxonomy-sliced, per-aspect)

After the initial spawn pass (Step 3), execute a second generation pass that is specifically targeted at aspect-level coverage gaps.

For each accepted aspect in `aspect_map.md` (build-mode) or each sub-question in `decision_subquestions.md` (decision-mode):

1. Review the current working draft: which questions already tag to this aspect?
2. Ask: "What questions does this aspect still need that have not been generated yet?"
3. Generate additional questions to fill thin aspects. These questions derive from the aspect itself as a derivation prompt; their spawn-source identifier is `synthesis` (they originate from the synthesis of the goal's aspects) unless they can be more specifically traced to a research finding or scar protocol, in which case use that source.

The purpose of this step is to ensure every aspect has substantive coverage before the acceptance gate runs. An aspect with zero questions is a coverage gap that will prevent E8 from declaring convergence; find it here rather than at E8.

---

### Step 5 — Per-question acceptance gate (binary, at source)

For every question in the draft battery — from Steps 3 and 4 — apply this two-part gate before the question enters the final battery. The gate operates at source: apply it during generation, not after assembly.

> **Check A — Spawn-source provenance:** Does this question carry a named spawn-source identifier from Step 3 or Step 4?
> - **YES** → passes provenance check.
> - **NO** → **REJECTED.** Log in the provenance-failure log: question text + reason (no traceable spawn source). A question with no spawn-source provenance is generated filler — it cannot be shown to serve a real investigative need and must not enter the battery.

> **Check B — E5 aspect tag:** Does this question carry a tag to a named entry in the signed-off `aspect_map.md` (build-mode) or `decision_subquestions.md` (decision-mode)?
> - **YES** → passes aspect-tag check.
> - **NO** → **REJECTED.** Log in the aspect-failure log: question text + reason (no aspect tag). A question with no aspect tag provides no signal to E8's convergence computation and must not enter the battery.

**Both checks must pass independently.** A question that passes Check A but fails Check B is rejected. A question that passes Check B but fails Check A is rejected. There is no partial credit. The rejection logs are artifacts — they are appended to the Tier-1 Ledger entry and are available for E7 review as evidence of gate enforcement, not merely self-report.

**E5 map extension:** If, during question generation, a question clearly belongs to an aspect that does not exist on the current `aspect_map.md`, do not reject the question and do not silently invent a new aspect. Instead: run the candidate aspect through E5's Step 3 padding gate (re-read from E5's protocol). If the gate accepts it, follow E5's Step 5 extension protocol (add it to `aspect_map.md`, append a supplementary Ledger entry). Then tag the question to the newly added aspect and proceed. If the gate rejects it, log the rejection and the candidate aspect in the Ledger.

---

### Step 6 — Red-team the taxonomy at category level

After Step 5, before finalizing the battery, apply an adversarial probe to the taxonomy itself. This is the L-A asymmetry rule applied to the battery: "we have covered everything" is a flattering claim and receives more scrutiny here, not less. The probe is at the category level — not "did we miss a question?" but:

> **"What CATEGORY of question do these buckets miss?"**

Systematically probe each of the six category-axes below against the current accepted battery:

1. **Pre-conditions and assumptions** — does the battery interrogate what must be true *before* the project succeeds? Are the assumptions that the operator or engine made during E1–E5 themselves questioned?
2. **Failure-mode targeting** — does the battery directly interrogate each named failure mode in E2's failure-mode register and each scar protocol from E3? A failure mode with no question aimed at it is a coverage gap even if the failure mode is recorded.
3. **Boundary and edge cases** — does the battery probe what happens at limits: scale, volume, error states, adversarial inputs, degraded-dependency scenarios?
4. **Measurement and verifiability** — can the success of this build or decision actually be measured? Are the measurement mechanisms themselves questioned — not just the things being built?
5. **External constraint and compliance** — does the battery cover constraints imposed from outside the project: dependencies, integrations, operational requirements, regulatory or legal bounds?
6. **Meta-project** — are there questions about running this project well — project management, decision protocols, handoffs, monitoring cadence — not just about the domain subject matter?

For each category-axis that is **thin or absent** in the current battery: generate candidate questions, put them through the Step 5 gate, and if they pass, add them to the battery. Tag their spawn source as `red-team/<axis-name>` and their E5 aspect as the best-matching aspect. Tag the question itself `[red-team-surfaced]` so it is identifiable in the output.

Record the red-team results in the Ledger: which axes were checked, which were thin, how many questions were added, and whether any whole category was absent. This record is the audit evidence that the red-team ran as a real check, not as a self-report of thoroughness.

**What this red-team cannot guarantee:** The six category-axes above are a structured coverage probe, not a complete taxonomy of all possible question categories. If an entire kind of concern exists for this project that does not fit any of the six axes, the red-team will not surface it. That residual failure mode is named in the Honest ceiling section.

---

### Step 7 — Semantic dedup and effective-yield computation

Apply semantic dedup to the full accepted battery:

For each pair of questions with high semantic similarity (ask the same thing, even in different words):
- Retain the sharper, more specific question (the one whose answer would yield more actionable evidence).
- Log the duplicate (text + the retained question it overlaps with) in the dedup log.
- Do not remove questions merely because they share vocabulary; remove only when both questions would yield effectively the same evidence if answered.

After dedup, compute and record:

- **Effective yield** — the count of deduplicated accepted questions. This is a reporting metric, not a target.
- **Diversity** — the distribution of deduplicated accepted questions across E5 aspects. Identify any aspect with zero accepted questions (coverage gap); flag it in the diversity summary.

**THE COUNT-FLOOR HAZARD — mandatory named statement:**

> *The raw count of questions generated, before dedup and before the acceptance gate, is NOT a quality signal and MUST NOT be used as a target or a floor. A high raw count achieved by relaxing the acceptance gate or accepting semantically duplicate questions DEGRADES quality: it dilutes the battery, inflates E8's coverage computation with filler, and causes padding to masquerade as coverage. If the effective yield after dedup and gating is low, the correct response is to reopen the spawn sources for richer investigative input — not to lower the acceptance gate to meet a number. Quality and coverage come from the spawn sources and the acceptance discipline, never from the count.*

---

### Step 8 — Persist the question battery

Write the accepted, deduplicated battery to `work/<session-id>/question_battery.md` using the format below. Use append-only behavior if re-entering E6 on a reopen cycle — do not overwrite a prior battery; append a dated section for each reopen cycle.

```
---
session: <session-id>
produced_by: E6
consumed_by: E7 (answer + kill-loop), E8 (convergence gate)
effective_yield: <N>
diversity_summary: <one sentence stating aspect distribution and any zero-coverage aspects>
mode: build | decision
---

> The effective yield above is a reporting metric. It is not a target. The count-floor
> hazard is named in E6 Step 7: accepting questions to inflate the count degrades
> quality. Questions were generated until each E5 aspect had substantive coverage —
> not until a number was reached.

## Question Battery

### Q001
**Question:** [question text]
**Spawn source:** [synthesis | E2/research/<ref> | E3/scar/<ref> | operator-clarification/<ref> | E7/audit-defect/<ref> | E7/negative-result/<ref> | E8/aspect-coverage-gap/<ref> | E8/adversarial-gen/<ref> | E8/cross-family-overturn/<ref> | E9/probe-surprise/<ref> | red-team/<axis>]
**E5 aspect:** [aspect label from aspect_map.md or sub-question ref from decision_subquestions.md]

[Q002…Qn in same format]
```

Append the E6 Ledger entry to the Tier-1 Ledger under `## E6 Question Battery — <goal name>` recording: effective yield, diversity summary, spawn-source breakdown (how many questions from each source), red-team results (Step 6 axes checked and outcomes), rejection counts (provenance failures + aspect-tag failures + dedup removals), and the sign-off. This Ledger entry is mandatory under L-B — it is the durable record across context resets and is the evidence E8 reads to verify the battery was properly generated and gated.

---

### Step 9 — E6 sign-off gate

E6 is signed off when all of the following are explicitly confirmed by the operator or controller:

**(a)** `question_battery.md` exists at `work/<session-id>/question_battery.md` with `effective_yield` and `diversity_summary` fields populated in the header.

**(b)** Every question in the battery carries a spawn-source identifier and an E5 aspect tag. (A reviewer can confirm this by scanning the file — the gate is enforced by artifact, not by self-report.)

**(c)** The rejection log (provenance failures + aspect-tag failures) is appended to the Tier-1 Ledger entry. The log may be empty if all generated questions passed both checks, but it must be recorded as explicitly empty rather than absent.

**(d)** The red-team pass is documented: which of the six category-axes were checked, which were thin, and how many `[red-team-surfaced]` questions were added.

**(e)** The count-floor hazard statement appears in `question_battery.md` immediately after the YAML header.

**(f)** The E6 Ledger entry is appended to the Tier-1 Ledger.

**(g)** The operator or controller gives an explicit sign-off.

**E6 reopen mode (E7/E8/E9-triggered):** When an upstream stage (E7 audit defects/negative results, E8 aspect-coverage gap, or E9 probe surprise) triggers a reopen, E6 re-enters at Step 3 (Source 5 active). Steps 5–9 re-run on the newly generated questions. The new questions are appended to `question_battery.md` under a dated section heading `## Reopen cycle — <date> (<trigger> trigger)` (e.g., `E7 trigger`, `E8 trigger`, or `E9 trigger`). The effective yield in the header is updated to the new cumulative total. A supplementary Ledger entry is appended under `## E6 Reopen — <goal name> (<date>)` linked to the original E6 entry.

## Inputs / Outputs

**Inputs:**

- **`domain_exemplars.md`** — the 3–5 gold-standard exemplar questions produced by E2. Format: Markdown file with YAML header. Location: `work/<session-id>/domain_exemplars.md`. Re-read from file at Step 1 (context-rot countermeasure). Used as the few-shot quality anchor in Step 2. If the exemplars fail the specificity test, this input triggers the partial-return path rather than proceeding.

- **`aspect_map.md`** (build-mode) or **`decision_subquestions.md`** (decision-mode) — the signed-off decomposition produced by E5. Format: Markdown file. Location: `work/<session-id>/aspect_map.md` or `work/<session-id>/decision_subquestions.md`. Re-read from file at Step 1. Every generated question must tag to an entry in this artifact. If E6 generation surfaces a candidate aspect not in the map, the E5 extension protocol is invoked.

- **E2 knowledge-base (Tier-1 Ledger entry)** — the full four-section knowledge-base produced by E2 (domain summary, vocabulary glossary, prior-art map, failure-mode register). Format: Markdown section in Tier-1 Ledger. Location: session Ledger file. Read at Step 3 (Source 2). The failure-mode register is the load-bearing sub-source within this artifact.

- **`scar_protocols.md`** — the scar protocols produced by E3. Format: Markdown file. Location: `work/<session-id>/scar_protocols.md`. Read at Step 3 (Source 3). Each scar protocol entry is an independent spawn source.

- **`intent_brief.md`** — the operator-confirmed Intent Brief produced by E1. Format: Markdown file. Location: `work/<session-id>/intent_brief.md`. Read at Step 3 (Source 4) for operator clarification items and residual unknowns.

- **Reopen trigger (Source 5 — reopen mode only)** — the items that activate Source 5 on reopen, from one of three upstream stages: (a) E7 audit defects and negative results recorded in E7 Ledger entries (`E7/audit-defect/<ref>` or `E7/negative-result/<ref>`); (b) E8 NOT-YET-CONVERGED spawned questions recorded in the E8 Ledger entry — three ref prefixes accepted: `E8/aspect-coverage-gap/<ref>` (Step 2/3 coverage gap), `E8/adversarial-gen/<ref>` (Step 4 adversarial generation pass FAIL), and `E8/cross-family-overturn/<ref>` (Step 5 cross-family verifier-produced question); (c) E9 probe-surprise items recorded in the E9 Ledger entry (`E9/probe-surprise/<ref>`). Format: Markdown sections in Tier-1 Ledger. Location: session Ledger file. Read at Step 3 (Source 5) on reopen. Empty on first run.

**Outputs:**

- **`question_battery.md`** — the accepted, deduplicated question battery. Format: Markdown file with YAML header (session, produced_by, consumed_by, effective_yield, diversity_summary, mode), the mandatory count-floor hazard statement, and one entry per question (question text, spawn source, E5 aspect tag). Location: `work/<session-id>/question_battery.md`. Consumed by E7 (the battery drives the answer + kill-loop) and E8 (aspect tags + effective-yield are the convergence inputs). On reopen cycles, new questions are appended under a dated section, not written to a new file.

- **E6 Ledger entry** — summary of the generation run. Format: Markdown section appended to the Tier-1 Ledger (append-only per L-B) under `## E6 Question Battery — <goal name>`. Records: effective yield, diversity summary, spawn-source breakdown, red-team results, rejection counts, and sign-off. On reopen: supplementary entry linked to original. Location: session Ledger file.

- **`E6_exemplar_defect.md`** (Step 2 partial-return only) — the defect report produced when fewer than 2 exemplars pass the specificity test. Format: Markdown file. Location: `work/<session-id>/E6_exemplar_defect.md`. Consumed by E2 to regenerate exemplars. Produced only when the partial-return path is triggered.

## Acceptance checks (binary)

1. **All five spawn sources named in the Protocol and present in the Ledger entry's spawn-source breakdown?** YES if Step 3 explicitly names all five sources (synthesis, E2 research answers, E3 scar protocols, operator clarifications, and the unified Source 5 reopen source accepting all six prefixes: `E7/audit-defect/<ref>`, `E7/negative-result/<ref>`, `E8/aspect-coverage-gap/<ref>`, `E8/adversarial-gen/<ref>`, `E8/cross-family-overturn/<ref>`, and `E9/probe-surprise/<ref>`), requires spawning from each, and the E6 Ledger entry records a per-source breakdown confirming each source was queried (with a count of zero and an explicit note when a source was empty, e.g., all Source 5 origins empty on first run). NO if any spawn source is absent from Step 3's enumeration, or the Ledger entry records a breakdown that omits any source without an explicit empty-note, or Source 5 accepts only a subset of the E8/* reopen family and rejects the missing prefixes, or Source 5 accepts only E7 origins and rejects E8- or E9-triggered reopens.

2. **Per-question acceptance gate binary-enforced: both checks required, both missing-attribute consequences stated as REJECTED, and rejection logs named as artifacts?** YES if Step 5 states that Check A (spawn-source provenance) and Check B (E5 aspect tag) are each binary (YES/NO), that a question failing either check is REJECTED rather than tagged as a warning or advisory, that questions lacking a spawn source are not counted, that questions lacking an aspect tag are not counted, and that both rejection logs are named artifacts appended to the Ledger entry. NO if either check is described as advisory guidance rather than a binary gate; if a question with no spawn source or no aspect tag is allowed to proceed with a warning rather than being rejected; or if the rejection logs are described as optional or unrecorded.

3. **E2-exemplar anchoring and partial-return path both present?** YES if Step 2 (a) explicitly reads `domain_exemplars.md` from file (not from context recall), (b) applies a named specificity test with a binary result per exemplar, (c) states a numeric threshold for proceeding (at least 2 of 3–5 pass), (d) names `E6_exemplar_defect.md` as the defect artifact produced on failure, and (e) requires E6 to halt and await E2 regeneration rather than proceeding on weak anchors. NO if the anchoring is described only as loading the file without a specificity test; if the partial-return path is described as optional ("consider returning to E2") rather than as a required halt; or if the threshold for proceeding is absent.

4. **Red-team the taxonomy at category level present?** YES if Step 6 (a) frames the probe explicitly as "what CATEGORY of question do these buckets miss?" (not "what questions did we miss?"), (b) enumerates at least five named category-axes to probe, (c) requires generating new questions for thin or absent axes and putting them through the Step 5 gate, and (d) requires recording the red-team results in the Ledger as evidence the check ran. NO if the red-team is at the question level only ("are there more questions?"); if it is described as optional; if fewer than five category-axes are named; or if the Ledger recording requirement is absent.

5. **Deduped effective-yield + diversity reported in both the file header and the Protocol, and the count-floor named as a HAZARD with its degradation mechanism stated?** YES if (a) Step 7 computes deduped effective-yield (after semantic dedup) and a diversity metric (per-aspect distribution including zero-coverage flags), (b) both metrics appear in `question_battery.md`'s YAML header, (c) the count-floor hazard is stated in Step 7 as a named hazard using the word "HAZARD" or equivalent, (d) the degradation mechanism is stated (accepting questions to meet a number dilutes the battery and causes padding to masquerade as coverage), and (e) no step in the Protocol sets a target number of questions or a minimum count floor. NO if the effective-yield metric is a raw pre-dedup count; if the diversity metric is absent; if the count-floor hazard is mentioned but not named as a hazard with a stated degradation mechanism; or if any protocol step names a target count.

## Honest ceiling
The battery can be voluminous and well-tagged yet still miss the one pivotal question that a lived practitioner would ask about this specific domain. Exemplar-anchoring raises the floor — it prevents the battery from being obviously generic — but it does not raise the ceiling: the exemplars encode E2's research, and E2's research encodes the public record's model of the domain, which under-documents the domain's most dangerous structural failure modes. The six category-axes in the Step 6 red-team are a structured coverage probe, not a complete taxonomy; an entire kind of concern unique to this domain can be absent from all six axes simultaneously, and the red-team will not surface it. The five spawn sources are bounded by what the upstream stages captured: an operator clarification that was not fully articulated, a failure mode that is too novel for the world's public record, or a scar protocol that missed the domain's actual cardinal sin all propagate as invisible gaps in the battery — the battery cannot ask a question about what it does not know to ask about. The specific safeguards against this residual risk are not in E6: they are E7's adversarial kill-loop (which attacks answers to surface assumptions the question did not probe), E9's build-probe (which surfaces questions the build itself demands that generation did not imagine), and the operator's domain expertise (which can name the pivotal question the engine missed, when surfaced explicitly). A green E6 sign-off is a complete *process* — all mandated sources queried, acceptance gate enforced, exemplars tested, taxonomy red-teamed — not a proved-complete question set, and not a guarantee that the pivotal question has been generated.

## Cross-references
- **E2** (`stages/E2_domain_expert.md`) — HARD GATE precondition; supplies `domain_exemplars.md` as the few-shot quality anchor for Step 2. E6's partial-return path reopens E2 when exemplars fail the specificity test. E2's knowledge-base (Tier-1 Ledger entry) is Step 3 Source 2. E6 cannot run until E2 is signed off.
- **E3** (`stages/E3_scar_tissue.md`) — supplies `scar_protocols.md` as Step 3 Source 3. Each scar protocol entry is an independent spawn source for question generation.
- **E4** (`stages/E4_extract_seams.md`) — E4 sign-off is not required for E6 to run, and `seams.json` is not a declared E6 input (it is consumed downstream by E10 for scaffold parameterization). E6's synthesis pass (Step 3 Source 1) draws on E2's knowledge-base, E3's scar protocols, and the operator's intent from `intent_brief.md` — not seams.json directly.
- **E5** (`stages/E5_decompose_aspects.md`) — HARD GATE precondition; supplies the aspect-map (build-mode) or decision sub-question map (decision-mode) that every generated question must tag to. E6 invokes E5's Step 5 extension protocol when generation surfaces a candidate aspect not on the current map. E6 cannot run until E5 is signed off.
- **E7** (`stages/E7_answer_kill_loop.md`) — primary downstream consumer of the battery; E7's audit defects and negative results trigger E6 reopens (Step 3 Source 5). The E6 → E7 → E6 reopen loop is the auto-reopen mechanism D4 mandates: audit defects are treated as richest spawn sources, not as closed issues.
- **E8** (`stages/E8_convergence_gate.md`) — uses the aspect tags and effective-yield from `question_battery.md` to judge convergence. Build-mode: every aspect must be answered to build-depth; question-count is emergent from that coverage. Decision-mode: decision-saturation. E8 cannot evaluate convergence without a battery with complete aspect tagging.
- **L-A** (`laws/L-A_adversarial_posture.md`) — Step 6 (red-team the taxonomy) is the E6 application of L-A's adversarial posture: the engine attacks its own battery at the category level before finalizing it. L-A's asymmetry rule applies at sign-off: a "covered everything" claim is flattering and receives more scrutiny, not less. L-A also governs the partial-return path in Step 2: a positive claim from E2 that the exemplars are high quality is a load-bearing claim that the specificity test checks adversarially.
- **L-B** (`laws/L-B_3tier_memory.md`) — `question_battery.md` and the E6 Ledger entry are persistent artifacts; the Ledger entry is append-only and must survive context resets. Reopen cycles append to existing files rather than overwriting them. "We have good coverage" is not a valid in-context record — the Ledger entry and the battery file are the evidence.
- **L-E** (`laws/L-E_evidence_over_assertion.md`) — every question must trace to a named spawn source; spawn-source provenance is the E6 application of L-E's evidence-over-assertion principle. A question with no spawn-source identifier is an unsourced assertion that a certain investigative need exists; the Step 5 provenance gate is the mandatory quarantine mechanism.
- **GOVERNANCE.md §2** — the 8-line prompt-quality gate this file must clear; gate line (e) is the controller's responsibility and requires a codex audit result recorded in the LEDGER before this file is finalized.

---

## Additive clause A1 — Check-A accepts the Step-6 red-team spawn source (appended 2026-06-29; B-0036; L-D append-by-reference)

> **L-D note:** ADDITIVE. Does NOT modify Steps 1–9 or acceptance checks 1–5 above; the prior content of this file is a strict prefix of this version. §4 prompt-quality clearance + cross-family codex audit recorded in BUILD-LEDGER B-0036.

**Gap filled (source):** the P5-DRY plumbing-proof walk of E6 (BUILD-LEDGER B-0036), cross-family-codex-confirmed. Step 5 Check A asks whether a question carries a named spawn-source identifier "**from Step 3 or Step 4**," but Step 6 generates RED-TEAM-surfaced questions with the spawn source `red-team/<axis-name>` and requires them to be "put … through the Step 5 gate." A question originating at Step 6 has no Step-3/Step-4 source, so a LITERAL reading of Check A would REJECT every red-team-surfaced question — directly contradicting Step 6's requirement that they pass Step 5. (The live run resolved this correctly by treating `red-team/<axis>` as a valid named spawn source; this clause codifies that behavior.)

**Clarification (binding):** Check A's valid-spawn-source set is EVERY mandated spawn source this protocol defines — the Step-3 mandated sources (the five spawn sources Step 3 itself enumerates — synthesis · E2 findings · E3 scar findings · operator clarifications · the unified E7/E8/E9 reopen Source 5 with its six accepted prefixes), Step-4 chained/taxonomy-sliced generation, AND the Step-6 `red-team/<axis-name>` source. Check A PASSES iff the question carries a named spawn-source identifier from ANY of these; it FAILS only when the question has NO traceable mandated spawn source. The phrase "from Step 3 or Step 4" in Check A enumerates the spawn sources that exist at the point Step 5 *first* runs; it is NOT an exclusion of the Step-6 red-team source, which by design re-enters the same Step-5 gate.

**Acceptance check 6 (binary): Red-team questions admitted by Check A on their red-team source?** YES if every `[red-team-surfaced]` question carries a `red-team/<axis-name>` spawn-source identifier and is admitted by Check A as validly-sourced (not rejected for lacking a Step-3/4 source). NO if any red-team-surfaced question is rejected by Check A solely because its source is the Step-6 red-team rather than Step 3/4.

**Does not contradict:** Step 5's two-part binary gate (both Check A and Check B still required, independently; this clause only clarifies Check A's valid-SOURCE set), Step 6 (which already routes red-team questions back through Step 5), or the count-floor-is-a-HAZARD stance (this clause adds no count target).
