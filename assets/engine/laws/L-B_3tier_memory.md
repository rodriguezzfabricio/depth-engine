<!--
PROMPT-QUALITY GATE (GOVERNANCE §2) — clear all 8 before marking this file "done":
[x] a. DoD quantified      — Acceptance checks §7 enumerate six binary YES/NO checks, each tied to a named DoD requirement or output artifact.
[x] b. Scope manifest      — Four DoD items listed in SAC-1 (task-3-report.md §manifest); reconciled with line-evidence in SAC-3 before commit.
[x] c. Levers, deliberate  — "Use X when Y" and "prefer X when…" framing throughout; compaction thresholds stated as window-size ratios, not ritual constants; no unconditional MAX mandate.
[x] d. Countermeasures     — Context-rot: governing document + State + Index/Register reload mandated at Step 1; satisficing: scope manifest + acceptance checks; sycophancy: "trust the file + git log" rule (Step 1) over recollection; hallucination: all verdicts pinned to Ledger IDs (artifact-pin), no unverifiable self-reports.
[ ] e. Cross-family audit  — Controller runs codex audit; result recorded in build LEDGER before this file is finalized. Self-grading ≠ audit (GOVERNANCE §2).
[x] f. Alignment trace     — UP: L-B → engine README laws table → GOVERNANCE §2 → engine mission (durable institutional memory for any domain). DOWN: calibrated "use X when Y" framing consistent with GOVERNANCE §2's "scales down, never drops out"; no contradictions found.
[x] g. Persisted           — Commit records this file; build LEDGER entry (B-0008) links to it; reachable from REGISTER R-012.
[x] h. Honest ceiling      — §8 (Honest ceiling) names the specific residual failure mode: the integrity invariants catch corruption and dropped entries, not wrong-but-consistently-recorded content; a green integrity check does not prove conclusions are correct.
-->

# L-B — Three-tier append-only memory

### Binding · Load WHEN:
INITIATOR loads this law at the start of every engine session, alongside L-A and L-C through L-E. It remains active throughout all stages (E0–E11) and governs every action that reads from or writes to the three-tier memory system. It is especially active during compaction steps, resume rituals, and any moment the INITIATOR is about to rely on its own recollection rather than rereading a file.

## Purpose (one paragraph)
Any research or build process that spans multiple context windows will degrade unless its intelligence accumulates somewhere more durable than context. This law establishes the engine's three-tier memory architecture: a Ledger (Tier 1) that is immutable and append-only, so the full decision trail never shrinks; a State file (Tier 2) that is a small, dense resume snapshot, so a fresh context can orient in minutes; and an Index + Coverage Register (Tier 3) that maps every Ledger entry and tracks every open item to exhaustive closure. Together the three tiers create a flywheel: each context window discards its disposable working memory without losing anything, because the Ledger holds the permanent, checkable institutional record; each resume reloads from a frozen State rather than hoping the model recalls the right thread; and the Register makes completeness checkable — zero open items is the only legitimate definition of done. The law also mandates that high-context verdicts carry decision-provenance flags quarantining them as provisional until a cold context re-verifies them, and that on every resume the INITIATOR trusts the files and `git log` over its own recollection. The result is quality that compounds across resets rather than decaying: each completed session hands the next a stronger memory than the one it inherited.

## Kalshi referent (what proven mechanism this generalizes)
**IRON_LAW.md §10** (Memory & Context Architecture — The Second Brain) from the Kalshi alpha-engine project, specifically §10.1 (three tiers: `memory/ledger/`, `memory/state.md`, `memory/index.md` + `memory/coverage_register.md`), §10.2 (compaction protocol with soft and hard window-fraction thresholds), §10.5 (resume ritual), and §10.6 (context-reset discipline and agent-output leanness). In its original context, the three-tier system solved a concrete problem: the project required hundreds of independent research passes, each generating findings that had to be exactly reproducible in a later context. Without an external, immutable record, every context reset was a potential amnesia event; with the three-tier system, a new context could re-anchor to the full decision trail within a single loaded turn. The pattern — *permanent external memory + frozen resume snapshot + exhaustive status register* — is domain-general: it applies to any long-running research or build pipeline that outlasts a single context window, regardless of domain.

## Protocol (the steps the INITIATOR executes)

