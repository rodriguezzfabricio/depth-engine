# Getting Started — a worked walkthrough

This is a full, followable walk on a tiny seed, so you know exactly what to expect. We'll use a **decision** ("SQLite vs Postgres for a small hobby web app") because it reaches a terminal quickly. A **build** walk is the same shape but continues through a build-probe and a scaffold — see [EXAMPLES.md](EXAMPLES.md).

> Everything below is **illustrative** — the exact questions and findings depend on your agent and your real inputs. What's fixed is the *shape*: the stages, the memory writes, and the cross-family check.

## 0. Scaffold

In your project directory:

```bash
depth-engine init
# (or, from a local clone:  node /path/to/depth-engine/bin/depth-engine.js init)
```

You'll see something like:

```
depth-engine: scaffolded into /your/project/depth-engine
  created: 30   unchanged: 0   skipped: 0   updated: 0

Next: open your AI coding agent in this project and say:
  "Read depth-engine/BOOT.md and follow it."
```

## 1. Boot your agent

Open your AI coding agent (Claude Code, Codex, …) in the project and say:

> **"Read `depth-engine/BOOT.md` and follow it. My goal: should I use SQLite or Postgres for a small hobby web app?"**

The agent reads `BOOT.md`, loads the 5 laws and the `INITIATOR`, and begins the walk.

## 2. E0 — Intake

The agent pins your seed and creates its run memory. In `depth-engine/memory/LEDGER.md` you'll now see the first entry:

```
L-0001
Date: 2026-07-01
Type: action
Initialized run memory; pinned seed "SQLite vs Postgres for a small hobby web app".
```

## 3. E1 — Interview & intent-completion

The agent answers what it can itself and asks you only what it genuinely needs — e.g.:

> "A few things that change the answer: (1) expected concurrent writers? (2) is this going on a single small server or a serverless/edge host? (3) do you need full-text search, JSON queries, or geospatial? (4) who operates it long-term — just you?"

It then reflects back an **Intent Brief** and asks you to confirm, and sets **project-type = decision**. `memory/STATE.md` now shows the current stage and the decision mode.

## 4. E2 — Become the domain expert

Before answering, the agent researches the *actual* trade-offs: how SQLite's single-writer model behaves under concurrency, litestream/backup stories, Postgres operational overhead, the specific failure modes people hit ("we picked X and regretted it when…"). It records findings to the Ledger and distills a few sharp example questions. This is the stage that makes the answer more than a generic blog-post summary.

## 5. E3–E6 — Scars, seams, decompose, question battery

- **E3** mines how this decision goes wrong (e.g., "chose SQLite, then needed multi-region writes").
- **E5** decomposes the decision into the **sub-questions** it rests on (concurrency, ops burden, feature needs, migration cost, hosting fit) and records them in `memory/REGISTER.md`.
- **E6** generates the full question battery, each tagged to a sub-question.

## 6. E7 — Answer + adversarial kill-loop

The agent answers each question with evidence — then a **different model family** tries to overturn each load-bearing answer. If you have Codex CLI, this is a real `codex exec` call:

```bash
codex exec "Claim: for a single-server hobby app with one writer, SQLite is the better default.
Evidence: <the agent's evidence>. What is the strongest case this is wrong?"
```

Flattering conclusions get *extra* scrutiny (Law L-A). Each overturn attempt is recorded in the Ledger.

## 7. E8 — Convergence gate → E11 terminal

Once no new question would flip the decision, E8 declares **CONVERGED (decision mode)**, runs a final cross-family overturn of its own verdict, and routes straight to **E11**. The agent delivers:

- **The decision**, with the saturation argument (why the evidence is now enough).
- **Residual open sub-questions** stated honestly (what could still change it).
- **The honest ceiling** — what this walk did and did not establish.

## 8. Look at the memory

Your `depth-engine/memory/` now tells the whole story: the `LEDGER.md` is the append-only record of every step and every cross-check, `REGISTER.md` shows each sub-question closed with its evidence, and `STATE.md` is the resume snapshot. You can resume any time — see [USAGE.md](USAGE.md#resuming).

---

**What you just saw:** the process ran to standard — gates fired, claims were cross-checked, memory is intact. Whether the *decision* is right for you depends on how well the agent researched your real constraints. That's the honest deal (see [FAQ.md](FAQ.md)).
