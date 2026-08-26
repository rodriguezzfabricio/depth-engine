# Coverage Register (Tier 3b) — exhaustiveness guarantee

> One row per tracked item (question / task / risk / aspect / sub-question). Status drives convergence (E8). Append rows and update their status; never delete a row (L-B). On resume, the first `open` or `in-progress` row is where you continue.

Decision-mode run. Rows are the sub-questions the central decision rests on, per E5 decision-mode output.

**Central decision:** what should change in the Depth Engine, and what does the operator need to understand to drive it?

| Item | Type | Status | Evidence (Ledger ID) | Notes |
|------|------|--------|----------------------|-------|
| S1. What is the operator's linked source and what does it actually say? | sub-question | closed | L-0005, L-0006 | Long-form X article, not a video. Full text captured. Low provenance, correct structure. |
| S2. Which claims in the pasted summary survive primary-source checking? | sub-question | closed | L-0007..L-0011 | 4 corrections found (X-003, X-004, X-006, X-002), 2 confirmations (X-005, X-007). All against primary docs. |
| S3. What is the mechanical cause of F1 (no stopping point)? | sub-question | closed | report §4 L-D row | A next-token predictor can always emit one more plausible objection, so "can I think of another question?" never returns no. Exit must be coverage over a closed list. |
| S4. What is the mechanical cause of F4 (all-Opus routing)? | sub-question | closed | L-0009 | `model` frontmatter defaults to `inherit`. Structural fix is the env var at the top of the resolution order. |
| S5. Which of the eight complaints can the platform close without new code? | sub-question | closed | L-0011, L-0012 | F4 fully; F7 measurement fully; F1/F2 runaway half via `maxTurns`; F3 partially (registry rows, not the gate). |
| S6. Where must the fail-closed enforcement point sit? | sub-question | closed | L-0008 | `PreToolUse` or `TaskCreated`. NOT `SubagentStart`, which cannot block. |
| S7. Does the engine currently track its own work? | sub-question | closed | L-0013 | No. Local tree had no git at all; 141 lines unversioned. L-B invariant (iii) was unrunnable for want of a repository. |
| S8. What does "make the engine a harness" mean, and which reading applies? | sub-question | **open** | L-0004 (G3) | Explained in report §6. Working assumption (c) staged is `[engine-inferred — NOT operator-confirmed]`. Does not change §7's ordering. |
| S9. What should the operator learn to go deeper in AI? | sub-question | closed | report §8 | Ordered by effect on this work: harness docs, tokenizer, tiny LM, one primary paper, evaluation vocabulary. |
| S10. Can this run's own verdicts be adversarially overturned? | risk | **open** | L-0014 (c) | L-A cross-family check UNRUNNABLE on this host. Verification is single-family. Recorded as unsatisfied. |
| S11. Are there corrections only visible from the prior session's own files? | risk | **open** | L-0003, L-0014 (b) | `/root/depth-engine-improve` unreachable. Unknown and unbounded. The report is a summary-of-a-summary and says so. |

**Saturation argument (E8, decision-mode).** Every recommendation in report §7 carries either a primary-source citation or a mechanical check executed in this run. S8, S10, and S11 remain open and none of them changes the recommended actions or their ordering: S8 changes framing only, S10 and S11 could only add items, not remove or reorder the ones evidenced here. That is decision-saturation, not total coverage, and the distinction is stated in the deliverable.
