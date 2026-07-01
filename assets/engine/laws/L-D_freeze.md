<!--
PROMPT-QUALITY GATE (GOVERNANCE §2) — clear all 8 before marking this file "done":
[x] a. DoD quantified      — Acceptance checks §7 enumerate seven binary YES/NO checks, each tied to a named DoD requirement: soundness criteria (check 1), freeze declaration (check 2), git verifiability via `git diff --diff-filter=DR` (check 3), additive-only discipline (check 4), zoom-out check (check 5), process-not-outcome decoupling (check 6), cross-family audit gate line (check 7).
[x] b. Scope manifest      — Five manifest items listed in task-5-report.md §manifest; reconciled with line-evidence in SAC-3 before commit.
[x] c. Levers, deliberate  — "Use X when Y" and "prefer X over Y" framing throughout; zoom-out check (Step 4) provides explicit effort-calibration gate before governance work; no ritual MAX mandate; decomposition: soundness criteria, freeze rule, additive-only amendment rule, zoom-out check, and process-not-outcome decoupling are separate named steps, each independently testable.
[x] d. Countermeasures     — Context-rot: load-bearing constraint (additive-only) restated at top of Protocol block, before any steps; satisficing: scope manifest + seven acceptance checks + task-5-report.md reconciliation; sycophancy: soundness bar is explicitly a judgment call requiring cross-family audit, not self-attested (Step 1 condition 2); hallucination: freeze verifiability pinned to a re-runnable git command (`git diff --diff-filter=DR`), not a self-report.
[ ] e. Cross-family audit  — Controller runs codex audit; result recorded in build LEDGER before this file is finalized. Self-grading ≠ audit (GOVERNANCE §2).
[x] f. Alignment trace     — UP: L-D → engine README laws table (L-D row: "Once protocols are sound, freeze them — no infinite self-perfection regress; process-not-outcome decoupling") → GOVERNANCE §2 → engine mission (manufacture domain-expertise depth once, without infinite governance iteration). DOWN: "freeze-and-return-to-mission" is coherent with GOVERNANCE §2's process-not-outcome framing; additive-only constraint aligns with the no-regression invariant in L-B; no contradictions found.
[x] g. Persisted           — Commit records this file; build LEDGER entry (task-5-report.md §reconciliation) links to it by Ledger convention; reachable from REGISTER.
[x] h. Honest ceiling      — §8 (Honest ceiling) names a specific, non-generic residual failure mode: freezing too early locks in a latent defect as additive-only; the soundness bar is a judgment call that can be wrong.
-->

# L-D — The freeze

### Binding · Load WHEN:
INITIATOR loads this law at the start of every engine session, alongside L-A through L-C and L-E. It remains active throughout all stages (E0–E11). It binds every moment a protocol, governance document, or generator file is under consideration for refinement rather than use, and it provides the zoom-out check that every major work step must clear before proceeding.

## Purpose (one paragraph)
The quality loop — use → adversarial audit → lesson → constitutional amendment — has its own failure mode: *infinite self-perfection regress*, the tendency to keep perfecting the generator that makes the system instead of returning to the mission. Left unchecked, the loop produces governance indefinitely and mission output never; each iteration justifies itself as "improving the foundation" while the original deliverable recedes. This law guards against that failure by establishing the freeze: once a protocol is demonstrably sound (exercised on a real task, cross-family audited, acceptance checks verified, honest ceiling stated), it is declared frozen and thereafter subject to additive-only amendment — clarify or add, never weaken a clause or remove an acceptance check. Compliance is partially verifiable by `git diff --diff-filter=DR` over a frozen file (which must stay empty — a necessary check; it catches deletions and renames); the binding invariant is append-only: the file's prior content is a strict prefix of its new content and every pre-change line survives unmodified. When a genuine gap is discovered after freeze, a new dated, sourced clause with its own acceptance check is appended; existing clauses are not rewritten. This law also enforces the engine's process-not-outcome decoupling: a frozen, sound process is the deliverable; it cannot manufacture an outcome the world will not give. At every major step, the zoom-out check asks whether the action advances the mission or merely polishes the machinery.

