# State (Tier 2) — resume snapshot

> The single mutable "where am I" file. Overwrite in place at each compaction/resume (L-B). Keep it lean — the full record lives in the Ledger; this file POINTS at detail, it does not duplicate it.

### Current stage & task
E11 TERMINAL — Route B (decision-deliverable). Delivered, awaiting operator review.

### Project-type
`decision` — set at E1 (L-0004). E8 used decision-saturation. E9 and E10 skipped per INITIATOR decision-mode routing.

### Key conclusions & decisions in force
1. The operator's "video" is a long-form X article, not a video (L-0005). Full text at `artifacts/source_T11_x_article.md`.
2. Four corrections to the pasted summary, two of them load-bearing: no quota auto-resume (L-0007), `SubagentStart` cannot block (L-0008). See `artifacts/` appendix table.
3. F4 root cause confirmed; the structural fix is `CLAUDE_CODE_SUBAGENT_MODEL`, which tops the resolution order (L-0009).
4. F7 + F4 measurement is one environment variable, `CLAUDE_CODE_ENABLE_TELEMETRY=1` (L-0011).
5. Several D1 mechanisms already ship as subagent frontmatter fields (L-0012). "Read the harness docs before designing a mechanism" is proposed as a protocol step.
6. Central analytical claim: each of L-A..L-E is a countermeasure to a specific LLM training stage. Section 4 of the report. CONSTRUCTED ANALYSIS, unattacked.

### Open threads & next actions
- **G3 unconfirmed.** Harness scope assumed as option (c) staged. Operator asked for a plain-English explanation and has not yet chosen. Report §6 answers the question and invites overturn. If the operator picks (b), §6's framing changes and §7's ordering does not.
- **Cross-family check could not run.** codex logged out, no Gemini CLI, no API keys on this host. L-A's mandatory overturn pass is UNSATISFIED, not satisfied. Recorded as a gap, never as a pass.
- **The prior session's artifacts remain unreadable** from this host (`/root/depth-engine-improve`). Re-running this analysis where those files live would likely surface more corrections.
- Report §7 items are recommendations only. Nothing in §7 has been implemented.

### Resume mode
WAIT — stop at the operator review gate. E11 declarations are not acted on before the operator reviews (INITIATOR §E11).

### Ledger status
Highest ID in Ledger: L-0015. Index rows: 15. Invariant (i) holds.

### Blocked items
- L-A cross-family overturn: blocked on a second model family being reachable from this machine. Cheapest unblock is the Gemini CLI free tier ($0).
