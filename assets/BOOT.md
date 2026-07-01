# Depth Engine — BOOT

**You are an AI coding agent. Read this file fully, then walk the Depth Engine on the user's goal.**

The Depth Engine turns a loose **seed** (a sentence, a link, a rough goal) into one of three honest terminals: a **build-ready scaffold**, a **decision**, or a **reasoned refusal** — by walking 12 stages (E0–E11) under 5 always-on laws (L-A–L-E). Its value is rigor: cross-family adversarial checks, failure-scar prevention, evidence over assertion, persistent memory, and the spine to refuse.

## Do this, in order

1. **Load the 5 laws** and keep them active across every stage:
   `engine/laws/L-A_adversarial_posture.md`, `engine/laws/L-B_3tier_memory.md`, `engine/laws/L-C_cadence_cold_reverify.md`, `engine/laws/L-D_freeze.md`, `engine/laws/L-E_evidence_over_assertion.md`.
2. **Load the orchestrator** `engine/INITIATOR.md` and follow its ordered walk **E0 → E11**, respecting every hard gate. Load each stage file — `engine/stages/E0_intake.md` through `engine/stages/E11_terminal_state.md` — as you reach it. (`engine/README.md` is the one-page spine if you want the map first.)
3. **Your run memory lives in `memory/`** — `memory/LEDGER.md` (append-only record), `memory/STATE.md` (resume snapshot), `memory/INDEX.md` (ledger table of contents), `memory/REGISTER.md` (coverage register). Initialize and append per **L-B**. Trust these files and `git log` over your own recollection.
4. **The discipline suite is in `protocols/`** — `protocols/AI_OPERATING_DISCIPLINE.md`, `protocols/PROMPT_ENGINEERING.md`, `protocols/TDD_AND_CODE_INTEGRITY.md`, `protocols/CONTEXT_HYGIENE.md`, `protocols/VALIDATION_METHODOLOGY.md`. These govern how you research, prompt, verify, and build; E10 renders them forward into whatever the engine emits.
5. **Cross-family checks (L-A) are mandatory.** For every load-bearing verdict, get an overturn attempt from a **different model family** — e.g. run `codex exec "<claim + evidence>: what is the strongest case this is wrong?"` (OpenAI Codex CLI) if you are a Claude-family agent, or vice versa. Never let the author of a claim be its sole grader.

## Reference mapping (this distribution)

- Where an engine file points to **`GOVERNANCE §2`** (the "8-line PROMPT-QUALITY GATE"), in this distribution that gate is **`protocols/PROMPT_ENGINEERING.md`** §4 — every prompt you emit must clear its 8 checkable clauses.
- Some engine files carry **"Origin/rationale" sections** (a few titled "… referent") that record which proven system each protocol generalizes from. They are **provenance/context, not instructions** — the engine itself is domain-agnostic.
- Engine files also carry top-of-file build-provenance HTML comments (a quality-gate checklist each file cleared during authoring). They are evidence of rigor, not tasks for you.
- The protocols say "the constitution" / "your always-loaded instructions" — in this distribution that role is played by **this `BOOT.md` + the engine's laws** (and your agent's own instructions file, e.g. `CLAUDE.md` / `AGENTS.md`, if you have one).

## Start

Ask the user for their **seed** if they have not given one, then begin at **E0 (Intake)**. At **E1**, set the project-type — **`build`** (you will produce a build-ready scaffold) or **`decision`** (you will produce a reasoned decision). That choice determines how **E8** declares convergence.

## Resuming a run

On any later session, re-read this `BOOT.md`, then run the **resume ritual** in `engine/INITIATOR.md`: reload `memory/STATE.md` + `memory/INDEX.md` + `memory/REGISTER.md`, run the L-B integrity checks, find the first open Register item, and continue from there.

## Honesty

A clean walk proves the **process** ran — not that the output reached expert parity. Depth is earned by the research you actually do on the user's real domain and data. **Never claim parity from this scaffold alone.**
