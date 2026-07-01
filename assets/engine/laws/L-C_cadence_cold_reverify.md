<!--
PROMPT-QUALITY GATE (GOVERNANCE §2) — clear all 8 before marking this file "done":
[x] a. DoD quantified      — Acceptance checks §7 enumerate six binary YES/NO checks, each tied to a named DoD requirement or output artifact.
[x] b. Scope manifest      — Five DoD items listed in SAC-1 (task-4-report.md §manifest); reconciled with line-evidence in SAC-3 before commit.
[x] c. Levers, deliberate  — Compaction thresholds expressed as window-size fractions (never absolute counts); calibration drivers named explicitly; "use X when Y" framing throughout Steps 1–5; no unconditional MAX mandate; derailed-agent cap stated.
[x] d. Countermeasures     — Context-rot: Steps 1–2 calibration+slip triggers; satisficing: manifest+acceptance checks; sycophancy: via L-B "trust the file + git log" rule (cross-reference); hallucination: [HIGH-CTX] resolutions pinned to Ledger IDs (artifact-pin).
[ ] e. Cross-family audit  — Controller runs codex audit; result recorded in build LEDGER before this file is finalized. Self-grading ≠ audit (GOVERNANCE §2).
[x] f. Alignment trace     — UP: L-C → engine README laws table → GOVERNANCE §2 → engine mission (domain-agnostic research for any project). DOWN: fractions-not-absolutes consistent with domain-agnostic requirement; lean-brief rules consistent with CONTEXT_HYGIENE; no contradictions found.
[ ] g. Persisted           — Pending commit; controller records LEDGER entry and REGISTER row after commit.
[x] h. Honest ceiling      — §8 names three specific residual failure modes: correlated cold re-verifier, threshold mis-calibration from thin signal, caveat-drop below detection threshold.
-->

# L-C — Cadence & Cold Re-Verification

### Binding · Load WHEN:
INITIATOR loads this law at the start of every engine session, alongside L-A, L-B, and L-D through L-E. It governs the *timing* of context resets, the *calibration* of compaction cadence, and the *promotion* of `[HIGH-CTX]`-flagged verdicts from provisional to confirmed. It is active throughout all stages (E0–E11) and is especially operative at E0 (calibration), at every phase boundary (flush triggers), at every quality-slip signal, and whenever a sub-agent is briefed or dispatched.

## Purpose (one paragraph)
A research or build process that spans multiple context windows faces two compounding threats: *context rot* — the gradual degradation of reasoning quality as a window fills, which is non-uniform and can be severe well before the nominal ceiling — and *high-context verdict drift* — load-bearing decisions formed near that ceiling that carry no flag distinguishing them from decisions formed in a clean early context, so a future session cannot know which conclusions need re-examination. This law sets the countermeasures for both. It re-calibrates the compaction cadence to the *current* model-window and domain, using observed quality-slip signals rather than absolute token counts ported from a different project. It mandates that any verdict flagged `[HIGH-CTX]` by L-B undergoes a deliberate early cold re-verification in a fresh context before it is treated as final or used as a dependency. And it governs the leanness discipline for sub-agent briefs and returns: load-bearing constraints appear at the top of every prompt, every agent writes full detail to the durable record, and only the decision-relevant distillate — with ALL caveats and negative results — returns to the orchestrator.

## Kalshi referent (what proven mechanism this generalizes)

**`CONTEXT_HYGIENE.md`** (from the Kalshi alpha-engine, rooted in Ledger entries L-0026 and L-0035) and **`IRON_LAW.md §10.6`** (context-reset discipline and agent-output leanness). In its original context, the mechanism solved a concrete failure mode: heavy synthesis was running at ~770–900K tokens on a 1M-window model — far past the high-quality zone — because flushing findings to the Ledger *felt* like compacting, while the live context window kept growing untouched. The fix introduced (a) a *soft-target reset trigger* well before the hard ceiling (originally ~300–350K, refined to ~200K finish-the-unit / ~300K reset-now after research confirmed non-uniform degradation), (b) a *quality-slip trigger* independent of token counts, and (c) the rule that agent output is lean by *location* — full detail to the durable record, only the decision-relevant distillate back to the orchestrator. IRON_LAW §10.6 states the governing principle explicitly: "Agent output is lean by location, not rigor: full detail to the durable record, only the decision-relevant distillate (with all caveats and negative results) returns; dropping a caveat 'to be concise' is a §1 honesty-clause violation." These three mechanisms — early-trigger, quality-slip-trigger, and location-separated leanness — are domain-general and form the core of this law.

