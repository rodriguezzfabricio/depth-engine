# Depth Engine — Distribution Design Spec

**Date:** 2026-06-30
**Status:** Approved (external decisions locked via consolidated brainstorm gate)
**Source engine (read-only reference):** `/mnt/c/Users/endeg/Documents/kelshi/standard-workflow-engine` @ `standardize` / `e7abc7d`
**This repo:** `/root/depth-engine` (new clean repo, `main`, NOT a worktree of the source)

---

## 1. What we are packaging

The **Depth Engine** is a **methodology executed by an AI coding agent**, not runtime code. It is a linear 12-stage pipeline (E0–E11) governed by 5 cross-cutting laws (L-A…L-E). You give it a loose **seed** ("revamp my store", "Shopify vs custom rebuild?", "design a fitness app"); the agent walks the stages — intake → interview → become the domain expert → mine failure scars → extract seams → decompose into aspects/sub-questions → question battery → answer + cross-family adversarial kill → dual-mode convergence gate → build-probe → emit a build-ready scaffold, a decision, or an honest refusal.

The **value is the rigor**: cross-family adversarial checks, scar-tissue prevention, evidence-over-assertion, 3-tier persistent memory, and the spine to refuse. It handles **two project kinds** — `build` and `decision`. It is **domain-agnostic**; e-commerce was only the synthetic test track.

We turn this into a **production-ready, npm-installable, well-documented distribution** so a non-expert can `npx depth-engine init` in any project, point their AI agent at one boot file, and start a real engine walk.

## 2. Non-negotiable constraints (the engine's soul)

