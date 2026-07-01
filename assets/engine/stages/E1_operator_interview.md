<!--
PROMPT-QUALITY GATE (GOVERNANCE §2) — clear all 8 before marking this file "done":
[x] a. DoD quantified      — Acceptance checks §7 enumerate six binary YES/NO checks, each tied to a named DoD item or output artifact.
[x] b. Scope manifest      — Six items (5 DoD + 1 special check) listed in task-8-report.md §manifest; reconciled with file:line evidence in §reconciliation before commit.
[x] c. Levers, deliberate  — Three-move sequence (Steps 2→3→4) decomposes the interview into independently verifiable sub-tasks rather than one monolithic "ask the operator" step. Effort-calibration lever: "if the [NEEDS-OPERATOR] list exceeds 5–7, re-examine Step 3" prevents over-asking without a row-count floor. Verifying-subagents: N/A — this stage produces a confirm-gated Intent Brief, not a research verdict; the L-A cross-family protocol is reserved for load-bearing research verdicts. No ritual MAX.
[x] d. Countermeasures     — Context-rot: seed.md re-read from file at Step 1 (not recalled from context); satisficing: scope manifest + acceptance checks; sycophancy: provenance-tag rule (Step 5) forces the engine to surface inferences rather than blend them into stated requirements — a flattering "the operator said X" that the operator never said cannot survive the provenance check; hallucination: every Intent Brief line must trace to a verbatim seed quote (operator-stated) or a named research finding (engine-inferred); neither floats free.
[x] e. Cross-family audit  — codex (gpt, task-8-codex-audit.txt) rated all 5 DoD items + special check done; minor fixes applied (§4 tag-set misquote fact-corrected, "every gap/comprehensive" softened, YES-gate tag-handling contradiction resolved). Recorded B-0013.
[x] f. Alignment trace     — UP: E1 → engine stages table (engine/README.md, "Operator interview & intent-completion") → GOVERNANCE.md §2 → engine mission (domain-agnostic ingestion/research). DOWN: three-move sequence + provenance-tagging + confirm gate are coherent with D5's "seed → complete the intent" principle; project-type field wired to E8 convergence mode in README convergence-modes table; no contradictions found.
[x] g. Persisted           — Commit records this file; build LEDGER entry (task-8-report.md) links to it; reachable from REGISTER task entry.
[x] h. Honest ceiling      — §8 (Honest ceiling) names the specific residual failure mode: an operator who confirms an Intent Brief that feels complete but silently omits a load-bearing constraint the engine never thought to ask — confirmation is not proof of completeness; E2 and E3 are the earliest subsequent catch-points.
-->

# E1 — Operator interview & intent-completion

### Binding · Load WHEN:
INITIATOR loads this stage immediately after E0 is complete and `seed.md` is confirmed produced and anchored at the top of context. Trigger: E0's handoff is made (status line in `seed.md` reads `[UNVERIFIED SEED — completeness not assumed; interpret in E1]`). E1 is complete once `intent_brief.md` is produced, fully provenance-tagged, and the operator has confirmed it at the Step 6 confirm gate. Do not load before E0 is done; do not proceed to E2 before the confirm gate is cleared.

## Purpose (one paragraph)
E1 is the engine's intent-completion stage. Its job is not to receive a specification — it is to *manufacture* a clear, confirmed specification starting from whatever loose seed the operator provided. The operator may give suggestion-level, imperfectly-articulated input; the engine must not depend on a complete spec. The protocol follows three moves in fixed sequence: first, generate all candidate clarifying questions the seed raises; second, self-answer as many as research can resolve so the operator is not burdened with questions the engine could answer on its own; third, surface only what genuinely needs the operator's input, keeping the interview active and bounded rather than an exhaustive form. From all inputs, the engine drafts a structured Intent Brief — five fields: mission · operator-edge · success criteria · explicit non-goals · project-type — and reflects it back for a binary yes/no operator confirmation. Every line in the Intent Brief is provenance-tagged `operator-stated` or `engine-inferred`, so that an inference is never laundered as a stated requirement. The project-type field (`build` or `decision`) is set here and determines which convergence mode E8 applies. How well this stage extracts and completes loose intent directly determines the output quality of every downstream stage.