## Protocol (the steps the INITIATOR executes)

### Step 1 — Re-calibrate the compaction cadence for this domain and model

Do not port absolute token numbers from any prior project. The Kalshi referent used a 1M-token window and derived its thresholds specifically for that model at that window size. A different model or a smaller window shifts both the soft and hard thresholds.

**Calibration rules (run at E0; record in the Tier-2 State):**

- **Express thresholds as fractions of the usable window, not as absolute counts.** The tuned defaults the Kalshi referent converged on through observed context-rot (degradation appearing *well before* the nominal ceiling): *finish the current work unit at ~20% of the model's usable window; reset before starting the next unit at ~30%.* The hard ceiling is ~75–80% — past this, a long-output turn may not complete. Treat ~20%/~30% as a deliberately tight calibrated **anchor**, not a loose band: re-tune per domain *from evidence*, but do **not loosen** them without a recorded quality-slip observation (Step 2) that justifies it — tightening on any slip signal is always allowed.

- **Name the drivers of the threshold, not just its value.** The threshold is shaped by: (a) the model's usable context window and the fraction at which quality degrades — this is model-specific and often non-linear, with frontier models observed to degrade non-uniformly well before the nominal ceiling; (b) the richness of context load per turn (a turn that reads many files consumes window faster than a single-question turn); (c) whether a context gauge exists to measure consumption directly — prefer direct measurement and fall back to fractional estimates when measurement is unavailable.

- **One heavy analysis = one session unit.** Do not batch multiple heavy research or build steps into a single run. After each unit: flush to Ledger → commit → refresh Tier-2 State → run L-B integrity check → request a context reset before the next unit begins.

- **Record the calibrated fractions and their reasoning in the Tier-2 State at E0** so every subsequent context reloads them as facts rather than re-deriving them. A context that must re-derive its own cadence parameters from scratch has already used budget unnecessarily.

### Step 2 — Apply quality-slip triggers as primary reset signals

A quality-slip signal is a *primary* compaction trigger — it is not subordinate to token counts and is not overridden by the fact that the soft-target fraction has not yet been reached. Reset *whenever* any of the following appear, regardless of where the context stands:

- **Repetition.** The INITIATOR re-states something already said in the same session, verbatim or near-verbatim, without a cue to do so.
- **Lost threads.** A question or task registered in the Coverage Register is not in the INITIATOR's active working set, yet has not been closed.
- **Vagueness on a previously specific point.** A claim that was stated with numerical precision or crisp framing is now stated in hedged generalities.
- **Contradiction.** Any statement in the current turn contradicts a statement from an earlier turn in the same session, without an explicit acknowledgment and a new Ledger entry recording the correction.

**Action on slip detection:** compact immediately — flush all unrecorded findings to the Ledger, refresh the Tier-2 State, update the Index and Register — then request a context reset before continuing. Do not attempt to "fix" the quality slip by working through it; by the time a slip is externally visible, additional unseen slippage has likely already occurred. Treat the first detected slip as a fire alarm: the response is evacuation and reset, not firefighting in place.

Record the slip type and the compaction event in a Ledger entry so the event is auditable.

### Step 3 — Schedule and execute early cold re-verification of [HIGH-CTX]-flagged verdicts

Every verdict carrying a `[HIGH-CTX: re-verify cold before treating as final]` flag (placed by L-B Step 5) is **provisional**. It cannot be used as a confirmed finding or a dependency for downstream decisions until a cold re-verification has been completed and recorded.

**When to schedule the cold re-verify:**
- At the *start* of the next phase after the one in which the verdict was formed — not at the end of a later phase when the verdict may already be load-bearing for several decisions made in the interim.
- If the verdict gates a human-approval decision or an irreversible action, complete the cold re-verify *before* any downstream work that depends on it.
- The cold re-verify is always *early*, never deferred to a convenient moment. Deferring it means the provisional finding may silently become the de-facto confirmed one.

