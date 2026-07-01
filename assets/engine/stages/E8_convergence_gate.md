<!--
PROMPT-QUALITY GATE (GOVERNANCE §2) — clear all 8 before marking this file "done":
[ ] a. DoD quantified      — Acceptance checks enumerate five binary YES/NO checks, each tied to a named DoD item or output artifact: build-mode per-aspect coverage table judged against aspect_map.md (check 1); decision-mode saturation criterion applied against decision_subquestions.md (check 2); count-floor named as HAZARD in Protocol body + yield/diversity gate not conflated with convergence (check 3); adversarial missing-question generation pass with binary teeth — PASS=null→cross-family overturn required; FAIL=question produced→NOT-YET-CONVERGED (check 4); verdict emitted with evidence (coverage table or saturation argument + cross-family overturn record) + downstream routing present for all three verdict types (check 5).
[ ] b. Scope manifest      — Four DoD items listed in task-15-report.md §Manifest; reconciled with file:line evidence in §Reconciliation before commit.
[ ] c. Levers, deliberate  — Seven-step Protocol (Steps 0–6; Step 3 carries separate build-mode and decision-mode branches). Mode-split at Step 1 keeps build/decision convergence criteria evaluated on separate tracks. Adversarial generation pass (Step 4) isolated as a standalone step before the cross-family overturn (Step 5) and verdict (Step 6) — the probe runs before the verdict can contaminate it. Cross-family L-A overturn (Step 5) isolated from verdict production (Step 6). Loop terminates on a binary condition at Step 4 (materially-distinct question produced or not) and a binary condition at Step 5 (overturn survived or not), never on a count. L-A invoked by reference at Step 5, not re-derived. No count mandate at any step.
[ ] d. Countermeasures     — Context-rot: aspect_map.md / decision_subquestions.md and E7 answered-question records re-read from file at Step 0, not recalled from context; five load-bearing constraints restated at top of Protocol block. Satisficing: five binary acceptance checks + verdict requires artifact evidence (coverage table or saturation argument + overturn record in Ledger), not self-report. Sycophancy: Step 4 adversarial generation pass structurally prevents vibe-convergence; Step 5 L-A cross-family overturn with mandatory asymmetric extra scrutiny on the flattering "converged" verdict. Hallucination: verdict pinned to E8 Ledger entry containing coverage table, saturation argument, and overturn record — "we are converged" without these artifacts is not accepted.
[x] e. Cross-family audit  — codex (gpt, task-15-codex-audit.txt): all 4 DoD DONE; ALL load-bearing categories CLEAN (count-floor, convergence-verdict teeth, adversarial materially-distinct pass, refusal-not-ship-biased, perfection, metadata, referent). 2 minors: decision-mode CONVERGED condition-1 said "all sub-questions resolved" contradicting decision-saturation (fixed in-file); E11 must support a positive-decision terminal (thread → E11/Task 20). Recorded B-0020.
[ ] f. Alignment trace     — UP: E8 → engine README stages table ("Convergence gate (dual-mode)") → GOVERNANCE.md §2 → engine mission (domain-agnostic ingestion/research engine at parity with the proven system). DOWN: dual-mode structure keyed to E1 project-type is coherent with E5's two-mode output (aspect_map.md vs decision_subquestions.md) and Theory §6 dual-convergence correction; count-is-emergent framing is coherent with Theory §6 convergence model and E5's count-is-never-a-target statements; refusal-as-first-class-output is coherent with E11's three terminals {build-ready | decision-deliverable | refusal} (reconciled as {positive-terminal, refusal} where positive-terminal = build-ready OR decision-deliverable) and Theory §6 D7 (negative/refusal terminal wired into DoD); no contradictions found.
[ ] g. Persisted           — Commit records this file; build LEDGER entry (task-15-report.md §Manifest) links to it; reachable from REGISTER task entry.
[ ] h. Honest ceiling      — Honest ceiling section names the specific residual failure mode: E8 evaluates convergence against the CURRENT aspect_map.md or decision_subquestions.md; if E5 failed to surface an aspect (E5's named ceiling — an aspect nobody thought of stays absent), E8 can certify "converged" over an incomplete frame. E9's build-probe is the next designed catch-point; real downstream use is the worst-case catch. Named as E5's ceiling propagating through E8, not as a generic disclaimer.
-->

# E8 — Convergence gate (dual-mode)

### Binding · Load WHEN:
INITIATOR loads this stage after each E7 pass is complete and signed off. Trigger: the E7 Ledger entry under `## E7 Answer Kill-Loop — <goal name>` is appended and signed off, with every question in that pass dispositioned (SURVIVED, DEFECT-REOPENED, or escalated to the human gate). E8 is called after every E7 pass — it may produce a NOT-YET-CONVERGED verdict that routes back to E6, causing multiple E7→E8 cycles before a final verdict is reached. E8 also runs after E7 reopen cycles (when defect-spawned corrected-rerun questions have been processed by E7). Do not load before E7's sign-off is recorded in the Tier-1 Ledger; E7's SURVIVED answered-question records are E8's primary evidence base. **E9 cannot run until E8 produces a CONVERGED verdict (build-mode); E11 receives E8's REFUSAL or decision-mode CONVERGED verdict directly.**

## Purpose (one paragraph)
E8 is the engine's convergence gate — the decision point at which the research loop either terminates or reopens. It reads the E7 answered-question records against the E5 aspect-map (build-mode) or decision sub-question map (decision-mode) and issues one of three verdicts: CONVERGED, NOT-YET-CONVERGED, or REFUSAL. The gate exists because two hazards would otherwise corrupt the stop decision. The first hazard is the count floor: the engine has no count target for answered questions; convergence is judged by whether every aspect of the goal is answered to build-depth (build-mode) or whether the central decision is answerable and no new question would flip it (decision-mode) — not by whether a number has been reached; a count floor degrades quality by counting padding as coverage and must be named explicitly as a hazard. The second hazard is the flattering-verdict hazard: "we are converged" is the most positive conclusion E8 can produce, and it is load-bearing — it gates E9 and, through E9, the build itself. L-A identifies this as exactly the kind of finding that must not be accepted from a self-assessment. E8 addresses the second hazard with two mandatory checks: an adversarial "missing question" generation pass with binary teeth (an active attempt to produce a materially-distinct question whose success immediately reopens the loop), and a cross-family overturn attempt with asymmetric scrutiny that the convergence verdict must survive before it is recorded. When the converged evidence does not support proceeding, E8 issues a REFUSAL — a first-class output routed to E11 (the terminal state), not a failure of the process. E8 is not ship-biased.

## Kalshi referent (what proven mechanism this generalizes)
**IRON_LAW.md §8 — exhaustiveness via Coverage Register; plus Theory §6 dual-convergence correction (operator, 2026-06-24).** In the Kalshi alpha-engine project, §8 established that the research loop runs until the Coverage Register shows zero open items and "no new real questions are being generated (convergence)." The actual stopping point in that project was 145 open questions — not because all 145 were answered, but because the decision-saturation criterion was met: the central go/no-go verdict was resolvable from the answered set, and the remaining open questions were not needed to determine it. That is the operational definition of decision-saturation: not register-zero, but "the decision is answerable and no new materially-distinct question would flip it." The dual-convergence correction (Theory §6 D4, convergence model note) added the build-mode case: for BUILD projects the convergence target is "every aspect of the goal answered to build-depth," with question count as an emergent output of exhaustive per-aspect coverage — never a target — and a count floor as a named hazard that degrades quality. E8 generalizes both: two convergence modes, each with the same underlying logic (coverage or saturation drives the stop; count is emergent), each gated by the same adversarial test (no new materially-distinct question would change the outcome), and each subject to L-A's asymmetric scrutiny on the convergence verdict itself.

## Protocol (the steps the INITIATOR executes)

> **LOAD-BEARING CONSTRAINTS (restated at top for context-rot resistance):**
> 1. **No count floor.** Convergence is judged by per-aspect coverage (build) or decision-saturation (decision), never by a question count. A count floor is a HAZARD — it degrades quality by counting padding as coverage. Any criterion of the form "≥N questions answered" is a protocol violation; convergence is not a number.
> 2. **The convergence verdict is flattering and load-bearing.** "We are converged" is the most positive finding E8 can produce. It must not be accepted from the INITIATOR's own assessment alone — it must survive an adversarial generation pass (Step 4) and a cross-family overturn attempt with asymmetric scrutiny (Step 5) before it is recorded.
> 3. **The "no new materially-distinct question" test has teeth.** The test is an active adversarial generation pass (Step 4) that attempts to produce a materially-distinct question. If it succeeds → NOT-YET-CONVERGED immediately; do not proceed to Step 5. A null from the generation pass is a flattering, load-bearing finding and must be routed through L-A (Step 5) before acceptance — it is not a confirmed "nothing found."
> 4. **Refusal is a first-class output.** E8 can conclude that the converged evidence does NOT support proceeding. That verdict (REFUSAL) routes to E11 — a complete deliverable, not a process failure. E8 is not ship-biased; the honest negative is a legitimate terminal.
> 5. **Verdict requires artifact evidence.** The convergence verdict (CONVERGED / NOT-YET-CONVERGED / REFUSAL) must be emitted with the supporting evidence: the per-aspect coverage table (build) or decision-saturation argument (decision), plus the cross-family overturn record (Step 5). A verdict without these artifacts is an unverifiable self-report; it is not accepted as a convergence declaration.

---

### Step 0 — Re-anchor from files (context-rot countermeasure)

Re-read the following from their files before doing anything else. Do not proceed from a recalled version — context degrades across long sessions; file re-reads are the context-rot countermeasure.

**(a)** Re-read `intent_brief.md` from `work/<session-id>/intent_brief.md`. Identify the project-type field (`build` or `decision`), the mission statement, and the operator's success criteria. Place these at the top of working context.

**(b)** Re-read `aspect_map.md` (if `project-type: build`) or `decision_subquestions.md` (if `project-type: decision`) from `work/<session-id>/`. Place the full aspect list or sub-question list at the top of working context.

**(c)** Re-read the E7 Ledger entry (`## E7 Answer Kill-Loop — <goal name>`) from the Tier-1 Ledger. Record: the count of SURVIVED questions, the count of DEFECT-REOPENED questions, any questions still in PENDING-CORRECTED status, and the sign-off confirmation. Do not proceed past Step 0 if the E7 sign-off is absent from the Tier-1 Ledger or if PENDING-CORRECTED questions from the current E7 pass have not been resolved.

---

### Step 1 — Select mode

From `intent_brief.md`, read the project-type field:

- **`build`** — a deliverable must be constructed; proceed with the BUILD-MODE branch of Step 3, then Steps 4–6.
- **`decision`** — a go/no-go or choice must be made; proceed with the DECISION-MODE branch of Step 3, then Steps 4–6.

The mode is fixed at E1 and does not change within a session. Do not re-derive or reinterpret the project-type here; read it from the file as set by E1.

---

### Step 2 — Yield and diversity gate (shared pre-check)

Before assessing convergence, confirm the answered-question set is not dominated by padding. Apply both checks to the SURVIVED questions from the E7 Ledger:

**(a) Effective-yield check (per question):** Each SURVIVED question must have produced a distilled answer that advances the understanding of at least one E5 aspect (build) or one decision sub-question (decision). A question whose answer merely restates a finding from another answered question without extending it, or whose answer cannot be tagged to any E5 aspect or decision sub-question, is padding. Record the effective-yield count: the number of SURVIVED questions that pass this check.

**(b) Diversity check:** The SURVIVED questions' aspect-tags (build) or decision sub-question tags (decision) must span the set of aspects or sub-questions represented in the map. Questions overwhelmingly clustered on one aspect while others have zero addressed questions indicate a structurally thin battery that cannot support a convergence judgment across the full map.

**Disposition:**
- If the effective-yield count is substantially lower than the total SURVIVED count (a significant fraction of answers are padding), route to E6 for additional question generation before assessing coverage or saturation. Record the routing reason in the E8 Ledger entry.
- If the diversity check shows aspects or sub-questions with zero addressed questions, route to E6 specifically for those uncovered items.
- If both checks pass, proceed to Step 3.

> **COUNT-FLOOR HAZARD (named explicitly):** The effective-yield count produced by this step is a QA signal — it identifies padding and structural thinness. It is NOT a convergence threshold. "A sufficient number of questions have been answered" is not a convergence criterion. That is a count floor, and it is a HAZARD: it degrades quality by confusing volume with coverage. Convergence is declared by Step 3 (per-aspect build-depth or decision-saturation), not by any question count. If the yield and diversity checks both pass but Step 3 finds gaps, the answer is more targeted questions for the gap — not a count adjustment.

---

### Step 3 (BUILD-MODE) — Per-aspect coverage assessment

*Execute when `project-type: build`.*

For each aspect in `aspect_map.md`, assess whether it is **answered to build-depth**, using the following criterion:

> **Build-depth criterion:** An aspect is answered to build-depth when the SURVIVED answered-question records contain at least one distilled answer that is specific enough that a build decision can be made on that dimension — meaning the answer identifies what must be done, what constraints must be honored, or what failure mode must be avoided, at a level of specificity where a practitioner can act on it without requiring further research into this aspect.

A distilled answer that is correct but generic — "this aspect matters and should be addressed" — does not meet build-depth. A distilled answer that identifies the specific approach, constraint, or failure mode for this goal and this context does.

For each aspect, assign one of the following statuses:

- **ANSWERED-TO-DEPTH** — build-depth criterion met; evidence: the specific question reference(s) whose distilled answers satisfy it.
- **ANSWERED-PARTIAL** — some SURVIVED questions address this aspect, but the answers are too general, too hedged, or leave a specific sub-concern unresolved that a practitioner would need before building. Record what remains unresolved.
- **NOT-ANSWERED** — no SURVIVED questions address this aspect at all.

Assemble the **per-aspect coverage table**:

| Aspect label | Status | Evidence (question ref(s)) | Gap or unresolved sub-concern |
|---|---|---|---|
| (each E5 aspect) | ANSWERED-TO-DEPTH / PARTIAL / NOT-ANSWERED | (E7 ref(s)) | (if any) |

The per-aspect coverage table is the artifact E8's build-mode verdict rests on. It is not complete until every aspect in `aspect_map.md` has an entry.

**Pre-convergence condition:** Build-mode convergence cannot be declared unless EVERY aspect is ANSWERED-TO-DEPTH. A single PARTIAL or NOT-ANSWERED entry is sufficient for a NOT-YET-CONVERGED verdict. Do not proceed to Step 4 until the table is complete and every entry has a status.

---

### Step 3 (DECISION-MODE) — Decision-saturation assessment

*Execute when `project-type: decision`.*

Decision-saturation is reached when the central decision is answerable from the answered-question set and no new materially-distinct question would change it.

Assess each sub-question in `decision_subquestions.md` using the following statuses:

- **RESOLVED** — SURVIVED answers definitively address this sub-question's contribution to the central decision; the answer is specific enough to settle this dimension.
- **PARTIALLY-RESOLVED** — some SURVIVED answers address this sub-question but the evidence is ambiguous, incomplete, or rests on an assumption whose reversal would alter the sub-question's resolution.
- **UNRESOLVED** — no SURVIVED questions address this sub-question.

Assemble the **decision-saturation argument**:

1. Per-sub-question resolution table (each sub-question from `decision_subquestions.md` with its status and supporting question ref(s)).
2. Current decision-facing picture: what the central decision resolves to given the answered evidence as a whole.
3. Assessment of remaining uncertainty: for each PARTIALLY-RESOLVED or UNRESOLVED sub-question, state whether its resolution would materially alter the current decision direction or whether the decision is insensitive to it.

**Pre-saturation condition:** Decision-saturation cannot be declared if any UNRESOLVED sub-question would materially alter the decision, or if any PARTIALLY-RESOLVED sub-question's ambiguity creates a genuine possibility of the decision flipping. In either case, the tentative status is NOT-YET-CONVERGED and Step 4 should be entered reflecting that status.

---

### Step 4 — Adversarial "missing question" generation pass

This step's explicit job is to attempt to DEFEAT the tentative convergence or saturation finding from Step 3. It is the mechanism that gives the "no new materially-distinct question" test teeth — a vibe that "we seem done" is not a convergence criterion; this active adversarial probe is.

**A materially-distinct question** is one that, if answered differently than the current evidence suggests, would either: (a) change at least one aspect from ANSWERED-TO-DEPTH to PARTIAL or NOT-ANSWERED (build-mode), or (b) flip or substantially alter the central decision direction (decision-mode). A question that adds nuance or detail without changing any aspect's depth status or the decision's direction is not materially-distinct and does not reopen the loop.

Execute the generation pass as follows:

**Step 4a — State the current convergence picture as an explicit target.**

Write the tentative convergence claim: "Tentatively, every E5 aspect is answered to build-depth [or: the central decision is saturated]. The evidence supporting this is: [brief summary of the coverage table or saturation argument from Step 3]."

This explicit statement is the target the generation pass tries to overturn. Naming it is not optional — the probe cannot be systematic without a concrete claim to attack.

**Step 4b — Probe for materially-distinct missing questions.**

For **build-mode**, probe each E5 aspect category-axis (foundational/structural, experiential/user-facing, operational/lifecycle, integrity/error-state, constraint/compliance) and ask: "Is there a question whose answer would reveal that the current coverage of [this aspect] is insufficient for a build decision — either because the existing answer is wrong, too general, or missing a specific sub-concern?" If the coverage table already shows a PARTIAL entry, probe its specific gap: "What question would resolve this gap, and if answered contrary to the current evidence, would it change the depth verdict?"

For **decision-mode**, probe each decision dimension from `decision_subquestions.md` and ask: "Is there a question whose answer would flip or substantially alter the current decision direction — either because an unresolved sub-question is more pivotal than assessed, or because an assumption underlying the current picture has not been tested?"

Additionally, for **both modes**, probe the collective assumption base: "What assumption does this evidence collectively rest on that has not been tested? If that assumption is wrong, does the convergence or saturation verdict collapse?"

**Step 4c — Binary verdict from the generation pass.**

- **PASS (null result):** The generation pass produced no materially-distinct question. Record the specific probe axes checked and the null result in the E8 Ledger entry. This null is a load-bearing, flattering finding — proceed to Step 5 for cross-family overturn. Do NOT record CONVERGED here; the null is a precondition for Step 5, not a verdict.

- **FAIL (question produced):** The generation pass produced at least one materially-distinct question. Record the question text, which probe axis surfaced it, and why it is materially distinct (which aspect it would change, or how it would alter the decision). Assign spawn-source `E8/adversarial-gen/<session-id>`. The E8 verdict for this pass is **NOT-YET-CONVERGED**. Do not proceed to Step 5. Route to E6 (to generate and process the new question) → E7 → re-enter E8 on the next pass.

A FAIL requires only that a materially-distinct question was generated — not that it has been answered. The generation of the question is sufficient to reopen the loop. "Done" has un-finished itself.

<example>
For a build project whose goal is to redesign a document-signing workflow so that a first-time user completes their first signature in under three minutes without support intervention: the Step 3 coverage table shows all aspects answered to build-depth (instruction clarity, form-field labeling, progress indicators, error recovery for invalid document format, email delivery confirmation). Step 4b probes the integrity/error-state axis: "Is there a question whose answer would reveal that the error-recovery coverage is insufficient?" The generation pass surfaces: "What happens when the user's session expires mid-signing after the document has been partially annotated but before final submission?" — a materially-distinct question not addressed in the answered set, whose answer could require a redesign of the progress-persistence and session-recovery mechanisms. Step 4c result: FAIL → record the question with spawn-source E8/adversarial-gen, route to E6 → E7, verdict is NOT-YET-CONVERGED.
</example>

---

### Step 5 — Cross-family overturn of the convergence verdict (L-A in full)

*Execute only if Step 4c returned PASS (null result). If Step 4c returned FAIL, skip Step 5 and record the NOT-YET-CONVERGED verdict in Step 6.*

A null result from Step 4 is the pre-condition for declaring convergence — but "we are converged" is the most flattering load-bearing verdict E8 can produce, and a flattering positive finding attracts more scrutiny under L-A, not less. This step applies L-A in full to the convergence verdict.

**Invoke L-A Steps 2–6 for the convergence verdict.** The authoritative mechanism is in `engine/laws/L-A_adversarial_posture.md`; the following names the required actions by reference:

**(a) Cross-family submission (L-A Step 2):** Submit the convergence verdict, the per-aspect coverage table or decision-saturation argument (from Step 3), and the Step 4 null result and probe log to a cross-family verifier. The verifier's explicit instruction is: "Your job is to attempt to OVERTURN this convergence verdict. What materially-distinct question is missing from the answered set? What would show that coverage is incomplete (build) or that the decision is not yet saturated (decision)? Apply the four corruption guards (C1–C4)." The verifier must be a different model family from the INITIATOR. Cap the panel at 2–3 diverse verifiers; additional verifiers from the same training lineage do not add independent signal.

**(b) Asymmetric extra scrutiny — MANDATORY (L-A Step 3):** "We are converged" is a positive, flattering finding. It receives at least one additional scrutiny pass beyond the standard overturn attempt, as required by L-A. Specifically: assign a second verifier pass focused on the coverage evidence and the Step 4 probe methodology (not just the conclusion). The additional scrutiny pass must reach a CONCLUSIVE failed-to-overturn result before the CONVERGED verdict may be recorded. An inconclusive extra pass does NOT satisfy the asymmetry requirement — it must be resolved by re-running the pass with a differently-framed verifier or escalated to the human gate per L-A Step 6.

**(c) Four corruption guards — invoke L-A Step 4 (C1–C4) in full.** The authoritative definitions are in `engine/laws/L-A_adversarial_posture.md` Step 4. Apply each exactly as specified there. Do not substitute a weaker local version.

**(d) Disagreement handling (L-A Step 6):** If the cross-family verifier produces a materially-distinct question → NOT-YET-CONVERGED; record the question with spawn-source `E8/cross-family-overturn/<session-id>` and route to E6 → E7. If the INITIATOR and verifier disagree on whether a generated question is materially-distinct, surface both positions with their supporting evidence to the operator per L-A Step 6; do not resolve the disagreement internally.

**Record in the E8 Ledger entry (under `## E8 Convergence Gate — <goal name> (pass <N>)`):**
- The verifier family used
- The overturn attempt result: survived / challenged / inconclusive
- The asymmetric extra scrutiny result and whether it was conclusive (required before CONVERGED may be recorded)
- L-A C1–C4 corruption guard evidence (per guard, as specified in L-A Step 4)
- Any spawned questions with their spawn-sources
- The disposition: proceed to Step 6 verdict / reopen via E6→E7 / escalate to human gate

A convergence verdict whose Ledger entry records only an INCONCLUSIVE cross-family overturn result FAILS the acceptance gate. A CONVERGED verdict without the asymmetric extra scrutiny result confirmed conclusive FAILS the acceptance gate.

---

### Step 6 — Verdict and routing

After Steps 3–5, issue the final verdict. Exactly one of the following:

---

#### 6a — CONVERGED

**All five conditions must hold:**
1. Every E5 aspect is ANSWERED-TO-DEPTH in the coverage table (build-mode) OR the decision-saturation argument confirms the central decision is answerable and no remaining unresolved sub-question would materially change it — decision-insensitive sub-questions may stay open (decision-mode; this is saturation, NOT "every sub-question resolved").
2. The adversarial generation pass (Step 4) produced no materially-distinct question.
3. The cross-family overturn attempt (Step 5) failed to overturn the verdict and the overturn result is SURVIVED (not INCONCLUSIVE).
4. The asymmetric extra scrutiny pass (Step 5b) reached a CONCLUSIVE failed-to-overturn result.
5. No INITIATOR/verifier disagreement was resolved internally; any unresolved disagreement was escalated to the human gate per L-A Step 6.

**Emit with evidence:**
- Verdict: **CONVERGED**
- Per-aspect coverage table (build) or decision-saturation argument (decision) — the artifact, not a summary
- Cross-family overturn record: verifier family, overturn result SURVIVED, asymmetric extra scrutiny result CONCLUSIVE, C1–C4 evidence
- Routing: build-mode CONVERGED → feed E9 (the mandated build-probe); decision-mode CONVERGED → feed E11 (terminal state with the decision as the deliverable)

Record in the E8 Ledger entry.

---

#### 6b — NOT-YET-CONVERGED

**Any of the following conditions is sufficient:**
1. One or more E5 aspects are ANSWERED-PARTIAL or NOT-ANSWERED (build-mode).
2. One or more decision sub-questions are UNRESOLVED or PARTIALLY-RESOLVED with a genuine possibility of altering the decision (decision-mode).
3. The yield or diversity gate (Step 2) identified aspects or sub-questions needing more targeted questions.
4. The adversarial generation pass (Step 4) produced at least one materially-distinct question.
5. The cross-family verifier (Step 5) produced at least one materially-distinct question, or an inconclusive overturn result was not resolved before this verdict was issued.

**Emit with evidence:**
- Verdict: **NOT-YET-CONVERGED**
- Per-aspect gap table (build) identifying which aspects are PARTIAL or NOT-ANSWERED and what specifically remains unresolved, OR the unresolved decision dimensions (decision) and why their resolution is needed
- Any spawned question(s) with spawn-source `E8/adversarial-gen/<session-id>` or `E8/cross-family-overturn/<session-id>`, with rationale
- Routing: E6 → E7 → re-enter E8; questions targeting an aspect-coverage gap (from Step 2 diversity gate or Step 3 PARTIAL/NOT-ANSWERED entry) enter E6 Source 5 as `E8/aspect-coverage-gap/<ref>`; questions produced by the adversarial generation pass (Step 4 FAIL) carry spawn-source `E8/adversarial-gen/<session-id>`; E6 generates targeted questions for the identified gap(s) before E7 processes them and E8 re-evaluates

Record in the E8 Ledger entry.

---

#### 6c — REFUSAL

A REFUSAL is issued when research has converged — not when it is incomplete — but the converged evidence does NOT support proceeding with the build or the decision as originally framed. REFUSAL is a first-class output routed to E11 (the terminal state), not a process failure. The honest negative when the evidence warrants it is a complete deliverable.

**Conditions (any of the following):**
1. The answered-question set has converged (Step 3 build-mode coverage table is complete, Step 4 produced no materially-distinct question, Step 5 survived) but the overall picture conclusively shows the build as specified cannot succeed within the operator's stated constraints — a structural blocker has been confirmed by the research and no viable workaround is evident from the evidence gathered.
2. The answered-question set has converged for a decision project to a definitive "no" — the evidence does not support the go, and the decision-saturation criterion is met with that negative answer.
3. A scar-tissue finding (from E3) surfaced a cardinal failure mode that the current build plan structurally replicates, and no correction has been identified in the research that would prevent it.

**Do NOT issue REFUSAL for an incomplete research loop** — that is a NOT-YET-CONVERGED verdict. REFUSAL requires that the convergence criteria are met (Step 3 ANSWERED-TO-DEPTH or decision-saturated + Step 4 null + Step 5 survived) and the converged evidence as a whole does not support the build. A prematurely-issued REFUSAL that substitutes for thorough research is a different form of bias — it abandons the mission before the evidence warrants it.

**Emit with evidence:**
- Verdict: **REFUSAL**
- The specific converged finding(s) that drive the refusal — the evidence, not the conclusion alone
- The smaller intervention or alternative framing the evidence DOES support (per Theory §6 D7 and E11's refusal-terminal design: "the evidence does not support this; here is what it does support" is a complete deliverable)
- Routing: E11 (terminal state); a REFUSAL is a deliverable, not a failure

Record in the E8 Ledger entry.

---

## Inputs / Outputs

**Inputs:**

- **`intent_brief.md`** — the operator-confirmed Intent Brief produced by E1. Format: Markdown file. Location: `work/<session-id>/intent_brief.md`. E8 reads the project-type field (`build` or `decision`) and the mission statement at Step 0 (re-read from file, not context). Used at Step 1 (mode selection) and at Steps 3 and 4 (mission and success criteria as reference for what constitutes build-depth or decision-impact).

- **`aspect_map.md`** (build-mode only) — the aspect-map produced and signed off by E5. Format: Markdown file with per-aspect entries (label, description, provenance). Location: `work/<session-id>/aspect_map.md`. Re-read from file at Step 0. Consumed at Step 3 (per-aspect coverage assessment) as the complete list of aspects every entry in the coverage table must address, and at Step 4 (adversarial probe against E5 aspect category-axes). Must be signed off by E5 before E8 can run.

- **`decision_subquestions.md`** (decision-mode only) — the decision sub-question map produced and signed off by E5. Format: Markdown file with per-sub-question entries (text, rationale, provenance). Location: `work/<session-id>/decision_subquestions.md`. Re-read from file at Step 0. Consumed at Step 3 (decision-saturation assessment) and Step 4 (probe against decision dimensions). Must be signed off by E5 before E8 can run.

- **E7 answered-question records** — SURVIVED question records from E7's current pass, each containing a distilled answer, sources, follow-up questions registered, overturn record, and SURVIVED verdict. Format: Tier-1 Ledger entries under `## E7 Answer Kill-Loop — <goal name>`. Location: session Tier-1 Ledger file. Re-read from the Ledger at Step 0. E8 takes E7's SURVIVED verdicts as its evidence base; it does not re-verify the kill pass.

- **Law L-A** (`engine/laws/L-A_adversarial_posture.md`) — governs the cross-family overturn at Step 5. Re-read from file if not already loaded (context-rot countermeasure). Invoked by reference at Step 5; do not re-derive the mechanism here.

**Outputs:**

- **Per-aspect coverage table** (build-mode) — the table produced at Step 3 (BUILD-MODE), one entry per E5 aspect with: status (ANSWERED-TO-DEPTH / PARTIAL / NOT-ANSWERED), supporting E7 question ref(s), and gap description (if any). Format: Markdown table. Location: E8 Ledger entry under `## E8 Convergence Gate — <goal name> (pass <N>)`. Required artifact for any build-mode verdict; a build-mode verdict without this table is not accepted.

- **Decision-saturation argument** (decision-mode) — the structured assessment produced at Step 3 (DECISION-MODE), one entry per sub-question with resolution status, supporting ref(s), and the current decision-facing picture. Format: Markdown section. Location: E8 Ledger entry. Required artifact for any decision-mode verdict.

- **Convergence verdict** — one of: CONVERGED / NOT-YET-CONVERGED / REFUSAL, with its supporting evidence (coverage table or saturation argument + cross-family overturn record for CONVERGED; gap table + spawned questions for NOT-YET-CONVERGED; converged findings + alternative framing for REFUSAL). Format: Markdown verdict block in the E8 Ledger entry. Not accepted as a free self-report — the Ledger entry containing all supporting artifacts is the artifact.

- **Cross-family overturn record** (when Step 5 runs) — the record of the L-A overturn attempt: verifier family, overturn result, asymmetric extra scrutiny result, C1–C4 corruption guard evidence, disposition. Format: Markdown section in the E8 Ledger entry. Required for any CONVERGED verdict; a CONVERGED verdict without this record fails the acceptance gate.

- **Spawned question(s)** (when NOT-YET-CONVERGED from Step 4 or Step 5) — materially-distinct questions identified by the adversarial generation pass or the cross-family overturn. Format: each spawned question recorded in the E8 Ledger entry with text, derivation rationale, and spawn-source `E8/adversarial-gen/<session-id>` or `E8/cross-family-overturn/<session-id>`. Consumed by E6 (as Source 5 on reopen) and subsequently by E7.

- **E8 Ledger entry** — summary of this E8 pass. Format: Markdown section appended to the Tier-1 Ledger (append-only per L-B) under `## E8 Convergence Gate — <goal name> (pass <N>)`. Records: mode selected, yield/diversity gate result, coverage table or saturation argument, Step 4 probe log and result, Step 5 cross-family overturn record (if run), verdict, routing, and sign-off. Location: session Tier-1 Ledger file. Multiple E8 passes per session each get their own numbered entry.

Every artifact named in the Protocol section appears here. Every output listed here is referenced in the Protocol.

## Acceptance checks (binary)

1. **Build-mode per-aspect coverage table produced and judged against `aspect_map.md`?** YES if Step 3 (BUILD-MODE) produces a coverage table containing an entry for every aspect in `aspect_map.md`, each with status ANSWERED-TO-DEPTH / PARTIAL / NOT-ANSWERED, supporting E7 question ref(s), and gap description (if any), and the Protocol explicitly states that every aspect must be ANSWERED-TO-DEPTH before build-mode convergence can be declared. NO if any E5 aspect is absent from the table; if coverage status is stated without citing the specific E7 record that supports it; or if a count of answered questions (rather than per-aspect depth status) is used as the convergence criterion.

2. **Decision-mode saturation criterion applied against `decision_subquestions.md`?** YES if Step 3 (DECISION-MODE) produces a decision-saturation argument that assesses each sub-question from `decision_subquestions.md` with a resolution status (RESOLVED / PARTIALLY-RESOLVED / UNRESOLVED) and explicitly evaluates whether any PARTIALLY-RESOLVED or UNRESOLVED item would materially alter the central decision, and the Protocol defines decision-saturation as "the central decision is answerable and no new materially-distinct question would change it." NO if decision-saturation is declared without referencing `decision_subquestions.md`; if resolution status is assessed in aggregate rather than per-sub-question; or if decision-saturation is equated with a count of answered questions.

3. **Count-floor named as a HAZARD in the Protocol body; convergence criterion is coverage or saturation, never a count?** YES if (a) the Protocol body contains an explicit named HAZARD callout for the count-floor within a Protocol step (not only in a disclaimer or the Honest ceiling), (b) no Protocol step contains a criterion of the form "≥N questions answered" or a count threshold for declaring convergence, and (c) Step 2's yield/diversity gate explicitly states that the effective-yield count is a QA signal identifying padding and is NOT a convergence threshold — the two are not conflated. NO if any Protocol step treats a count of answered questions as a convergence criterion; if the count-floor is mentioned only in a disclaimer without an explicit HAZARD naming in the Protocol body; or if the yield/diversity gate output is used to gate convergence declaration directly.

4. **Adversarial missing-question generation pass present with binary teeth?** YES if Step 4 contains an adversarial generation pass that: (a) actively attempts to produce a materially-distinct question and probes systematically (not just reflects), (b) defines "materially-distinct" as a question whose answer would change an aspect's depth status (build) or flip the central decision (decision), (c) produces a binary result — PASS (null) → Step 5 required before any verdict; FAIL (question produced) → NOT-YET-CONVERGED immediately, route to E6, do not proceed to Step 5 — and (d) explicitly treats the null result as a flattering load-bearing finding requiring L-A cross-family overturn rather than as a confirmed conclusion. NO if the "no new materially-distinct question" check is described as a general reflection or single-model self-assessment without systematic probing; if a null can be accepted as the final word without a cross-family overturn; or if the check has more than two outcomes at Step 4c (the binary PASS/FAIL is not maintained).

5. **Verdict emitted with evidence and cross-family overturn record; downstream routing present for all three verdict types?** YES if (a) the CONVERGED verdict requires the per-aspect coverage table (build) or decision-saturation argument (decision) PLUS the cross-family overturn record (verifier family named, overturn result SURVIVED, asymmetric extra scrutiny result CONCLUSIVE) all recorded in the E8 Ledger entry, and a CONVERGED verdict whose Ledger entry records only an INCONCLUSIVE overturn result is explicitly stated to FAIL this check; (b) the NOT-YET-CONVERGED verdict requires the per-aspect gap table or unresolved decision dimensions PLUS any spawned question(s) with spawn-sources recorded in the Ledger, and routing to E6→E7 is explicit; (c) the REFUSAL verdict requires the specific converged findings driving it and the alternative the evidence supports, with routing to E11 explicit; and (d) REFUSAL is present as a named first-class output, not merely as a note. NO if the verdict is accepted as a free self-report without a Ledger entry; if the cross-family overturn record is optional for CONVERGED; if the asymmetric extra scrutiny pass is optional or advisory; or if REFUSAL is absent or described as a failure rather than a complete deliverable.

## Honest ceiling

E8 evaluates convergence against the CURRENT `aspect_map.md` or `decision_subquestions.md`. It cannot catch what is not on the map. The specific residual failure mode that persists even after full compliance with E8's protocol:

**E5's ceiling propagates through E8: an aspect nobody surfaced makes a "converged" verdict correct over an incomplete frame.** E5 has its own named ceiling (E5 Honest ceiling): an aspect that nobody — operator, research, or E5's red-team — thought of at the time E5 ran stays absent from the aspect-map. E8 judges coverage against the map as written. A build project can have answered every listed aspect to build-depth, survived the adversarial generation pass, and survived the cross-family overturn — and still be missing a critical dimension that nobody framed as an aspect before E5 ran. E8 certifies "converged over the current aspect-map," not "complete over all possible dimensions of the goal." The next designed catch-point is **E9's build-probe** (the mandated thin-slice implementation, which trips over a missing aspect by trying to build something real); the further catch is real downstream use after the build is committed. There is no procedural step that surfaces a blind spot that was itself outside the frame at E5 execution time.

A green E8 verdict is a complete *process* — every listed aspect answered to build-depth, adversarial test passed, cross-family overturn survived, asymmetric scrutiny passed. It is not a proved-correct *outcome*.

## Cross-references

- **E5** (`stages/E5_decompose_aspects.md`) — supplies the primary inputs E8 judges convergence against: `aspect_map.md` (build-mode) and `decision_subquestions.md` (decision-mode). E5 sign-off is a hard prerequisite for E8 (no signed-off map = no convergence criterion). E5's Honest ceiling (an aspect nobody surfaced stays absent from the map) is the parent of E8's Honest ceiling — E5's gap propagates to E8 unchanged.
- **E7** (`stages/E7_answer_kill_loop.md`) — supplies E8's answered-question records (SURVIVED questions with distilled answers, sources, and overturn records). E7 does not decide convergence; E8 does. E8 is called after each E7 pass and may route NOT-YET-CONVERGED back to E6→E7 for additional question generation and answering. E7's bounded-loop handoff (E7 Step 8) explicitly names E8 as the loop's termination mechanism.
- **E6** (`stages/E6_question_battery.md`) — receives spawned questions from E8 (Step 4 FAIL, Step 5 verifier-produced question) via the reopen procedure; spawned questions enter E6 as Source 5. E6 runs its per-question acceptance gate before appending them to `question_battery.md`; E7 then processes them and E8 re-evaluates.
- **E9** (`stages/E9_build_probe.md`) — receives E8's CONVERGED verdict (build-mode only). E9 mandates at least one thin-slice build attempt. Surprises from E9 (a missing aspect surfaced in the build) can trigger a map extension in E5 and a re-entry to E8 for re-convergence against the extended map. E9 is the primary designed catch-point for the E5/E8 honest ceiling.
- **E11** (`stages/E11_terminal_state.md`) — receives E8's REFUSAL verdict (either mode) and E8's CONVERGED verdict (decision-mode). E11 has three valid terminals: build-ready (build-mode, arriving via E9→E10→E11), decision-deliverable (decision-mode, arriving directly from E8 CONVERGED), and refusal (either mode, from E8 REFUSAL). The spec's "two valid terminals" = {positive-terminal, refusal}, where positive-terminal = build-ready OR decision-deliverable. E8's REFUSAL is a complete deliverable at E11, not a failure.
- **L-A** (`laws/L-A_adversarial_posture.md`) — governs Step 5 in full: the cross-family overturn of the convergence verdict, the mandatory asymmetric extra scrutiny requirement (because "converged" is flattering), the four corruption guards (C1–C4), and the human gate on disagreement. The convergence verdict is a flattering, load-bearing claim (L-A Step 1); E8 applies L-A in full at Step 5 rather than re-deriving the mechanism.
- **L-D** (`laws/L-D_freeze.md`) — the bounded-loop principle governs the E6→E7→E8 cycle. The loop must terminate at a finite, testable condition; it must not run indefinitely in search of a perfection that is never found. L-D names the failure mode (infinite self-perfection regress); E8's convergence gate is the mechanism that prevents it. When E8 issues a verdict, the loop either terminates (CONVERGED or REFUSAL) or restarts with a specific gap target (NOT-YET-CONVERGED, with specific spawned questions), never with a mandate to keep generating indefinitely.
- **L-E** (`laws/L-E_evidence_over_assertion.md`) — the verdict-with-evidence requirement (load-bearing constraint 5 in the Protocol and Acceptance check 5) is the E8 application of L-E's evidence-over-assertion principle. A convergence verdict without the E8 Ledger entry containing the coverage table and cross-family overturn record is an unverifiable assertion; it is not a convergence declaration.
- **L-B** (`laws/L-B_3tier_memory.md`) — all E8 outputs (coverage table, saturation argument, overturn record, verdict, spawned questions) are appended to the Tier-1 Ledger append-only, never overwritten. Multiple E8 passes per session each produce a dated and numbered Ledger entry under `## E8 Convergence Gate — <goal name> (pass <N>)`, preserving the convergence history across passes.
- **GOVERNANCE.md §2** — the 8-line prompt-quality gate this file must clear; gate line (e) is the controller's responsibility and requires a cross-family codex audit result recorded in the build LEDGER before this file is finalized.

---

## Additive clause A1 — Design-contract build-depth + the operator-fill-slot deferral boundary (appended 2026-06-30; B-0039; L-D append-by-reference)

> **L-D note:** ADDITIVE. Does NOT modify the Binding, Steps 0–6, or acceptance checks 1–5 above; the prior content of this file is a strict prefix of this version. §4 prompt-quality clearance + cross-family codex audit recorded in BUILD-LEDGER B-0039.

**Gap filled (source):** the P5-DRY plumbing-proof walk of E8 (BUILD-LEDGER B-0038/B-0039), cross-family-codex-confirmed (codex explicitly accepted this bar; it was load-bearing in BOTH directions during the walk). Step 3's build-depth criterion ("a practitioner can act … without requiring further research into this aspect") does not define how it applies to an aspect that depends on a genuine OPERATOR INPUT not yet supplied (brand identity, proprietary content/copy, credentials/keys, real metrics) — a routine situation in build-mode, because E10 emits a SCAFFOLD (a parameterized skeleton with operator-fill slots), not a finished artifact. Without a boundary, a verifier either (a) spuriously blocks convergence on every scaffold that legitimately defers a genuine operator input, OR (b) accepts an answer that OVER-DEFERS a BUILDABLE scaffold value (one the design-contract itself must specify) by mislabeling it "operator-fill." Both failure modes occurred-or-were-prevented in the walk (A10/A12 correctly admitted on deferred-to-named-slot genuine inputs; A06 correctly held NOT-at-depth for over-deferring a buildable type scale).

**A1.1 — DESIGN-CONTRACT BUILD-DEPTH (binding).** An aspect is **ANSWERED-TO-DEPTH** (Step 3) when its design-CONTRACT is complete and actionable — the structural decisions, constraints, component/token contracts, default behaviors, and failure-mode preventions a practitioner needs to build the scaffold for this aspect — EVEN IF a concrete value is deferred, PROVIDED the deferred item is a NAMED operator-fill slot meeting A1.2. The deferral must be EXPLICIT (the contract names the slot, who fills it, and when), not an unresolved gap. A named operator-fill slot is an INPUT awaited, not "further research into this aspect"; it does not block build-depth.

**A1.2 — THE DEFERRAL BOUNDARY (what may vs may not be deferred; binding).** Only a GENUINE operator input may be deferred to an operator-fill slot: a value that ONLY the operator/world can supply and that no design process can derive from the converged research — e.g. brand-identity assets (logo, exact brand colors, photography), proprietary content/copy, credentials/keys/secrets, real operational metrics. A value the design-contract itself can and MUST specify — a BUILDABLE scaffold value derivable from the converged research + design principles (e.g. a numeric type scale, spacing grid, component structure, a state machine, a default behavior, an error-recovery path) — may NOT be deferred; deferring a buildable value as "operator-fill" is **OVER-DEFERRAL** and the aspect is NOT at depth (ANSWERED-PARTIAL). **Decision test:** "Could a competent practitioner produce this value from the converged research + design principles alone, without asking the operator?" YES → it is buildable; it belongs in the contract NOW (required for depth). NO → it is a legitimate operator-fill slot; defer it, name it, and it does not block depth.

**Acceptance check 6 (binary): Build-depth deferral boundary honored?** YES if every aspect marked ANSWERED-TO-DEPTH whose answer defers a concrete value defers ONLY genuine-operator-input values (A1.2) via an explicitly-named operator-fill slot, AND no buildable scaffold value is deferred as operator-fill (any aspect that over-defers a buildable value is held ANSWERED-PARTIAL, not at depth). NO if a buildable scaffold value is accepted as operator-fill (over-deferral passed), OR if an aspect whose only residual is a legitimately-named genuine-operator-input slot is treated as blocking build-depth (legitimate deferral wrongly rejected).

**Does not contradict:** Step 3's build-depth criterion (this REFINES "act without further research" — a named genuine-operator-input slot is an awaited INPUT, not research; an over-deferred buildable value IS unfinished design, correctly not-at-depth), Step 6a's CONVERGED conditions (every aspect must still be ANSWERED-TO-DEPTH — this clause only defines precisely when that holds for operator-input-dependent aspects), the count-floor HAZARD stance (adds no count target), or E10's scaffold-with-operator-fill-slots design (this clause is the convergence-side recognition of exactly that downstream output shape).

---

## Additive clause A2 — Per-clause build-depth for COMPOSITE aspects (appended 2026-06-30; B-0041; L-D append-by-reference)

> **L-D note:** ADDITIVE. Does NOT modify the Binding, Steps 0–6, acceptance checks 1–5, or Additive clause A1 above; the prior content of this file is a strict prefix of this version. §4 prompt-quality clearance + cross-family codex audit recorded in BUILD-LEDGER B-0041.

**Gap filled (source):** the P5-DRY plumbing-proof walk of E8 (BUILD-LEDGER B-0040 / run-Ledger L-0019) — a cross-family codex audit finding during actual use. On the walk's first tentative "every aspect at depth" claim, Step 3 (assessed per-ASPECT with "at least one distilled answer") marked three aspects ANSWERED-TO-DEPTH on a single SURVIVED rep each — and the mandatory Step-5 cross-family overturn then CONCLUSIVELY OVERTURNED the CONVERGED claim by showing those three were COMPOSITE aspects whose single-rep evidence covered only SOME of their load-bearing clauses (in each, the cited answer resolved one buildable sub-contract of the aspect while a second, independent buildable sub-contract — entailed by the same aspect's description and grounding sources — stayed unaddressed). Step 3's per-aspect "at least one distilled answer" criterion has no mechanism to detect that an aspect bundles multiple independent buildable sub-contracts, so an uncovered clause stays invisible until Step 5 catches it — later than necessary, and only because Step 5 ran (Step 5 fires only on a tentative CONVERGED claim). **The gap:** Step 3 does not assess build-depth per load-bearing clause for a composite aspect; a single at-depth rep can mask an uncovered clause. **Alignment (UP):** this serves the engine's convergence-gate mission (a domain-agnostic stop decision at parity with the proven system) — it extends E8's existing total-aspect-coverage standard down to the clause level, so the gate certifies build-readiness over EVERY buildable sub-contract of the goal, never just a representative one.

**A2.1 — IDENTIFY load-bearing clauses (binding; at Step 3, before assigning a status).** For each aspect in `aspect_map.md`, enumerate its **load-bearing clauses** — the distinct buildable sub-contracts entailed by (a) the aspect's own description text and (b) each distinct grounding source the aspect references (the E3 scar protocol(s) and/or E2 knowledge-base finding(s) mapped to it). A sub-contract is a **load-bearing clause** when omitting it leaves the aspect's stated goal unmet for a real build — a practitioner who built every other clause but not this one would ship an incomplete or broken instance of this aspect. **Clause individuation (so the enumeration is reproducible):** a clause is one *separable* buildable sub-contract — the SEPARABILITY TEST is "can it be built, verified, or omitted independently of the aspect's other sub-contracts?" YES → it is its own clause; NO → it is part of an existing clause. Two consequences: (i) **dedupe** — when the description and one or more grounding sources reference the SAME sub-contract, they collapse to ONE clause (the same sub-contract is never counted once per source); (ii) **granularity** — a bundle of fields or conditions that must be built together as a single unit is ONE clause, while a sub-contract that is independently buildable/omittable is a SEPARATE clause. Classify each aspect: **ATOMIC** = exactly one load-bearing clause (Step 3's existing per-aspect "at least one distilled answer" applies unchanged); **COMPOSITE** = two or more load-bearing clauses. The clause set is EMERGENT from the aspect's description + grounding — never a target; this clause introduces NO clause-count threshold (a "≥N clauses" criterion would be a count-floor and is barred exactly as count-floors are at Step 2 and Step 3). **Record the CLAUSE INVENTORY in the E8 Ledger entry:** for every aspect — its ATOMIC/COMPOSITE classification, each load-bearing clause with the exact aspect-description fragment or grounding-source locator (E3 scar-protocol line / E2 knowledge-base finding) that entails it, and each deferred concrete's A1 deferral status. The inventory is the auditable artifact for acceptance check 7(a); an unrecorded classification, or a clause with no cited source anchor, is not accepted (an asserted-but-unsourced clause is barred under L-E evidence-over-assertion).

**A2.2 — PER-CLAUSE build-depth + coverage-table format for a COMPOSITE aspect (binding).** A COMPOSITE aspect is **ANSWERED-TO-DEPTH** only when EVERY one of its load-bearing clauses has at least one SURVIVED distilled answer that meets the Step 3 build-depth criterion AND honors the Additive clause A1 deferral boundary (each clause's deferred concretes are genuine operator-fill per A1.2, not over-deferred buildable values). **Coverage-table format (so per-clause coverage is auditable against the Step 3 table without modifying its columns):** for a COMPOSITE aspect, render the table's Evidence cell as a per-clause list — each load-bearing clause on its own line with its own SURVIVED ref (`<clause-label> → <E7 ref>`); render the Gap cell as the list of any uncovered clauses (empty only when every clause is covered). A single rep standing in for the whole aspect is NOT an acceptable Evidence cell for a composite aspect. A SURVIVED ref MAY be cited for more than one clause only when its distilled answer contains distinct at-depth content for EACH clause it is cited for; a ref whose at-depth content covers only some of the clauses it is attached to is exactly the barred "single rep" and does not satisfy the uncovered clause(s). If any load-bearing clause lacks a SURVIVED at-depth answer, the aspect is **ANSWERED-PARTIAL**, and the Gap cell names the specific uncovered clause(s). For a composite aspect, an uncovered load-bearing clause IS the "specific sub-concern unresolved that a practitioner would need before building" that Step 3 names as the ANSWERED-PARTIAL trigger.

**A2.3 — Relationship to Steps 4–5 (binding; does not weaken them).** The per-clause Step-3 assessment FRONT-LOADS the composite-coverage check that the Step-5 cross-family overturn would otherwise be the first — and, absent a CONVERGED claim, the only — pass to catch. It is additional rigor at Step 3; it does NOT replace, shorten, or relax Step 4 (adversarial missing-question generation) or Step 5 (cross-family overturn of the CONVERGED verdict with its mandatory asymmetric extra scrutiny). Both run in full on any tentative CONVERGED claim regardless of A2. A2 lowers the chance that Step 5 is the first catch of an uncovered clause; it never licenses skipping or abbreviating Step 4 or Step 5.

**Countermeasures (A2).** Context-rot — A2 restates the ATOMIC/COMPOSITE distinction and the separability test at the point of use (Step 3), not by cross-reference. Hallucination — the clause set is PINNED to the aspect description + named grounding sources (A2.1), never invented. Sycophancy — A2.3 front-loads into Step 3 the composite-coverage check that the flattering CONVERGED verdict would otherwise only confront at the Step-5 cross-family overturn. Satisficing — acceptance check 7 makes per-clause coverage a binary artifact requirement (the per-clause Evidence/Gap cells), not a self-report.

**Acceptance check 7 (binary): COMPOSITE aspects assessed per-clause at Step 3?** YES if (a) Step 3 enumerates, for each aspect, its load-bearing clauses from the aspect description + the distinct grounding sources, records them in the clause inventory (A2.1) — each clause with its cited source anchor — and classifies the aspect ATOMIC (one clause) or COMPOSITE (≥2); (b) every COMPOSITE aspect marked ANSWERED-TO-DEPTH renders the per-clause Evidence cell (A2.2) citing a SURVIVED at-depth answer for EVERY load-bearing clause (one evidence ref per clause, each also honoring the A1 deferral boundary), not a single rep covering only some clauses; and (c) any composite aspect with an uncovered load-bearing clause is ANSWERED-PARTIAL with the specific uncovered clause(s) named as the gap. NO if a composite aspect is marked ANSWERED-TO-DEPTH on evidence that covers only some of its load-bearing clauses; if clause identification is skipped for any aspect; or if a clause count is used as a convergence threshold (count-floor).

**Does not contradict:** Step 3's per-aspect build-depth criterion (this REFINES it — for a composite aspect "at least one distilled answer" applies PER load-bearing clause; atomic aspects are evaluated exactly as before), the Step 3 ANSWERED-PARTIAL definition (this makes its "specific sub-concern unresolved" precise for composite aspects = an uncovered load-bearing clause), Additive clause A1 (composes with it — each clause is independently subject to A1's design-contract bar and operator-fill deferral boundary), the count-floor HAZARD stance (adds NO clause-count target; the clause set is emergent and qualitative), Step 6a's CONVERGED conditions (every aspect must still be ANSWERED-TO-DEPTH — this only makes that determination stricter and earlier for composite aspects), and Steps 4–5 (A2.3 explicitly preserves them in full).

**Honest ceiling (A2):** A2 detects clause gaps that are derivable from the aspect's description + its grounding sources. It cannot surface a load-bearing clause that is itself absent from BOTH the aspect description and the grounding set — that is E5's ceiling (a dimension nobody surfaced) propagating into clause enumeration, the same residual the file's Honest ceiling already names. A2 makes the composite-coverage check earlier and systematic; it does not make it omniscient.
