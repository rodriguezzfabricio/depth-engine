# Usage — driving the engine with your AI agent

The engine is walked by your AI coding agent. This package only scaffolds the files; you point your agent at one file and steer. The core instruction is always the same:

> **"Read `depth-engine/BOOT.md` and follow it."**

Add your seed inline or when the agent asks for it.

## Claude Code (primary)

1. `depth-engine init` in your project.
2. Open Claude Code in that directory.
3. Prompt:
   > "Read `depth-engine/BOOT.md` and follow it. My goal is: **&lt;your seed&gt;**."
4. Claude walks E0→E11, pausing at real decision points and at the terminal for your review.

Claude Code can invoke **Codex CLI** for the cross-family checks (see below), which satisfies Law L-A cleanly.

## The generic path (any capable agent)

Cursor, GitHub Copilot (agent mode), Windsurf, Gemini CLI, or any agent that can read files and follow instructions:

1. `depth-engine init`.
2. Open the agent in the project.
3. Give it the same instruction: **"Read `depth-engine/BOOT.md` and follow it,"** plus your seed.

`BOOT.md` is written to be model-neutral. If your agent can't shell out to a second model for the L-A cross-check, do it manually: paste the load-bearing claim + its evidence into a *different* model and ask "what's the strongest case this is wrong?", then feed the answer back. Don't skip it — the cross-family check is the engine's sharpest tooth.

## Codex CLI as the cross-family verifier (Law L-A)

Law **L-A** requires that load-bearing verdicts be checked by a **different model family**. If your driver is a Claude-family agent, [OpenAI Codex CLI](https://github.com/openai/codex) is the documented cross-checker:

```bash
codex exec "Claim: <the load-bearing claim>.
Evidence: <the supporting evidence>.
Attempt to overturn it. What is the strongest case that this is wrong? Default to skeptical."
```

The agent records each overturn attempt (survived / challenged / inconclusive) in `depth-engine/memory/LEDGER.md`. If the cross-checker and the driver disagree on a load-bearing point, that escalates to **you** — never to a same-family tie-breaker. (Symmetrically, if your driver is Codex/GPT-family, use a Claude-family model as the cross-checker.)

## <a name="resuming"></a>Resuming a run

The 3-tier memory means you can stop and resume across sessions (even after a context reset). To resume, open your agent and say:

> "Re-read `depth-engine/BOOT.md`, then run the resume ritual in `depth-engine/engine/INITIATOR.md` from `depth-engine/memory/`."

The agent reloads `STATE.md` + `INDEX.md` + `REGISTER.md`, runs the L-B integrity checks (the Ledger and Index counts must match; memory must be append-only), finds the first open item in the Coverage Register, and continues from there. It trusts the files and `git log` over any in-context recollection.

> **Tip:** commit `depth-engine/memory/` to your git history. It *is* the run — the append-only record, the resume snapshot, and the coverage checklist. Committing it makes resume and the L-B integrity checks reliable.

## Re-scaffolding safely

Re-running `depth-engine init` is always safe:

- It only writes into `depth-engine/`.
- Identical files are left untouched (idempotent).
- Files you hand-edited are skipped with a warning; `--force` refreshes framework files (engine/protocols/BOOT).
- **`memory/` is never overwritten** — not even with `--force`. Your run is safe.

## Tuning the walk

- **Give it a real seed and real inputs.** The engine's depth comes from the research it does on *your* domain and data (E2/E3). A vague seed and no data yield a shallow walk. Point it at your actual site, repo, notes, or corpus.
- **Honor the gates.** When the agent pauses at a gate or a decision fork, that's the design — engage rather than telling it to just push through.
- **Let it refuse.** If the evidence doesn't support your framing, a refusal (with a smaller-scoped alternative) is the honest, valuable outcome.
