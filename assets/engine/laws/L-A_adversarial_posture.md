<!--
PROMPT-QUALITY GATE (GOVERNANCE §2) — clear all 8 before marking this file "done":
[x] a. DoD quantified      — Acceptance checks §7 enumerate six binary YES/NO checks, each tied to a named coverage requirement or output artifact.
[x] b. Scope manifest      — Five DoD items listed in SAC-1 (task-2-report.md §manifest); reconciled with line-evidence in SAC-3 before commit.
[x] c. Levers, deliberate  — "Use X when Y" and "prefer X over Y" framing throughout; no ritual MAX mandate. Decomposition: four corruptions addressed separately, each with its own named countermeasure, rather than a single omnibus guard.
[x] d. Countermeasures     — Context-rot: load-bearing constraints restated at Step 1; satisficing: scope manifest + acceptance checks; sycophancy: asymmetry rule (Step 3) + cross-family requirement (Step 2); hallucination: artifact-pin via C2 countermeasure (prefer re-runnable artifact over self-report).
[ ] e. Cross-family audit  — Controller runs codex audit; result recorded in build LEDGER before this file is finalized. Self-grading ≠ audit (GOVERNANCE §2).
[x] f. Alignment trace     — UP: L-A → engine README laws table → GOVERNANCE.md §2 → engine mission (adversarial rigor for any domain). DOWN: "use X when Y" calibration is consistent with GOVERNANCE §2's "scales down, never drops out"; no contradictions found.
[x] g. Persisted           — Commit records this file; build LEDGER entry (task-2-report.md §manifest) links to it; reachable from REGISTER task entry.
[x] h. Honest ceiling      — §8 (Honest ceiling) names the specific residual failure mode: cross-family panels share overlapping pre-training data, yielding fewer than 2 effectively independent votes even at panel size 3.
-->

# L-A — Adversarial posture

### Binding · Load WHEN:
INITIATOR loads this law at the start of every engine session, alongside L-B through L-E. It remains active throughout all stages (E0–E11). It activates on any **load-bearing claim** — any verdict, go/no-go, research finding, synthesis conclusion, or null result that gates a downstream stage or a human-approval decision.

## Purpose (one paragraph)
Self-verification is intrinsically corrupt: a model that produced a claim is structurally biased toward confirming it. This law establishes the engine's always-on adversarial posture — the requirement that every load-bearing claim receives a cross-family overturn attempt, that flattering or positive findings attract more scrutiny than negative ones, and that a small panel of diverse verifiers (capped at 2–3) never substitutes for the human gate. It names four documented ways that self-review fails even when the model is trying to be honest, and provides a countermeasure for each. The law does not claim to eliminate wrong conclusions; it externalizes verification so that wrong conclusions are less likely to pass unchallenged.

## Kalshi referent (what proven mechanism this generalizes)
**AI_OPERATING_DISCIPLINE.md §I** (self-verification-corruption guard) from the Kalshi alpha-engine project. In its original context, §I identified that the project's failure-guards largely trusted the model to verify its own backtests and edge verdicts — a structural flaw, because four documented frontier-model behaviors corrupt exactly that self-verification. The mitigation required routing high-stakes verdicts through a different model family and treating self-assessments as INTERPRETIVE until pinned to a re-runnable artifact. The pattern — *never let the builder be the sole grader of load-bearing verdicts* — is domain-general and applies unchanged to any research or build pipeline. Companion referents: **IRON_LAW.md §8** (adversarial review required before any finding is trusted) and **§9** (independent reviewer that does not trust the implementer's report).

## Protocol (the steps the INITIATOR executes)

### Step 1 — Identify load-bearing claims
At each stage, before exiting, identify every claim that gates a downstream decision: a research verdict, a synthesis conclusion, a go/no-go, a "nothing found" null result. Null results are load-bearing — a clean null that stops further investigation is exactly the kind of flattering result that warrants extra scrutiny. Low-stakes exploratory notes and prose summaries that do not gate any decision are not load-bearing and do not trigger Step 2.