**Cold re-verification procedure:**
1. Open a fresh context. Load only the governing document, the Tier-2 State, and the Tier-3 Index/Register (the L-B Step 1 resume anchor). Carry over no live context from the session that produced the `[HIGH-CTX]` verdict.
2. Pull the flagged Ledger entry and its cited supporting entries by ID. Do *not* rely solely on the State summary — the cold re-verifier reads the primary evidence.
3. Re-derive the verdict independently before cross-checking the original finding. The re-verifier reaches its conclusion from the evidence first; comparing to the original is a check, not a starting point.
4. Write a new Ledger entry: "Cold re-verification of L-NNNN [HIGH-CTX] verdict: [CONFIRMED / CORRECTED / OVERTURNED]. Reasoning: [...]." If corrected or overturned, state what changed and why, then update any downstream decisions that referenced the original as confirmed.
5. Update the Register row and Tier-2 State to reflect the cold-verified status. The original `[HIGH-CTX]` entry is not modified (Ledger is append-only); only the new entry resolves it.

**Named residual risk:** A cold re-verifier drawn from the same model family as the original can share the original's systematic blind spot. A fresh context removes the *degradation* failure mode (hot context reasoning) but not the *systematic* failure mode (a class of evidence that this model family consistently misinterprets). Where a verdict is high-stakes and rests on genuinely ambiguous evidence, note in the cold-verification Ledger entry that "a fresh context of the same family reaches the same conclusion" — not that the conclusion is correct. When feasible, pair the cold re-verify with L-A's cross-family posture (a verifier from a different model family) for verdicts in this category.

### Step 4 — Lean sub-agent briefs: load-bearing constraints at the top; re-anchor on resume

**Brief construction for sub-agent dispatch:**
1. **Task and goal at the top.** State what the sub-agent must produce and why it matters, in the first paragraph. This anchors the agent before any context is loaded.
2. **Load-bearing constraints immediately after the goal — in the first three sentences of the brief.** Any constraint that, if violated, would make the output unusable (domain-agnostic requirement; append-only Ledger; fractions not fixed counts; specific output artifact format) belongs at the top, not buried later. A constraint that appears at line 40 of a prompt is a constraint that a context-loaded agent may never see.
3. **Hand specific artifacts as files, not as conversation history.** Every sub-agent — implementer, reviewer, researcher — gets a lean, file-scoped context: the task brief plus the specific Ledger entries or files it needs, handed as files. Never accumulate the full session conversation into a sub-agent brief. A reviewer or researcher inheriting hundreds of thousands of tokens of session history is context-rotted; its verdict cannot be trusted and must not be treated as independent.
4. **Derailed sub-agents (derailment = zero tool calls or stray framing text):** retry *once* with a hardened anti-injection brief. If it still fails, escalate to the operator rather than absorbing the raw material into the orchestrator's context to compensate. Absorbing a derailed agent's raw output is exactly what balloons the orchestrator's window.

**Re-anchor discipline on every resume:**
- Before any substantive work in a resumed session, load the governing document + Tier-2 State + Tier-3 Index/Register (L-B Step 1). Do not begin research, synthesis, or build actions before this anchor is confirmed.
- Read the State's **Resume mode** field (WAIT or CONTINUE) and act accordingly: wait for an operator cue if WAIT; proceed with the named next step if CONTINUE. Resume mode is set at stop-time when context is full; the resumed context acts on that decision rather than re-evaluating it from a thin starting point.
- Re-state the current task objective at the top of the first working block after every resume. This in-context anchor keeps subsequent reasoning tethered to the mission rather than to whatever the resumed context loaded most recently.

### Step 5 — Agent output is lean by location, not rigor (IRON_LAW §10.6)

This step carries the governing principle of IRON_LAW §10.6 and CONTEXT_HYGIENE §4 without modification. It binds every sub-agent this engine dispatches and every return the orchestrator receives.