## Kalshi referent (what proven mechanism this generalizes)
**D5** (`adapter/notes/10_theory_of_excellence.md` §6, D5 bullet) from the Kalshi adapter analysis. In the Kalshi project, the operator gave suggestion-level input and the engine needed to extract a full research mandate from it — including the operator's own domain knowledge as a primary edge source. The D5 mechanism: treat operator input as a seed, research the gaps autonomously, surface only the irreducible operator-specific questions, and reflect a structured understanding back for binary confirmation. This produced the rich operator profile (`IRON_LAW.md §1.1`) and synthesis seed (`IRON_LAW.md §4`) that grounded the entire question-generation pass — the operator's tacit knowledge, constraints, and stated intent were extracted and confirmed before any question was generated. The principle — *do the completeness work yourself; ask the operator only what you cannot answer* — is domain-general and applies unchanged to any project where the operator communicates loosely. Companion referent: **IRON_LAW.md §4 (Phase 0 — Total Synthesis)**, which established the pattern of mining primary input completely (tagging every item by epistemic status: fact / opinion / hypothesis / actionable) before generating questions. E1 generalizes that synthesis operation from a fixed transcript format to any loose seed shape.

## Protocol (the steps the INITIATOR executes)

### Step 1 — Re-anchor seed.md; hold before acting

Load the full `seed.md` produced by E0. Re-read it from the file — do not rely on a recalled version from context. Place it at the top of working context. Then hold: do not begin generating questions, designing, or synthesizing from its content yet.

The seed is a SEED, not a specification. Its apparent completeness is irrelevant at this step. A one-sentence seed and a ten-page document both enter Step 2 on equal footing. The engine's job in this stage is to *complete the intent*, not to accept the seed at face value. Any inference drawn about what the operator wants — before the confirm gate at Step 6 — is INTERPRETIVE under L-E and must not gate any downstream stage until the operator has confirmed the Intent Brief.

### Step 2 — Generate candidate clarifying questions (MOVE 1)

From the seed, identify the gaps, ambiguities, unstated constraints, and implicit assumptions you can surface that would be load-bearing in downstream stages. Generate a wide candidate list — more than you expect to ultimately ask — erring toward over-generation here since the cheap filter is later. Do not filter or resolve at this step. (Coverage here is best-effort, not guaranteed: a gap the engine cannot yet see is caught later, in E2/E3 — see Honest ceiling.)

At minimum, derive candidates covering:

- **Goal** — What is the concrete intended outcome? What does success look like in terms that can be checked, not only felt?
- **Operator-edge** — What does the operator bring that makes this project viable? Unique domain knowledge, proprietary access, a specific vantage point, personal constraints? The operator's tacit knowledge is an edge source that the interview must extract, not merely collect what the operator volunteers.
- **Success criteria** — What specific, verifiable conditions constitute success? What would make the result clearly wrong or clearly right?
- **Non-goals** — What is explicitly NOT in scope? Unstated non-goals create as much downstream drift as unstated goals.
- **Project-type** — Is this a **build** (a deliverable must be constructed) or a **decision** (a go/no-go or choice must be made)? The answer determines E8's convergence mode.
- **Implicit assumptions** — What constraints or domain facts does the seed silently presuppose that, if wrong, would invalidate the project?

For each candidate question, note its source: either it traces to a gap or ambiguity present in the seed, or it is a structurally necessary question the seed never touched (mark these `[not in seed]`).

*Calibration note:* Generate broadly here. Filtering happens in Step 3 when research resolves many of these. An under-generated candidate list in Step 2 propagates as a thin Intent Brief.

### Step 3 — Self-answer what research can (MOVE 2)

Before presenting any question to the operator, attempt to answer each candidate question using available research. Research includes public knowledge about the field, domain standards, known failure modes in this type of project, and anything else the engine can access independently of the operator.

For each candidate question, assign one of three dispositions:

- **`[RESEARCH-ANSWERED: <answer>]`** — available knowledge yields a high-confidence answer. This question is resolved; the engine records the answer and does not surface the question to the operator.
- **`[PARTIALLY-ANSWERED: <what is known> — residual gap: <what is not>]`** — research provides partial information. A narrowed, more specific question may still need the operator, or the partial answer may be sufficient to proceed with an `[engine-inferred]` tag and operator confirmation at Step 6.
- **`[NEEDS-OPERATOR: <reason>]`** — only the operator can answer this, because it requires their private intent, personal constraints, domain expertise not available in public sources, or a deliberate choice the engine cannot make on their behalf.

