# Changelog

All notable changes to this project are documented here. Format follows
[Keep a Changelog](https://keepachangelog.com/); this project uses [SemVer](https://semver.org/).

## [0.1.0] — 2026-07-01

Initial private distribution of the Depth Engine as an agent-agnostic npm CLI.

### Added
- **`depth-engine init`** — a zero-dependency Node CLI that scaffolds the engine into
  `<cwd>/depth-engine/`. Non-destructive and idempotent; `memory/` is never overwritten,
  even with `--force`.
- **Bundled engine (verbatim):** the 12 stages (E0–E11), 5 laws (L-A–L-E), `INITIATOR.md`,
  the engine `README.md`, and the stage-authoring `_TEMPLATE.md`.
- **Genericized discipline suite:** `AI_OPERATING_DISCIPLINE`, `PROMPT_ENGINEERING`,
  `TDD_AND_CODE_INTEGRITY`, `CONTEXT_HYGIENE`, `VALIDATION_METHODOLOGY` — carried forward in
  full, with all domain-specific content removed.
- **`BOOT.md`** — the single agent-entry file: it loads the laws + INITIATOR, points at the
  memory and protocols, mandates the cross-family (L-A) checks, and maps distribution
  references (e.g. `GOVERNANCE §2` → `PROMPT_ENGINEERING.md`).
- **Zeroed 3-tier memory scaffold** — `LEDGER` / `STATE` / `INDEX` / `REGISTER`.
- **Tests + CI:** init behavior (drop / idempotent / non-destructive / memory-protected),
  structural integrity of the bundled engine, and a leakage gate that keeps the shipped
  files domain-agnostic. Green on Node 20.
- **Docs:** README, CONCEPTS, GETTING-STARTED, USAGE, EXAMPLES, FAQ, CONTRIBUTING.

### Notes
- The engine is domain-agnostic; e-commerce and trading were only the test tracks used to
  prove its plumbing. This release ships **plumbing-proven** rigor — it does not claim, and
  must never claim, expert-grade parity from the template alone. Depth is earned per real run.
