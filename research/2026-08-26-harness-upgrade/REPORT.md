# Depth Engine: what the source actually said, what your summary got wrong, and what to build next

**Written for:** a software engineering intern who is new to this codebase and to AI internals.
**Date:** 2026-08-26
**Run:** `depth-engine/runs/20260826-212321-de-v030-harness-upgrade`
**Status:** decision-mode deliverable. No engine behavior was changed. One pre-existing code commit was rescued and pushed (details in §9).

---

## 0. Read this part if you read nothing else

You asked for three things: run your pasted session summary through the Depth Engine, go through a linked source and pull out what makes the engine better, and write it up plainly.

Here is the compressed version.

1. **The link is not a video.** It is a written X article called "How to Build Your Own LLM: The 5-Step Pipeline Behind GPT & Claude." I read all 2,400 words of it.
2. **The article is low quality as a source, and that is useful.** It contains four leftover instructions from the AI that wrote it, published by accident, including the sentence "Here's a rewritten version with the same meaning, similar length, and a fresh writing style to reduce similarity." The author never read their own output. That is a live example of the exact problem your F8 complaint names.
3. **The article's content is still correct and it is worth more to you than it looks.** The five training stages it describes are the mechanical explanation for why every one of the Depth Engine's five laws exists. That connection is the most valuable thing in this report and it is §4.
4. **I found four errors in your pasted session summary.** Two of them would have made you skip work you actually need. Details in §3. The most expensive one: your summary says Claude Code has "quota auto-resume." It does not.
5. **Several mechanisms your D1 design plans to build already ship in the platform**, as one-line fields you are not using. Details in §5.
6. **A private GitHub repo for the engine already existed.** I did not create a second one. I connected your local copy to it and found 141 lines of your own feature code that had never been committed anywhere. That is now pushed. Details in §9.

---

## 1. Vocabulary, in plain English

You are new to this. These words appear constantly in your pasted text and nothing in it defines them. Everything below is defined the way a working engineer would use it, not the way a textbook would.

**Model.** A program that takes text in and produces text out. That is genuinely all it does. It has no memory between calls, no ability to run anything, and no access to your files.

**Token.** Models do not read letters or words. Text is chopped into pieces called tokens, usually chunks of words, and each is turned into a number. The model only ever sees numbers. This is why models are bad at counting the letters in a word: they never saw the letters.

**Context window.** The total amount of text the model can look at in one call, measured in tokens. When your terminal said "474k tokens," that was the size of the conversation being resent to the model on every single turn. This is why long sessions get expensive fast: you pay for the whole history each time, not just your new message.

**Harness.** The program wrapped around the model. The model produces text; the harness decides what that text means and what to do about it. The harness gives the model tools, feeds it files, holds its memory, applies limits, and enforces rules. Claude Code is a harness. This word matters a lot for your project and gets its own section (§6).

**Agent and subagent.** An agent is a model plus a harness running in a loop until a job is done. A subagent is a second, separate one that the first spawns to do a piece of work. The subagent gets a clean context window and reports a result back. This is how you parallelize, and it is where four of your eight complaints live.

**Hook.** A script the harness runs automatically at a specific moment, for example before a tool call or when a subagent finishes. Hooks are the harness enforcing something rather than the model choosing to comply. This distinction is the whole game.

**Fail-open vs fail-closed.** When a check breaks or cannot run, does work continue or stop? Fail-open means continue. Fail-closed means stop. A smoke detector with a dead battery that stays silent is fail-open. One that shrieks when the battery dies is fail-closed. Almost every fix on your list is about moving a check from the first kind to the second.

**Spec gap vs implementation gap.** A spec gap means nobody ever wrote the rule. An implementation gap means the rule exists on paper and nothing makes it happen. Different fixes: write the rule, or enforce the rule.

**Gate.** A check that a piece of work has to pass before the next step is allowed to start. A gate that has never been observed to stop anything is not a gate, it is a comment.

---

## 2. What the source actually is

**URL:** `https://x.com/RahulKu22532718/status/2073977106447634474`
**Author:** Rahul Kumar (@RahulKu22532718)
**Posted:** 2026-07-05
**Format:** long-form X article, not a video
**Reach:** 108,800 views, 23 likes, 6 reposts, 56 bookmarks