## Kalshi referent (what proven mechanism this generalizes)
**L-0048** from the Kalshi alpha-engine project is the direct referent: the scaffolding freeze decision recorded after the project's protocols were demonstrably sound. After an extended arc of prompt-engineering iteration and adversarial audit through L-0047, the operator diagnosed that continued refinement of the generator itself had become the bottleneck: the gain from "one more governance pass" was negative, and real improvement came only from using the system on actual work. The freeze was declared, and the mechanism codified: additive-only thereafter, with `git diff --diff-filter=DR` as the mechanical verifier that no existing clause had been silently weakened or removed. The companion referent is **PROMPT_ENGINEERING.md §6** (the prompt-engineering standard frozen at L-0047): "Do not re-open the generator to 'perfect it again' — that regress (polishing the thing that makes prompts instead of doing the mission) is exactly what this freeze exists to stop." Both referents live in the Kalshi alpha-engine protocols at `../kalshi-alpha-engine/protocols/`. The pattern — *diagnose when the quality loop itself has become the bottleneck, freeze the machinery when sound, return to the mission* — is domain-general and applies to any iterative process with a governance layer, regardless of subject matter.

## Protocol (the steps the INITIATOR executes)

> **LOAD-BEARING CONSTRAINT (restated at top for context-rot resistance):** Every protocol, governance document, or generator file that has been frozen is ADDITIVE-ONLY. New clauses may be appended; no existing clause may be weakened, rewritten, or removed. `git diff --diff-filter=DR` over a frozen file stays empty (a necessary check — it catches deletions and renames; the binding invariant is append-only: every pre-change line survives unmodified). This constraint holds even when a clause seems imprecise — the threshold for amendment is a demonstrated gap, not stylistic improvement.

### Step 1 — Apply soundness criteria before declaring a freeze
A protocol is ready to freeze when **all four conditions are met**. Do not freeze earlier.

1. **Exercised on a real task.** The protocol has been run on at least one actual, non-contrived work unit, and the resulting output was inspectable and reviewable.
2. **Cross-family audited with no unresolved load-bearing finding.** A verifier from a different model family (see L-A Step 2) has reviewed the protocol's execution and rated every manifest item done / shallow / skipped, with evidence. Every load-bearing finding has been either fixed or explicitly refuted in the file. No finding remains open or deferred.
3. **Acceptance checks verified green.** Every binary acceptance check in the protocol has been run and confirmed to pass. "Feels sound" or "looks complete" is not a check.
4. **Honest ceiling stated.** The protocol names at least one specific, non-generic failure mode it does not eliminate.

**When to freeze vs. when to hold:** If conditions 1–4 are all met, freeze. If any condition is unmet — especially if the protocol has only been authored and not exercised, or has outstanding cross-family audit findings — hold the freeze and close the gap first. The cost of a premature freeze is high: a latent defect becomes additive-only and can only be corrected by appending a corrective clause, which is more expensive and structurally messier than a pre-freeze fix.

### Step 2 — Declare and record the freeze
When all four soundness conditions are met:

1. **Add a freeze declaration** to the protocol file: a dated statement that the file is frozen, that `git diff --diff-filter=DR` must stay empty for this file, and the Ledger entry ID that records the freeze decision. Place the declaration visibly at the top of the file (below any binding header).
2. **Commit the freeze declaration** to version control with a message that names the file and the Ledger decision event.
3. **Verify immediately:** Run `git diff --diff-filter=DR <pre-freeze-commit>..HEAD -- <frozen-file>` and confirm it returns empty (no deletions or renames — a necessary check). Then confirm the append-only invariant: the file's content before the commit is a strict prefix of its content after; no existing line was modified. `--diff-filter=DR` does not catch in-place modifications, so both checks are required. If either fails, investigate and correct before treating the file as frozen.

### Step 3 — Additive-only rule after freeze
Once a protocol is frozen, apply this rule to every proposed change:

**Permitted:** Appending a new, dated, sourced clause with its own binary acceptance check. The new clause must cite: (a) the gap it fills (a failure mode not addressed by existing clauses) and (b) a source (a real failure event, a cross-family audit finding, a documented external post-mortem, or a peer-reviewed countermeasure). The new clause must not contradict any existing clause.

