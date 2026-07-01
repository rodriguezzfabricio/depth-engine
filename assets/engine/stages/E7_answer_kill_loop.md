<!--
PROMPT-QUALITY GATE (GOVERNANCE §2) — clear all 8 before marking this file "done":
[x] a. DoD quantified      — Acceptance checks enumerate six binary YES/NO checks, each tied to a named DoD item or output artifact: research→answer→overturn sequence (check 1); criteria-first documentation present before-seeing-the-artifact (check 2); deterministic-first ordering documented (check 3); asymmetry rule applied citing L-A with evidence of additional pass for positive findings (check 4); auto-reopen mechanism producing a tracked spawned question per defect (check 5); §11 research-template structure per answered-question record (check 6).
[x] b. Scope manifest      — Six DoD items listed in task-14-report.md §manifest; reconciled with file:line evidence in §reconciliation before commit.
[x] c. Levers, deliberate  — Nine-step protocol isolates each sub-task independently: reload artifacts (Step 0); identify load-bearing questions (Step 1); research + L-E evidence standard (Step 2); criteria-first write before seeing the artifact (Step 3); deterministic-first hard-fail (Step 4); cross-family kill pass with L-A invoked in full (Step 5); verdict + auto-reopen or sign-off (Step 6); decision-mode completeness probe (Step 7); E7 Ledger entry + sign-off (Step 8). Effort-calibration lever: L-A Step 5 governs elevated-effort gate per question — not ritual MAX. Asymmetry is a structural gate (positive findings route to mandatory additional scrutiny), not a volume mandate. Decomposition: criteria-first, deterministic, and judgment-based reviews are separate named steps in fixed order, each independently testable.
[x] d. Countermeasures     — Context-rot: `question_battery.md`, L-A, and L-E re-read from file at Step 0, not recalled from context; load-bearing constraints restated at top of Protocol block. Satisficing: manifest + six binary acceptance checks + defect spawns tracked in Ledger (artifact evidence, not self-report). Sycophancy: asymmetry rule (Step 5) + criteria-first (Step 3) structurally prevent post-hoc rationalization. Hallucination: answered-question records are Tier-1 Ledger entries; "answer survived overturn" is not accepted as a self-report — the Ledger entry naming the verifier family, the overturn result, and the criteria written before-seeing-the-artifact is the required artifact.
[x] e. Cross-family audit  — codex (gpt) audited 3 rounds (task-14-codex-audit{,-r2,-r3}.txt): R3 = all 6 DoD done + EVERY category CLEAN (teeth, escape-hatches, criteria-first, bounded-loop, L-A fidelity airtight, referent). Caught + fixed: Purpose-order contradiction; inconclusive-on-negative→SURVIVED hatch; L-A C1 locally hollowed (→ invoke C1–C4 by reference + Ledger evidence); asymmetry extra-pass could be inconclusive (→ must be conclusive); Step-7 null not routed through L-A (→ now is); criteria-first timestamp mandatory; negative-result spawn ref; de-Kalshi body. Recorded B-0019. (persisted-[x] = two-phase artifact, true at this commit; GOVERNANCE short-path → Task 20.)
[x] f. Alignment trace     — UP: E7 → engine README stages table ("Answer + adversarial kill-loop") → GOVERNANCE §2 → engine mission (manufacture domain-expert depth for any domain without prior lived iteration). DOWN: criteria-first + deterministic-first ordering is coherent with L-E evidence standard (Steps 2–5); auto-reopen mechanism is coherent with E6 Source 5 and E8 convergence mode; bounded-loop handoff to E8 is coherent with L-D freeze principle (no infinite regress); decision-mode completeness probe is coherent with E5's note on E7's informal check; no contradictions found.
[x] g. Persisted           — Commit records this file; build LEDGER entry (task-14-report.md §manifest) links to it; reachable from REGISTER task entry.
[x] h. Honest ceiling      — The Honest ceiling section names the specific residual failure mode: a wrong answer that the cross-family verifier ALSO believes — correlated pre-training data means a confidently-wrong answer can survive the overturn pass; the human gate, not the panel, is the real circuit-breaker, per L-A.
-->

# E7 — Answer + adversarial kill-loop

### Binding · Load WHEN:
INITIATOR loads this stage after E6 is signed off. Trigger: `question_battery.md` exists at `work/<session-id>/question_battery.md` with `effective_yield` populated and E6's Step 9 sign-off confirmed in the Tier-1 Ledger. Do not load before E6 is signed off — a battery without a completed acceptance gate lacks the spawn-source and aspect-tag provenance E7 needs to process reopened questions correctly.

**E7 reopen mode:** When E7 produces audit defects or negative results that trigger an E6 reopen, E6 generates new questions (Source 5), which are appended to `question_battery.md` under a dated reopen-cycle section. E7 then processes those new questions on re-entry — Steps 2–6 apply to each new question exactly as to the originals. The reopen loop does not run indefinitely: E8 (not E7) decides when the battery has converged. See Step 8 for the bounded-loop handoff.