1. **100% domain-agnostic.** No domain/e-commerce/fixture/Kalshi content in any shipped protocol file **except** inside clearly-marked `<example>` blocks or an "Origin/rationale" section. A leakage-grep runs in CI.
2. **Full discipline suite carried forward, GENERICIZED** — not a thinned abstraction. E10 renders the complete suite into every scaffold; a booted project inherits the same prompting discipline + context hygiene + 3-tier memory formats.
3. **HONESTY LAW — NEVER CLAIM PARITY.** The plumbing is proven; deep, expert-grade output on a real domain is EARNED per real run, never guaranteed by the template. Docs say this plainly. It is a rigor engine, not magic.
4. **Additive-only on frozen files.** If a frozen engine protocol file is ever touched, changes are append-a-dated-clause only — never weaken/rewrite (the engine's own L-D freeze law). Our approach avoids touching them at all (see §4).

## 3. Locked distribution decisions (from the consolidated brainstorm gate)

| Decision | Choice | Notes |
|---|---|---|
| **Distribution form** | Agent-agnostic **npm CLI only** (`npx depth-engine init`) | No plugin/skill. Simplest, most portable, one thing to maintain. |
| **Package name** | `depth-engine` | Verified **available** on npm (404). Evokes the value: manufactures research depth + rigor. |
| **Agents officially supported** | **Claude Code** + **Generic/any-agent** + **Codex CLI (OpenAI)** | Codex doubles as the cross-family L-A verifier for Claude-family INITIATORs. |
| **License + visibility** | **Proprietary (UNLICENSED)** + **private** | `package.json` `"private": true` (safe default, blocks accidental public publish) + `"license": "UNLICENSED"` + proprietary LICENSE. One documented flip to publish to a registry. Operator runs any publish. |

## 4. Architecture — what ships, what's excluded, and how we stay additive-only

**Core insight:** the source engine files (stages, laws, INITIATOR, engine/README) carry three things a clean distribution must handle: (a) top-of-file build-gate HTML comments referencing the excluded `_build/GOVERNANCE.md`; (b) deliberate **"Kalshi referent" Origin/rationale sections** (PERMITTED by constraint §2.1); (c) cross-reference pointers to `GOVERNANCE §2` / `IRON_LAW.md`. We must not rewrite these frozen files (§2.4).

**Resolution:** ship the engine **verbatim** (byte-for-byte, excluding only `engine/_build/`), and provide the newcomer-clean, generic reading experience through **NEW additive documentation** + a **BOOT.md bridge file** — never by editing a frozen file. The AI agent walks the verbatim engine; the human reads the new docs; the BOOT.md maps dangling references (e.g. `GOVERNANCE §2` → the shipped `protocols/PROMPT_ENGINEERING.md`) so nothing is broken for the agent.

### 4.1 SHIP (the payload the CLI drops), under `assets/`

```
assets/
├── engine/                         # VERBATIM from source, minus engine/_build/
│   ├── INITIATOR.md                #   entry orchestrator (the walk + hard gates)
│   ├── README.md                   #   engine spine (agent/contributor-facing)
│   ├── _TEMPLATE.md                #   stage-authoring template (contributors)
│   ├── stages/E0_intake.md … E11_terminal_state.md   # 12 stages
│   └── laws/L-A_… … L-E_…          # 5 laws
├── protocols/                      # GENERICIZED discipline suite (leakage-clean)
│   ├── AI_OPERATING_DISCIPLINE.md       # from source .template.md (generic variant)
│   ├── PROMPT_ENGINEERING.md            # cross-refs to excluded files neutralized
│   ├── TDD_AND_CODE_INTEGRITY.md        # from source .template.md (generic variant)
│   ├── CONTEXT_HYGIENE.md               # one BECKER example line cleaned; refs neutralized
│   └── VALIDATION_METHODOLOGY.md        # AUTHORED generic variant (source is Kalshi-laced, no template exists)
├── BOOT.md                         # the ONE agent-entry file (see §4.3)
└── memory/                         # zeroed 3-tier scaffold (see §4.4)
    ├── LEDGER.md  ├── STATE.md  ├── INDEX.md  └── REGISTER.md
```

### 4.2 EXCLUDE from the product
`engine/_build/` (GOVERNANCE, LEDGER, REGISTER, STATE, TRACEABILITY — construction log), `proof/`, `adapter/`, `docs/` (source), and the Kalshi-specific protocols: `BACKTEST_METHODOLOGY*.md`, `BECKER_MICROSTRUCTURE_FINDINGS.md`, `COMPLIANCE.md`, `kalshi-api-and-data-collection-guide.md`, and the non-`.template` Kalshi-laden `.md` variants of AI_OPERATING_DISCIPLINE / TDD.

### 4.3 The BOOT.md bridge (the single instruction target)
Non-expert runs one instruction to their agent: **"Read `depth-engine/BOOT.md` and follow it."** BOOT.md:
1. Frames the run: you are walking the Depth Engine on the user's goal.
2. Loads the 5 laws (`depth-engine/engine/laws/L-*.md`), kept active across all stages.
3. Loads `INITIATOR.md`; follow its ordered walk E0→E11 with hard gates.
4. Points the discipline suite (`depth-engine/protocols/`), rendered forward at E10.
5. Points run memory (`depth-engine/memory/` — Ledger/State/Index/Register); initialize/append per L-B.
6. **Cross-family L-A checks:** use a different model family (e.g. Codex CLI) for overturn attempts. Documents the **reference-mapping** that neutralizes dangling pointers: `GOVERNANCE §2` (the 8-line prompt-quality gate) → `protocols/PROMPT_ENGINEERING.md`; the "Kalshi referent" sections in engine files are **Origin/rationale** (proven-system provenance), not instructions.
7. Starts E0 with the user's seed (ask if not supplied).
8. Honesty: a clean walk proves the PROCESS ran, not parity.

### 4.4 The zeroed 3-tier memory scaffold
Derived from L-B's concrete format. Starter files carry the format headers + a one-line "empty, ready for first entry" note; the run fills them:
- `LEDGER.md` — append-only; `L-NNNN / Date / Type / content` entries. Starts empty.
- `STATE.md` — resume snapshot: Current phase & task / Decisions in force / Open threads / Ledger status / Blocked items.
- `INDEX.md` — Ledger table of contents: `| ID | Date | Type | Summary |`.
- `REGISTER.md` — Coverage Register: `| Item | Type | Status | Evidence | Notes |`.

### 4.5 The CLI package layout
```
depth-engine/
├── package.json  LICENSE  README.md  CHANGELOG.md  CONTRIBUTING.md
├── .npmignore  .gitignore  .github/workflows/ci.yml
├── bin/depth-engine.js         # shebang entry → src/cli
├── src/{cli,init,assets,files}.js   # small focused modules
├── assets/…                    # §4.1 payload
├── docs/{CONCEPTS,GETTING-STARTED,USAGE,EXAMPLES,FAQ}.md + superpowers/specs/
└── test/{init,integrity,leakage}.test.js + fixtures
```

## 5. CLI `init` behavior (non-destructive + idempotent)

`npx depth-engine init [--force] [--dir <path>]` drops the payload into `<cwd>/depth-engine/`:
- **Create** any missing target file.
- **Idempotent:** target exists + identical content → skip ("unchanged").
- **Non-destructive:** target exists + different content → **skip + warn** ("exists, not overwriting; use --force"). `--force` refreshes **framework** files (engine/protocols/BOOT.md) only.
- **Memory is sacrosanct:** `memory/*` files are written **only if absent** — never overwritten, even with `--force` (protects an in-progress run's state).
- Touches only `depth-engine/`; never the user's other files.
- Prints a summary (created / unchanged / skipped) + the next-step instruction.
- Exit 0 on success; non-zero on real errors (unwritable dir, etc.).

## 6. Tests (TDD) + CI gates

**`test/init.test.js`** — init into a temp dir creates the full expected file set (12 stages, 5 laws, INITIATOR/README/_TEMPLATE, 5 protocols, BOOT.md, 4 memory files); second run is idempotent (0 created, memory untouched); a pre-modified `memory/STATE.md` is NOT overwritten; an unrelated user file is untouched; `--force` refreshes a framework file but still protects memory.

**`test/integrity.test.js`** — structural integrity of the bundled engine: all 12 stages named E0…E11 present; all 5 laws L-A…L-E present; 5 protocols present; BOOT.md's internal path pointers resolve within `assets/`; INITIATOR's stage/law pointers resolve within `assets/`.

**`test/leakage.test.js`** — scoped leakage-grep:
- `assets/protocols/**`: **0** hits for `kalshi|becker|backtest|taker|maker|fees\.py|shopify|e-?commerce|subreddit|instagram|checkout`.
- `assets/engine/**`: e-commerce/fixture terms (`shopify|subreddit|checkout|instagram|coffee|mobile-first`) ≤ the allowlisted `<example>`-block hits. **Not** grepped for "kalshi" (permitted Origin/rationale sections).

**CI** (`.github/workflows/ci.yml`): Node 20, `npm ci` + `npm test` on push/PR; the leakage + integrity tests are the gate. Must be green.

**Manual smoke walk** (documented, not automated — the engine is agent-executed): a tiny seed walked far enough to show E0→E1→E2 producing real artifacts + memory writes; documented in GETTING-STARTED.

## 7. Documentation set (beginner-first, honest)

- **README.md** — what / why / prerequisites / install / 60-second quickstart; plumbing-vs-parity stamp up front.
- **docs/CONCEPTS.md** — the 12 stages + 5 laws + 2 modes in plain language.
- **docs/GETTING-STARTED.md** — full worked walkthrough on a tiny sample seed (the smoke walk).
- **docs/USAGE.md** — driving it with Claude Code, the generic path, and Codex CLI as the cross-family verifier.
- **docs/EXAMPLES.md** — one build + one decision, synthetic, end-to-end shape.
- **docs/FAQ.md** — honest: what it does / does NOT guarantee; plumbing-vs-parity; "why are there 'Kalshi referent' sections in the engine files?".
- **CONTRIBUTING.md**, **CHANGELOG.md**.

**Honesty stamp (verbatim, carried into README + FAQ):**
> A clean walk PROVES THE PLUMBING only: end-to-end E0→E11 execution, every hard gate fires or correctly holds, the cross-family overturn machinery runs with real teeth, artifacts have correct shape, the three terminals are reachable. It does NOT prove parity or expert-grade depth. Depth is earned per real run by the research the agent actually does on real data. **Never claim parity from the template alone.**

## 8. Genericization plan for the protocol suite (leakage-clean before ship)

| File | Source | Action |
|---|---|---|
| AI_OPERATING_DISCIPLINE.md | `.template.md` | Copy; resolve `{{S6:…}}` placeholders to generic prose; neutralize refs to excluded files. |
| TDD_AND_CODE_INTEGRITY.md | `.template.md` | Copy; resolve `{{S6/S10:…}}` placeholders; keep archetypes; convert the "Kalshi e.g." worked example into a clearly-marked generic `<example>` or neutral illustration. |
| PROMPT_ENGINEERING.md | `.md` | Copy; neutralize refs to `IRON_LAW.md` / `../CLAUDE.md` / `../memory/state.md` / `../docs/PERFECTION_RESEARCH…` → generic equivalents or removal; body is already generic. |
| CONTEXT_HYGIENE.md | `.md` | Copy; remove the one `BECKER_MICROSTRUCTURE_FINDINGS.md` example line; neutralize `IRON_LAW §10` refs → generic. |
| VALIDATION_METHODOLOGY.md | `.md` (Kalshi-laced) | **Author generic variant**: keep the domain-general anti-overfitting discipline (pre-specify cuts, event-clustering, freeze-before-OOS, cheapest-test-first, edge-vs-bug, sequential/power/pooling *concepts*); replace cent-denominated edges, `fees.py`, `ceil(0.07·C·P·(1−P))`, Becker numbers with generic placeholders + a "calibrate to your domain" note. Must pass leakage-grep. |

Each shipped protocol must pass `test/leakage.test.js` before it is committed.

## 9. Definition of Done

From the private package + README alone, a newcomer can: install it, run `init` in an empty project, open Claude Code (or Codex, or any agent via the generic path), point it at `depth-engine/BOOT.md`, and start a real engine walk on their own goal — with the engine staying 100% generic, the full discipline suite carried forward, the docs making it easy, and zero parity oversell. **Tests + CI green.** Cross-checked by `gstack:codex`; verified by an actual `install → init → boot` dry run (not asserted). Tagged `v0.1.0`, publish-ready (private).

## 10. Out of scope (YAGNI)
No plugin/skill wrapper; no Cursor/Gemini adapters (generic path covers them); no runtime execution of the engine (it is agent-executed); no live-domain parity run (that is the source project's P5-LIVE/P6, explicitly deferred and never claimed here).