**Not permitted:** Rewriting existing language for "clarity," removing an acceptance check (even one that seems redundant), weakening a condition (e.g., changing "must" to "should"), restructuring sections in ways that drop content, or splitting a clause to make it easier to circumvent.

**Genuine gap vs. improvement impulse — the test:** A gap is genuine when a real, documented failure slipped past the existing clauses during actual use, or when a new external finding identifies a vector the existing clauses do not address. Ask: "Would a downstream failure mode have occurred, or did occur, that the existing text did not prevent?" If yes: append a new clause. If the answer is "the existing clause is fine but I could phrase it better": do not amend; record the impulse in the Ledger (zoom-out log, Step 4) in case it is a genuine gap worth revisiting.

**Correcting a defective acceptance check:** If an existing acceptance check is demonstrably wrong (it passes a defective state), append a new, dated, sourced clause that overrides the old check by reference — for example: "Check N is superseded as of &lt;date&gt; by the following, because &lt;reason&gt;: …". The old check's text stays in place, unmodified; you do not edit, annotate, or delete it. The file only grows. `git diff --diff-filter=DR` returning empty is a necessary condition; the binding invariant is that the old check's text remains byte-for-byte identical and the file's prior content is a strict prefix of its new content.

### Step 4 — Zoom-out check (at every major step)
Before committing to any material work on a protocol, governance document, generator file, or engine stage, perform the zoom-out check explicitly:

1. **Restate the project's mission** in one sentence from the E0 intake or E1 Intent Brief.
2. **Ask:** "Does this action advance the mission, or am I polishing / meta-optimizing the machinery?"
3. **Prefer the cheapest path** to a decision-grade answer. A perfectly-refined protocol that does not move the project forward is waste, not quality.
4. **If the answer is "polishing the machinery":** stop the refinement, record the impulse and reason in the Ledger (a zoom-out log entry), and return to mission-advancing work. The zoom-out log entry preserves the observation for the next session without letting it divert the current one.
5. **If the action is genuinely mission-advancing** — the cheapest path to closing a real gap that would otherwise block a downstream stage — proceed.

The zoom-out check is not a veto on governance work; it is a gate against *reflexive* governance work. A protocol improvement triggered by a real failure during a real task passes the zoom-out check. A protocol improvement triggered by an aesthetic preference does not.

### Step 5 — Process-not-outcome decoupling (always active)
The engine perfects PROCESS, not OUTCOME. A frozen, sound, cross-family-audited process is the deliverable of the engine's governance layer. It cannot:
- Manufacture an insight the domain's evidence will not support.
- Guarantee a useful result from a domain with insufficient available information.
- Convert "the process ran correctly" into "the conclusion is right about the world."

These are not failures of process; they are the honest ceiling of what any rigorous process can provide. After a complete, compliant engine run, the correct statement is: "the process was sound and complete; the evidence it gathered leads to the following conclusion with the following confidence bounds." Not: "the process proves the conclusion is correct." A frozen protocol with a green fidelity audit is evidence of complete process. It is never evidence of correct outcome.

## Inputs / Outputs

**Inputs:**
- Any protocol, governance document, or generator file proposed for freezing or amendment.
- The cross-family audit record from L-A (required to satisfy Step 1 condition 2 before freeze can be declared).
- The Ledger entry recording the work session in which soundness was established.
- The project's current mission statement (from E0 intake or E1 Intent Brief — used in the zoom-out check, Step 4).

**Outputs:**
- **Freeze declaration** — a dated statement embedded in the frozen file (Step 2 item 1), naming the Ledger entry ID that records the decision. Format: a Markdown sentence or header addition in the file's preamble.
- **Git anchor** — a version-control commit capturing the freeze declaration, verifiable by `git diff --diff-filter=DR <pre-freeze-commit>..HEAD -- <frozen-file>` returning empty.
- **Additive amendment** (when applicable) — a new, dated, sourced clause appended to a frozen file, with its own binary acceptance check and a citation of the gap it fills. When a clause is superseded, the new clause names the old one by reference; the old clause remains in place, unmodified — the file only grows. Nothing is removed or edited in place.
- **Zoom-out log entry** (when a refinement impulse is stopped at Step 4) — a brief Ledger note recording what was considered and why it was deferred. Preserves the observation without allowing it to divert the current session.