A question is not surfaced to the operator if research can answer it adequately. The engine does this work; offloading researchable questions to the operator is an info-dump and violates D5.

*Record the full disposition list — every candidate question with its assigned disposition — in the session's Ledger entry. This is the audit trail for which questions were self-answered and which were genuinely operator-irreducible.*

### Step 4 — Ask the operator only what genuinely needs him (MOVE 3)

Surface only the `[NEEDS-OPERATOR]` questions to the operator. Present them concisely, ordered by their importance to downstream stages: goal and project-type first; operator-edge next; constraints and non-goals after. Prefer a single batched exchange over a sequential interrogation.

Calibration guidance:
- If the `[NEEDS-OPERATOR]` list exceeds 5–7 questions after Step 3, re-examine whether Step 3 was shallow — a list that long usually means research could have resolved more.
- If the list is empty (a fully research-answerable seed), skip directly to Step 5.
- If the seed already contains explicit answers to some candidate questions, mark those `[operator-stated]` and do not re-ask.

The interview is active and bounded, not open-ended. Collect what only the operator can provide, then end the exchange.

### Step 5 — Draft the Intent Brief with provenance tags on every line

Using all inputs — the seed, research-derived answers, and operator responses from Step 4 — draft the structured Intent Brief. The Intent Brief has exactly five fields:

**1. Mission**
What the operator is actually trying to accomplish, stated in concrete terms. Prefer a single well-formed sentence naming the goal and intended outcome. If the mission remains ambiguous after Steps 3–4, state the ambiguity explicitly rather than papering over it with a vague formulation.

**2. Operator-edge**
What the operator brings that makes this project viable: unique domain knowledge, proprietary access, a specific vantage point, personal constraints, or a combination. This field is rarely well-specified in a loose seed — the interview should probe for it directly if research cannot surface it. If no operator-edge can be established, record `[operator-edge: not established — engine will proceed with domain-research alone]` rather than leaving the field empty or inventing a plausible edge.

**3. Success criteria**
Concrete, verifiable conditions under which the output is considered successful. These must be checkable, not aspirational. Prefer statements of the form "success is achieved when [observable condition] is true" over "success is when it feels complete."

**4. Explicit non-goals**
What the project does NOT include. This field is almost always partly `[engine-inferred]` on first draft: the engine proposes what it believes is out of scope, and the operator confirms or corrects. An empty non-goals field is a flag — a project without stated non-goals tends to absorb adjacent problems.

**5. Project-type** (`build` or `decision`)
- `build` — the goal is to construct a deliverable (a system, a document, a design, a plan). E8 applies **total-aspect-coverage** convergence: every E5 aspect must be answered to build-depth before convergence is declared.
- `decision` — the goal is to reach a go/no-go or a choice among alternatives. E8 applies **decision-saturation** convergence: the central decision is answerable; remaining open questions would not change it.

When the seed is ambiguous about project-type — for instance, the operator says "I want to build X" but the real question is whether X is worth building — surface the distinction explicitly before proceeding. An ambiguous project may be a decision project first and a build project second.

**Provenance tagging — required on every line of the Intent Brief:**

Every bullet, sentence, or field entry must carry one of two base tags (plus two derived forms):

- `[operator-stated]` — the operator explicitly provided this in the seed or in response to a Step 4 question. The engine may reword for clarity, but the substance originated with the operator.
- `[engine-inferred]` — the engine derived this from research or pattern-completion. Under L-E, engine-inferred lines are INTERPRETIVE until the operator confirms the Intent Brief. An inference must never be recorded as a stated requirement; the tag is what prevents silent laundering.

Two derived forms appear after the confirm gate:
- `[engine-inferred — operator-confirmed]` — the inference was presented to the operator and accepted without change. This is not the same as `[operator-stated]`; the inference was accepted, not originated.
- `[unknown — flag for E2/E3]` — no confident answer could be established via research or operator input. Mark the gap explicitly rather than substituting a plausible-but-unverified answer. An unknown declared explicitly is a planned catch-point for E2 or E3; a confident-sounding wrong inference is a hidden failure.

