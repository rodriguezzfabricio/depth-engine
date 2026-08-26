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

L-0016
Date: 2026-08-26
Type: correction
X-009. CORRECTS X-001 AND THE RUN'S OWN E1 INPUT. The operator states the
video is the right source and the article is not. Both are true and the run
had the relationship backwards.
The real target is
  https://x.com/Dhruvkumar16797/status/2092490146793013420/video/1
posted 2026-08-26 by Dhruv kumar (@Dhruvkumar16797). That post QUOTES the
Rahul Kumar article captured at T11. So the article the run read in full was
the quoted post embedded inside the real source, not the source.
Root cause of the mistake: at E1 the operator supplied the URL of the quoted
article rather than the quoting post. The run verified the FORMAT of the URL
it was given (correctly: that URL is an article) and never asked whether it
was the right URL. Verifying an artifact is not the same as verifying it is
the artifact you were asked for. X-001 remains factually true and was
answering the wrong question.
Video facts from the post payload:
  media id 2092486905632055296, duration 9291.733 s = 2 h 34 m 52 s,
  640x360 max, mp4 variants at 256 kbps and 832 kbps, no caption track.
Post text describes a Stanford class covering BPE tokenization, the
Transformer and attention, the training pipeline, NLL loss, and the
next-token decoder.
ACTION: the article's five-stage framing (T11) is DEMOTED to supporting
context. Section 4 of the report was built on the correct subject matter but
the wrong evidence tier. The video is a primary lecture; the article is a
paraphrase of a paraphrase.

L-0017
Date: 2026-08-26
Type: action
No caption track ships with the video, so the content is being obtained by
local transcription rather than by inference from the post text. Writing a
report about a lecture from its promotional caption would be exactly the
fabrication L-0005 refused to commit.
Pipeline, all local, nothing sent to a third party:
  ffmpeg (~/homebrew/bin/ffmpeg) streams the 480x270 / 256 kbps mp4 variant
  and writes audio only -> 16 kHz mono s16 WAV, 284 MB, in the session
  scratchpad. Video frames are discarded; only the audio is kept.
  whisper-cli (~/homebrew/bin/whisper-cli, whisper.cpp) with the operator's
  own ggml-small.en.bin (487 MB, ~/Desktop/.whisper-models/) transcribes it.
Known ceiling of this instrument, recorded BEFORE reading the output so it
cannot be rationalised afterwards:
  - small.en is a small model. Technical vocabulary and proper nouns will be
    mangled. Expect BPE, softmax, logits, and researcher names to come
    through wrong. Normalise against primary sources, never quote a term
    straight from the transcript as if it were verified.
  - Audio-only. Every slide, equation, and code sample on screen is lost.
    A lecture of this type carries much of its content visually. Any claim
    about what was SHOWN would be invented; only what was SAID is evidence.
  - No speaker diarisation and no timestamps in the txt output.
Verdict tier under M8: this is Tier 0 (mechanical capture), but a lossy
instrument. The transcript is evidence of what was said, at small.en
fidelity, and nothing more.

L-0018
Date: 2026-08-26
Type: finding
T12 SOURCE CAPTURED. Local transcription complete: 23,459 words, 3,040 lines,
126 KB, produced in 324 s of compute (whisper.cpp small.en, Metal). Saved to
artifacts/source_T12_stanford_lecture_transcript.txt. Read in full.
IDENTIFICATION (inference, three converging signals, NOT a stated fact — the
audio never names speaker or course):
  (i)  "Chris has talked about a linear model" / "Chris is using almost
       exactly the same notation". Stanford CS229 has been co-taught by
       Tengyu Ma and Chris Re (cs229.stanford.edu/lectures-spring2022/
       lecture1.pdf names both).
  (ii) On counting local minima: "in one of my papers ... by using ... the
       Kac-Rice formula" (transcript renders it "Cass-Rez").
  (iii)On residual connections improving conditioning: "including some of my
       papers".
=> Stanford CS229, lecturer most likely Tengyu Ma. HIGH-CONFIDENCE INFERENCE.
BETTER ARTIFACT FOUND: the lecturer says "check the lecture notes" 9 times.
Those notes are public and current: cs229.stanford.edu/main_notes.pdf,
updated 2026-08-23 (three days before this run). They carry the equations
and figures that audio structurally cannot. Promoted above the video for
study purposes.

L-0019
Date: 2026-08-26
Type: correction
X-012. The "2h34m Stanford class" is TWO lectures stitched, in reverse
course order.
  lines    1-1468 (~48%): the LLM lecture — tokenization/BPE, autoregressive
    chain-rule decomposition, embeddings, logits/softmax, generation with
    temperature and top-k, NLL loss, then the Transformer: attention, Q/K/V,
    causal masking, multi-head, residual + norm, T^2 cost, flash attention.
  lines 1469-3040 (~52%): the PREREQUISITE lecture — non-linear models, loss
    functions, cross-entropy, GD/SGD, neural nets, ReLU and other
    activations, ResNet, LayerNorm/RMSNorm, ConvNets.
