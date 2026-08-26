# Index (Tier 3a) — Ledger table of contents

> One row per Ledger entry, appended as the Ledger grows (L-B). The count of rows here must equal the highest Ledger ID (an integrity invariant checked on every resume).

| ID | Date | Type | Summary |
|----|------|------|---------|
| L-0001 | 2026-08-26 | action | E0 intake complete; seed.md written verbatim; memory paths established; video URL absent from seed |
| L-0002 | 2026-08-26 | finding | Chrome extension not connected and no preview open — "use the chrome tab" not executable; needs operator |
| L-0003 | 2026-08-26 | finding | Environment survey: depth-engine CLI present, depth-engine-main not a git repo, /root/depth-engine-improve unreachable from this Mac |
| L-0004 | 2026-08-26 | decision | E1 complete; project-type DECISION; operator answers to G1/G2/G3 recorded (G3 assumed, not confirmed) |
| L-0005 | 2026-08-26 | correction | X-001 the "video" is a long-form X article, verified three ways |
| L-0006 | 2026-08-26 | correction | X-002 article carries 4 leftover AI prompt instructions; usable as structure, not authority |
| L-0007 | 2026-08-26 | correction | X-003 LOAD-BEARING: Claude Code has no quota auto-resume; rate-limit never triggers fallback |
| L-0008 | 2026-08-26 | correction | X-004 LOAD-BEARING: SubagentStart cannot block; gate must sit on PreToolUse/TaskCreated |
| L-0009 | 2026-08-26 | finding | X-005 F4 confirmed: model defaults to inherit; CLAUDE_CODE_SUBAGENT_MODEL tops the resolution order |
| L-0010 | 2026-08-26 | correction | X-006 no 0.2.0/v0.1.0 drift in this tree; real drift is HANDOFF 26 vs actual 29 tests |
| L-0011 | 2026-08-26 | finding | X-007 OTel carries model+tokens+cost+agent.name per request; F7/F4 measurement is one env var |
| L-0012 | 2026-08-26 | finding | Platform-first: maxTurns/effort/isolation/model already ship; "check the docs first" must be a protocol step |
| L-0013 | 2026-08-26 | finding | X-008 repo already existed; local tree was not under git; 141 unversioned lines rescued in f3bbe44 |
| L-0014 | 2026-08-26 | decision | E8 CONVERGED (decision-saturation); 3 open sub-questions incl. unrunnable cross-family check |
| L-0015 | 2026-08-26 | decision | E11 Route B terminal; REPORT.md delivered; honest ceiling recorded |
| L-0016 | 2026-08-26 | correction | X-009 CORRECTS X-001: real source is the quoting video post; the article was its quoted post |
| L-0017 | 2026-08-26 | action | Local ffmpeg+whisper.cpp transcription of the 2h34m video; instrument ceiling recorded in advance |
| L-0018 | 2026-08-26 | finding | T12 transcript captured (23,459 words); identified as Stanford CS229, likely Tengyu Ma; CS229 notes promoted as better artifact |
| L-0019 | 2026-08-26 | correction | X-012 the video is two lectures stitched in reverse course order |
| L-0020 | 2026-08-26 | finding | LOAD-BEARING: softmax has no null entry, so the E8 "any more questions?" gate has no false branch |
| L-0021 | 2026-08-26 | finding | L-E mechanical basis: NLL maximizes P(token that appeared); truth is not a term in the loss |
| L-0022 | 2026-08-26 | finding | L-B cost basis: attention is O(T^2); keep ledger whole on disk, load rows on demand, never compress |
| L-0023 | 2026-08-26 | finding | Temperature absent from all 57 spec files; resampling at tau>0 is not corroboration (M8 bug) |
| L-0024 | 2026-08-26 | finding | Six expert hedges vs the article's zero; summaries lose epistemic markers first; brief must carry ledger's uncertainty |
| L-0025 | 2026-08-26 | correction | X-010 self-correction: L-A mapping is article-grade, the other four are lecture-grade |
| L-0026 | 2026-08-26 | decision | E8 re-converged after source correction; REPORT revised to v2 |
| L-0027 | 2026-08-26 | correction | Instrument bug: naive `grep -c '^L-0'` miscounts the Ledger; parse the record, not the line |