## Acceptance checks (binary)

For any protocol declared frozen under this law, the following checks apply:

1. **Soundness criteria met before freeze?** YES if the Ledger entry for the freeze decision records: (a) a real task on which the protocol was exercised, (b) a cross-family audit with no unresolved load-bearing finding, (c) all acceptance checks verified green, and (d) an honest ceiling stated in the file. NO if any of the four criteria is unrecorded or unmet.
2. **Freeze declaration present?** YES if the frozen file contains a dated freeze statement with a Ledger entry ID, placed visibly before the first substantive section. NO if the file has no such declaration.
3. **Git verifiability confirmed?** YES if (a) `git diff --diff-filter=DR <pre-freeze-commit>..HEAD -- <frozen-file>` returns empty (no deletions or renames — necessary check), AND (b) the append-only invariant holds: the file's prior content is a strict prefix of its new content and no existing line was modified (the binding invariant; not caught by `--diff-filter=DR`). NO if either check fails.
4. **Additive-only discipline held post-freeze?** YES if every post-freeze change to the file is an appended clause (with date, source, binary acceptance check, and gap citation) and no existing clause has been rewritten, weakened, or removed. NO if any existing clause text was modified or deleted.
5. **Zoom-out check performed?** YES if the Ledger entry for the current session records an explicit zoom-out check result (advance-mission or polishing/deferred) before any material governance work was begun in that session. NO if the session proceeded to governance work without one.
6. **Process-not-outcome stated?** YES if the file's Protocol or Honest ceiling section includes an explicit clause stating that a sound process is the deliverable and does not convert to outcome certainty. NO if the file asserts or implies that a sound process guarantees a correct result.
7. **Gate line (e) satisfied?** YES if the controller's cross-family codex audit result is recorded in the build LEDGER before this file is marked final. NO if only self-graded.

## Honest ceiling
Even under full compliance with this law, freezing too early locks in a latent defect as additive-only. The soundness bar — exercised on a real task, cross-family audited, acceptance checks green, honest ceiling stated — is a judgment call that can be wrong. A protocol that passes all four criteria but addresses a narrower failure-mode space than the real domain requires will produce a frozen, verified shell that still passes wrong conclusions through its gaps. Additive amendments can patch individual gaps but cannot reconstruct a fundamentally mis-scoped protocol without effectively rewriting it, which the additive-only rule prevents. The zoom-out check and the cross-family audit reduce the probability of premature freezing; they do not eliminate it. The correct interpretation of a frozen, compliant protocol is: "the process we have tested is sound for the failure modes we have identified and audited" — not "all relevant failure modes are covered." Discovering a new failure mode after a freeze is not a violation of the law; it is the expected trajectory, and the additive amendment path exists to handle it.

## Cross-references
- **L-A** (`laws/L-A_adversarial_posture.md`) — the cross-family audit required by Step 1 (soundness condition 2) is the adversarial overturn attempt defined in L-A Step 2. A freeze cannot be declared without L-A's cross-family check being recorded in the Ledger.
- **L-B** (`laws/L-B_3tier_memory.md`) — the freeze declaration (Step 2 output), additive amendments, and zoom-out log entries (Step 4 output) are written to the Ledger (Tier 1); L-B's integrity invariants ensure they persist across context resets and are recoverable on resume. The additive-only invariant (frozen files only grow; existing lines never change) is the frozen-file parallel of L-B's general append-only memory law; `git diff --diff-filter=DR` staying empty is the mechanical check for deletions and renames but does not verify that existing lines are unmodified — the binding invariant requires both.
- **E9** (`stages/E9_build_probe.md`) — the build-probe loop is explicitly bounded by L-D (engine README E9 row: "bounded by L-D"); surprises found during E9 that reveal genuine protocol gaps trigger the additive-amendment path (Step 3), not a protocol rewrite.
- **GOVERNANCE.md §2** — the 8-line prompt-quality gate this file must clear; gate line (e) is the controller's responsibility and requires a codex audit result recorded in the LEDGER before this file is finalized.
- **The referent protocols** (freeze mechanism and prompt standard) are documented in the referent section above, including their full paths; they are not repeated here.