## Purpose (one paragraph)
E7 is the engine's answer-and-kill stage — the operational form of law L-A. Its job is to take the E6 question battery and process each question through a rigorous loop: research the question and produce an evidence-grounded answer (applying L-E's evidence standard throughout, including the §11 research-template structure: distilled answer, sources, and registered follow-up questions); then apply criteria-first verification, where the verifier writes what a correct, sufficient answer would look like before seeing the answer, preventing post-hoc rationalization; then run all deterministic and mechanical checks before any judgment-based review, so that a check that can be run objectively is never overridden by a subjective opinion; then run a cross-family overturn pass whose explicit job is to try to defeat the answer — not to evaluate it charitably; then deliver a verdict and trigger the auto-reopen mechanism if a defect is found. If the kill pass finds a defect, "done" is revoked: a corrected-rerun question is spawned back into the E6 battery, and the original question's status returns to pending. If the answer survives, it is marked answered/verified and fed to E8. The engine applies asymmetry throughout: a positive or confirming finding receives more scrutiny than a negative finding, not less, because a flattering result that passes unchallenged is the primary documented failure mode of self-referential research. E7 runs the kill-loop body; E8 decides convergence — E7 does not loop forever on its own.

## Kalshi referent (what proven mechanism this generalizes)
**D3** (`adapter/notes/10_theory_of_excellence.md` §6, D3 bullet) from the standard-workflow theory-of-excellence analysis. D3 names the adversarial kill as a mandatory loop, not a one-shot: "for every load-bearing conclusion: a cross-family pass whose job is to overturn it; automatic re-opening (a defect spawns a corrected-rerun question, as L-0050 spawned Q-0255); and an explicit asymmetry — flattering/positive findings get MORE scrutiny than negatives. Use criteria-first verification (verifier emits success criteria before seeing the artifact) + deterministic-first hard-fail." The L-0050→Q-0255 mechanism is the specific Kalshi instantiation: a post-freeze codex audit found that the blessed mechanism rested on a data leak; the defect was not noted and closed — it spawned Q-0255 as a corrected-rerun question, which drove the corrected re-run that FALSIFIED the mechanism (L-0052). "Done" un-finished itself. E7 generalizes this mechanism: the auto-reopen is structural, not discretionary. Companion referents: **IRON_LAW.md §8** (red-team pass — before any finding is trusted, run an adversarial review whose job is to kill it; completion is defined by coverage, not by effort running out) and **IRON_LAW.md §11** (the research-prompt template: distilled answer + sources + follow-up questions registered; sub-agents return distilled outputs only; the orchestrator stays clean). The cross-family overturn pass and the four corruption guards are already generalized in L-A (`laws/L-A_adversarial_posture.md`) and are invoked by reference, not restated here.

## Protocol (the steps the INITIATOR executes)

> **LOAD-BEARING CONSTRAINTS (restated at top for context-rot resistance):**
> 1. An answer with no evidence or sources FAILS the gate — it is not counted as answered. (L-E)
> 2. A "survived overturn" verdict with no RECORDED overturn attempt FAILS the gate — self-graded verdicts are not accepted. (L-A)
> 3. A defect found during the kill pass MUST spawn a tracked corrected-rerun question. Silent notes are a protocol violation. (D3)
> 4. A positive or confirming answer MUST receive more scrutiny than a negative, not the same. (L-A asymmetry rule)
> 5. E7 does not decide convergence. After this stage's pass is complete, E8 decides whether to stop or reopen.

---

### Step 0 — Re-anchor and context-rot countermeasure

Re-read the following from their files before doing anything else. Do not proceed from a recalled version:

**(a)** Re-read `question_battery.md` from `work/<session-id>/question_battery.md`. Place the full question list (all PENDING questions, including any added by E6 reopen cycles) at the top of working context.

**(b)** Confirm that laws L-A and L-E are loaded (read from `engine/laws/L-A_adversarial_posture.md` and `engine/laws/L-E_evidence_over_assertion.md`). E7 invokes L-A and L-E by reference throughout — do not reconstruct their steps from memory.

**(c)** Re-read the E6 Ledger entry (`## E6 Question Battery — <goal name>`) for the spawn-source breakdown and effective yield. Record the count of PENDING questions as the starting baseline for E7's Ledger entry.

Do not proceed past Step 0 if `question_battery.md` is missing or if the E6 sign-off entry is absent from the Tier-1 Ledger.

---

### Step 1 — Identify and order load-bearing questions