### Step 1 — Load the memory anchor on every resume
On every session start or context reset, reload exactly: (a) the engine's governing document (the domain-equivalent of the Iron Law), (b) the Tier-2 State file, and (c) the Tier-3 Index and Coverage Register. Do **not** reload the full Ledger at session start — pull individual Ledger entries on demand by ID. This anchor is the integrity baseline; no substantive work is trustworthy until it is established.

**Trust rule (binding for all subsequent steps):** If your recollection of what happened conflicts with what a Tier-1 or Tier-3 file says, **the file wins**. If the file conflicts with `git log`, **`git log` wins**. Your in-context recollection is an unreliable cache; the files and git history are the authoritative record. This is not a politeness norm — it is a structural correction for the fact that context attention degrades silently across long windows.

### Step 2 — Maintain the Tier-1 Ledger (immutable, append-only)

The Ledger is the master record. Every action, finding, decision (with its reasoning), and null result is written here, verbatim, **before** the context window that generated it ends.

**Write rules:**
- Every entry has a stable ID (`L-NNNN`, zero-padded monotonically), a date, a type tag (action / finding / decision / null-result / correction), and enough prose to reconstruct the reasoning without the live context. An entry that cannot reconstruct its reasoning from the text alone is incomplete.
- Write to the Ledger before any compaction or anticipated session end. A finding that exists only in context is a finding that will be lost.
- **Never overwrite, summarize, or compact an existing Ledger entry.** If a prior entry is superseded, write a new entry that references the prior ID and states what changed. The old entry remains. This is what makes compaction non-destructive: nothing leaves the record, even when entries are overridden.
- **Supersede via a new linked entry.** Format: "Supersedes L-NNNN: [reason for supersession]. [new content]." The ID chain is the audit trail and must be checkable from the file alone.

**Elevate write frequency (after every substantive step rather than every phase) when:**
- The verdict is high-stakes — it gates the next stage or a human-approval decision.
- The context has grown large and a reset is becoming likely.
- A finding is surprising, negative, or a null result — these are exactly the items most likely to be silently lost to memory drift.

### Step 3 — Maintain the Tier-2 State file (living resume snapshot)

The State file makes a cold-start resume fast. It is a small, dense snapshot containing: (a) current phase and active task, (b) key conclusions and decisions in force with Ledger-ID pointers, (c) open threads and next actions, (d) the Ledger's current highest-ID (the anchor for the Step 7 integrity check), and (e) any blocked items with a note on what would unblock them.

**Refresh rules:**
- Refresh the State fully at every compaction and at every phase boundary.
- Keep it small — it is not a second Ledger. Prose belongs in the Ledger; pointers and distilled decisions belong in the State. A well-maintained State is typically 200–500 words with Ledger IDs. A bloated State is a sign that Ledger writes are being skipped.
- The State may be updated in-place (it is the one tier that is not append-only), but every substantive change should also be reflected in a Ledger entry so the decision trail remains complete.

### Step 4 — Maintain the Tier-3 Index and Coverage Register (completeness guarantee)

The **Index** is a table of contents into the Ledger: one row per entry, columns for ID, date, type, and a one-line summary. Its sole purpose is targeted retrieval — it lets a cold context find the right Ledger entry without rereading the full Ledger.

The **Coverage Register** is the exhaustiveness guarantee: every item the process must address (question, aspect, task) has exactly one row with a status of `open / in-progress / answered / verified / closed`. The process is not complete until the Register reaches zero open items **and** convergence (no genuinely novel items are being generated by further work).

**Maintenance rules:**
- Every new Ledger entry gets an Index row immediately after the entry is written.
- Every new question or task gets a Register row immediately, even when the INITIATOR plans to address it in the current session. Skipping registration because "I will handle it now" is how items fall through.
- Do not close a Register item without a Ledger-ID reference pointing to the closure evidence.
- Use status `in-progress` sparingly. At every compaction, every `in-progress` item is either promoted to the current session or explicitly held open with a note in the State. An `in-progress` item that is not in State is a dropped thread.

### Step 5 — Decision-provenance flags for high-context verdicts

A verdict reached deep in a long context window is structurally less reliable than one reached in a cold, clean context with all relevant evidence freshly loaded. This is not a defect to suppress — it is a structural property of attention-based systems that should be named, flagged, and scheduled for re-verification.

**Rule:** Any verdict, synthesis conclusion, or go/no-go decision that is reached after the context has grown substantially large (use the soft compaction threshold from Step 6 as the threshold: if you are past it when the verdict is formed, flag it) must carry a decision-provenance annotation in the Ledger entry:

