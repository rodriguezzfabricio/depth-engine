# Contributing

Thanks for improving the Depth Engine. A few rules keep it trustworthy.

## Ground rules

1. **The engine files are frozen — changes are ADDITIVE-ONLY.**
   The stages (`assets/engine/stages/E*.md`), laws (`assets/engine/laws/L-*.md`), and
   `INITIATOR.md` embody the engine's own freeze law (L-D): once a protocol is sound, you
   **append a dated clause** — you never weaken, rewrite, or delete existing text. If you
   think a stage is wrong, add a dated corrective clause explaining why; don't silently edit.

2. **Everything shipped stays 100% domain-agnostic.**
   No domain/company/product-specific content in any shipped file, *except* inside a clearly
   marked `<example>` block or an "Origin/rationale" section. This is enforced in CI
   (`test/leakage.test.js`).

3. **All CLI/JS changes are test-driven.**
   Write the failing test first, watch it fail for the right reason, then make it pass. See
   `assets/protocols/TDD_AND_CODE_INTEGRITY.md` — the engine holds itself to the same bar.

## Adding or extending a stage or law

- Start from `assets/engine/_TEMPLATE.md` (the stage-authoring template).
- Give the stage a `Binding · Load WHEN:` entry condition, a one-paragraph purpose, a numbered
  Protocol, explicit Inputs/Outputs, binary Acceptance checks, and an honest-ceiling section.
- If it references a proven precedent, put that in an **"Origin/rationale"** section — not in
  the instructions.
- Update `assets/engine/README.md` and `assets/engine/INITIATOR.md` **additively** if the walk
  changes, and update `assets/BOOT.md` if the agent's entry instructions change.

## Before you push

```bash
npm test
```

All suites must be green:

- **`test/init.test.js`** — the CLI drops the right files; idempotent; non-destructive; memory-protected.
- **`test/integrity.test.js`** — 12 stages + 5 laws + 5 protocols + BOOT + memory present; internal pointers resolve.
- **`test/leakage.test.js`** — the shipped protocols carry zero domain leakage; engine e-commerce terms appear only inside `<example>` blocks.

If you add a bundled file, add its presence check to `test/integrity.test.js`. If you add prose,
run the leakage grep against it. If you touch the CLI, add a test for the behavior you changed.

## The honesty rule

Documentation and prompts must never promise expert parity, "perfection", or a
"capability-utilization %". A clean walk certifies **process**, not **outcome**. Keep it honest.
