# Handoff — Depth Engine v0.1.0

Honest state of the deliverable, what's done, and the few things that are yours to run.

## What this is

`depth-engine` — an agent-agnostic npm CLI that scaffolds the Standard-Workflow-Engine
(the domain-agnostic 12-stage / 5-law methodology) into any project, so a non-expert can
`init` and drive it with their AI coding agent. Built as its own clean repo (this one), not
a worktree of the source engine.

## Done + verified (evidence, not assertions)

- **CLI** (`src/`, `bin/`) — `depth-engine init` scaffolds `assets/` into `<cwd>/depth-engine/`.
  Zero runtime/dev dependencies (Node built-ins + `node --test`).
- **Bundled engine, verbatim** — 12 stages, 5 laws, INITIATOR, engine README, `_TEMPLATE`;
  proven byte-for-byte identical to source (`diff -rq` clean). `_build/` excluded.
- **Discipline suite, genericized** — 5 protocols, all domain content removed, discipline
  preserved. Leakage-clean under CI (`test/leakage.test.js`).
- **BOOT.md + zeroed 3-tier memory** — the single agent-entry file + Ledger/State/Index/Register.
- **Tests: 26 passing** — init (drop / idempotent / non-destructive / memory-protected /
  symlink-safe), structural integrity (12 stages + 5 laws + 5 protocols + BOOT + memory;
  pointers resolve), leakage gate (protocols 0 domain hits under a broadened regex; engine
  e-commerce only inside closed `<example>` blocks), CLI arg robustness.
- **Verified end-to-end on the packed artifact** — `npm pack` → install into a clean consumer →
  `npx depth-engine init` → 30 files land; idempotent re-run; `memory/` preserved even under
  `--force`; leakage-clean on the installed copy.
- **Independent cross-check** — the CLI was adversarially challenged by a different model family
  (Codex CLI), the engine's own L-A discipline applied to itself. Real findings (symlink/case
  bypass of memory-protection, `--dir` footguns, a gameable leakage detector) were fixed via
  TDD; one finding was verified as a false positive (the permitted "Kalshi referent" origin
  section) and correctly rejected.
- **Docs** — README, CONCEPTS, GETTING-STARTED, USAGE, EXAMPLES, FAQ, CONTRIBUTING, CHANGELOG.
- **CI** — `.github/workflows/ci.yml` runs the suite on Node 20.

## Yours to run (operator-gated — external/irreversible)

1. **Publishing.** The package is intentionally marked `"private": true` — a safe default that
   **blocks accidental public `npm publish`** of proprietary code. When you want to publish:
   - To a **private registry**: set `publishConfig.registry` (and an npm scope if the registry
     needs one), remove or override `"private": true`, then `npm publish`.
   - You run the actual `npm publish` (or provide credentials). Nothing here publishes on its own.
2. **Remote + visibility.** This is a local git repo at `/root/depth-engine` on `main`, tagged
   `v0.1.0`. Push it to a **private** remote when ready (`git remote add origin … && git push -u origin main --tags`).
3. **Name/scope.** Ships as unscoped `depth-engine` (verified available on npm). If you later
   want a scope (e.g. `@yourorg/depth-engine`), update `package.json` `name` before publishing.

## The honesty line (do not let anyone remove it)

A clean engine walk **proves the process ran** — gates fired, claims survived cross-family
overturn, memory intact, refusal available. It does **NOT** prove expert-grade parity. Depth is
earned per real run by the research the agent does on real data. The engine's own plumbing was
proven on synthetic tracks (e-commerce/trading); **parity is never claimed from the template
alone.** The docs say this plainly and must keep saying it.

## Repo

`/root/depth-engine` — `main` — tag `v0.1.0`. `npm test` is the gate; keep it green.