The second half precedes the first in the course. Relevant to the operator's
learning path: start at the midpoint if the opening is heavy.

L-0020
Date: 2026-08-26
Type: finding
LOAD-BEARING. MECHANICAL CAUSE OF F1, upgraded from analogy to mechanism.
Transcript (lines ~371-408, ~944-954): at every position the network emits
logits over the full vocabulary and "you take a softmax, you get a
probability vector ... the sum of the entries is one, and all of the entries
are non-negative." Vocabulary size stated on the order of 250,000.
=> The output distribution is ALWAYS complete and ALWAYS normalized. It
contains NO null entry. A gate phrased "can the model think of another
question?" is sampling from a machine whose output space does not contain
"no". THE GATE HAS NO FALSE BRANCH.
This reframes E8 entirely. E8 is not a strict gate the run failed to
satisfy; it is a gate whose NO wire was never connected. Corroborated by the
operator's own history: E8 never converged in three passes and what ended it
was a hand-typed cap.
FIX (structural, not a stronger instruction): converge on COVERAGE OVER A
CLOSED LIST enumerated at E5. A finite set can be exhausted; a normalized
distribution cannot be emptied. Demote "I thought of another question" from
gate to logged signal. Same fix the Pocock audit named ("ends when the
frontier is empty"), now with a mechanical reason instead of an analogy.

L-0021
Date: 2026-08-26
Type: finding
L-E GETS A ONE-SENTENCE MECHANICAL BASIS. Transcript lines ~706-733: the
training objective is the negative log likelihood, and the lecturer is
explicit that the indexed token "is a particular choice of x_t ... which is
seen in the data."
=> The objective maximizes the probability assigned to THE TOKEN THAT
ACTUALLY APPEARED IN THE TRAINING TEXT. Not the true token. TRUTH IS NOT A
TERM IN THE LOSS FUNCTION.
Consequence: fluency and hallucination are the same optimization. A
confident well-formed false sentence is the system working as designed.
This also explains the operator's batch-4 result (catch rate for stale
evidence flat across a 15x price range): checking staleness requires going
and looking, and sampling from a conditional distribution has no lookup
step. A better model predicts better and still does not look. Tier 0
mechanical-first is therefore correct for a structural reason, not just an
empirical one.

L-0022
Date: 2026-08-26
Type: finding
L-B / CONTEXT_HYGIENE GET A COST BASIS. Transcript lines ~1399-1426: "the
number of operations is T squared times d_h ... if you have capital T being
a million, it's gonna take a million times square operations, which is
prohibitive." And directly: "when you are using [ChatGPT] or [Claude Code],
you see the context, and then after some point, they say, let me compact my
context. And the reason is that you have to shrink the context, otherwise
your computational efficiency is too bad." Naive attention memory is also
T^2; flash attention exists to reduce it.
=> Context cost is QUADRATIC, not linear. The operator's 474k-token session
was expensive on a curve.
RESOLUTION OF AN APPARENT CONFLICT: long context is expensive, BUT the
operator's ACE finding measured compression dropping accuracy 66.7 -> 57.1
(below never learning) and Meta-Harness Table 3 measured raw logs 50.0 vs a
summary of the same logs 34.9. So the answer is NOT "summarize the ledger."
It is KEEP THE LEDGER WHOLE ON DISK AND LOAD ONLY THE ROWS NEEDED. Cheap and
lossless simultaneously, because the expensive resource is context length,
not disk. Names the engine's real ledger defect: storage pretending to be
retrieval.

L-0023
Date: 2026-08-26
Type: finding
NEW MECHANISM THE ENGINE NEVER MENTIONS: TEMPERATURE. Transcript lines
~560-702. Logits are divided by tau before the softmax; ranking is
unchanged, sharpness is not. tau -> 0: "your generation will just be always
deterministic, every time you take the largest most likely token." tau > 1:
"more softer, so that you focus more on the long tail ... more stochasticity
and uncertainty." Also top-k: keep k most likely, drop the rest, renormalize.
Zero occurrences of temperature in the engine's 57 spec files.
THREE CONSEQUENCES:
 1. Stages want different temperatures. E6 battery and E8 adversarial pass
    want diversity (higher tau); E7 deterministic checks, parsers, and all
    verification want reproducibility (tau = 0). They currently all run at
    the session default.
 2. REAL BUG IN M8: re-running a check at tau > 0 and getting the same
    answer is NOT corroboration. Two samples from one distribution agreeing
    shows the distribution is peaked, not that the peak is correctly placed.
    Independence must come from a different lens or a different family,
    never from resampling.
 3. Sharpens Tier 0: executing is deterministic by nature; anything opined
    must be labeled with the temperature it was opined at.