**The rule:**
- **(a) Do the full work.** Every agent performs the complete, rigorous analysis — never truncate reasoning, evidence collection, or testing to save tokens or shorten output.
- **(b) Full detail to the durable record.** Every raw finding, derivation, intermediate step, caveat, fragility, uncertainty, and negative result is written to the Tier-1 Ledger or a named analysis file pinned in a Ledger entry. This is what makes leanness safe: nothing is discarded, only relocated.
- **(c) Only the decision-relevant distillate returns.** What comes back to the orchestrator or Tier-2 State is the conclusion, the load-bearing quantities, and — non-negotiably — ALL caveats, fragilities, uncertainties, and negative results. Not a summary that smooths them away.
- **(d) Dropping a caveat "to be concise" is a violation.** Concision applies to bulk: logs, intermediate steps, raw fetched content. It never applies to caveats, fragilities, or negative results. An agent that omits a caveat because it seems minor has made a honesty decision it is not authorized to make; the orchestrator must have every caveat to assess downstream risk. This is a §1 honesty-clause violation (GOVERNANCE §2 → IRON_LAW §1), not a formatting choice.
- **(e) When uncertain whether something is decision-relevant:** include it in the return AND record it durably. The cost of an included caveat is one sentence. The cost of a dropped caveat that turns out to be load-bearing is potentially the entire downstream decision.

**Violation detection:** The INITIATOR detects a likely violation when a sub-agent return is smoother, more confident, or shorter than the evidence would produce if stated honestly. On detection: flag, retrieve the full Ledger record, verify whether any caveat was dropped, and, if the dropped caveat was load-bearing, write a correction Ledger entry before using the finding downstream.

## Inputs / Outputs

**Inputs:**
- Tier-2 State file: contains calibrated thresholds (set at E0 per Step 1); "Resume mode" field; current phase and active task. Location: `memory/state.md` (or E0-established equivalent).
- Tier-3 Index and Coverage Register: loaded at every resume re-anchor (Step 4). Location: `memory/index.md` and `memory/coverage_register.md` (or E0-equivalents).
- `[HIGH-CTX: re-verify cold before treating as final]`-flagged Ledger entries (placed by L-B Step 5). Location: `memory/ledger/` files, retrieved by ID.
- Sub-agent briefs: authored per Step 4 rules by the INITIATOR before each dispatch. Format: Markdown, lean and file-scoped. Location: ephemeral in the sub-agent's context; summary pinned in a Ledger entry.

**Outputs:**
- **Per calibration (at E0):** A Tier-2 State record of the calibrated soft-target and hard-ceiling fractions with their driver factors (model window, task richness, gauge availability), plus a Ledger entry noting the calibration event and reasoning.
- **Per quality-slip detection:** A Ledger flush entry recording the slip type detected and what was compacted. A Tier-2 State refresh. A context reset request.
- **Per [HIGH-CTX] cold re-verify:** A new Ledger entry "Cold re-verification of L-NNNN [HIGH-CTX] verdict: [CONFIRMED / CORRECTED / OVERTURNED]" with full reasoning. An updated Register row and Tier-2 State reflecting resolved status.
- **Per sub-agent dispatch:** A lean, file-scoped brief authored per Step 4. The sub-agent's full output written to the Ledger; the distillate — with all caveats — returned to the calling context or State.

## Acceptance checks (binary)

1. **Calibrated thresholds recorded as fractions?** YES if the Tier-2 State (set at E0) contains soft-target and hard-ceiling thresholds expressed as window-size fractions with their driver factors stated. NO if the State contains ported absolute token counts from another project, or no thresholds at all.

2. **Quality-slip procedure applied on every detected slip?** YES if every quality-slip event in the Ledger is paired with a flush+reset action and no record of continued substantive work after a slip without a compaction event appears. NO if any Ledger entry records slip detection followed by continued analysis without a compaction event.

3. **[HIGH-CTX] verdicts cold-re-verified before first downstream use?** YES if every `[HIGH-CTX]`-flagged Ledger entry has a corresponding cold-verification Ledger entry that is recorded *before* the first downstream Ledger entry that treats the original verdict as confirmed. NO if any `[HIGH-CTX]` entry is referenced as confirmed in a downstream decision without a preceding cold-verification Ledger entry.

4. **Sub-agent briefs lean and file-scoped?** YES if sub-agent briefs place the task+goal first and load-bearing constraints in the first three sentences, and hand specific files rather than accumulated session conversation. NO if any sub-agent brief inherits the full session conversation history or buries a load-bearing constraint after the first three sentences of the brief.