All questions in `question_battery.md` that are not yet `answered/verified` in the Coverage Register are load-bearing (they passed E6's acceptance gate, which established their spawn-source provenance and aspect-tag). Mark each as `PENDING` in the Coverage Register if not already marked.

For ordering within the pass:
- Address questions whose answers would gate downstream aspects first — particularly those tagged to aspects that many other questions depend on (dependency-first ordering).
- For reopen cycles: process the newly appended questions (E6 reopen batch) before revisiting the original battery, so defect-spawned corrected-rerun questions are resolved as close to their trigger as possible.
- Questions tagged to the same E5 aspect may be grouped for research efficiency; the kill pass (Step 5) still applies independently per question.

Record the processing order in the Tier-1 Ledger under `## E7 Answer Kill-Loop — <goal name>`.

---

### Step 2 — Research and produce an answer (per question, applying L-E in full)

For each PENDING question, conduct research and produce an answer. Apply L-E throughout this step — all six L-E steps are active here:

**(a) Declare the question load-bearing** (L-E Step 1). Note: all E6-gated questions are load-bearing by definition; the declaration is pro forma but required before writing the answer.

**(b) Apply the evidence standard** (L-E Step 2). Every claim in the answer must cite one of the four evidence forms:
- A command and its real output (transcribed verbatim)
- A file path and line number
- A git fact (commit SHA, diff, tag, or `git log` entry)
- A cited current primary source (URL or document reference with access date, pointing to a primary source, verified current)

Banned as proof: `should` / `probably` / `likely` / `looks right` / `I'm confident` / `I believe` / a description of what a command *would* produce without running it / a self-report of diligence without a pinned artifact. Any claim using banned forms is not a load-bearing claim — it is an assertion that must be upgraded or dropped.

**(c) Label every claim by epistemic status and state fragility** (L-E Step 3): `[fact]` / `[inference]` / `[speculation]`, each with a one-sentence fragility statement naming the condition under which the claim would be revised. A deliverable where every claim is labeled `[fact]` is a signal to audit the labels.

**(d) Quarantine found and external claims until verified** (L-E Step 4): mark `[found — unverified]` until independently verified; label dependent downstream reasoning `[inference from unverified found claim]`.

**(e) Pin load-bearing conclusions to re-runnable artifacts, or label INTERPRETIVE** (L-E Step 5): a verdict, number, or go/no-go must trace to a script, golden test, frozen pre-registration, or Ledger entry. A free-model-generated conclusion is INTERPRETIVE by definition.

**(f) Apply the anti-sycophancy rule** (L-E Step 6): a positive or confirming finding receives additional scrutiny before being labeled confirmed. A clean, honest negative is a complete output.

**§11 research-template structure (mandatory for every answer):**

Each answer must be structured as follows (per IRON_LAW §11):

1. **Distilled answer** — the conclusion, with epistemic label and fragility statement. One or two sentences; the raw research goes to the Ledger, not to the conclusion. Sub-agents and research threads return distilled outputs only — never their raw exploration; the orchestrator stays clean.
2. **Sources** — the artifact citations or primary source references supporting each claim in the distilled answer. Each citation names: source, access date (for web/document sources), and the specific claim the source supports.
3. **Follow-up questions** — new questions this answer makes necessary, each labeled with the question text and its derivation reason. Register these as `open` items in the Coverage Register with spawn-source `E7/research/<question-ref>`. These are not automatically added to the battery — they become candidates for E6 reopen only if the kill pass (Step 5) identifies them as defect-driven or E8 judges further investigation necessary.

Record the distilled answer + sources + follow-up questions in the Tier-1 Ledger under the question's entry. The Ledger entry for this question is the artifact; the answer is not complete until it is pinned there.

---

### Step 3 — Criteria-first verification (BEFORE the kill pass, BEFORE seeing the answer)

BEFORE the cross-family verifier sees the answer produced in Step 2, the verifier writes explicit success criteria for this question. This step is non-negotiable and must happen in the stated order:

**Order of operations:**
1. Provide the verifier with the question text and nothing else.
2. The verifier writes: "A correct and sufficient answer to this question would: [enumerated criteria]." The criteria must be specific enough that a third party could determine independently whether an answer satisfies them.
3. Record the success criteria in the Tier-1 Ledger entry for this question, timestamped before the answer is shared with the verifier.
4. Only after the criteria are written and recorded does the verifier receive the answer.

**Why this step is separate and non-negotiable:** A verifier who has already seen a plausible answer will tend to construct criteria the answer already satisfies — the post-hoc rationalization failure mode (C4 in L-A Step 4). Criteria-first eliminates that bias by establishing what "correct" means before the artifact is under evaluation. A "survived overturn" verdict produced without criteria-first documentation is not accepted as evidence that the answer is correct; it is treated as a self-report of diligence and labeled INTERPRETIVE (L-A C2).

Record in the Ledger: the criteria as written, the verifier family, and the timestamp confirming criteria were written before the answer was shared.

---

### Step 4 — Deterministic checks (hard-fail first, before judgment-based review)

Before any judgment-based review of the answer, run all applicable deterministic and mechanical checks. These are checks whose results can be determined without interpretation. They must pass before the kill pass (Step 5) proceeds. This ordering is not negotiable — deterministic checks first.

**Applicable deterministic checks:**

**(a) Source reachability** — if the answer cites URLs, verify each is accessible and the cited claim appears at that URL (not just that the URL exists). A URL that returns 404 or a page that does not contain the cited claim is a hard failure.

**(b) Citation completeness** — every citation must name: source identity, access date (for web/document sources), and the specific claim the source supports. A citation missing any of these three components is incomplete and fails this check.

**(c) Pre-registration compliance** — if the answer invokes a rule, threshold, or criterion that was pre-registered before the research began (e.g. a decision rule in `intent_brief.md` or a frozen protocol step), verify the answer's conclusion is the one the pre-registered rule would produce on the evidence as stated, not a retroactively adjusted version. A conclusion that diverges from the pre-registered rule without a documented rationale is a hard failure.

**(d) Internal consistency** — verify the answer contains no internal contradiction (a claim A and a claim that directly negates A within the same answer). A contradiction is a hard failure.

**Disposition for deterministic failures:**
- A hard failure on any deterministic check returns the answer to Step 2 with the failure documented. The answer is NOT submitted to the kill pass — the kill pass requires a deterministically clean artifact.
- Record the check results (pass/fail per check) in the Tier-1 Ledger entry for this question, whether all pass or any fail.

---

### Step 5 — Cross-family kill pass (L-A invoked in full)

Submit the answer, its evidence, and the success criteria from Step 3 to a cross-family verifier. The verifier's explicit job is to attempt to OVERTURN the answer. This is not a charitable evaluation; it is an adversarial one.

**Invoke L-A Steps 2–6 in full for this pass.** The following summarizes the required actions by reference — the mechanism is in L-A, not re-derived here:

**(a) Verifier selection and panel cap (L-A Step 2):** Use a different model family from the INITIATOR (e.g. GPT/Codex-family if the INITIATOR is Claude-family, or vice versa). Cap the panel at 2–3 diverse verifiers. Same-family verifiers do not add independent signal. Additional verifiers beyond 3 do not improve the panel's independence.

**(b) Instruction to the verifier:** "Your job is to attempt to OVERTURN this answer. What is the strongest case this answer is wrong, incomplete, or rests on a flawed assumption? Apply the four corruption guards (C1–C4). The success criteria for a correct answer are [criteria from Step 3]."

**(c) Asymmetry rule (L-A Step 3) — MANDATORY for positive or confirming findings:** If the answer is positive or confirming — it confirms a hypothesis, finds an approach viable, finds no blocking obstacle, or yields a strong result — it receives at least one additional scrutiny pass beyond what would be applied to a negative finding. Specifically:
  - Assign a second verifier pass focused specifically on the positive finding's evidence base (not just the conclusion).
  - Treat "the panel did not overturn this positive finding" as evidence of process, not evidence of correctness. A flattering result that survives a single overturn attempt is provisional. A flattering result that survives an additional scrutiny pass is confirmed-by-process (not proven correct).
  - Document the additional pass in the Ledger entry: what was the positive finding, what additional scrutiny was applied, and what the result was.
  - **The additional scrutiny pass must itself reach a CONCLUSIVE result (failed-to-overturn).** An inconclusive extra pass does NOT satisfy the asymmetry requirement and blocks the SURVIVED verdict. A positive/flattering finding whose required extra scrutiny pass returns INCONCLUSIVE must be resolved: re-run the extra pass with a stronger or differently-framed verifier (or a different model family), or escalate to the human gate per Step 5e / L-A Step 6. The gate is binary — for positive findings, both the standard kill pass AND the extra scrutiny pass must be conclusive before SURVIVED may be recorded.

If the answer is negative or null (finds no viable approach, finds a blocking obstacle, concludes against proceeding) — apply the standard kill pass without the asymmetry amplification. The asymmetry protects against the documented bias toward positive results; a negative result is less likely to be a sycophancy artifact.

**(d) Four corruption guards — invoke L-A Step 4 in full:** Apply C1–C4 as defined in `engine/laws/L-A_adversarial_posture.md` Step 4. Do not re-derive or paraphrase them here — the authoritative, non-negotiable definitions are in L-A. Each guard must be applied exactly as specified there. Do not substitute a weaker local version of any guard.

**(e) Disagreement escalation (L-A Step 6):** If the INITIATOR and the cross-family verifier disagree — the verifier overturns or challenges the answer and the INITIATOR believes the answer is sound — surface both positions with their supporting evidence to the operator. Do not resolve the disagreement internally. Do not use a same-family tie-breaker.

**Record in the Tier-1 Ledger entry for this question:**
- Verifier family used
- The success criteria (from Step 3) — confirming they were written before the answer was shared
- The overturn attempt result: survived / challenged / inconclusive
- **L-A C1–C4 corruption guard evidence:** for each guard, the specific artifact or disposition that satisfies it, applied as L-A Step 4 specifies — C1: sealed hold-out identity and independent re-derivation reconciliation result and harness-audit party; C2: artifact name pinned (or INTERPRETIVE disposition if no artifact); C3: verifier family confirmation (genuinely cross-family, not same-lab under a different name); C4: prose-persuasiveness flag noted if applicable, verdict weighted on artifact. A Ledger entry that records only "cross-family pass completed" without per-guard C1–C4 evidence does not satisfy this requirement and the SURVIVED verdict is blocked.
- Whether the asymmetry rule was applied (required if the answer was positive/confirming), what the additional pass showed, and whether the extra pass reached a CONCLUSIVE failed-to-overturn result
- The disposition (proceed to Step 6a / reopen via Step 6b / escalate to human gate)

A "survived overturn" verdict with no Ledger entry naming the verifier family and overturn result is not accepted. A verdict without a recorded overturn attempt is an INTERPRETIVE self-assessment, not a verified verdict.

---

### Step 6 — Verdict and auto-reopen

After the kill pass, determine the disposition from one of three outcomes:

---

#### 6a — SURVIVED (no defect found, answer confirmed-by-process)

1. Mark the question `answered/verified` in the Coverage Register.
2. Record in the Tier-1 Ledger entry: the distilled answer, sources, follow-up questions registered (from Step 2), the overturn record (from Step 5), the asymmetry record (if applicable), and the verdict: **SURVIVED**.
3. The follow-up questions from Step 2 remain registered in the Coverage Register as `open` items; they do not auto-enter the battery but are candidates for E6 reopen if E8 judges further investigation necessary.
4. **Negative-result spawn (when applicable):** If the SURVIVED answer is negative or null — finds no viable approach, confirms a blocking obstacle, or conclusively negates a hypothesis — and the negative finding materially changes the decision or build picture (would prompt new investigation directions or contingency questions), spawn a new question targeting the implications of the negative finding. Assign spawn-source `E7/negative-result/<original-question-ref>`. Trigger an E6 reopen using the same procedure as Step 6b items 3–4, substituting spawn-source `E7/negative-result/<ref>` for `E7/audit-defect/<ref>`. Record the spawned question and its spawn-source in the Tier-1 Ledger entry. A negative finding that materially changes the picture without triggering a spawn must be explicitly documented as not requiring one, with a rationale; silence is not accepted.
5. Feed the answered-question record to E8's convergence evaluation.

---

#### 6b — DEFECT FOUND (kill pass overturned or substantially challenged the answer)

A defect is any of the following findings by the kill pass: (i) a flaw in the answer's reasoning that the evidence does not support; (ii) a claim that rests on an unverified assumption surfaced by the verifier; (iii) an answer that fails a deterministic check newly identified during the kill pass; (iv) an answer whose conclusion the verifier overturned with stronger evidence; (v) a finding that the answer fails the success criteria written in Step 3.

When a defect is found, execute all of the following — each is mandatory, not optional:

1. **Revoke done-status.** The question's Coverage Register status is set to `PENDING-CORRECTED`. "Done" is revocable. The original answer is not discarded — it remains in the Ledger as a versioned record — but it is no longer the active answer.

2. **Spawn a corrected-rerun question.** Write a new question that specifically targets the identified defect. The corrected-rerun question must be specific: it states what the defect was, what a corrected investigation would establish, and what evidence would resolve it. Assign it spawn-source `E7/audit-defect/<original-question-ref>`.

   This is the auto-reopen mechanism: a found defect spawns a corrected-rerun question; the original "done" status is revoked. The defect found by the kill pass is not a closed issue — it becomes the most specific possible spawn source for a new question. "Done" can un-finish itself.

3. **Do NOT silently note the defect.** A defect documented only as a note in the Ledger, without a spawned corrected-rerun question, is a protocol violation. The spawned question is the evidence that the defect was processed. A self-report that a defect was "noted" is not accepted.

4. **Trigger an E6 reopen.** Return the spawned corrected-rerun question to E6 (Step 3, Source 5). E6 runs its per-question acceptance gate (spawn-source provenance + E5 aspect-tag) before appending the new question to `question_battery.md` under the current reopen-cycle dated section. E7 will process the new question on the next pass.

5. **Record in the Tier-1 Ledger entry for the original question:** the defect identified, the corrected-rerun question text and its spawn-source identifier, the E6 reopen trigger, and the verdict: **DEFECT — REOPENED**.

---

#### 6c — INCONCLUSIVE (verifier could not determine whether the answer is correct)

An inconclusive overturn attempt is NOT a SURVIVED verdict and must never be auto-promoted to one. A SURVIVED verdict requires a genuine, recorded overturn attempt that actually ran and failed to overturn the answer. An INCONCLUSIVE result is not a resolution — it is an unresolved finding that must be routed to one of:

**(a) Re-run the kill pass.** Run the kill pass again with a stronger or differently-framed verifier, or substitute a different model family. Record the re-run as a new overturn attempt in the Tier-1 Ledger entry.

**(b) Escalate to the human gate (L-A Step 6).** If re-running the kill pass does not resolve the inconclusiveness, surface the finding to the operator: state that the claim could not be adversarially tested to a definitive outcome, and request a disposition. Do not resolve the disagreement internally.

**Gate rule (binary):** A verdict recorded as SURVIVED whose Tier-1 Ledger entry shows only an inconclusive overturn attempt — not a completed, failed-to-overturn attempt — FAILS the acceptance gate. Only a completed overturn attempt (where the verifier ran the full kill pass and failed to overturn the answer) qualifies as the recorded basis for a SURVIVED verdict.

**Extended gate rule for positive/flattering findings (binary):** For any positive or confirming answer, the required asymmetry extra scrutiny pass (Step 5c) must itself reach a CONCLUSIVE failed-to-overturn result before SURVIVED may be recorded. A positive/flattering finding whose Ledger entry shows a conclusive standard kill pass but an INCONCLUSIVE extra scrutiny pass FAILS the acceptance gate — the inconclusive extra pass is not a completed scrutiny pass. The gate is binary: for positive findings, BOTH the standard kill pass AND the extra scrutiny pass must be conclusive; one conclusive + one inconclusive does not satisfy the gate. An inconclusive extra pass must be resolved via re-run or human-gate escalation (Step 5e) before the verdict advances.

---

### Step 7 — Decision-mode completeness probe (binding for decision-mode projects)

When `intent_brief.md` has `project-type: decision` (set by E1): after all questions in the current battery pass have been processed through Steps 2–6, and before feeding the session to E8, apply this informal completeness check (per E5 cross-reference):

> **"Is there a decision sub-question that is not in the battery whose answer would flip the current verdict?"**

This is an adversarial scan, not a full E6 regeneration. Review the current set of answered questions and the partial decision picture they form. Probe each dimension of the decision (using the `decision_subquestions.md` map from E5 as the reference) for a missing sub-question whose answer would change the go/no-go.

If such a question is identified:
1. Document it in the Tier-1 Ledger under `## E7 Decision Completeness Probe — <decision name>`.
2. Spawn it as a new question with spawn-source `E7/audit-defect/<probe-ref>` and trigger an E6 reopen (Step 6b procedure, items 3–4).

If no such question is identified, the "nothing missing" null is a load-bearing, flattering finding (L-A Step 1) and must be routed through L-A before it is accepted:

1. **Cross-family overturn attempt (L-A Step 2):** Submit the null conclusion ("no missing decision sub-question found") to a cross-family verifier with explicit instruction to attempt to identify a missing sub-question that would flip the verdict. Provide the full answered-question set and the `decision_subquestions.md` map. Record the verifier family and the overturn result.

2. **Asymmetric extra scrutiny (L-A Step 3 + Step 5c):** Apply the asymmetry rule — "nothing missing" is a positive/flattering finding and receives at least one additional scrutiny pass. That extra pass must itself reach a CONCLUSIVE failed-to-overturn result (per the Step 5c and Step 6c requirements). An inconclusive extra pass blocks acceptance of the null and must be resolved by re-run or human-gate escalation.

3. **Record in the Ledger** under `## E7 Decision Completeness Probe — <decision name>`: the sub-question dimensions checked, the cross-family verifier family used, the overturn attempt result, whether the asymmetric extra scrutiny reached a conclusive result, and the final null verdict.

4. Only after both the standard cross-family overturn and the asymmetric extra scrutiny reach conclusive failed-to-overturn results may the null be accepted as the verified completeness probe result.

A "nothing missing" null accepted without a cross-family overturn attempt and conclusive asymmetric extra scrutiny is not a verified null; it is an INTERPRETIVE self-assessment and fails the Step 8 sign-off.

**For build-mode projects:** Step 7 does not apply. Build-mode coverage checks are handled by E9's build-probe. Do not apply Step 7 to build-mode projects; record "Step 7: N/A — build-mode project" in the E7 Ledger entry.

---

### Step 8 — E7 Ledger entry, sign-off, and bounded-loop handoff to E8

E7 is signed off for this pass when all of the following are confirmed:

**(a)** Every question in the battery that was PENDING at the start of this pass has been processed through Steps 2–6. No question is silently deferred. Questions in `PENDING-CORRECTED` status (defect found, E6 reopen triggered) are explicitly listed as unresolved pending E6 + next E7 pass — not as "done."

**(b)** Every SURVIVED question's Tier-1 Ledger entry contains: distilled answer + sources + follow-up questions registered + overturn attempt record (verifier family named, overturn result, criteria-first documentation confirming criteria were written before the answer was shared) + asymmetry record (if the answer was positive/confirming) + verdict.

**(c)** Every defect found has spawned a tracked corrected-rerun question with a `E7/audit-defect/<ref>` spawn-source, recorded in the Ledger with the original question reference, and the E6 reopen has been triggered. Every material negative-result finding (Step 6a item 4) has either spawned a `E7/negative-result/<ref>` question with E6 reopen triggered, or is documented with an explicit no-spawn rationale. Both spawned question types appear in the Tier-1 Ledger and are confirmed pending in the Coverage Register.

**(d)** Any INITIATOR/verifier disagreement has been surfaced to the operator and their disposition recorded. No disagreement was resolved internally.

**(e)** For decision-mode projects: the Step 7 completeness probe result is recorded in the Ledger. If null ("nothing missing"), the Ledger entry must include the cross-family overturn attempt record and the asymmetric extra scrutiny result (both conclusive), not merely the local probe conclusion — a null without L-A routing evidence fails sign-off.

**(f)** The E7 Ledger entry is appended to the Tier-1 Ledger under `## E7 Answer Kill-Loop — <goal name>` recording: total questions processed this pass, total SURVIVED, total DEFECT-REOPENED (with count of spawned corrected-rerun questions), total INCONCLUSIVE dispositions, decision-mode completeness probe result (if applicable), any operator escalations, and sign-off.

**Bounded-loop handoff to E8 (naming the termination):**

E7 does not decide convergence. After this pass is complete, feed the answered-question records and the list of spawned corrected-rerun questions to E8 for its convergence evaluation. E8 (not E7) judges whether:
- For build-mode: every E5 aspect is answered to build-depth; no new materially-distinct question would change any aspect.
- For decision-mode: the decision-saturation criterion is met.

If E8 judges convergence not reached, it may send the session back to E6 for new question generation (from the follow-up questions registered in Step 2 and from the spawned corrected-rerun questions in the battery). E7 then runs again on the new questions. The loop terminates when E8 is satisfied — not when E7 finds no more defects in a single pass.

**The L-D bounded-loop principle applies here:** The kill-loop must not be run indefinitely on the same answer set looking for defects that are never found. The convergence criterion is E8's; the loop terminates at a finite, testable condition (every aspect answered to build-depth or decision-saturated). The freeze law (L-D) names the failure mode — infinite self-perfection regress — and E8's convergence gate is the mechanism that prevents it.

## Inputs / Outputs

**Inputs:**

- **`question_battery.md`** — the accepted, deduplicated question battery produced by E6. Format: Markdown file with YAML header (session, produced_by, consumed_by, effective_yield, diversity_summary, mode) and per-question entries (question text, spawn source, E5 aspect tag). Location: `work/<session-id>/question_battery.md`. Re-read from file at Step 0. On reopen cycles, new questions appear under a dated section at the end; E7 processes those new questions on re-entry. All questions appear here; E7's kill-loop consumes them one per pass through Steps 2–6.

- **`intent_brief.md`** — the operator-confirmed Intent Brief produced by E1. Format: Markdown file. Location: `work/<session-id>/intent_brief.md`. Read at Step 7 to determine project-type (build or decision). Also consulted in Step 2 for any pre-registered rules or criteria the operator specified before research began.

- **`aspect_map.md`** (build-mode) or **`decision_subquestions.md`** (decision-mode) — produced by E5. Format: Markdown file. Location: `work/<session-id>/aspect_map.md` or `work/<session-id>/decision_subquestions.md`. Used in Step 7 (decision-mode completeness probe) as the reference for which sub-questions have and have not been addressed.

- **Law L-A** (`engine/laws/L-A_adversarial_posture.md`) — governs the kill pass in Step 5. Re-read from file at Step 0; invoked by reference at Step 5. E7 operationalizes L-A's Steps 2–6; it does not re-derive them.

- **Law L-E** (`engine/laws/L-E_evidence_over_assertion.md`) — governs answer production in Step 2. Re-read from file at Step 0; invoked by reference at Step 2.

**Outputs:**

- **Answered-question records** — one per SURVIVED question. Format: Tier-1 Ledger entry section per question containing: distilled answer, sources, follow-up questions registered, overturn attempt record (verifier family, overturn result, criteria-first documentation, asymmetry record), and verdict (SURVIVED). Location: Tier-1 Ledger (`engine/_build/LEDGER.md` for this build; `work/<session-id>/LEDGER.md` for live runs). Consumed by E8 for convergence evaluation. All answered-question records must be present before E8 can evaluate build-depth per aspect.

- **Spawned corrected-rerun questions** — one per defect found. Format: Tier-1 Ledger entry section naming: the original question reference, the defect identified, the corrected-rerun question text, the spawn-source `E7/audit-defect/<ref>`, and the E6 reopen trigger. Location: Tier-1 Ledger, linked from the original question's entry. Consumed by E6 (Source 5) for battery appending; subsequently consumed by E7 on re-entry.

- **Spawned negative-result questions** — one per material negative/null finding (when applicable, per Step 6a item 4). Format: Tier-1 Ledger entry section naming: the original question reference, the negative finding, the spawned question text targeting implications of the negative finding, the spawn-source `E7/negative-result/<ref>`, and the E6 reopen trigger. Location: Tier-1 Ledger, linked from the original question's SURVIVED entry. Consumed by E6 (Source 5) for battery appending.

- **E7 Ledger entry** — summary of this pass. Format: Markdown section appended to the Tier-1 Ledger (append-only per L-B) under `## E7 Answer Kill-Loop — <goal name>`. Records: total questions processed, total SURVIVED, total DEFECT-REOPENED (with spawned-question count), total INCONCLUSIVE, decision-mode completeness probe result, operator escalations, and sign-off. Location: Tier-1 Ledger.

Every artifact named in the Protocol section appears here. Every output listed here is referenced in the Protocol.

## Acceptance checks (binary)

1. **Research → answer → cross-family overturn sequence present per question, citing L-A, with C1–C4 evidence in the Ledger?** YES if the Protocol section explicitly sequences: (a) research + L-E evidence standard applied → answer produced; (b) cross-family overturn pass explicitly tasked with OVERTURN (not evaluation), citing L-A Steps 2–6; (c) the Tier-1 Ledger entry per question names the verifier family used and records the overturn attempt result (survived / challenged / inconclusive); and (d) the Ledger entry records per-guard C1–C4 evidence as specified in L-A Step 4 — sealed hold-out + independent re-derivation + harness-audit party (C1), artifact pinned or INTERPRETIVE (C2), cross-family family confirmation (C3), prose-persuasiveness flag if applicable (C4). NO if any question is declared answered/verified without a Ledger entry recording a cross-family overturn attempt, or if the cross-family pass is described only as an evaluation rather than an overturn attempt, or if a verdict of SURVIVED is accepted when the Ledger's only recorded overturn attempt is INCONCLUSIVE (an unresolved attempt does not qualify as a completed, failed-to-overturn attempt; see Step 6c gate rule), or if the Ledger records only "cross-family pass completed" without per-guard C1–C4 evidence.

2. **Criteria-first verification present, and documented as written before-seeing-the-artifact with a mandatory Ledger timestamp?** YES if the Protocol requires the verifier to write success criteria BEFORE seeing the answer (Step 3 before Step 5), the Ledger entry per question records the criteria with a TIMESTAMP (a clock-time artifact pin, not a self-reported sequencing marker) confirming they were written before the answer was shared, and the acceptance check (this check) treats a "survived" verdict produced without criteria-first documentation as INTERPRETIVE. NO if criteria are documented after or simultaneously with evaluating the answer, or if the "before-seeing-the-artifact" ordering is described as optional or advisory, or if a sequencing marker without a timestamp is accepted as proof of ordering.

3. **Deterministic checks hard-fail first, with documented ordering?** YES if the Protocol designates a named step (Step 4) running deterministic checks before any judgment-based review, states explicitly that a deterministic failure returns the answer to Step 2 rather than proceeding to the kill pass, and the Ledger entry per question records the deterministic check results (pass/fail per check). NO if deterministic and judgment-based checks are described as interleaved or order-independent, or if a failed deterministic check allows the answer to proceed to the kill pass with only an advisory note.

4. **Asymmetry rule applied with conclusive extra pass, citing L-A; Step 7 null routed through L-A?** YES if: (a) the Protocol (Step 5c) explicitly cites L-A's asymmetry rule, requires at least one additional scrutiny pass for any positive or confirming finding, and requires that extra pass to reach a CONCLUSIVE failed-to-overturn result before SURVIVED is recorded; (b) the Ledger entry for any positive/confirming answer records what the additional pass was, what it found, and confirms the result was conclusive; (c) the Protocol (Step 7) routes a "nothing missing" decision-mode null through L-A — a cross-family overturn attempt AND a conclusive asymmetric extra scrutiny pass — before the null is accepted as a verified result, and the Ledger entry for Step 7 records both passes. NO if positive and negative findings are handled identically in the Protocol; or if the asymmetry rule's extra scrutiny pass is described as discretionary; or if an inconclusive extra pass is allowed to yield SURVIVED for a positive finding; or if a Step 7 "nothing missing" null is accepted without a cross-family overturn and conclusive asymmetric extra scrutiny recorded in the Ledger.

5. **Auto-reopen mechanism present: defect → `E7/audit-defect/<ref>` spawn; negative result → `E7/negative-result/<ref>` spawn; done-status revoked for defects?** YES if the Protocol requires: (a) Step 6b: revoking the original question's done-status (status returns to PENDING-CORRECTED), spawning a corrected-rerun question with `E7/audit-defect/<ref>` spawn-source recorded in the Ledger, triggering an E6 reopen, and treating a defect documented only as a silent note as a protocol violation; and (b) Step 6a item 4: when a SURVIVED answer is a material negative/null finding, either spawning a `E7/negative-result/<ref>` question with E6 reopen triggered, or recording an explicit no-spawn rationale — silence not accepted. NO if defects may be noted without spawning a tracked reopened question; or if done-status is irrevocable after the first kill pass; or if E7 emits only `E7/audit-defect/<ref>` spawns and the `E7/negative-result/<ref>` path feeding E6 Source 5 is absent from the Protocol.

6. **§11 research-template structure present per answered-question record?** YES if the Protocol (Step 2) requires every answered-question record to contain all three components: (a) a distilled answer with epistemic label and fragility statement, (b) sources (artifact citations or primary source references, each naming the source identity, access date, and specific claim supported), and (c) follow-up questions registered in the Coverage Register. NO if any of the three components is optional, or if the distilled answer is the only required output (sources or follow-up questions may be omitted).

## Honest ceiling

Full compliance with E7 does not guarantee correct answers. The specific residual failure mode that persists even after rigorous process:

**Correlated error — a wrong answer that the cross-family verifier ALSO believes.** The cross-family panel is not an independent oracle. When the INITIATOR family and the cross-family verifier share overlapping pre-training data or reinforcement-learning signal — which is likely for any two major frontier models trained on the same public corpus — their errors can be correlated in ways neither can detect. A wrong answer that is supported by the same public-record evidence both families have seen will likely survive the overturn pass. The panel reduces the probability of a wrong answer passing undetected; it does not eliminate it. The **human gate is the real circuit-breaker** — per L-A Step 6 and L-A's Honest ceiling — and it remains active even when the panel is green. A green E7 kill pass is a complete *process*; it is not a proved-correct *outcome*. The auto-reopen mechanism catches defects the panel finds; it does not catch defects neither family can see.

## Cross-references
- **E6** (`stages/E6_question_battery.md`) — primary upstream input: supplies `question_battery.md` (the battery E7 consumes). E7's audit defects and negative results trigger E6 reopens (E6 Step 3, Source 5); spawned corrected-rerun questions are appended to the battery and processed by E7 on re-entry. E6 and E7 form the auto-reopen loop.
- **E8** (`stages/E8_convergence_gate.md`) — primary downstream consumer: E7's answered-question records and spawned corrected-rerun questions feed E8's convergence evaluation. E8 (not E7) decides when the battery has converged (build: every aspect answered to build-depth; decision: decision-saturation). E7 does not loop forever — it hands off to E8 after each pass.
- **E5** (`stages/E5_decompose_aspects.md`) — `aspect_map.md` (build-mode) or `decision_subquestions.md` (decision-mode) is the reference for Step 7's decision-mode completeness probe. E5's two-mode structure determines which completeness check E7 applies.
- **L-A** (`laws/L-A_adversarial_posture.md`) — E7 is the operational form of L-A; E7 invokes L-A Steps 2–6 at Step 5 rather than re-deriving them. The cross-family overturn pass, asymmetry rule, four corruption guards (C1–C4), and human gate are all sourced from L-A. L-A's Honest ceiling (correlated error) is the parent of E7's Honest ceiling.
- **L-E** (`laws/L-E_evidence_over_assertion.md`) — governs answer production in Step 2. L-E's six steps (declare load-bearing, evidence standard, epistemic labels, quarantine found claims, artifact-pin or INTERPRETIVE, anti-sycophancy) are invoked by reference; an answer without sources fails under L-E. The §11 research-template structure (distilled answer + sources + follow-up questions) operationalizes L-E Step 2 + Step 5 at the answer level.
- **L-D** (`laws/L-D_freeze.md`) — the bounded-loop principle (Step 8): the kill-loop must terminate at a finite, testable condition; E8's convergence gate is the mechanism. L-D names the failure mode (infinite self-perfection regress) and the fix (freeze at soundness, not at perfection). The same principle applies to E7's auto-reopen loop: converge when E8 is satisfied, not when no defect can be imagined.
- **L-B** (`laws/L-B_3tier_memory.md`) — all E7 outputs (answered-question records, spawned corrected-rerun questions, E7 Ledger entry) are Tier-1 Ledger entries; append-only per L-B. The Ledger is the artifact that makes the kill pass verifiable across context resets. "The answer survived overturn" is not a valid in-context assertion — the Ledger entry is.
- **GOVERNANCE.md §2** — the 8-line prompt-quality gate this file must clear; gate line (e) is the controller's responsibility and requires a cross-family codex audit result recorded in the LEDGER before this file is finalized.