### It is not a video

You said "go through this video." It is text. I confirmed this three separate ways rather than assuming:

1. The shortlink `t.co/ABhsTsMsnn` resolves with a 301 to `x.com/i/article/2073973224455733248`. The `/i/article/` path is X's long-form article route.
2. The post's media list contains exactly one entry, a JPEG cover image at 1975x790. There is no video entity and no duration field.
3. Rendering the page returns 2,400 words of prose with headings and no player element.

I am flagging this loudly because if I had written "the video says X" anywhere in this report, that sentence would have been invented. Getting the format of your own source wrong is a small error that produces confident nonsense downstream.

### Two things wrong with it as a source

**It is AI output that nobody proofread.** Four times, the published text contains the AI's own instructions to itself. The clearest one:

> "Here's a rewritten version with the same meaning, similar length, and a fresh writing style to reduce similarity."

That phrase, "to reduce similarity," tells you what happened: someone fed an existing article to a model and asked it to reword the article enough to not look copied. The model's preamble was never stripped. The Stage 1 heading also appears twice with two different subtitles, which is the same accident.

**The reach numbers do not add up.** 108,800 views against 23 likes is a like rate of about 0.02 percent. Organic posts usually land between 1 and 3 percent. Two orders of magnitude below normal is what paid or algorithmic amplification looks like. Treat the view count as a distribution number, not a quality signal.

**So why use it at all?** Because being a bad source and being wrong are different things. The five stages it lists are real and standard. The article is a fine skeleton and a terrible authority. I used it for structure and re-sourced anything load-bearing. That distinction, structure versus authority, is itself worth internalizing.

---

## 3. Corrections to your pasted session summary

This is the most operationally important section. Your pasted text is a summary of a summary, produced on a machine I cannot reach, about files I cannot open. That is the setup where errors survive, because nobody can check them. I checked what I could against primary documentation. Four things are wrong.

### X-003: "Claude Code has quota auto-resume." It does not.

Your batch 2 wrote this down as a platform feature and then used it to shrink your own scope, concluding "only the stale-agent reaper is engine work."

What the documentation actually says:

- **Fallback model chains** exist. Configure them with `--fallback-model sonnet,haiku` or the `fallbackModel` setting. But the docs are explicit about what does not trigger them: *"Authentication, billing, rate-limit, request-size, and transport errors, and a denial by your organization's policy check, never trigger a switch."* Rate-limit is exactly your case. Fallback chains do not fire when you run out of quota.
- On hitting a usage limit, a subagent's API request **fails terminally** and the subagent stops before finishing its task. Once the error clears, you have to ask Claude to retry or resume it. Nothing resumes on its own.

**Why this matters.** Your summary says the exact feature whose absence killed two of your runs is now shipped. It is not. If you build on that belief, two of your eight complaints stay open and you will not know why. Quota handling is still your work, and it belongs in the design next to the stale-agent reaper, not crossed off the list.

