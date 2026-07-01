# CONTEXT HYGIENE — Reset Discipline & Agent-Output Leanness
### Binding operating protocol — load at EVERY resume and BEFORE any heavy analysis

> **Reference note (Origin/rationale).** "The constitution" and any bare section numbers point to your project's always-loaded core rules; in the Depth Engine distribution that role is played by the engine's laws (`engine/laws/`) + `BOOT.md`. "The State file / Index / Coverage Register" are the run's 3-tier memory in `memory/`. Sibling protocols live beside this file in `protocols/`.

> **Status & provenance.** Binding. Codifies standing rules adopted in the Ledger —
> **L-0026** (compaction + lean sub-agent contexts) and **L-0035** (the six
> context-hygiene rules) — plus the found-reference quarantine rule
> (**L-0026 / L-0027**). Referenced by the project constitution. **Additive:** this
> file ADDS discipline on top of the constitution's memory rules; it removes or weakens nothing there.
>
> **The governing principle of this whole document:** *leanness is about
> LOCATION, not AMOUNT.* Full rigor and full detail always exist — in the Ledger,
> the analysis files, and the on-demand protocol files. The always-loaded surface
> (the constitution core + your agent's always-loaded instructions + the run's State file) stays lean by
> POINTING at that detail, never by discarding it.

---

## 1. The core insight — compaction flushes memory; it does NOT shrink the window

The §10.2 "compaction" the agent performs (flush to Ledger, refresh State,
integrity check) keeps **external** memory clean but does **NOT** shrink the live
CLI context window. **Only the operator's `/clear` or `/compact` shrinks the
window.** (Source: L-0035 — heavy synthesis had been running at ~770–900k tokens,
far past the high-quality zone, precisely because flushing *felt* like "compacting"
while the window kept growing.)

Treat *window size* and *external-memory tidiness* as two different problems. The
agent must actively manage the first by asking the operator to reset.

---

## 2. The reset trigger and discipline (L-0035 rules 1–3)

```
SOFT TARGET ~300–350k tokens IS THE OPERATIVE RESET LINE.
The ~750–800k ceiling is an emergency, never the norm.
```

1. **Proactively request the reset.** The agent cannot measure or reset its own
   window, so it MUST say **"recommend resetting context now"** whenever (a) it is
   about to begin any heavy multi-step analysis, (b) it judges the session has
   grown large, or (c) at **every** phase boundary. Never plow into a big analysis
   on a large context — pause and request the reset first. *(L-0035-1)*
2. **Prefer `/clear` + §10.5 resume over `/compact`.** A fresh window re-seeded
   from the constitution + the State file + the Index + the Coverage Register is cleaner
   than `/compact`'s lossy summary. **Before any `/clear`:** commit everything,
   confirm the Ledger/State capture the in-flight task, confirm `git status` clean.
   Use `/compact` ONLY when there is uncommitted in-flight work to preserve.
   *(L-0035-2)*
3. **One heavy analysis = one session unit.** Do not batch analyses into one long
   run. After each: flush to Ledger → commit → refresh State → integrity-check →
   **reset to a fresh context before the next.** Every analysis begins life lean.
   *(L-0035-3)*

