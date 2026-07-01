# Depth Engine

**A rigor engine your AI coding agent walks to turn a loose idea into a build-ready scaffold, a reasoned decision, or an honest refusal.**

You give it a **seed** — "revamp my store", "Shopify vs a custom rebuild?", "design a fitness app", "should we go monorepo?". Your AI coding agent then walks a disciplined 12-stage pipeline: it interviews you, *becomes an expert in your domain by actually researching it*, mines how similar efforts have failed, decomposes the goal, generates and adversarially answers a battery of questions (cross-checked by a **different** AI model), and stops only when the evidence is saturated — emitting either a build-ready scaffold, a decision, or a documented refusal.

It is **not** a code library and it does **not** run on its own. It is a **methodology** — a set of Markdown protocols — that your agent (Claude Code, Codex, Cursor, Copilot, Gemini CLI, …) reads and executes. This package just drops those protocols into your project and gives your agent a single instruction to start.

> ### The one honest promise
> A clean walk **proves the process ran** — every gate fired, every load-bearing claim survived a cross-family adversarial check, the memory is intact, and the engine was willing to refuse. It does **NOT** prove the output reached expert parity. **Depth is earned per run by the research your agent actually does on your real domain and data.** This is a rigor engine, not magic. Never claim parity from the scaffold alone.

---

## Who this is for

Anyone with an AI coding agent and a goal they want approached with real rigor instead of a confident first draft — whether they're **building** something or **deciding** something. You do not need to understand the engine's internals; you follow the docs.

## Prerequisites

- **An AI coding agent** — Claude Code (primary), OpenAI Codex CLI, or any capable coding agent (a "generic path" is documented).
- Ideally **a second model family** available for the adversarial cross-checks (Law L-A). Codex CLI (`codex exec`) is the documented cross-checker for Claude-family agents. It works without one, but the cross-family check is the engine's sharpest tooth.
- **Node.js ≥ 18** — only to run the installer that drops the files. The engine itself is just Markdown.

## Install & scaffold

This is a **private** repo shared with invited collaborators. Accept the GitHub invite, clone it, then run its `init` inside whatever project you want to scaffold:

```bash
git clone https://github.com/endegenaassefa/depth-engine.git

# then, inside YOUR project's directory:
node /path/to/depth-engine/bin/depth-engine.js init

# or install the command once so you can call it anywhere:
npm install -g /path/to/depth-engine   &&   depth-engine init
```

No dependencies to install — the CLI is pure Node (≥18). If the maintainer later publishes it to a registry, `npx depth-engine init` will work too.

`init` is **non-destructive and idempotent** — it only writes into a `depth-engine/` folder in your project, never overwrites your files, and never overwrites an in-progress run's memory. Safe to re-run.

## 60-second quickstart

1. **Scaffold** in your project: `depth-engine init` (or the `npx` form above).
2. **Open your AI coding agent** in that project.
3. **Give it one instruction:**
   > **"Read `depth-engine/BOOT.md` and follow it."**
4. **Give it your seed** when it asks (or include it: *"…follow it. My goal is: build a habit-tracker CLI."*).
5. **Walk with it.** It will interview you, research your domain, and work through the stages — pausing at real decision points and at the end for your review.

That's it. The agent does the walk; you steer and approve.

## What `init` drops into your project

```
depth-engine/
├── BOOT.md          ← the single file you point your agent at
├── engine/          ← the 12 stages (E0–E11) + 5 laws (L-A–L-E) + INITIATOR + README
├── protocols/       ← the discipline suite (prompting, TDD, context hygiene, validation)
└── memory/          ← a zeroed 3-tier memory (Ledger / State / Index / Register) the run fills
```

## The shape, in one breath

- **12 stages E0→E11:** intake → interview → *become the domain expert* → mine failure "scars" → extract seams → decompose → question battery → answer + adversarial kill → convergence gate → build-probe → emit scaffold → terminal.
- **5 always-on laws L-A→L-E:** adversarial posture · 3-tier memory · cadence & cold re-verify · the freeze (no infinite polishing) · evidence over assertion.
- **2 modes:** **build** (converges when every aspect is covered to build-depth) and **decision** (converges when the decision is saturated).
- **3 honest terminals:** a **build-ready scaffold**, a **decision**, or a **reasoned refusal** — none is a failure.

Full plain-language tour: **[docs/CONCEPTS.md](docs/CONCEPTS.md)**.

## Documentation

| Doc | What it covers |
|---|---|
| **[docs/GETTING-STARTED.md](docs/GETTING-STARTED.md)** | A full worked walkthrough on a tiny sample seed (the "smoke walk"). |
| **[docs/CONCEPTS.md](docs/CONCEPTS.md)** | The 12 stages, 5 laws, and 2 modes in plain language. |
| **[docs/USAGE.md](docs/USAGE.md)** | Driving it with Claude Code, the generic path, and Codex CLI as the cross-checker. |
| **[docs/EXAMPLES.md](docs/EXAMPLES.md)** | One build and one decision example, end-to-end (synthetic). |
| **[docs/FAQ.md](docs/FAQ.md)** | Honest answers: what it does, what it does **not** guarantee, and why. |
| **[CONTRIBUTING.md](CONTRIBUTING.md)** | Adding/editing stages & laws; the additive-only freeze rule; the leakage gate. |

## License

Proprietary — **UNLICENSED**, all rights reserved. See [LICENSE](LICENSE).