Sources: [Model configuration](https://code.claude.com/docs/en/model-config), [Models, usage, and limits in Claude Code](https://support.claude.com/en/articles/14552983-models-usage-and-limits-in-claude-code), [Error reference](https://code.claude.com/docs/en/errors).

### X-004: The subagent hooks exist, but the one you want cannot block.

Your summary says "sub-agent start/stop hooks (the dispatch registry nearly free)." Both events do exist. But your D1 design wants an unrouted launch to be *unrecordable*, which means the gate has to be able to stop the launch. `SubagentStart` cannot.

From the hooks documentation, exit code 2 behavior per event:

| Event | What exit code 2 does |
|---|---|
| `PreToolUse` | Blocks the tool call |
| `TaskCreated` | Blocks task creation |
| `SubagentStop` | Prevents the subagent from stopping |
| `Stop` | Prevents Claude from stopping |
| **`SubagentStart`** | **Shows stderr to user only** |

And explicitly:

> "For `SessionStart`, `Setup`, and `SubagentStart`, the exit code 2 stderr renders in the transcript as a `<hook name> hook error` notice... Claude doesn't see it, and the session or subagent proceeds."

**Read that last clause again: the subagent proceeds.** `SubagentStart` is a notification, not a gate. If you wire your fail-closed routing check to it, you have built a fail-open check and called it fail-closed. That is the precise pathology your run exists to eliminate, reproduced inside the fix.

**The correct wiring:** put the blocking check on `PreToolUse` or `TaskCreated`, both of which genuinely block. Use `SubagentStart` for the registry row only, since recording is all it can do.

This is also a perfect illustration of the "Stop Means Stop" finding your batch 4 already had: telling the agent to stop fails open, and only a route with no bypass fails closed. Your summary had the principle and then violated it one paragraph later.

Source: [Hooks reference](https://code.claude.com/docs/en/hooks).

### X-005: Your F4 root cause is confirmed, and the fix is stronger than you think.

Confirmed verbatim. The subagent `model` frontmatter field is optional and *"Defaults to `inherit`"*, meaning the subagent uses the same model as the main conversation. That is your all-Opus screenshot, explained.

The part your summary missed is the resolution order, which the docs state precisely:

1. The `CLAUDE_CODE_SUBAGENT_MODEL` environment variable
2. The per-invocation `model` parameter
3. The subagent definition's `model` frontmatter
4. The main conversation's model

The environment variable sits at the top and overrides everything below it. That means you have a genuinely structural control, not a rule the agent has to remember. Nothing the model does can route around an environment variable. Compare that to a written instruction saying "always pass the model parameter," which is exactly the kind of prose rule your own evidence says decays under pressure every single time.

Source: [Subagents](https://code.claude.com/docs/en/sub-agents).

### X-006: The version drift you were told to fix does not exist in this copy.

Your summary says: "The engine repo says 0.2.0 in package.json but is only tagged v0.1.0, with a stale handoff doc."

On this Mac, `depth-engine-main`:

- `package.json` → `"version": "0.1.0"`
- `CHANGELOG.md` → top entry is `## [0.1.0] — 2026-07-01`
- `HANDOFF.md` → titled "Handoff — Depth Engine v0.1.0"

All three agree. There is no 0.2.0 anywhere and no drift to reconcile. Either the drift is on the other machine, or the claim was wrong.

**There is real drift, just not that one.** `HANDOFF.md` claims "Tests: 26 passing." I ran the suite: **29 passing, 0 failing**, in 385ms on Node 24.16.0. The handoff is stale by three tests, which is the signature of code landing without the docs following. That is a small instance of your F6 complaint.

Note the method here, because it is the point: I did not ask a model whether the version was consistent. I opened three files and ran the test suite. Total cost, a few seconds. §4 explains why that difference is not a style preference.

---

## 4. The important part: why the training pipeline explains your five laws

This is what the article is actually worth to you.

The Depth Engine has five always-on laws. Right now they are asserted. Nothing in the engine explains *why* a model needs them, so they read like someone's opinion about rigor. They are not opinions. Each one is a countermeasure to a specific, known consequence of how these models are built. Once you can trace a law back to the training stage that causes the problem, you stop treating the law as bureaucracy and you stop being tempted to skip it under deadline pressure.

Here are the five training stages, then the mapping.

### The five stages, briefly

1. **Data.** Collect an enormous amount of text, remove duplicates and junk, then convert it all to tokens.
2. **Pretraining.** Show the model token sequences and have it guess the next token, trillions of times, adjusting slightly on every miss. That is the entire objective. What comes out is a *base model*: enormously knowledgeable, not an assistant. Ask it a question and it may just continue your sentence.
3. **Supervised fine-tuning (SFT).** Train on a few thousand carefully written examples of good question-and-answer behavior. The learning mechanism is unchanged, still next-token prediction, but the examples are curated. This is what turns a text-continuation engine into something that answers you.
4. **Reward modeling.** Have humans rank multiple answers to the same prompt, then train a *second* model whose only job is to predict which answer a human would prefer. You now have an automated stand-in for human judgment that can score millions of responses.
5. **Reinforcement learning (RLHF).** Let the assistant generate, let the reward model score, adjust the assistant toward higher scores, repeat. Some labs now use principles instead of per-response human ratings, which is Constitutional AI or RLAIF.

### The mapping, which is the actual finding

| Law | What it says | The stage that makes it necessary |
|---|---|---|
| **L-E** Evidence over assertion | Label every claim by epistemic status; never let an assertion pass as a finding | **Pretraining.** The training objective is *plausible next token*, not *true next token*. Fluency and hallucination come from the same mechanism. A model producing a confident, well-formed, false sentence is not malfunctioning, it is doing exactly what it was optimized to do. You cannot prompt this away, so you check claims against artifacts instead. |
| **L-A** Adversarial posture, self-verification is corrupt | Every load-bearing claim gets an overturn attempt from a different model family; flattering results get more scrutiny than negatives | **Reward modeling plus RLHF.** The final training stage optimizes the model toward responses humans *rate highly*. Agreeable, confident, well-structured answers rate highly. Sycophancy is not a personality quirk, it is the trained objective showing through. And a model grading its own work is being scored by the same preference function that produced the work, so it will approve. This is why "ask the model if it is sure" is worthless and why the asymmetry, more scrutiny on good news than bad, is correct rather than paranoid. |
| **L-B** Three-tier memory, trust the file over recollection | Immutable ledger, mutable state, index; trust files and git log over what you remember | **Context windows and tokenization.** The model has no memory. Everything it "remembers" is text resent on every call, and beyond a certain length, material in the middle gets recalled unreliably. Recollection from a long context is genuinely less trustworthy than reading the file again. This is a measurable property, not a discipline preference. |
| **L-C** Cold re-verify high-context decisions | Re-check important decisions in a fresh window | Same cause as L-B. A decision made at 400k tokens of context was made under degraded recall. Reproducing it cold is a real test, and one it can fail. |
| **L-D** Freeze, no infinite self-perfection | Once protocols are sound, stop editing them | **Pretraining, from the other direction.** A strong next-token predictor can always generate one more plausible objection, because generating plausible text is the one thing it is guaranteed to be able to do. "Can I think of another question?" therefore never returns no. Any stop rule built on that question cannot terminate. This is the mechanical cause of your F1, stated in one sentence. |

### The three consequences you should take from this

**First, and this is the big one: mechanical checks come before model opinions, and now you know why.** Your batch 4 measured that across models spanning a 15x price range, the catch rate for stale or unsourced evidence is flat and near zero. Your summary recorded that as a surprising empirical result. It is not surprising. Checking whether a citation is stale requires *going and looking*. A model asked to grade a claim from its context is running next-token prediction over that context. There is no lookup step in that operation. A bigger model predicts better and still does not look. Verifying by opinion is asking the wrong organ.

This is why the M8 Tier 0 ordering is right, and it is also why it needs to be structural rather than advisory. When I checked the version drift in §3, I opened files and ran the suite. When I checked whether `SubagentStart` blocks, I read the documentation. Both took seconds and both found errors that any amount of model deliberation would have sailed past.

**Second, your blind-panel design has a ceiling that follows from the pipeline.** Fresh instances of the same model share the same weights, the same training data, and the same reward model. Wiping the chat history removes conversational contamination. It does not remove trained-in belief. If the model family is systematically wrong about something, ten blind panels agree with each other, confidently, and you have bought calibration theater. Your own history already proved this: codex once caught a fail-open bug that every same-family reviewer walked past. The Tier 3 cross-family check is not a nice-to-have, it is the only tier that addresses this failure class. You currently have zero paths to it. Gemini's free tier costs nothing and would close it.

**Third, "quality over quantity" is not a slogan here, it is a measured property.** Pretraining uses trillions of tokens. SFT uses thousands, sometimes fewer, and it is SFT that determines behavior. The same asymmetry shows up in your audits: Pocock's 37 skills total about 25,000 words, the engine spends about 102,000 on the same jobs, and his produce a working stop rule while the engine's do not. More words describing rigor is not more rigor. When you write v0.3.0, treat every added word as a cost.

---

## 5. Things D1 plans to build that already exist

You asked me to find what makes the engine better. The cheapest improvement available is not building anything. Your batch 2 already corrected batch 1 on this point once, concluding "the platform ships more than credited." That correction did not go far enough. Here is what a subagent definition accepts today, from the documented frontmatter:

| Field | What it does | Which complaint it closes |
|---|---|---|
| `model` | Pins the model. **Defaults to `inherit`.** | **F4**, routing, entirely |
| `maxTurns` | Hard cap on agentic turns before the subagent stops | **F1 / F2**, an external stop rule the agent cannot argue with |
| `effort` | `low` through `max`, per subagent | **F7**, spend control on cheap mechanical stages |
| `isolation: worktree` | Runs in its own git worktree | Parallel agents stop clobbering each other's files |
| `tools` / `disallowedTools` | Allowlist or denylist of tools | Blast radius |
| `permissionMode` | Permission behavior for that subagent | Blast radius |
| `hooks` | Lifecycle hooks scoped to just that subagent | Per-agent enforcement |
| `memory` | Persistent memory scope: `user`, `project`, `local` | Ledger plumbing |

`maxTurns` deserves a second look. Your F1 is "no stopping point," and the platform ships a hard turn cap as a one-line field. It will not decide *when the research is complete*, which is the harder problem, but it does make an unbounded loop structurally impossible, which is the thing that actually burned you. Your ECC audit praised a 150-line script for implementing turn caps. You do not need the script.

Then telemetry. Set one environment variable, `CLAUDE_CODE_ENABLE_TELEMETRY=1`, and you get:

- `claude_code.api_request` events carrying `model`, `input_tokens`, `output_tokens`, `cache_read_tokens`, `cache_creation_tokens`, `cost_usd`, and `request_id`
- `claude_code.token.usage` and `claude_code.cost.usage` metrics carrying `model`, `agent.name`, `skill.name`, `effort`, and `speed`

Read that list against your complaints. F7 is "token burn with no budget, no tracking, no reporting." Cost and tokens per model per named agent, emitted automatically. F4's second half is "no record anywhere says which model a subagent actually ran on." The `model` attribute is on every event. Two of your eight complaints have their entire measurement layer available behind one environment variable, and your D1 proposes building a dispatch registry to collect data that is already being emitted.

**The rule to take from this:** before designing a mechanism, check whether the harness already has it. Your run has now made this same correction three times, in batch 2, in batch 3, and here. That repetition is itself a finding: "check the platform first" should be a step in the engine's research protocol, not a lesson relearned per batch.

---

## 6. "Make the depth engine a harness for us," explained plainly

You asked what I meant by this question, so here it is without jargon.

Go back to §1. A model turns text into text. A harness is the program around it that gives it tools, files, memory, limits, and rules, and decides what happens next. Claude Code is a harness.

**Right now the Depth Engine is not a harness. It is a set of instructions that a harness reads.** Concretely, it is 12 stage documents, 5 law documents, and 5 protocol documents, plus a small Node CLI whose entire job is to copy those documents into a folder and make a run directory. Nothing in it runs during a session. Nothing in it can stop anything. When a stage document says "this gate cannot be bypassed," the only thing enforcing that sentence is the model choosing to comply with a sentence.

That is the root of all eight complaints. Not one of them is a thinking failure. Your specs think well. They think in a medium that cannot enforce.

The three options I offered were:

**(a) Keep it as a methodology.** Better documents, same medium. Cheapest, and your own evidence says it fails: "rules written as words decayed under pressure every time, while rules that run as code held every time."

**(b) Turn it into a real harness.** The engine ships code that runs: hooks that block, scripts that check, caps that bind, a registry that records. The documents stay, but every load-bearing rule gets an executable counterpart. Bigger job.

**(c) Staged.** Build the enforcement layer for the research engine first, which is your D1. Then notice that the same layer is what you need for everyday work and generalize it.

**My recommendation is (c), and the reason is that (b) and (c) are the same build.** A stop rule, a dispatch registry, a budget ledger, a diff surface, and a docs prompter are not research-engine features. They are harness features. Build them once for the research engine because that is where you have 160 pinned failures proving they are needed, and you have also built the everyday harness. The "harness for us" outcome is not a second project after v0.3.0. It is what v0.3.0 becomes if you build the enforcement layer as real code rather than a longer specification.

I have written this report on that assumption. If you meant something different, say so and I will redo §7.

---

## 7. What to build, in order

Ranked by verified evidence divided by effort. Each item names the check that makes it fail-closed, because an item without one is a wish.

### Tier 1: do these this week, hours not days

**1. Pin the model on every subagent, and lint for it.**
Add `model:` to every subagent definition. Add a CI check that fails the build if any definition omits it. Optionally set `CLAUDE_CODE_SUBAGENT_MODEL` as a hard override at the top of the resolution order.
*Fail-closed check:* the CI lint. A missing field fails the build.
*Closes:* F4. *Effort:* under an hour. *Removable when:* never, it is the enforcement.

**2. Turn on telemetry.**
`export CLAUDE_CODE_ENABLE_TELEMETRY=1`, point the exporter somewhere, and read `claude_code.api_request` and `claude_code.token.usage`.
*Fail-closed check:* none yet, this is measurement. It is the prerequisite for the budget gate in Tier 2.
*Closes:* the measurement half of F7 and F4. *Effort:* minutes. *Removable when:* never.

**3. Put `maxTurns` on every subagent.**
Pick a number per agent type. Reading agents get small numbers.
*Fail-closed check:* the platform enforces it. The agent cannot raise its own cap.
*Closes:* the runaway half of F1 and F2. *Effort:* minutes. *Removable when:* an evidence-sufficiency stop rule is live and proven.

**4. Fix the git gap.** Partly done today, see §9. The engine's own source was not under version control.
*Fail-closed check:* a pre-push hook that refuses to push with a failing test suite.
*Closes:* F5. *Effort:* done for the repo connection, an hour for the hook.

### Tier 2: the real design work, days

**5. Build the stop rule as a coverage check over a closed list.**
This is the single highest-value item and your Pocock audit already named the fix. Today E8 asks "can I think of another question?" Per §4, a next-token predictor can always produce one, so that loop has no reachable exit. Replace it with: enumerate the aspects at E5, close the list, and converge when every aspect is covered. Keep "I thought of another question" as a logged signal, not a gate that blocks completion.
*Fail-closed check:* the phase walk refuses to load if the state machine has no reachable final state. Your batch 1 already found a library that does exactly this.
*Closes:* F1 structurally. *Effort:* a few days, mostly reworking E8.

**6. Build the stale-agent reaper AND quota handling.**
Both, because §3 shows auto-resume does not exist. A subagent that dies on a usage limit stays dead until a human asks for a retry. Registry row written before launch with a deadline, a sweeper that finds rows past deadline with no end time, a state where ABANDONED cannot silently become DONE, and a resume path for quota deaths specifically.
*Fail-closed check:* `PreToolUse` or `TaskCreated` blocks a dispatch with no registry row. **Not `SubagentStart`**, which cannot block. Use `SubagentStart` for the row write and `SubagentStop` for the close-out.
*Closes:* F3, plus the two runs that died on quota. *Effort:* a few days.

**7. Budget ledger with an operator-owned cap.**
Sits on top of item 2. The agent reads the budget and cannot raise it.
*Fail-closed check:* a hook that blocks new dispatches past the cap.
*Closes:* F7. *Effort:* one to two days once telemetry is flowing.

### Tier 3: quality, ongoing

**8. Two-register output.**
Every deliverable emits a machine record and a human brief, where the brief answers a different question rather than compressing the record. This report is an attempt at the human register. Note what it does *not* do: it does not summarize the ledger, it argues a case and points at the ledger for detail. Your Meta-Harness Table 3 finding is the reason for the split. Raw logs scored 50.0, an LLM summary of the same logs scored 34.9, and scores alone scored 34.6. A summary recovered almost none of the signal. So do not compress the record, write a second document with a different job.
*Fail-closed check:* a linter on the human register. Your smb voice linter is the one rule system in your history that never decayed. Generalize that one.
*Closes:* F8. *Effort:* the linter is a day, the discipline is permanent.

**9. Get one cross-family path.**
Per §4, blind panels of the same family share trained-in blind spots. Gemini's free tier costs zero. Until you have one, label same-family verdicts as same-family so nobody mistakes them for independent.
*Effort:* an afternoon.

### Two things to stop doing

**Stop the crawl at a fixed number of batches.** Your summary says the queue is exhausted as a ranking tool, the dryness test has been broken since batch 3 because of the GitHub code-search bug, and the material is still improving. That combination has no self-terminating condition, and §4 explains why the agent will never produce one on its own. This is F2 happening inside the run built to fix F2. Pick N, and pick it yourself.

**Stop treating "the platform doesn't have it" as established.** Three times now the crawl has concluded something was missing and later corrected itself. Make "check the harness documentation first" a required step before any mechanism is designed.

---

## 8. How to get deeper into AI, concretely

You said you want to get deeper into AI knowledge to leverage the engine. Ordered by how much it will change your work.

**Highest value: read the harness documentation properly.** You are building a system on top of Claude Code and this report found four errors in your own summary of what it does. Read [hooks](https://code.claude.com/docs/en/hooks), [subagents](https://code.claude.com/docs/en/sub-agents), [model configuration](https://code.claude.com/docs/en/model-config), and [monitoring](https://code.claude.com/docs/en/monitoring-usage) end to end, once, on purpose. Two hours. It will save you weeks of building things that already exist and hours of debugging gates that cannot block.

**Second: get hands-on with tokenization.** Paste text into a tokenizer and watch it split. It takes ten minutes and it makes context windows, pricing, and the letter-counting failure stop being trivia and start being mechanics you can reason about.

**Third: build a tiny language model.** Karpathy's nanoGPT or a similar minimal implementation, trained on a small text file on your laptop. You will watch loss go down while it predicts the next token and nothing else, and pretraining will stop being a word. This is the article's own advice and it is correct. Half a day.

**Fourth: read one real paper properly rather than ten summaries.** Your own run demonstrates why. The "6x" figure in your summary turned out to be the Meta-Harness paper citing someone else's work, and it took reading the paper to catch that. Pick the paper closest to your problem, probably Stop Means Stop given F1, and read it.

**Fifth: learn the evaluation vocabulary.** Reward model, preference data, RLHF, RLAIF, Constitutional AI, LLM-as-judge, calibration. You are designing a verification system built on LLM judges. Knowing what a reward model is and what it is not, per §4, is the difference between designing Tier 2 calibration on purpose and hoping the panel is good.

**What to skip for now.** Transformer architecture internals, attention math, and training infrastructure. Interesting, and not on the path to a better harness. Come back to them when you have a reason.

---

## 9. What I saved, and the answer to your GitHub question

You asked: *"depth engine will track its own work too no? Or not?"*

**Today, no.** Here is the evidence, which is more pointed than the answer.

A private repo `rodriguezzfabricio/depth-engine` already existed, created 2026-07-01. I did not create a second one. Your local `Desktop/depth-engine-main` was **not a git repository at all**: no `.git`, no history, no remote. I connected it to the existing repo and compared.

The local copy had work that existed nowhere else:

```
 M src/cli.js          (+44 / -22)
 M test/cli.test.js
?? src/start.js        (66 lines, untracked)
?? test/start.test.js  (75 lines, untracked)
```

That is the `depth-engine start` command, the feature that creates isolated per-run directories with their own memory. **The command I used to start this very run had never been committed anywhere.** It sat on one laptop's disk, unversioned, with no copy, for a day. If that disk had failed, the feature was gone.

That is your F5 complaint, "I don't see the changes that you made," in its most literal form. Not only could you not see the changes, neither could git, because there was no git.

I committed it as found, unmodified, and pushed:

- `f3bbe44` feat: add `depth-engine start` for isolated per-run scaffolding
- Test suite verified before commit: **29 passing, 0 failing**, 385ms, Node 24.16.0
- Note recorded: `HANDOFF.md` still says "26 tests" and is now stale by three

**What "the engine tracking its own work" would actually require**, since the answer is currently no:

1. The engine writes `LEDGER.md`, `STATE.md`, `INDEX.md`, and `REGISTER.md` to disk on every run. Nothing commits them, nothing reads them back automatically, and nothing checks them. They are files that happen to exist.
2. L-B specifies an integrity check on resume: ledger and index counts must match, the register must balance, and `git diff --diff-filter=DR` on the memory directory must show additive-only changes. **That last check requires git.** With no repository, L-B's own integrity invariant could not run. The law was unrunnable, not violated.
3. Making it real: commit run memory after each stage, run the four L-B invariants as a script in CI, and block on failure.

That is a small, concrete v0.3.0 item that turns an existing law from prose into a passing test.

**Also pushed:** this report and the run's full evidence, under `research/2026-08-26-harness-upgrade/`. That path is outside the `files` allowlist in `package.json`, so it is tracked in git and will not ship in the npm package.

```
research/2026-08-26-harness-upgrade/
├── REPORT.md               this document
├── seed.md                 your request, verbatim, unedited
├── source_T11_x_article.md the X article, full text, with the format correction
└── memory/                 LEDGER, INDEX, STATE, REGISTER for this run
```

---

## 10. Honest ceiling

What this report does not establish, stated plainly so you do not over-trust it.

**I could not read the prior session's actual work.** Everything in your pasted text points at `/root/depth-engine-improve/`, which is a Linux path on another machine. I cannot open the D1 draft, the ~160 evidence items, the crawl batches, or the breaker verdicts. Every claim in §3 that I did not independently verify is still a summary of a summary. The four errors I found were the ones checkable from here. There is no reason to think they are the only four.

There is an irony worth naming: your Meta-Harness finding is that summaries do not recover the missing signal, raw logs scored 50.0 and a summary of those logs scored 34.9. This report is built on a summary of those logs. It is subject to the effect it describes. The fix is to run this analysis where the files are.

**The verification here is single-family.** I am a Claude model checking claims about Claude Code. §4 explains why that is a real limitation. The parts I trust most are not the reasoning, they are the mechanical results: the test suite ran and printed 29, the version strings were read from three files, the redirect returned a 301 to an article URL, and the documentation quotes are quoted. Those are Tier 0. The synthesis in §4 and the rankings in §7 are Tier 1 at best and have had no adversarial pass.

**The five-stage mapping in §4 is my argument, not a citation.** The training stages are standard and well sourced. The claim that each stage causes a specific one of your five laws is analysis I constructed. I believe it is right and it is the most useful thing here, but no external source states it and nobody has attacked it. Treat it as a strong hypothesis that earns its place by being useful, not as an established result.

**Nothing about the engine's behavior was changed.** No stage file, law file, or protocol was edited. The only code change was committing work that already existed.

---

## Appendix: correction ledger

| ID | Claim as received | Verified status |
|---|---|---|
| X-001 | The link is a video | **False.** Long-form X article. 301 to `/i/article/`, one JPEG, no player |
| X-002 | The article is a usable source | **Low provenance.** Four leftover AI prompt instructions in the published text; duplicated heading; 0.02% like rate |
| X-003 | Claude Code has quota auto-resume | **False.** Rate-limit errors never trigger fallback chains; subagents fail terminally and need a manual retry |
| X-004 | Subagent hooks make the dispatch registry nearly free | **Half true.** Both events exist; `SubagentStart` cannot block, so the gate must sit on `PreToolUse` or `TaskCreated` |
| X-005 | Subagents inherit the session model when unrouted | **True.** `model` defaults to `inherit`. Also found: `CLAUDE_CODE_SUBAGENT_MODEL` overrides everything |
| X-006 | package.json says 0.2.0, tagged v0.1.0 | **False here.** All three files say 0.1.0. Real drift found: HANDOFF says 26 tests, actual is 29 |
| X-007 | OpenTelemetry reports model per dispatch | **True and larger than credited.** Model, tokens, cost, and `agent.name` on every request event |
| X-008 | A GitHub repo needed creating | **False.** One existed since 2026-07-01. The local copy was not a git repo and held 141 unversioned lines |

**Sources.** [Subagents](https://code.claude.com/docs/en/sub-agents) · [Hooks](https://code.claude.com/docs/en/hooks) · [Model configuration](https://code.claude.com/docs/en/model-config) · [Monitoring usage](https://code.claude.com/docs/en/monitoring-usage) · [Error reference](https://code.claude.com/docs/en/errors) · [Models, usage, and limits in Claude Code](https://support.claude.com/en/articles/14552983-models-usage-and-limits-in-claude-code) · [How usage and length limits work](https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work) · [The X article](https://x.com/RahulKu22532718/status/2073977106447634474)
