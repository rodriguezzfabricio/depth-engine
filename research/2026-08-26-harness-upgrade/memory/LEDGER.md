# Ledger (Tier 1) — append-only

> The immutable record of this run. Append one entry per action / finding / decision / null-result. Never edit or delete a prior entry (L-B). Entry format:
>
> ```
> L-NNNN
> Date: YYYY-MM-DD
> Type: action | finding | decision | null-result | correction
> <content that lets a fresh context reconstruct what happened and why>
> ```
>
> Load-bearing entries also carry a `Decided at: ~Xk context` line; a high-context decision is provisional until reproduced cold (L-C).

L-0001
Date: 2026-08-26
Type: action
E0 INTAKE COMPLETE. Seed received and written verbatim to
`artifacts/seed.md` (27,029 bytes), header only is model-generated.
Input shapes present: (a) a long pasted plain-English status report from a
PRIOR, SEPARATE depth-engine session that lived on a different machine
(paths in it are `/root/depth-engine-improve/`, not this Mac); (b) an
operator instruction paragraph asking this run to read that text, watch a
video open "in the chrome tab", and return a written report pitched at a
software-engineering intern; (c) an implicit URL reference — "this video" —
whose URL is NOT present anywhere in the seed text.
Legibility check: PASS (vague in places, not garbled — vagueness is E1's job).
Memory tier paths for this run (established here per E0 Step 3):
  Ledger   memory/LEDGER.md
  State    memory/STATE.md
  Index    memory/INDEX.md
  Register memory/REGISTER.md
  Artifacts artifacts/
No interpretation performed at E0. Per L-E, every factual claim inside the
pasted text (star counts, paper effect sizes, platform capabilities, file
paths) is quarantined as `[found — unverified]` until E2 corroborates it.
Hand off to E1.

L-0002
Date: 2026-08-26
Type: finding
TOOL-REACHABILITY CHECK (run before E1 so the interview asks only what is
genuinely irreducible).
- `mcp__claude-in-chrome__list_connected_browsers` returns `[]`.
- `mcp__claude-in-chrome__tabs_context_mcp` returns "Claude in Chrome is not
  connected."
- `mcp__Claude_Browser__tabs_context` returns "No preview is open."
CONSEQUENCE: the operator's instruction "use the chrome tab" cannot be
executed as written. This session has no read access to the operator's real
Chrome tabs. The in-app browser (`Claude_Browser`) and `WebFetch`/`WebSearch`
are available, so a video CAN be processed — but only from a URL the operator
supplies, or after they reconnect the extension.
This is the single blocking `[NEEDS-OPERATOR]` item entering E1.

L-0003
Date: 2026-08-26
Type: finding
ENVIRONMENT SURVEY (this Mac, /Users/fabricio.rodriguez/Desktop):
- `depth-engine` CLI present at
  ~/.nvm/versions/node/v24.16.0/bin/depth-engine.
- `depth-engine-main/` exists on the Desktop and is NOT a git repository
  (no `.git`); it holds package.json, HANDOFF.md, CHANGELOG.md, src/, test/,
  docs/, bin/. Last content mtime on src/ and test/: 2025-08-25.
- The Desktop itself is not a git repo, so the run root is the cwd per the
  skill's fallback rule. Run scaffold created at `Desktop/depth-engine/`.
- `/root/depth-engine-improve/` — the path the pasted text says holds all the
  prior session's state — does not exist on this machine and cannot; `/root`
  is a Linux home. The prior session ran elsewhere (remote box / container).
CONSEQUENCE for the report: this run cannot open the prior session's
evidence files, D1 draft, or crawl batches. It can only reason about the
prior session from the pasted summary, which is exactly the lossy-summary
failure mode that session itself identified (Meta-Harness Table 3). This
limitation must be stated in the deliverable's honest ceiling.

L-0004
Date: 2026-08-26
Type: decision
E1 COMPLETE. Intent Brief confirmed by operator at the Step 6 gate.
Project-type: DECISION (E8 uses decision-saturation, E9 skipped, route to E11
Route B). Rationale: the deliverable named by the operator is "a written
report explained to a software engineer intern", not a build-ready scaffold.
The report informs a later build; it is not the build.
Operator answers to the three [NEEDS-OPERATOR] questions:
  G1 video source -> supplied URL
     https://x.com/RahulKu22532718/status/2073977106447634474?s=20
  G2 target tree  -> Desktop/depth-engine-main, PLUS an instruction to put it
     under git and push to a private GitHub repo via gh.
  G3 harness scope-> operator did not understand the question and asked for a
     plain-English explanation. Working assumption recorded: option (c),
     staged. Explained in REPORT.md section 6 with an explicit invitation to
     overturn. Logged as [engine-inferred — NOT operator-confirmed].
Everything else was self-answered at MOVE 2 and never surfaced.

L-0005
Date: 2026-08-26
Type: correction
X-001. The operator's "video" is NOT a video. It is a long-form X article.
Three independent checks: (i) t.co/ABhsTsMsnn 301-redirects to
x.com/i/article/2073973224455733248, the long-form article route; (ii) the
post carries exactly one media entry, a JPEG 1975x790, with no video entity
and no duration; (iii) rendered page text is ~2,400 words of prose with no
player element. Full text captured to artifacts/source_T11_x_article.md.
Any sentence in this run's output of the form "the video says X" would be
fabricated. None was written.

L-0006
Date: 2026-08-26
Type: correction
X-002. Source-provenance defect in the article itself. The published text
contains four separate instances of leftover authoring-prompt residue, e.g.
"Here's a rewritten version with the same meaning, similar length, and a
fresh writing style to reduce similarity." Stage 1's heading also appears
twice with two different subtitles. Engagement ratio is 23 likes on 108,800
views (0.02%), roughly two orders of magnitude under organic norms.
Verdict: usable as a STRUCTURE (the five stages are standard and correct),
not as an AUTHORITY. Every load-bearing claim re-sourced to primary docs.
Status under L-E: [found — unverified, low-provenance].

L-0007
Date: 2026-08-26
Type: correction
X-003. LOAD-BEARING. The pasted summary's batch-2 claim "Claude Code has
quota auto-resume (the exact feature whose absence ended two of your runs)"
is NOT supported.
Evidence: code.claude.com/docs/en/model-config, Fallback model chains:
"Authentication, billing, rate-limit, request-size, and transport errors ...
never trigger a switch." Rate-limit is the operator's case. Further, per
support.claude.com article 14552983 and docs/en/errors, a subagent's API
request fails TERMINALLY on a usage limit and the user must ask Claude to
retry or resume it. Nothing resumes automatically.
Why this is load-bearing: the summary used this claim to REDUCE scope
("Only the stale-agent reaper is engine work"). Two of the eight complaints
would have stayed open with no owner. Quota handling goes back on the build
list alongside the reaper.

L-0008
Date: 2026-08-26
Type: correction
X-004. LOAD-BEARING. "sub-agent start/stop hooks (the dispatch registry
nearly free)" is half true. Both events exist. But per
code.claude.com/docs/en/hooks, exit-code-2 behavior per event:
  PreToolUse    -> "Blocks the tool call"
  TaskCreated   -> blocks task creation
  SubagentStop  -> "Prevents the subagent from stopping"
  Stop          -> "Prevents Claude from stopping"
  SubagentStart -> "Shows stderr to user only"