```
[HIGH-CTX: re-verify cold before treating as final]
```

This flag means: the verdict may be correct, but it is **provisional** until a separate, freshly loaded context reads the full supporting evidence (not just the State summary) and independently confirms it. A `[HIGH-CTX]` annotation does not mean the verdict is wrong; it means it has not yet earned the standing of a cold-verified finding.

**When to apply:**
- Apply when: the verdict is high-stakes (gates a stage, a human-approval decision, or an irreversible action) AND the context was substantially past the soft threshold when the verdict was formed.
- Do not apply to: low-stakes exploratory notes, interim working summaries, or any verdict formed in the first half of a window.
- Clear a flag only by writing a new Ledger entry in a fresh context that explicitly states: "Cold re-verification of L-NNNN [HIGH-CTX] verdict: [confirmation or correction]."

### Step 6 — Compaction: flush before quality slips, not after

When the context approaches its soft threshold (roughly 30–40% of the model's usable window is a practical soft target; 75–80% is the hard ceiling where a long turn may not complete), compact **before quality visibly slips**, not after. Signs of slipping include repetition, lost threads, vague answers that were previously specific, or contradictions with earlier findings. Phase boundaries are natural compaction points; also compact immediately on any such sign.

**Compaction steps (non-destructive — nothing is deleted):**
1. **Flush:** write everything not yet in the Ledger — raw findings, tool output, working conclusions, scratch. This is the one step where verbatim beats distilled; the goal is zero information left only in context.
2. **Clear:** drop cheap noise from the live context (raw output, fetched pages, scratch) — these are in the Ledger, so dropping them loses nothing.
3. **Refresh State:** maximize recall, then trim to a dense, pointer-heavy snapshot. The Ledger is complete, so the State can be aggressively brief.
4. **Update Index and Register:** add one Index row per new Ledger entry; update the status of every addressed Register item.
5. **Re-initialize:** a fresh context loads only the governing document + State + Index/Register. All other detail is pulled from the Ledger by ID on demand.
6. **Run integrity check (Step 7):** before resuming substantive work in the fresh context, verify all four invariants.

Record the pre- and post-compaction ID and row counts in a Ledger entry so the compaction itself is auditable.

### Step 7 — Resume integrity invariants (run on every resume and after every compaction)

Before doing any substantive work after a resume or compaction, verify all four invariants in order. Stop and audit if any fails; record the verification result either way.

1. **Ledger-Index count invariant:** The Ledger's highest stable-ID number equals (Index table rows, including the header row) − 1. A mismatch means at least one entry was dropped from the Ledger or Index. Recover before continuing. Example: if the highest ID is 42, the Index table must have 43 rows total (1 header + 42 data rows).

2. **Register line-balance:** The total count of Register rows matches the count recorded in the State file at the last compaction. A mismatch means an item was added or dropped without a State update. Audit each status category and reconcile.

3. **Additive-only git check:** Run `git diff --diff-filter=DR <last-compaction-commit>..HEAD` on the memory directory. If any Ledger or Register files show deletions (D) or renames (R), stop — this is a data-integrity violation. Do not continue without recovering the deleted content from git history and recording the recovery in a new Ledger entry.

4. **Tests green:** If the project has an active test suite, confirm all tests pass before resuming substantive work. A red suite after a non-code compaction is an unexpected signal that warrants investigation before trusting any findings produced since the last green run.

**If any invariant fails:** audit what happened, recover the missing state from git history and Ledger entries, and write a recovery entry before resuming. Do not proceed on a memory system that failed its integrity check.

## Inputs / Outputs

**Inputs:**
- Tier-1 Ledger: append-only Markdown files with stable `L-NNNN` IDs. Location: `memory/ledger/` (or the equivalent path established at E0 intake). One file or split across multiple files as the record grows.
- Tier-2 State: a single Markdown file. Location: `memory/state.md` (or equivalent).
- Tier-3 Index: a single Markdown file with a table, one row per Ledger entry. Location: `memory/index.md` (or equivalent).
- Tier-3 Coverage Register: a single Markdown file with a table, one row per tracked item. Location: `memory/coverage_register.md` (or equivalent).
- `git log` and `git diff --diff-filter=DR`: the additive-only history that serves as the integrity anchor for Step 7 invariant 3.

**Outputs:**
- All four memory files, maintained in the state described by Steps 2–4.
- **Per-resume:** a Ledger entry recording which four invariants were verified, whether any mismatch was found, and what (if anything) was recovered.
- **Per compaction:** a Ledger entry recording what was flushed, the State refresh written, and the pre- and post-compaction ID and row counts.
- **Per high-context verdict:** a `[HIGH-CTX: re-verify cold before treating as final]` annotation in the corresponding Ledger entry, cleared only by a cold-verification Ledger entry in a fresh context.

## Acceptance checks (binary)

For any stage or compaction event that declares L-B satisfied:

1. **Tier-1 immutability held?** YES if no existing Ledger entry has been edited, overwritten, or deleted since the last integrity check — confirmed by `git diff --diff-filter=DR` showing no deletions on Ledger files. NO if any deletion or in-place modification appears.

2. **Append-only supersession correct?** YES if every corrected or superseded entry has a new linked successor (with "Supersedes L-NNNN: …") and the original entry is untouched. NO if any original entry was modified in place rather than superseded via a new linked entry.

3. **State refreshed at compaction?** YES if the State file contains a pointer to the current Ledger highest-ID and reflects the current open threads and next actions, updated at the most recent compaction. NO if the State is stale relative to the most recent Ledger entries.

4. **Register closed items have Ledger references?** YES if every item marked `closed` or `verified` has a Ledger-ID reference in the Register row pointing to the closure evidence. NO if any closed item has no such reference.

5. **Integrity invariants run and recorded?** YES if a Ledger entry records the four-point integrity check (count, line-balance, git, tests) at the most recent resume or compaction, whether or not any mismatch was found. NO if substantive work began before the invariants were verified.

6. **High-context flags applied where warranted?** YES if verdicts formed past the soft compaction threshold and gating a stage or human-approval decision are annotated `[HIGH-CTX: re-verify cold]` in their Ledger entries, or have a corresponding cold-verification Ledger entry clearing the flag. NO if late-context high-stakes verdicts appear in the Ledger without such annotation and without a cold-verification record.

## Honest ceiling

The four integrity invariants in Step 7 are corruption-and-drop guards, not correctness guards. They detect: missing Ledger entries (count mismatch), dropped Register items (line-balance mismatch), destructive git operations (diff-filter), and build regressions (test suite). They do **not** detect a verdict that is wrong-but-consistently-recorded: a finding that was fully written up, passed through all four invariants without any mismatch, and still reached a subtly incorrect conclusion will pass every check without triggering any alarm. A green integrity report means the memory system is intact and nothing was silently dropped; it does not mean the conclusions the memory contains are correct. The adversarial posture law (L-A) and the cold-reverify cadence law (L-C) are the guards against wrong-but-consistent content; L-B does not substitute for either.

## Cross-references
- **L-A** (`laws/L-A_adversarial_posture.md`) — cross-family overturn records generated by L-A are written to the Tier-1 Ledger; L-A depends on L-B to ensure those records survive context resets and are recoverable on resume.
- **L-C** (`laws/L-C_cadence_cold_reverify.md`) — L-C governs the cadence at which `[HIGH-CTX]`-flagged verdicts are scheduled for cold re-verification; L-B creates the flags (Step 5), L-C closes them.
- **L-E** (`laws/L-E_evidence_over_assertion.md`) — L-B's "trust the file + `git log` over recollection" rule (Step 1) is the memory-layer application of L-E's evidence-over-assertion principle; both laws require pinning claims to checkable artifacts rather than model recollection or self-report.
- **E0** (`stages/E0_intake.md`) — E0 establishes the concrete file paths for all four memory files; the "or equivalent" notes in Inputs / Outputs resolve to those paths at E0.
- **GOVERNANCE.md §2** — the 8-line prompt-quality gate this file must clear; gate line (e) is the controller's responsibility and requires a cross-family codex audit result recorded in the build LEDGER before this file is finalized.
- **IRON_LAW.md §10 (referent tree)** — the source text this law generalizes; §10.1 defines the three tiers, §10.2 defines compaction thresholds, §10.5 defines the resume ritual, §10.6 defines context-reset discipline. The invariant formula "Ledger highest-ID = Index rows − 1" derives from §10's accounting model where IDs are monotonically incremented from zero-offset. Full path given in the referent section above.

---

## Additive clause A1 — Projected Coverage Register across dedicated per-item artifacts + integrity coverage (appended 2026-06-29; B-0037; L-D append-by-reference)

> **L-D note:** ADDITIVE. Does NOT modify the Binding, Steps 1–7, or acceptance checks 1–6 above; the prior content of this file is a strict prefix of this version. §4 prompt-quality clearance + cross-family codex audit recorded in BUILD-LEDGER B-0037.

**Gap filled (source):** the P5-DRY plumbing-proof walk of E7 (BUILD-LEDGER B-0037), cross-family-codex-confirmed (two load-bearing facets of one seam). Step 4 + Inputs describe the Tier-3 Coverage Register as "a single Markdown file … one row per tracked item (question, aspect, task)," and Step 4 says "every new question or task gets a Register row immediately." But the engine's own stage design EMITS DEDICATED per-item artifacts that carry their own per-item status — e.g. the per-question battery produced by the question-generation stage (each question with PENDING / answered-verified / PENDING-CORRECTED status), and the per-aspect map produced by the decomposition stage — and downstream stages (e.g. the answer/kill-loop stage) instruct "mark the question … in the Coverage Register." On any generic build-mode run this forces a choice the frozen text does not resolve: either redundantly duplicate every question into the single Register file, or treat the dedicated artifact as the item-level register (which the frozen text neither authorizes nor integrity-checks). Facet 1: the projection is unauthorized. Facet 2: Step 7 invariant 2 (Register line-balance) counts only the single Register file's rows, so per-item status carried in a dedicated artifact is protected by NO integrity invariant.

**A1.1 — PROJECTED COVERAGE REGISTER (binding).** When the engine produces a dedicated per-item artifact that carries a checkable per-item status for every item of its type (for example: a per-question battery with a per-question status field; a per-aspect map whose per-aspect coverage the convergence stage judges), that artifact **serves as the Tier-3 item-level register for that item type** (a *projection* of the Coverage Register). The single Tier-3 Coverage Register file then tracks coverage at the work-item / stage granularity AND **names (references) each dedicated per-item register it relies on**; it need not duplicate every per-item row. An item whose status lives in a referenced per-item register is NOT "unregistered" for Step 4's "every question/task gets a row" — its row lives in that register. **The exhaustiveness guarantee (zero open items + convergence) is evaluated across the Coverage Register file PLUS every referenced per-item register together.** What Step 4 forbids — an item that falls through because it is tracked nowhere — is unchanged: the violation is an item that appears in NEITHER the Register file NOR any referenced per-item register.

**A1.2 — INTEGRITY COVERAGE EXTENDS TO THE PROJECTIONS (binding).** The Step-7 resume integrity check EXTENDS to every dedicated per-item register the Coverage Register references. For each such register the check confirms: (a) every item carries a status (no item present without a status); (b) every item marked closed / verified / answered carries a Ledger-ID reference to its closure evidence (the per-item parallel of acceptance check 4); and (c) the item-count and status set are intact since the last check (no silently dropped item or status transition — the per-item parallel of Step 7 invariant 2). The Step-7 Ledger entry records, per referenced per-item register, that these held. A referenced per-item register whose items lack statuses, whose closures lack Ledger references, or that has lost items since the last check FAILS the integrity check exactly as a Register-file mismatch does.

**Acceptance check 7 (binary): Projected coverage authorized AND integrity-checked?** YES if — whenever the run uses a dedicated per-item artifact as an item-level register — (a) the Tier-3 Coverage Register file references each such per-item register by name; (b) every process item (question / aspect / task) appears with a status in EITHER the Register file OR a referenced per-item register (none in neither); AND (c) the most recent Step-7 integrity record covers each referenced per-item register's status-completeness, closure-evidence, and item-count intactness. NO if a dedicated artifact carries coverage status that no integrity check protects, or if any process item appears in no register at all, or if the Register file relies on a per-item register it does not name.

**Does not contradict:** Step 4 (every item is still registered — this clause only permits the row to live in a *referenced* per-item register instead of forcing duplication into the single file; the fall-through prohibition is unchanged), the single-file Coverage Register description in §Inputs (that file remains a single file; the per-item registers are additional, referenced artifacts, not a second Coverage Register), Step 7's four invariants (this ADDS coverage of the referenced per-item registers; it weakens none — `git diff --diff-filter=DR` and the Ledger–Index count invariant are untouched), or acceptance check 4 (A1.2(b) applies the same closure-evidence rule to the projections).
