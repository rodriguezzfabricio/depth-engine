# State (Tier 2) — resume snapshot

> The single mutable "where am I" file. Overwrite in place at each compaction/resume (L-B). Keep it lean — the full record lives in the Ledger; this file POINTS at detail, it does not duplicate it.

### Current stage & task
E11 TERMINAL — Route B (decision-deliverable), revision v2. Delivered, awaiting operator review.

### Project-type
`decision` — set at E1 (L-0004). E8 used decision-saturation, converged twice (L-0014, then L-0026 after the source correction). E9 and E10 skipped per INITIATOR decision-mode routing.

### Key conclusions & decisions in force
1. **Real source is T12**, the 2h34m52s Stanford CS229 lecture, transcribed locally to 23,459 words (L-0016, L-0018). T11 (the X article) is the post *quoted by* T12 and is demoted to specimen.
2. **F1 has a mechanical cause** (L-0020): the softmax is always a complete normalized distribution over ~250k tokens with no null entry, so E8's "any more questions?" gate has no false branch. Fix is coverage over a closed list.
3. **L-E has a one-sentence basis** (L-0021): NLL maximizes the probability of the token that appeared in the data. Truth is not a term in the loss.
4. **L-B has a cost basis** (L-0022): attention is O(T²). Keep the ledger whole on disk, load rows on demand, never compress it into context.
5. **Temperature is absent from all 57 spec files** (L-0023), and resampling at τ>0 is not corroboration. That is a real bug in the M8 design.
6. **Summaries lose epistemic markers first** (L-0024). Six expert hedges in the lecture, zero in the article. The human brief must carry the ledger's uncertainty or it is a lossy copy.
7. Four corrections to the pasted summary stand (L-0007, L-0008, L-0010, plus L-0011/L-0012 platform findings). Two are load-bearing: no quota auto-resume, and `SubagentStart` cannot block.
8. **New gate proposed from this run's own failure** (L-0016): confirm the target artifact before researching it. Verifying an artifact is not verifying it is the requested artifact.

### Open threads & next actions
- **S8 unconfirmed.** Harness scope assumed as option (c) staged. Operator asked for a plain-English explanation and has not chosen. REPORT §9 answers it and invites overturn. If they pick (b), §11's ordering is unchanged; only §9's framing moves.
- **L-A cross-family check could not run.** codex logged out, no Gemini CLI, no API keys. Recorded as UNSATISFIED, never as passed.
- **L-A's own law mapping is article-grade** (L-0025), unlike the other four. Needs a source that reaches RLHF.
- **Prior session's artifacts remain unreadable** (`/root/depth-engine-improve`). More corrections likely exist there.
- REPORT §11 items are recommendations. **Nothing in §11 has been implemented.**

### Resume mode
WAIT — stop at the operator review gate. E11 declarations are not acted on before the operator reviews (INITIATOR §E11).

### Ledger status
Highest ID: L-0027. Index rows: 27. Invariant (i) PASS, verified with a record-shape parser after the naive line-anchored count produced a false alarm (L-0027).

### Blocked items
- L-A cross-family overturn: blocked on a second model family being reachable. Cheapest unblock is the Gemini CLI free tier ($0).