and verbatim: "For SessionStart, Setup, and SubagentStart, the exit code 2
stderr renders ... Claude doesn't see it, and the session or subagent
proceeds."
CONSEQUENCE: D1's "an unrouted launch becomes unrecordable" CANNOT be
enforced at SubagentStart. Wiring the fail-closed routing gate there
produces a fail-open gate wearing a fail-closed label, i.e. the exact
pathology this run exists to remove, reproduced inside the fix.
CORRECT WIRING: blocking check on PreToolUse or TaskCreated; SubagentStart
for the registry row only; SubagentStop for close-out.
Note this is the run's own batch-4 "Stop Means Stop" principle (wrapper
discipline fails open, only a structural route fails closed) being violated
one paragraph after being stated.

L-0009
Date: 2026-08-26
Type: finding
X-005. F4 root cause CONFIRMED verbatim. Subagent frontmatter `model` is
optional and "Defaults to `inherit`" (same model as the main conversation).
Additional finding the summary missed, the documented resolution order:
  1. CLAUDE_CODE_SUBAGENT_MODEL environment variable
  2. per-invocation `model` parameter
  3. subagent frontmatter `model`
  4. main conversation's model
The env var sits at the top and overrides everything below it. That is a
STRUCTURAL control (no path routes around it), not a prose rule the agent
must remember. Directly satisfies the structural-route criterion from
Stop Means Stop.

L-0010
Date: 2026-08-26
Type: correction
X-006. The summary's "engine repo says 0.2.0 in package.json but is only
tagged v0.1.0" is FALSE for the tree the operator selected.
Mechanical check on Desktop/depth-engine-main:
  package.json  -> "version": "0.1.0"
  CHANGELOG.md  -> ## [0.1.0] — 2026-07-01
  HANDOFF.md    -> "Handoff — Depth Engine v0.1.0"
All three agree. No 0.2.0 anywhere. The version-drift remediation should NOT
be applied here.
REAL drift found instead: HANDOFF.md claims "Tests: 26 passing"; actual is
29 passing / 0 failing in 385ms on Node 24.16.0. Docs stale by three tests.