5. **Agent output: full detail to Ledger, distillate with all caveats to orchestrator?** YES if every sub-agent return is paired with (a) a full-detail entry in the Ledger and (b) a distillate in the State/return that retains all caveats and negative results visible in the full-detail entry. NO if any distillate in the State omits a caveat that appears in the corresponding Ledger entry.

6. **Re-anchor performed on every resume before substantive work?** YES if every resumed session shows a governing-document + State + Index/Register load (L-B Step 1) before any substantive output in that session's Ledger entries. NO if any resumed session begins substantive Ledger output before the anchor is recorded.

## Honest ceiling

This law reduces context-rot and cold-re-verify failures; it does not eliminate them. Three residual failure modes persist even after full compliance:

1. **Correlated cold re-verifier.** The cold re-verifier in Step 3 is drawn from the same model family as the original verdict. A fresh context removes the *degradation* failure mode (hot-context reasoning) but not the *systematic* failure mode (a class of evidence that this model family consistently misinterprets in any context, fresh or not). A CONFIRMED cold re-verification means: a fresh context of the same family reaches the same conclusion — not that the conclusion is objectively correct. Cross-family verification (L-A) is the guard against the systematic failure mode; L-C schedules the opportunity for that posture but cannot supply the independence itself.

2. **Threshold mis-calibration from thin signal.** The fractions in Step 1 are calibrated from observed quality-slip events. If the domain is novel and few slip events have been observed, the initial fractions are estimates inherited from the Kalshi referent — which were themselves tuned on a specific project and model. An under-calibrated threshold may be too permissive (allowing context rot before a slip is detected) or too conservative (triggering unnecessary resets). A threshold set from fewer than a handful of observed slips in the current domain is an informed estimate, not a validated parameter; treat it as provisional until more signal accumulates.

3. **Caveat-drop below detection threshold.** Step 5 requires that caveats dropped "to be concise" are detected and flagged. Detection depends on comparing the sub-agent's return against its Ledger entry. If the sub-agent's own Ledger entry understates a caveat (the agent considered it minor and recorded it minimally), the orchestrator has no independent signal that the caveat was dropped at all. The Ledger is the integrity backstop; it is not an independent auditor. The caveat-drop failure mode that Step 5 guards against can still occur when the original write to the Ledger is itself incomplete.

## Cross-references
- **L-B** (`laws/L-B_3tier_memory.md`) — L-B places `[HIGH-CTX]` flags (Step 5) and defines the resume integrity invariants (Step 7); L-C is the law that schedules and executes the cold re-verification that clears those flags. The two laws are coupled: L-B creates the provenance annotation; L-C closes it.
- **L-A** (`laws/L-A_adversarial_posture.md`) — Cross-family verification (L-A's core mechanism) is the remedy for the "correlated cold re-verifier" failure mode named in L-C's Honest ceiling. L-C identifies when that failure mode is in play; L-A provides the independent, different-family audit that addresses it.
- **E0** (`stages/E0_intake.md`) — L-C Step 1 directs the INITIATOR to record calibrated window-fraction thresholds in the Tier-2 State at E0 initialization. E0 is the correct locus because it is where the domain, model, and window-size facts that drive the calibration are first established.
- **GOVERNANCE.md §2** — The 8-line prompt-quality gate this file must clear. Gate line (e) requires a cross-family codex audit result recorded in the build LEDGER before this file is marked final. Self-grading does not satisfy (e).
- **CONTEXT_HYGIENE.md (Kalshi referent tree)** — The source protocol this law generalizes: §1 (compaction ≠ window shrink), §2 (soft/hard reset targets and the quality-slip trigger), §3 (decision provenance), §4 (agent-output leanness: "leanness is about LOCATION, not AMOUNT"), §5 (mandatory phase-boundary flush). Full path: `../kalshi-alpha-engine/protocols/CONTEXT_HYGIENE.md`.
- **IRON_LAW.md §10.6 (Kalshi referent tree)** — Source text for Step 5: "Agent output is lean by location, not rigor: full detail to the durable record, only the decision-relevant distillate (with all caveats and negative results) returns; dropping a caveat 'to be concise' is a §1 honesty-clause violation." Full path: `../kalshi-alpha-engine/IRON_LAW.md`.