### Step 6 — Reflect back the Intent Brief and obtain a binary confirmation (CONFIRM GATE)

Present the full Intent Brief to the operator in a single block. For each field, briefly identify whether its entries are `operator-stated`, `engine-inferred`, or `unknown`. Ask for a binary confirmation:

> "Does this Intent Brief correctly capture your intent? **Yes** (proceed to E2) / **No** — please correct [field or line]."

**At the confirm gate (L-A §6 applies):**

- **If YES:** Persist the confirmed Intent Brief as `intent_brief.md`. Provenance tags carry into the persisted document, with the one transformation defined below — every accepted `[engine-inferred]` line is upgraded to `[engine-inferred — operator-confirmed]`; `[operator-stated]` and `[unknown — flag for E2/E3]` lines carry unchanged. E1 is complete; hand off to E2.
- **If NO with corrections:** Apply corrections, note each change and the original inference in the Ledger entry, and re-present the revised Intent Brief. Repeat Step 6 until the operator gives an explicit YES. Do not assume a corrected draft is final without a fresh confirmation.
- **On a correction to an `[engine-inferred]` line:** log the original inference alongside the operator's correction — do not silently overwrite. If the correction reveals a structural concern the engine cannot resolve (e.g. the corrected mission changes the project-type), surface the implication to the operator before proceeding, per L-A §6.
- **On acceptance of an `[engine-inferred]` line without change:** upgrade the tag to `[engine-inferred — operator-confirmed]`. The inference was accepted; it is not reclassified as `[operator-stated]`.

A confirmed Intent Brief is not proof of completeness — see §8 (Honest ceiling). E2 and E3 are the earliest subsequent catch-points for gaps the interview missed.

## Inputs / Outputs

**Inputs:**
- **`seed.md`** — the operator's raw input, written verbatim by E0 with a metadata header. Format: Markdown file. Location: (1) top of working context (F4 anchor, re-read at Step 1); (2) `work/<session-id>/seed.md` for durability. This is the sole artifact E1 may treat as operator-provided input from before its own session.

**Outputs:**
- **`intent_brief.md`** — the structured Intent Brief, operator-confirmed at the Step 6 confirm gate. Format: Markdown file. Location: `work/<session-id>/intent_brief.md`. Contents: five fields (mission · operator-edge · success criteria · explicit non-goals · project-type), every line carrying one of the four provenance tags. The project-type field is consumed by E8 to select convergence mode (build → total-aspect-coverage; decision → decision-saturation). Also consumed by E2 (domain research orientation) and E5 (aspect decomposition). `intent_brief.md` must not be produced before the confirm gate is cleared.

*Supporting Ledger artifact:* the MOVE-2 disposition list from Step 3 — each candidate question with its `[RESEARCH-ANSWERED]` / `[PARTIALLY-ANSWERED]` / `[NEEDS-OPERATOR]` disposition — is recorded in the session's Ledger entry as a mandatory audit trail. It is not a standalone file but must appear in the Ledger entry before E1 is marked done.

## Acceptance checks (binary)

1. **Seed treated as a seed, not a spec?** YES if Step 1 explicitly frames `seed.md` as a seed regardless of apparent completeness, explicitly holds the INITIATOR from acting on it before intent-completion, and no step anywhere in the protocol presupposes a complete or well-formed spec as a precondition. NO if any step is contingent on the seed being sufficiently complete before proceeding, or if Step 1 permits drawing load-bearing inferences before the Step 6 confirm gate.

2. **Three-move sequence present and ordered?** YES if Steps 2, 3, and 4 are distinct and sequential — (MOVE 1) generate candidate questions, then (MOVE 2) self-answer what research can, then (MOVE 3) surface only what needs the operator — with no move skipped, merged, or reordered. NO if any move is absent, if the sequence is collapsed into a single "ask the operator" step, or if the operator is contacted before research self-answers are attempted.