> **Operator reset gauge (live).** An always-on status-line context gauge
> (a small script registered in your agent's settings) reads the REAL per-turn token
> usage from the transcript and shows `ctx Nk`: **GREEN** < 230k · **YELLOW ≥ 230k**
> (finish unit & reset soon) · **RED ≥ 300k** (`⟳ /clear NOW`). It runs outside the
> model context (zero token cost). The agent prompts a reset at unit/phase
> boundaries; the gauge is the always-visible backstop; the operator reads it and
> pulls the trigger.

> **REFINED 2026-06-22 (L-0046 A1) — tighten toward ~200k.** Per the Chroma *context-rot*
> research (all frontier models, Opus included, degrade non-uniformly *well before* the rated
> window — usable budget is a fraction of it), the gauge **YELLOW now triggers at ~200k** (the
> *finish-the-unit* line) with **300k kept as the RED reset-now ceiling.** Treat ~200k as "wrap
> up the current unit and reset," not the old ~300–350k soft band. The ~230k/~300–350k figures
> elsewhere in this file are the original target, tightened by this note (additive — nothing
> above is removed; only the reset trigger moves earlier, which is strictly more conservative).

**Resume mode — recorded at stop-time so resume serves the mission, not rote stopping.**
When recommending a reset, set State's **Resume mode**: **WAIT** if stopping at a
genuine decision/fork or a §7 gate; **CONTINUE** (+ the unambiguous next action) if the
stop is purely context-driven mid-task. On resume the agent shows the status panel
either way, then **waits** (WAIT) or **proceeds** with the named next step (CONTINUE) —
a top-1% expert continues when the path is clear and halts only for real decisions.
This makes the wait-vs-continue call with full context at stop-time, not from a thin
resumed context. See your project's resume ritual.

---

## 3. Decision provenance (L-0035 rule 5)

For every **load-bearing** decision (a verdict, a KILL, a go/no-go, a §7 finding),
record the approximate context level it was made at (the operator supplies this from
the tracker). **Flag any decision made ABOVE the soft target:**

```
⚠ decided in high-context zone — re-verify in a fresh context before treating as final.
```

Load-bearing Ledger entries carry a `Decided at: ~Xk context` line. A high-context
decision is provisional until reproduced cold. (Precedent: L-0035 flagged
L-0030/31/33/34; L-0036 cleared them by a fresh-context re-run.)

---

## 4. Agent-output leanness — the rule that makes delegation safe

This is the operational heart of "leanness is LOCATION, not AMOUNT." It binds every
sub-agent (research, implementer, reviewer) and every distilled return.

```
LEANNESS GOVERNS LOCATION, NEVER RIGOR.
```

- **(a)** Every agent does the FULL, rigorous work — never truncate analysis,
  testing, or reasoning to save tokens.
- **(b)** The COMPLETE detail — raw outputs, full derivations, every number, every
  caveat — is written to the durable system of record (the Ledger / an analysis
  file / a doc).
- **(c)** Only the decision-relevant DISTILLATE returns to the orchestrator/State:
  the conclusion, the load-bearing numbers, **ALL caveats / fragilities /
  uncertainties / NEGATIVE results**, and a pointer to the full detail.
- **(d)** Dropping a caveat, a fragility, or a negative result "to be concise" is a
  **HONESTY-CLAUSE VIOLATION, not an optimization.**
  Compression applies to the BULK (logs, intermediate steps), NEVER to the signal.
- **(e)** If unsure whether something is decision-relevant, **include it in the
  return AND record it durably.**

*(This is the positive form of "sub-agents return distilled outputs
only," anchored to the honesty clause.)*

**Lean, file-scoped contexts (L-0026).** Every sub-agent — implementer **and**
reviewer — gets a LEAN, file-scoped context: the task brief + the specific
diff/files handed *as files*, **never the accumulated conversation.** A reviewer
running at hundreds-of-thousands of tokens is **context-rotted and its verdict
cannot be trusted** — re-dispatch it lean rather than believe a rotted review.

**Derailed sub-agents (L-0035 rule 4).** On the recurring injection-derailment (an
agent returns 0 tool calls or stray skill/framing text): retry **ONCE** with the
hardened anti-injection brief; if it still fails, **hand the task back to the
operator to run as its own fresh session.** Do **NOT** absorb a derailed agent's
full raw material to compensate — that is exactly what balloons the window. Cap the
raw source text the orchestrator ever reads directly.

---

## 5. Compact / flush at EVERY phase boundary (L-0026)

A phase boundary is a **mandatory** compaction+flush point, not merely a "natural"
one (a natural boundary that this rule hardens to mandatory). At every
phase boundary: flush to Ledger → refresh State → update Index/Register →
integrity-check → and (per §2) recommend a context reset before the next phase.

---

## 6. Found-reference quarantine (L-0026 / L-0027)

When a file appears in the workspace that the agent did not author and cannot trace
(an untracked or unexplained reference, dataset, or doc):

1. **Track it as a reference**, but **QUARANTINE its claims** — they are NOT
   promoted to fact, and nothing downstream may rely on them.
2. **Register a verification question** in the Coverage Register.
3. **Surface its provenance to the operator** explicitly.
4. **"Provenance-confirmed ≠ claims-trusted."** Even after the operator confirms
   where a file came from, its numbers stay quarantined until independently
   reproduced (the "reproduce, don't trust" gate).

---

## Cross-references
- The project constitution (memory & context architecture; honesty clause; drift audits) — in the Depth Engine, the engine's laws + `BOOT.md`.
- The run's State file (`memory/STATE.md`) — "Resume protocol" + "Decisions in force" (the live mirror).
- Sibling protocols in `protocols/`.