L-0011
Date: 2026-08-26
Type: finding
X-007. OpenTelemetry confirmed and LARGER than the summary credited.
`CLAUDE_CODE_ENABLE_TELEMETRY=1` yields:
  event  claude_code.api_request -> model, input_tokens, output_tokens,
         cache_read_tokens, cache_creation_tokens, cost_usd, request_id
  metric claude_code.token.usage -> type, model, query_source, speed,
         effort, agent.name, skill.name
  metric claude_code.cost.usage  -> model, query_source, speed, effort,
         agent.name, skill.name, mcp_server.name, mcp_tool.name
CONSEQUENCE: the entire measurement layer for F7 (token budget) and the
second half of F4 (which model did this dispatch actually run on) is
available behind one environment variable. D1 proposes building a dispatch
registry to collect data already being emitted.

L-0012
Date: 2026-08-26
Type: finding
PLATFORM-FIRST. Documented subagent frontmatter already ships mechanisms D1
plans to build: `model` (F4), `maxTurns` (F1/F2 external turn cap the agent
cannot raise), `effort` low..max (F7), `isolation: worktree` (parallel
agents stop colliding), `tools`/`disallowedTools`/`permissionMode` (blast
radius), `hooks` (per-agent enforcement), `memory` (ledger plumbing).
The ECC audit praised a ~150-line script for implementing turn caps; the
platform ships it as a frontmatter field.
META-FINDING: this run's crawl has now made the "the platform ships more
than credited" correction three separate times (batch 2 correcting batch 1,
batch 3, and here). A lesson relearned per batch is a missing protocol step.
RECOMMENDATION: "read the harness documentation before designing any
mechanism" becomes a required step in the engine's research protocol, not an
observation.

L-0013
Date: 2026-08-26
Type: finding
X-008. The operator asked for a private GitHub repo to be created. One
ALREADY EXISTED: rodriguezzfabricio/depth-engine, private, default branch
main, created and last pushed 2026-07-01, 10 commits, tree matches
depth-engine-main. No second repo created.
Local Desktop/depth-engine-main was NOT a git repository (no .git, no
remote, no history). Connected it to the existing remote and reconciled
against origin/main (git reset --mixed, working tree untouched). Drift:
  M src/cli.js  (+44/-22)      M test/cli.test.js
  ?? src/start.js (66 lines)   ?? test/start.test.js (75 lines)
That is the `depth-engine start` command — the feature used to create THIS
run — sitting unversioned on one laptop's disk for a day, with no copy.
Committed as-found, unmodified, after a green suite: f3bbe44.
This is F5 in its most literal form: not only could the operator not see the
changes, neither could git, because there was no git.
It also means L-B's own integrity invariant (iii), `git diff
--diff-filter=DR` proving memory is additive-only, was UNRUNNABLE rather
than violated. A law with no substrate to run on.

L-0014
Date: 2026-08-26
Type: decision
E8 CONVERGENCE (decision-mode, decision-saturation). VERDICT: CONVERGED.
Central decision: "what should change in the Depth Engine, and what does the
operator need to understand to drive it." Saturation argument: every
mechanism recommended in REPORT.md section 7 carries either a primary-source
citation or a mechanical check executed in this run. The four load-bearing
corrections were each verified against primary documentation, not opinion.
Remaining open sub-questions, none of which change the recommendation:
  (a) G3 harness scope is assumed, not confirmed. If the operator meant
      option (b), section 7's ordering is unchanged; only section 6's framing
      moves.
  (b) The prior session's own artifacts (/root/depth-engine-improve) remain
      unreadable from this host. More corrections likely exist there.
  (c) Verification is single-family. No cross-family overturn path exists on
      this machine (codex logged out, no Gemini CLI, no API keys), so L-A's
      mandatory cross-family check COULD NOT BE RUN. Recorded as an
      unsatisfied law, not a satisfied one.
Route: E11 Route B, decision-deliverable. E9 and E10 skipped per INITIATOR
decision-mode routing.

L-0015
Date: 2026-08-26
Type: decision
E11 TERMINAL — Route B (decision-deliverable).
Artifact: research/2026-08-26-harness-upgrade/REPORT.md in
Desktop/depth-engine-main, pushed to the private remote.
Honest ceiling, stated in the deliverable's section 10 and repeated here:
 - Built on a SUMMARY of the prior session, not its logs. This run is itself
   subject to the Meta-Harness Table 3 effect it cites (raw logs 50.0 vs
   summary of the same logs 34.9). The four corrections found are the ones
   checkable from this host; there is no basis for believing they are all.
 - Tier 0 (mechanical) results are trustworthy: the suite ran and printed 29,
   version strings were read from three files, the redirect returned 301 to
   an article route, documentation is quoted not paraphrased.
 - Section 4 (training stages -> five laws) is CONSTRUCTED ANALYSIS. The
   stages are standard and sourced; the causal mapping to L-A..L-E is this
   run's argument, unattacked and uncited. Strong hypothesis, not result.
 - Zero engine stage/law/protocol files were modified.
Operator review required before any of section 7 is acted on.