3. **Five-field Intent Brief and confirm gate present?** YES if Step 5 defines exactly five named fields (mission · operator-edge · success criteria · explicit non-goals · project-type) and Step 6 requires a binary yes/no operator confirmation before `intent_brief.md` is persisted. NO if any field is missing, unnamed, or merged with another; or if `intent_brief.md` may be produced without an explicit operator YES.

4. **`intent_brief.md` fully specified in Inputs / Outputs?** YES if `intent_brief.md` appears as an output in the Inputs / Outputs section with its format (Markdown), location (`work/<session-id>/intent_brief.md`), contents (five fields + provenance tags), and a statement that it is consumed by E2, E5, and E8. NO if `intent_brief.md` is mentioned only inside the Protocol without an Inputs / Outputs entry, or if any of its three consumers is unspecified.

5. **Provenance-tag rule present and enforced?** YES if Step 5 requires every line in the Intent Brief to carry one of the two base tags (`[operator-stated]` or `[engine-inferred]`) plus specifies the two derived forms, and explicitly states that an inference must not be recorded as a stated requirement. NO if the tagging rule is absent, applies only to some lines, or does not distinguish the two epistemic sources.

6. **Project-type → E8 convergence mode wired?** YES if the project-type field is defined as `build` or `decision` in Step 5, and the stage explicitly states that this value is consumed by E8 to select total-aspect-coverage (build) vs decision-saturation (decision) convergence — both in the Protocol (Step 5) and in the Inputs / Outputs section. NO if project-type is recorded in the Intent Brief but its downstream effect on E8 is stated only in one location or not at all.

## Honest ceiling
A confirmed Intent Brief is not proof of completeness. The operator may confirm a brief that *feels* right to them while silently omitting a load-bearing constraint, an implicit assumption, or a domain-specific edge case the engine never thought to ask about. Confirmation under Step 6 means the operator agrees with what is written — it does not guarantee that everything load-bearing has been written. The interview is bounded by the candidate questions generated in Step 2; a gap in that generation propagates silently through Steps 3, 4, 5, and the confirm gate without triggering any alarm. The earliest subsequent catch-points are E2 (domain expert research, which surfaces domain knowledge the interview missed) and E3 (scar-tissue mining, which surfaces structural failure modes neither the operator nor the engine anticipated at the interview stage).

## Cross-references
- **E0** (`stages/E0_intake.md`) — E1's upstream producer. E0 produces `seed.md`; E1 must not begin before `seed.md` is available and anchored at top of context. E1 must not redo any of E0's receive-and-record work.
- **E2** (`stages/E2_domain_expert.md`) — E1's direct downstream consumer. E2 reads `intent_brief.md` to orient the mandatory domain-expertise research pass. Fields marked `[unknown — flag for E2/E3]` in the Intent Brief are explicit signals to E2 about where its research should focus.
- **E5** (`stages/E5_decompose_aspects.md`) — reads `intent_brief.md` to build the aspect-map that governs build-mode convergence. Project-type from E1 determines whether E5 decomposes into build-aspects (build mode) or decision sub-questions (decision mode).
- **E8** (`stages/E8_convergence_gate.md`) — reads the project-type field from `intent_brief.md` to select convergence mode: `build` → total-aspect-coverage; `decision` → decision-saturation. This wiring is established at E1 and must not be overridden downstream without an explicit operator gate.
- **L-E** (`laws/L-E_evidence_over_assertion.md`) — governs provenance tagging throughout E1. Engine-inferred lines in the Intent Brief are INTERPRETIVE under L-E until the operator confirms them at the Step 6 confirm gate. After confirmation, they are `[engine-inferred — operator-confirmed]`; they do not become `[operator-stated]`. L-E's quarantine rule applies to all seed-derived inferences before the confirm gate is cleared.
- **L-A** (`laws/L-A_adversarial_posture.md`) — governs the confirm gate under Step 6. A disagreement between an engine-inferred line and the operator's correction is surfaced and logged — never resolved internally or silently overwritten. Under L-A §6, structural disagreements that the engine cannot adjudicate are escalated to the operator as the real circuit-breaker, not resolved by internal tie-breaking.
- **GOVERNANCE.md §2** — the 8-line prompt-quality gate this file must clear; gate line (e) is the controller's responsibility and requires a codex audit result recorded in the LEDGER before this file is finalized.
