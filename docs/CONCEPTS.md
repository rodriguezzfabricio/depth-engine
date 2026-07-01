# Concepts — the engine in plain language

The Depth Engine is a **linear pipeline of 12 stages** (E0 → E11) that your AI agent walks once, governed by **5 laws** that are active the whole time. You never run code — your agent reads these Markdown protocols and executes them. Here's the whole thing in plain terms.

## The two project kinds

You choose one at stage E1; it changes how the engine decides it's "done":

- **Build** — you want to *make* something. The engine converges when **every aspect of the goal has been answered to build-depth**, then emits a build-ready scaffold.
- **Decision** — you want to *decide* something. The engine converges when the **decision is saturated** (no new question would change it), then emits the decision directly.

## The 12 stages (E0 → E11)

| # | Stage | In plain language |
|---|---|---|
| **E0** | Intake | Take your seed — a sentence, a link, a screenshot, whatever — and pin it. Assume nothing is complete yet. |
| **E1** | Interview & intent-completion | The agent answers what it can by itself and asks you only what genuinely needs you, then reflects back a structured **Intent Brief** for you to confirm. Sets build-vs-decision here. |
| **E2** | Become the domain expert | **The heart of it.** Before generating any questions, the agent actually researches your domain — its jargon, how it really works, prior art, and *how practitioners fail* — and distills a few gold-standard example questions. |
| **E3** | Mine the world's scar tissue | Hunt down how similar efforts have gone wrong: post-mortems, failure modes, the "cardinal sins" — and figure out how to structurally prevent them. |
| **E4** | Extract the seams | Identify the load-bearing structural pieces (the "seams") the work will be built along. |
| **E5** | Decompose the goal | Break the goal into the **aspects** that must each be covered (build), or the **sub-questions** the decision rests on (decision). This is the map that "done" is judged against. |
| **E6** | Question battery | Generate the full set of questions from every angle, red-teaming the taxonomy so nothing is missed; each question is tagged to an aspect. |
| **E7** | Answer + adversarial kill-loop | Research and answer each question — then a **different AI model family** tries to overturn the answer. Flattering results get *more* scrutiny than negative ones. Defects reopen automatically. |
| **E8** | Convergence gate | After each pass, judge whether it's really done: every aspect covered (build) or the decision saturated (decision). It also runs a "what question did we miss?" pass and a cross-family overturn of its own verdict. Issues one of three verdicts (below). |
| **E9** | Build-probe | *(build mode only)* Build one thin, real vertical slice from the converged knowledge. Every surprise it turns up becomes a reopened question — reality-testing the plan before committing. |
| **E10** | Emit build-ready scaffold | *(build mode)* Render the scaffold: structure, the full discipline suite carried forward, fresh memory, a knowledge package, and a verification report. |
| **E11** | Terminal | Deliver one of the three outcomes below, always with an honest statement of its limits, always for your review before anything irreversible happens. |

## The convergence gate's three verdicts (E8)

- **CONVERGED** → proceed (build mode → the build-probe; decision mode → straight to the decision).
- **NOT-YET-CONVERGED** → loop back and close the specific gap. (Bounded — it can't loop forever chasing perfection; Law L-D stops it.)
- **REFUSAL** → the evidence says *don't proceed as framed.* This routes to a refusal terminal.

## The three terminals (E11) — none is a failure

- **Build-ready scaffold** — a structured starting point that carries the engine's discipline forward, for you to review before your agent builds.
- **Decision-deliverable** — the decision, with the saturation argument and any residual open questions stated honestly.
- **Refusal** — "not like this," plus the smaller-scoped intervention the evidence *does* support. A refusal is a complete, honest deliverable — not a failure to hide.

## The 5 laws (L-A → L-E) — always on, every stage

| Law | Name | What it enforces |
|---|---|---|
| **L-A** | Adversarial posture | A model grading its own work is biased toward confirming it. So every load-bearing claim gets an **overturn attempt from a different model family**, and flattering results get *extra* scrutiny. The human gate is the real circuit-breaker. |
| **L-B** | 3-tier memory | An append-only **Ledger** (what happened), a mutable **State** (where am I), and an **Index + Coverage Register** (the table of contents + the checklist). Integrity is re-checked on every resume; trust the files and `git log` over memory. |
| **L-C** | Cadence & cold re-verify | Re-verify high-stakes decisions **cold, in a fresh context** — a conclusion reached deep in a long session is provisional until reproduced clean. |
| **L-D** | The freeze | Once a protocol is sound, **freeze it** — no infinite self-polishing. This is what keeps the loops (E8, E9) from running forever. |
| **L-E** | Evidence over assertion | Every claim carries its epistemic status; "it works" needs the command and its real output. **Honest negatives are complete deliverables.** Results must be reproducible from artifacts. |

## Why this produces depth (and why it can't promise it)

The rigor is real: cross-family adversarial checks catch flattering-but-wrong conclusions, scar-tissue research pre-empts known failure modes, the 3-tier memory prevents drift, and the engine can refuse. But all of that operates on **the research your agent actually does on your real domain**. The engine guarantees the *process*; the *depth* is earned each run. See [FAQ.md](FAQ.md) for the plumbing-vs-parity line.