L-0024
Date: 2026-08-26
Type: finding
STRONGEST CULTURAL EVIDENCE FOR L-E, from a domain expert, unprompted. Six
hedges in 2.5 hours of frontier material (grep-verified, line numbers in
transcript):
  880  attention          "Nobody really know exactly how it works."
  2594 activations        "exactly why I use any of this is kind of like a magic."
  2935 RMSNorm            "I think it's mostly empirical."
  2826 ResNet block depth "for reasons we don't fundamentally understand"
  2038 local minima       "nobody really knows exactly whether they are right"
  174  Claude tokenizer   "I didn't verify it myself ... Assuming they are true"
The last is a rumor about Claude's tokenizer becoming more granular. NOT
verified by this run and NOT repeated as fact anywhere in the deliverable.
CONTRAST WITH T11: same subject matter, opposite epistemic register. The
lecture says the field is substantially empirical and names which parts are
unexplained. The article narrates a clean five-stage pipeline with zero
uncertainty and got 108,800 views. The article was produced by asking a
model to reword an existing article "to reduce similarity" (residue visible
4x in the published text). Somewhere in that rewrite every hedge died.
=> SHARPEST FORM OF THE META-HARNESS TABLE 3 RESULT: summaries do not merely
lose detail, THEY LOSE EPISTEMIC MARKERS FIRST, because "nobody knows why
this works" is precisely the sentence a fluency-optimized rewrite smooths
into "this works because."
NEW REQUIREMENT for the two-register output (F8): the human brief MUST CARRY
THE MACHINE RECORD'S UNCERTAINTY. A brief that reads more confident than its
ledger has failed. That is a lint, not a mood.

L-0025
Date: 2026-08-26
Type: correction
X-010. SELF-CORRECTION ON THIS RUN'S OWN v1 DELIVERABLE. REPORT v1 section 4
mapped all five laws to LLM training stages at uniform confidence, using the
T11 article's five-stage framing. The T12 lecture covers ONLY stages 1-2
(data/tokenization and pretraining) plus architecture. It never reaches
supervised fine-tuning, reward modeling, or RLHF.
=> L-D, L-E, L-B, L-C mappings are now LECTURE-GRADE (L-0020..L-0022).
   The L-A mapping (sycophancy from reward modeling + RLHF) remains
   ARTICLE-GRADE, i.e. the demoted low-provenance source.
Flagged explicitly in REPORT v2 section 5.5 rather than smoothed, because
presenting five mappings at one confidence level is the exact flattening
that entry L-0024 is about. Refusing to do it inside the document that
criticises it is the minimum bar.

L-0027
Date: 2026-08-26
Type: correction
INSTRUMENT BUG IN THIS RUN'S OWN L-B INTEGRITY CHECK. Caught live, worth
recording because the naive version will be written into CI otherwise.
L-B invariant (i) requires: number of Index rows == highest Ledger ID. The
obvious implementation is
    grep -c '^L-0' memory/LEDGER.md
It reported 27 entries against 26 Index rows and the invariant appeared to
FAIL. It had not. Entry L-0025's body text wrapped such that a continuation
line began with the characters "L-0024", and the count picked it up as a
27th entry. Twenty-six real entries, twenty-six rows, invariant HOLDS.
CLASS OF DEFECT: a line-anchored regex over a file that contains prose about
its own IDs. Same shape as the operator's batch-4 discovery that GitHub code
search silently under-returns multi-term OR queries — the instrument lied and
the conclusion drawn from it was void.
CONSEQUENCE FOR THE BUILD: when L-B's four invariants are implemented as the
CI script recommended in REPORT section 10, counting entries by line-anchored
grep is WRONG. Parse entries by their full record shape (an ID line followed
by a `Date:` line and a `Type:` line), or write the Ledger in a format that
cannot be confused with its own contents. A miscounting integrity check that
fails spuriously gets disabled by the third false alarm, and a disabled check
is a fail-open check.
NOTE ON DIRECTION OF FAILURE: this instrument failed LOUD (false alarm),
which is the safe direction. The dangerous variant is an entry whose ID line
is missed, which under-counts and lets a real gap pass silently. Both are
fixed by parsing the record, not the line.

L-0026
Date: 2026-08-26
Type: decision
E8 RE-CONVERGENCE after the T12 source correction. VERDICT: CONVERGED
(decision-mode, decision-saturation).
The source change did not reopen the decision; it strengthened the evidence
under four of five sub-answers and forced two self-corrections (X-010,
X-011). Two NEW build items were added on lecture evidence (temperature
discipline, target-confirmation gate) and one existing item was upgraded
from analogy to mechanism (the stop rule).
Open sub-questions unchanged and still not decision-changing: S8 (harness
scope assumed, not confirmed), S10 (no cross-family path on this host), S11
(prior session's own files unreachable). Two new ceilings recorded: the
small.en transcription instrument, and audio-only capture losing all board
work in a heavily visual lecture.
Route: E11 Route B. REPORT.md revised to v2 and pushed.
