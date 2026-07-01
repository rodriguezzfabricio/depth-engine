<!--
PROMPT-QUALITY GATE (GOVERNANCE §2) — clear all 8 before marking this file "done":
[x] a. DoD quantified      — Acceptance checks §8 enumerate six binary YES/NO checks, each tied to a named DoD item or output artifact.
[x] b. Scope manifest      — Four DoD items listed in SAC-1 (task-6-report.md §manifest); reconciled with line-evidence in SAC-3 before commit.
[x] c. Levers, deliberate  — "Use X when Y" and "prefer X over Y" framing throughout; no unconditional ritual MAX. Decomposition: four evidence requirements (E1 standard, epistemic labeling, honesty-as-deliverable, quarantine + artifact-pin) addressed in separate, named steps.
[x] d. Countermeasures     — Context-rot: load-bearing constraint re-stated at Step 1; satisficing: scope manifest + acceptance checks; sycophancy: explicit anti-sycophancy rule (Step 6) naming the operator's hope as a bias source; hallucination: artifact-pin rule (Step 5) treats free-model outputs as INTERPRETIVE until pinned.
[ ] e. Cross-family audit  — Controller runs codex audit; result recorded in build LEDGER before this file is finalized. Self-grading ≠ audit (GOVERNANCE §2).
[x] f. Alignment trace     — UP: L-E → engine README laws table → GOVERNANCE §2 → engine mission (rigorous domain-agnostic ingestion/research). DOWN: calibrated "use X when Y" framing consistent with GOVERNANCE §2's "scales down, never drops out"; no contradictions found.
[x] g. Persisted           — Commit records this file; build LEDGER entry (task-6-report.md §manifest) links to it; reachable from REGISTER task entry.
[x] h. Honest ceiling      — §9 (Honest ceiling) names two specific residual failure modes: an artifact can be reproducible yet encode a wrong assumption; epistemic labels can be mis-assigned in good faith even by a careful analyst.
-->

# L-E — Evidence-over-assertion

### Binding · Load WHEN:
INITIATOR loads this law at the start of every engine session, alongside L-A through L-D. It remains active throughout all stages (E0–E11). It activates on any **load-bearing claim** — any verdict, go/no-go, research finding, synthesis conclusion, number, or null result that gates a downstream stage or a human-approval decision. It also governs every non-load-bearing claim that appears in a deliverable (prose summaries, status updates, and explanatory notes), which must carry correct epistemic labels even when they do not gate decisions.

## Purpose (one paragraph)
Claims without evidence are not facts — they are unverified assertions that downstream reasoning carries forward and amplifies into wrong decisions. This law establishes the engine's evidence-over-assertion standard: every load-bearing claim must ship with a verifiable artifact (a command and its real output, a file path and line number, a git fact, or a cited current primary source); every claim — load-bearing or not — must carry an explicit epistemic label (fact / inference / speculation) and a fragility statement; honest negatives and refusals are complete outputs, not failures; found or external claims are quarantined until the INITIATOR has verified them independently; and any load-bearing output (a verdict, number, decision, or go/no-go) must trace to a deterministic, re-runnable artifact rather than free model generation. The purpose of these rules is not process ritual — it is to make the engine's outputs checkable, so that a wrong conclusion can be caught and corrected rather than accepted on the strength of fluent prose.