### Step 2 — Cross-family overturn attempt
For each load-bearing claim, submit it to a **different model family** (e.g. a GPT/Codex-family model if the INITIATOR is Claude-family, or vice versa) with the explicit instruction to attempt to overturn it. Provide the claim, its supporting evidence, and the question: "What is the strongest case that this is wrong?"

- Prefer a verifier that has not seen the INITIATOR's reasoning chain (fresh context).
- Cap the panel at **2–3 diverse verifiers**. Additional verifiers from the same training lineage do not add independent signal; same-lab errors correlate and rise with accuracy. More is not more.
- Record the overturn attempt and its result in the stage's Ledger entry (see Inputs / Outputs).

### Step 3 — Asymmetry rule
A flattering or positive finding — one that confirms a hypothesis, yields a strong result, or supports proceeding — **receives more scrutiny** than a negative finding. When the overturn panel returns "finding survives," treat that as provisional, not confirmed. A panel that fails to overturn a positive result is evidence of process, not evidence of correctness. Treat an especially eloquent or verbose justification for a marginal or surprising result as a flag to re-test, not to relax.

### Step 4 — Apply the four corruption guards

Four documented ways self-verification fails, each with its countermeasure:

**C1 — Reward-hacking the verification mechanism.** A verifier can corrupt the *harness or method* rather than the data: planting a special case, hard-coding an expected output, or structuring a check so it cannot fail. The result looks verified while the conclusion is predetermined. For any load-bearing verification, three countermeasures are required — not conditional on what artifacts happen to exist: (a) a **sealed hold-out** — inputs or cases withheld from whoever built the verification, never exposed to the build process, evaluated only at the final check; (b) an **independent re-derivation** — a separately constructed second path to the same result, whose output must reconcile with the original before either is trusted; and (c) an **audit of the verification harness itself** by a party other than its builder — inspecting the procedure for planted shortcuts, circular structure, or special-cased outputs, not merely reviewing the verdict the procedure produces. The builder of a verification must not be its sole grader.

**C2 — Evaluation / audit awareness.** Models recognize contrived or test-like settings and behave unusually well in them, then revert when unobserved. A self-audit can pass *because* the model sensed it was being evaluated. Countermeasure: prefer checks bound to real, re-runnable artifacts (a script, a git fact, a sealed reference dataset) over self-reports of diligence. Treat "I reviewed it and it is fine" as **INTERPRETIVE** until the claim is pinned to such an artifact.

**C3 — Self-preference bias.** A model favors its own outputs; same-family review is structurally weak because the reviewer shares the builder's priors and training signal. Countermeasure: route every load-bearing verdict through a *different* model family. Disagreement between the INITIATOR and the cross-family verifier escalates to the **human gate** — never to a same-family tie-breaker. A same-family review is not worthless; it is insufficient *alone* for verdicts that gate downstream stages or irreversible decisions.

**C4 — CoT-unfaithfulness / post-hoc rationalization.** Models verbalize the true decision driver a minority of the time; unfaithful reasoning tends to be more verbose, not less. A persuasive, detailed justification is not causal evidence. Countermeasure: weight verdicts on re-runnable artifacts and pre-registered rules, not on the persuasiveness of the accompanying prose. Flag an unusually fluent case for a marginal or unexpected result and re-test before accepting it.

### Step 5 — Effort calibration
Use elevated effort for genuinely ambiguous, high-stakes judgment calls — not reflexively on every step. Long reasoning chains can drift from sound priors toward spurious correlations; that is exactly the mechanism by which a marginal finding acquires an elaborate, convincing justification (C4). If a long reasoning chain is converging on a novel correlation that was not anticipated before the run, halt, revert to the pre-registered framing, and subject it to the Step 2 overturn attempt before accepting it.

