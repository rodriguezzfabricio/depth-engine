# FAQ

### What does the Depth Engine actually do?

It makes your AI coding agent approach a goal with the rigor a long-lived expert project earns over years of trial and error — but in a single, structured walk. Concretely, your agent: completes your intent through an interview, researches your domain until it can speak the jargon and knows how practitioners fail, decomposes the goal, generates a battery of questions, answers them with a **different AI model trying to prove each answer wrong**, and stops only when the evidence is saturated — then emits a build-ready scaffold, a decision, or a documented refusal.

### What does it **not** guarantee?

Parity. Expert-grade depth. A correct answer. A green walk proves the **process** ran to standard — every hard gate fired, every load-bearing claim survived a cross-family overturn attempt, the memory is intact, and the engine was willing to refuse. It does **not** prove the output is as deep as a domain expert's, or that the converged evidence is correct.

> **The plumbing-vs-parity line, plainly:** the engine's *plumbing* is proven. **Depth is earned per run** by the research your agent actually does on your real domain and data. A shallow research pass produces a shallow result no matter how clean the walk. This is a rigor engine, not magic — and it must never claim parity from the template alone.

### Do I really need two AI models?

You get much more from it with two. Law **L-A** requires that load-bearing verdicts be checked by a **different model family** — because a model grading its own work is structurally biased toward confirming it. The documented setup is a Claude-family agent as the driver and **Codex CLI (`codex exec`) as the cross-checker** (or vice versa). It still runs with one model, but the cross-family check is its single sharpest safeguard; don't skip it lightly.

### Why are there "Kalshi referent" / "Origin/rationale" sections in the engine files?

The engine was generalized from a proven quantitative-research system. Each stage and law keeps a short **"Origin/rationale"** section (some titled "… referent") recording *which proven mechanism it generalizes*. Those sections are **provenance** — context that explains why the protocol is shaped the way it is — **not instructions**, and not something you act on. The engine itself is domain-agnostic; a CI leakage gate keeps it that way.

### Is it safe to re-run `init`?

Yes. `init` is non-destructive and idempotent. It only writes into the `depth-engine/` folder, it never overwrites your own files, and it **never overwrites an in-progress run's memory** (`depth-engine/memory/*`) — not even with `--force`. `--force` only refreshes framework files (engine/protocols/BOOT) you may have hand-edited.

### Can I edit the engine files?

They're frozen by design (Law L-D — no infinite self-perfection). If you must change one, the rule is **additive-only**: append a dated clause, never weaken or rewrite. See [CONTRIBUTING.md](../CONTRIBUTING.md).

### What's the difference between "build" and "decision" mode?

You set it at stage E1. **Build** mode converges when every aspect of the goal has been answered to build-depth, and emits a build-ready scaffold. **Decision** mode converges when the central decision is *saturated* (no new question would flip it), and emits the decision directly — skipping the build-probe and scaffold stages.

### It refused / it stopped instead of building. Is that a bug?

No — refusal is a **first-class outcome**, not a failure. If the converged evidence doesn't support proceeding as framed, the engine says so and offers the smaller-scoped intervention the evidence *does* support. A tool willing to tell you "not like this" is doing its job.

### Does it write or run my code?

The engine is a methodology your agent executes; the CLI in this package only scaffolds Markdown files. Whether your agent writes or runs code during a build-mode walk is up to your agent and your approval gates — the engine's discipline suite (`protocols/`) tells it to do so test-first and to keep irreversible actions behind a human gate.

### Is it free / open source?

This distribution is **proprietary (UNLICENSED)**, all rights reserved. See [LICENSE](../LICENSE).