## Kalshi referent (what proven mechanism this generalizes)
**AI_OPERATING_DISCIPLINE.md §E** (E1–E8 exhaustiveness and anti-cheating contract) and **IRON_LAW.md §2.1** (intellectual honesty above all: label every claim fact / inference / speculation; never invent facts, numbers, or confidence; when you don't know, say so and find out) from the Kalshi alpha-engine project. In their original context, §E and §2.1 responded to a recurring failure mode: confident-sounding claims — stated without artifact-level evidence — propagated through the research pipeline and were treated as verified findings, including by the same model that generated them. §G (outcome-reproducibility law) extended the principle: any verdict or number that gates an irreversible decision must trace to a re-runnable script or pre-registered frozen rule, never to an in-context generation the model cannot externally audit. The pattern — *evidence pins claims; labels expose uncertainty; honest negatives are complete; artifacts gate decisions* — is domain-general and applies to any ingestion or research pipeline regardless of what it is researching or building.

## Protocol (the steps the INITIATOR executes)

### Step 1 — Declare load-bearing claims before acting on them
Before writing a verdict, summary conclusion, number, or go/no-go that will gate any downstream stage or human-approval decision, identify it explicitly as load-bearing. This declaration does not need to be elaborate — a parenthetical `[load-bearing]` marker in the draft is sufficient — but it must happen before the claim is written, not retroactively. Claims that are exploratory notes, working hypotheses, or prose context that do not gate any decision are not load-bearing and do not trigger Steps 2, 4, or 5. When uncertain whether a claim is load-bearing, treat it as though it is.

### Step 2 — Apply the evidence standard (E1: evidence or it didn't happen)
Every load-bearing claim must ship with at least one of the following, shown in the same message or Ledger entry as the claim:

- A **command and its real output** — the literal invocation and the literal result, transcribed verbatim.
- A **file path and line number** (e.g. `src/pipeline.py:42`) — a specific artifact location the reader can open and verify independently.
- A **git fact** — a commit SHA, a diff, a tag, or a `git log` entry that is externally checkable.
- A **cited current primary source** — a URL or document reference with an access date, pointing to a primary source (not a second-hand summary), verified to be current as of the claim's date.

**Banned as proof** — using any of the following to support a load-bearing claim is a protocol violation:

- *should* / *probably* / *likely* / *looks right* / *I'm confident* / *I believe* — these are assertions, not evidence.
- A description of what a command or script *would* produce if run, without running it.
- A self-report of diligence ("I reviewed it and it is correct") without a pinned artifact. Treat such self-reports as **INTERPRETIVE** (see Step 5) until pinned to one of the four evidence forms above.

For non-load-bearing claims that appear in a deliverable, the evidence standard does not require an artifact citation, but the epistemic label (Step 3) is still required.

### Step 3 — Label every claim by epistemic status and state fragility
Every claim that appears in a deliverable — load-bearing or not — must carry an explicit epistemic label:

- **[fact]** — directly verifiable from an artifact cited in Step 2; the claim would be falsified if the artifact said something different.
- **[inference]** — a conclusion drawn from one or more cited facts; the reasoning step could be wrong even if the facts are right. State which assumption the inference rests on.
- **[speculation]** — a hypothesis, estimate, or forward-looking claim not yet supported by cited evidence. Name what evidence would upgrade it to inference or fact.

After the label, add a **fragility statement**: one sentence naming the condition under which this claim would be revised (e.g. "fragile if the primary source is stale; re-verify at the next phase boundary"). A claim without a fragility statement is an overconfident claim.

**Calibration note:** A well-labeled deliverable at an early stage will have more [inference] and [speculation] labels than [fact] labels. That is correct. A deliverable where every claim is labeled [fact] is a signal to audit the labels for mis-assignment.

**Coverage scope (E8: meticulous on non-code artifacts):** Epistemic labels apply with identical rigor to prompts, memory files, status summaries, decision records, and prose explanations — not only to code-generated outputs. A finding that is well-labeled inside a script's output but casually stated without a label in a prose summary has lost its epistemic status at the point where it matters most.

### Step 4 — Quarantine found and external claims until verified
When a claim originates outside the INITIATOR's own derivation — from a retrieved document, a tool output, a sub-agent return, a quoted source, or any external input — quarantine it:

1. Do not relay it to a downstream step as though it were independently verified.
2. Mark it **[found — unverified]** in the working record until the INITIATOR has checked it against a primary source or a re-runnable artifact.
3. When a found claim cannot be verified within the current session (e.g., the primary source is inaccessible), label the downstream reasoning that depends on it **[inference from unverified found claim]** and state the quarantine explicitly. Do not silently absorb an unverified claim into a synthesis as though it were established.

This quarantine applies regardless of how authoritative the source appears. A claim from a well-regarded document that has not been independently verified in this session is still a found claim. The quarantine rule is the forward-reading form of E2 (investigate before setting aside): it prevents premature dismissal of a claim on the one hand, and premature acceptance of it on the other, by holding it in a declared provisional state until evidence resolves its status.

### Step 5 — Pin load-bearing outputs to re-runnable artifacts, or label INTERPRETIVE
A load-bearing output — a verdict, a number, a decision, a go/no-go — must trace to one of the following deterministic, re-runnable artifacts:

- A **script or program** that, when run on the same inputs, produces the same output.
- A **golden test** — a frozen, pre-specified check with a known expected output explicitly committed to the record.
- A **frozen pre-registration** — a written, committed specification of the hypothesis and decision rule finalized before any relevant data was examined.
- A **Ledger entry** — an immutable, append-only record (governed by L-B) capturing the derivation, the inputs, and the output, with a stable ID.

If a load-bearing output cannot be pinned to one of these artifacts at the time it is produced, label it **INTERPRETIVE** and treat it as provisional until it can be pinned. An INTERPRETIVE output may inform planning but must not gate a downstream stage or justify an irreversible action without escalation to the human gate.

**Corollary:** A number or verdict produced by free model generation — computed in-context without external re-runnability — is INTERPRETIVE by definition. Compute numerics in a script; verify the verification step against an artifact rather than relying on a self-report of diligence (see L-A §C2 for the adversarial form of this principle).

**Pre-registration rule (E4: never jump to completion):** When a decision rule will be applied to examined inputs, the rule must be committed to the record before the inputs are examined. Deciding after examination and then asserting the rule was pre-specified is a protocol violation regardless of whether the rule is plausible.

### Step 6 — Anti-sycophancy: the operator's hope is a bias source
When producing a verdict or synthesis conclusion, treat the operator's stated preference, prior investment, or stated hope as a bias source — not as evidence:

- A positive or confirming finding (one that agrees with what the operator hoped to find) receives additional scrutiny before being labeled [fact] or labeled confirmed (L-A Step 3 asymmetry rule applies here directly).
- Never soften a negative to spare the operator's reaction; a clean, honest negative is a **complete output**, not a failure. "This investigation does not support proceeding" is a valid, high-quality deliverable.
- Never omit a caveat "to be concise" or "for readability." Dropping a caveat is a §1 honesty-clause violation regardless of length.
- An unusually fluent, persuasive, or detailed justification for a marginal or unexpected result is a flag to re-examine, not to relax. Verbal persuasiveness is not evidence (L-A §C4). If the reasoning chain is elaborate and the conclusion is flattering, halt and re-examine before accepting it.

**Honest negative rule:** The only acceptable standards for whether a conclusion is complete are (a) the evidence standard in Step 2 and (b) the artifact-pin requirement in Step 5. Whether the conclusion is welcome is not a standard for completeness. A conclusion that satisfies (a) and (b) and finds nothing, or finds a problem, is as complete as one that finds a positive result.

### Step 7 — Calibrated rigor ("use X when Y")
This law scales with the stakes and the stage of work:

- **Exploratory notes and working hypotheses not yet in a deliverable:** label claims (Step 3) but do not require full artifact citations (Step 2). Use the time to investigate, not to retroactively document things that may change.
- **Any claim entering a deliverable or a Ledger entry:** apply Steps 2, 3, and 4 fully.
- **Any load-bearing output gating a stage or human-approval decision:** apply Steps 2–6 fully. INTERPRETIVE outputs must be surfaced to the operator before gating any irreversible action.
- **Best-of-best, not first-found (E7):** when multiple evidence sources are available for a load-bearing claim, do not stop at the first plausible one. Enumerate the options, compare them on currency and authority, and cite the strongest. A first plausible artifact is not a chosen one.

## Inputs / Outputs

**Inputs:**
- Any claim, verdict, number, synthesis conclusion, null result, or found external claim arising during stages E0–E11, from any source (INITIATOR derivation, retrieved document, sub-agent return, tool output, external citation).
- The supporting evidence the INITIATOR used or intends to cite for each claim.
- The Tier-2 State file and Tier-1 Ledger (governed by L-B), which serve as the artifact repository for Ledger-based pinning (Step 5) and the record of quarantine markers (Step 4).

**Outputs:**
- **Labeled claim** — each claim appearing in a deliverable or Ledger entry, tagged with [fact], [inference], or [speculation] and a fragility statement. No separate artifact format required; the tag and fragility statement appear inline.
- **Evidence citation** — for each load-bearing claim, one of the four evidence forms specified in Step 2, appearing in the same message or Ledger entry as the claim.
- **Quarantine marker** — for each found or external claim not yet independently verified, a `[found — unverified]` tag in the working record, with the dependent downstream reasoning labeled `[inference from unverified found claim]`.
- **Artifact pin or INTERPRETIVE label** — for each load-bearing output, either a reference to the deterministic re-runnable artifact that produced it, or an explicit INTERPRETIVE label with a provisional-status note.

Every artifact named in the Protocol section appears here. Every output listed here is referenced in the Protocol.

## Acceptance checks (binary)

For any stage that declares it has satisfied L-E:

1. **Evidence standard met?** YES if every load-bearing claim in the stage's deliverable or Ledger entry cites one of the four evidence forms (command+output / file:line / git fact / cited current primary source). NO if any load-bearing claim relies on a banned form (should / probably / looks-right / self-report of diligence without an artifact pin).
2. **Epistemic labels present?** YES if every claim in the deliverable or Ledger entry carries an explicit [fact], [inference], or [speculation] tag and a fragility statement, including claims in prose summaries and status updates. NO if any claim is unlabeled or lacks a fragility statement.
3. **Honest negatives preserved?** YES if negative and null findings are stated plainly without softening, and no caveat was dropped for conciseness. NO if a negative was softened, an uncertainty was suppressed, or a caveat was omitted from a deliverable.
4. **Found claims quarantined?** YES if every externally originated claim in the working record is marked [found — unverified] until independently verified, and dependent downstream reasoning is labeled accordingly. NO if any found claim was silently absorbed into a synthesis as established fact.
5. **Load-bearing outputs pinned or INTERPRETIVE-labeled?** YES if every verdict, number, decision, or go/no-go either cites a deterministic re-runnable artifact or carries an explicit INTERPRETIVE label with a provisional-status note. NO if a free-model-generated number or verdict is treated as pinned without an artifact citation.
6. **Gate line (e) satisfied?** YES if the controller's cross-family codex audit result is recorded in the build LEDGER before this file is marked final. NO if only self-graded.

## Honest ceiling
Full compliance with this law does not guarantee correct conclusions. Two residual failure modes persist even after rigorous application:

**1. Reproducible artifacts encoding wrong assumptions.** A script or golden test that is deterministic and re-runnable can still encode a wrong assumption — a mis-specified decision rule, a flawed model of the domain, or a pre-registration written without full information. The artifact pin guarantees reproducibility; it does not guarantee the artifact is correct. A wrong assumption committed to a Ledger entry will be consistently reproduced, not corrected, by subsequent runs. The cross-family overturn step (L-A Step 2) is the primary guard against this, but it carries the correlated-error ceiling documented in L-A's Honest ceiling section.

**2. Epistemic labels mis-assigned in good faith.** A careful analyst may label an inference [fact] because the reasoning step felt certain, or may write a fragility statement that fails to name the actual failure mode. Good faith is not a sufficient substitute for an independent verifier. A label audit performed by the same analyst who assigned the labels is weaker than one performed by an independent party. For verdicts that gate irreversible decisions, pair the artifact pin with an independent labeling check.

A fully compliant L-E pass is a complete *process*, not a proven-correct *outcome*.

## Cross-references
- **L-A** (`laws/L-A_adversarial_posture.md`) — L-A's C2 (prefer re-runnable artifact over self-report) and C4 (weight artifacts over prose persuasiveness) are the adversarial application of L-E's evidence-over-assertion principle: they enforce skepticism toward claims that meet the form but not the spirit of the evidence standard. L-E defines what counts as evidence; L-A demands that the evidence be real, not performance.
- **L-B** (`laws/L-B_3tier_memory.md`) — the Tier-1 Ledger is the primary repository for artifact pins (Step 5) and quarantine markers (Step 4); Ledger entry IDs are valid artifact references under Step 2.
- **L-D** (`laws/L-D_freeze.md`) — frozen protocols and pre-registrations cited under Step 5 are governed by L-D's freeze boundary; a frozen artifact cannot be revised retroactively to make a load-bearing output appear more defensible.
- **E7** (`stages/E7_answer_kill_loop.md`) — the stage most intensively governed by L-E; E7's research-answer-kill loop is the operational form of Steps 2–5, where every research answer must clear the evidence standard before the answer is accepted and the cross-family kill step can attempt to overturn it.
- **GOVERNANCE.md §2** — the 8-line prompt-quality gate this file must clear; gate line (e) is the controller's responsibility and requires a codex audit result recorded in the LEDGER before this file is marked final.
- **AI_OPERATING_DISCIPLINE.md §E (E1–E8) and §G** — the source texts this law generalizes. The evidence standard in Step 2 is a domain-agnostic generalization of E1; the INTERPRETIVE label and artifact-pin requirement in Step 5 are a direct generalization of §G; the anti-sycophancy rule in Step 6 generalizes E5 and §B4.
- **IRON_LAW.md §2.1** — the intellectual honesty root: label every claim fact / inference / speculation; never invent facts, numbers, or confidence. L-E is the operational protocol form of §2.1 for any domain.