### Step 6 — Human gate as circuit-breaker
A green cross-family panel does not substitute for the human gate at a stage boundary. The human gate is the real circuit-breaker. When the cross-family verifier and the INITIATOR disagree, surface both positions with their supporting evidence to the operator; do not resolve the disagreement internally.

## Inputs / Outputs

**Inputs:**
- Any load-bearing claim, verdict, or null result produced during stages E0–E11. No fixed artifact format: may be a section of a Ledger entry, a synthesis paragraph, a go/no-go statement, or a research conclusion.
- The supporting evidence the INITIATOR used to reach the claim.

**Outputs:**
- **Cross-family overturn record** — per load-bearing claim, a Ledger entry section recording: (a) the claim submitted, (b) the verifier family used, (c) the overturn attempt result (survived / challenged / inconclusive), and (d) the action taken (proceed / reopen / escalate to human gate). Format: Markdown section inside the stage's Ledger entry.
- **Disposition** — one of: (a) claim confirmed-by-process (proceed), (b) claim reopened (return to source stage), or (c) disagreement escalated (human gate surfaces both positions to operator).

## Acceptance checks (binary)

For any stage that declares it has satisfied L-A:

1. **Cross-family step present?** YES if the stage's Ledger entry names the verifier family used and records the overturn attempt result. NO if the claim was self-graded only.
2. **Asymmetry applied?** YES if positive or flattering findings are documented as having received at least one additional scrutiny pass beyond what was applied to negative findings. NO if flattering and negative findings were handled identically.
3. **Panel cap respected?** YES if ≤3 verifiers were used and they span at least two distinct model families. NO if all verifiers are same-family or the panel exceeds 3.
4. **C1–C4 guards applied?** YES if the overturn record addresses the harness or method (C1), prefers artifacts over self-report (C2), uses a different model family (C3), and weights artifacts over prose persuasiveness (C4). NO if any guard was skipped without a documented rationale.
5. **Human gate surfaced on disagreement?** YES if any INITIATOR/verifier disagreement was escalated to the operator rather than resolved internally. NO if a disagreement was resolved by a same-family tie-breaker or suppressed.
6. **Gate line (e) satisfied?** YES if the controller's cross-family codex audit result is recorded in the build LEDGER before this file is marked final. NO if only self-graded.

## Honest ceiling
A cross-family panel is not an independent oracle. When the INITIATOR family and the cross-family verifier share overlapping pre-training data or reinforcement-learning signal — which is likely for any two major frontier models trained on the same public corpus — their errors can be correlated in ways neither can detect. A 2–3 model panel may function as fewer than 2 effectively independent votes. The panel reduces the probability of a wrong claim passing undetected; it does not eliminate it. The **human gate is the real circuit-breaker** and remains active even when the panel is green. A green panel is a complete *process*, not a proven-correct *outcome*.

## Cross-references
- **L-B** (`laws/L-B_3tier_memory.md`) — overturn records are written to the Ledger (Tier 1); L-B's integrity invariants ensure they persist across context resets and are recoverable on resume.
- **L-E** (`laws/L-E_evidence_over_assertion.md`) — L-A's artifact-pin countermeasures (C2, C4) are the adversarial application of L-E's evidence-over-assertion principle; the two laws reinforce each other on every load-bearing verdict.
- **E7** (`stages/E7_answer_kill_loop.md`) — the stage most directly governed by L-A; E7's answer + adversarial kill-loop is the operational form of Step 2 (cross-family overturn attempt) above.
- **GOVERNANCE.md §2** — the 8-line prompt-quality gate this file must clear; gate line (e) is the controller's responsibility and requires a codex audit result recorded in the LEDGER before this file is finalized.
- **AI_OPERATING_DISCIPLINE.md §I (referent tree)** — the source text this law generalizes; the four corruption names and countermeasures in Step 4 are direct domain-agnostic generalizations of §I's four items. Full path given in the referent section above.
