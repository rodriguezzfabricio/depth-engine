# Depth Engine Distribution — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Package the Standard-Workflow-Engine as `depth-engine`, an agent-agnostic npm CLI that scaffolds the engine + genericized discipline suite + a boot file + a zeroed 3-tier memory into any repo, so a non-expert can install it and drive it with their AI agent.

**Architecture:** Zero-runtime-dependency Node CLI (CommonJS). A committed `assets/` payload holds the verbatim engine (E0–E11 + L-A–L-E + INITIATOR/README/_TEMPLATE, minus `_build/`), the genericized `protocols/`, a `BOOT.md` bridge, and zeroed `memory/`. `src/init.js` copies the payload into `<cwd>/depth-engine/` non-destructively and idempotently. Tests use Node's built-in runner (`node --test`); leakage + integrity tests are the CI gate.

**Tech Stack:** Node ≥18 (built with 20.20), `node:test` + `node:assert` (no test deps), `node:fs`/`node:path`/`node:os`, GitHub Actions CI. Zero runtime + dev dependencies.

## Global Constraints

- **Node:** `"engines": { "node": ">=18" }`; CI runs Node 20.
- **Zero dependencies:** no runtime or dev `dependencies` in `package.json` (use only Node built-ins + `node --test`).
- **Package identity:** `"name": "depth-engine"`, `"private": true`, `"license": "UNLICENSED"`, `"bin": { "depth-engine": "bin/depth-engine.js" }`, `"files": ["assets/","src/","bin/","README.md","LICENSE","CHANGELOG.md","docs/CONCEPTS.md","docs/GETTING-STARTED.md","docs/USAGE.md","docs/EXAMPLES.md","docs/FAQ.md"]`.
- **Source (read-only):** `/mnt/c/Users/endeg/Documents/kelshi/standard-workflow-engine` @ `e7abc7d`. NEVER modify it. Copy FROM it.
- **Additive-only on engine files:** `assets/engine/**` is byte-for-byte verbatim from source. Never edit an engine stage/law/INITIATOR/README file.
- **Drop location:** the CLI writes into `<cwd>/depth-engine/` (override with `--dir`). Memory files (`memory/*`) are written only if absent — never overwritten, even with `--force`.
- **Leakage rule:** `assets/protocols/**` = 0 domain hits (`kalshi|becker|backtest|taker|maker|fees\.py|shopify|e-?commerce|subreddit|instagram|checkout`). `assets/engine/**` = e-commerce/fixture terms (`e-?commerce|instagram|subreddit|mobile-first|checkout|shopify|\bcart\b|coffee`) only inside `<example>` blocks. `assets/engine/**` is NOT grepped for `kalshi` (permitted Origin/rationale sections).
- **Honesty stamp (verbatim, into README + FAQ):** "A clean walk PROVES THE PLUMBING only … It does NOT prove parity or expert-grade depth. Depth is earned per real run by the research the agent actually does on real data. Never claim parity from the template alone."
- **Commit trailer:** end each commit message with `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`.

---

### Task 1: Package scaffold + test harness

**Files:**
- Create: `package.json`, `LICENSE`, `.npmignore`, `bin/depth-engine.js`, `src/cli.js`, `test/smoke.test.js`

**Interfaces:**
- Produces: `src/cli.js` exports `run(argv: string[]): number`; `bin/depth-engine.js` calls it. Consumed by all later CLI tasks.

- [ ] **Step 1: Write the failing smoke test** — `test/smoke.test.js`:
```js
const { test } = require('node:test');
const assert = require('node:assert');
const { run } = require('../src/cli');

test('run(--version) prints and returns 0', () => {
  const code = run(['node', 'depth-engine', '--version']);
  assert.strictEqual(code, 0);
});
test('run(unknown) returns 1', () => {
  const code = run(['node', 'depth-engine', 'bogus']);
  assert.strictEqual(code, 1);
});
```

- [ ] **Step 2: Run to verify it fails** — `node --test` → FAIL ("Cannot find module '../src/cli'").

- [ ] **Step 3: Create `package.json`** (exact):
```json
{
  "name": "depth-engine",
  "version": "0.1.0",
  "description": "A rigor engine your AI coding agent walks to turn a loose seed into a build-ready scaffold, a decision, or an honest refusal.",
  "private": true,
  "license": "UNLICENSED",
  "bin": { "depth-engine": "bin/depth-engine.js" },
  "scripts": { "test": "node --test" },
  "engines": { "node": ">=18" },
  "files": ["assets/","src/","bin/","README.md","LICENSE","CHANGELOG.md","docs/CONCEPTS.md","docs/GETTING-STARTED.md","docs/USAGE.md","docs/EXAMPLES.md","docs/FAQ.md"]
}
```

- [ ] **Step 4: Create `LICENSE`** (proprietary):
```
Copyright (c) 2026 Endegena Assefa. All rights reserved.

This software and its documentation are proprietary and confidential.
No license, express or implied, is granted to use, copy, modify, or
distribute this software or any part of it without the prior written
permission of the copyright holder. UNLICENSED.
```

- [ ] **Step 5: Create `.npmignore`:**
```
test/
docs/superpowers/
.github/
*.log
```

- [ ] **Step 6: Create `src/cli.js`** (minimal, grows in Task 6):
```js
const pkg = require('../package.json');

function run(argv) {
  const args = argv.slice(2);
  if (args.includes('--version') || args.includes('-v')) {
    console.log(pkg.version);
    return 0;
  }
  const cmd = args[0];
  if (cmd !== 'init') {
    console.error(`depth-engine: unknown command${cmd ? ` '${cmd}'` : ''}. Try 'depth-engine init'.`);
    return 1;
  }
  return 0;
}

module.exports = { run };
```

- [ ] **Step 7: Create `bin/depth-engine.js`:**
```js
#!/usr/bin/env node
const { run } = require('../src/cli');
process.exit(run(process.argv));
```

- [ ] **Step 8: Run tests to verify pass** — `node --test` → 2 pass. Then `chmod +x bin/depth-engine.js`.

- [ ] **Step 9: Commit** — `git add -A && git commit` (msg: "feat: package scaffold + test harness" + trailer).

---

### Task 2: Bundle the engine verbatim + integrity test

**Files:**
- Create: `assets/engine/**` (copied from source), `test/integrity.test.js`
- Test: `test/integrity.test.js`

**Interfaces:**
- Produces: `assets/engine/{INITIATOR.md,README.md,_TEMPLATE.md,stages/E0..E11,laws/L-A..L-E}`. Consumed by init + integrity + leakage tasks.

- [ ] **Step 1: Write the failing integrity test** — `test/integrity.test.js`:
```js
const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const ENGINE = path.join(__dirname, '..', 'assets', 'engine');

test('12 stage files E0..E11 present', () => {
  const stages = fs.readdirSync(path.join(ENGINE, 'stages')).filter(f => f.endsWith('.md'));
  assert.strictEqual(stages.length, 12);
  for (let i = 0; i <= 11; i++) {
    assert.ok(stages.some(f => f.startsWith(`E${i}_`)), `missing E${i}`);
  }
});
test('5 law files L-A..L-E present', () => {
  const laws = fs.readdirSync(path.join(ENGINE, 'laws')).filter(f => f.endsWith('.md'));
  assert.strictEqual(laws.length, 5);
  for (const id of ['A','B','C','D','E']) {
    assert.ok(laws.some(f => f.startsWith(`L-${id}_`)), `missing L-${id}`);
  }
});
test('INITIATOR, README, _TEMPLATE present', () => {
  for (const f of ['INITIATOR.md','README.md','_TEMPLATE.md']) {
    assert.ok(fs.existsSync(path.join(ENGINE, f)), `missing ${f}`);
  }
});
test('INITIATOR stage/law pointers resolve within assets/engine', () => {
  const txt = fs.readFileSync(path.join(ENGINE, 'INITIATOR.md'), 'utf8');
  const refs = [...txt.matchAll(/`(stages\/E\d+_[^`]+\.md|laws\/L-[A-E]_[^`]+\.md)`/g)].map(m => m[1]);
  assert.ok(refs.length >= 12, `expected many stage/law refs, got ${refs.length}`);
  for (const ref of new Set(refs)) {
    assert.ok(fs.existsSync(path.join(ENGINE, ref)), `dangling ref: ${ref}`);
  }
});
```

- [ ] **Step 2: Run to verify it fails** — `node --test` → integrity FAILs (assets/engine absent).

- [ ] **Step 3: Copy the engine verbatim** (exclude `_build/`):
```bash
SRC=/mnt/c/Users/endeg/Documents/kelshi/standard-workflow-engine/engine
DST=/root/depth-engine/assets/engine
mkdir -p "$DST/stages" "$DST/laws"
cp "$SRC/INITIATOR.md" "$SRC/README.md" "$SRC/_TEMPLATE.md" "$DST/"
cp "$SRC/stages/"E*.md "$DST/stages/"
cp "$SRC/laws/"L-*.md "$DST/laws/"
# Verify _build did NOT come along:
test ! -e "$DST/_build" && echo "OK: no _build"
ls "$DST/stages" | wc -l   # expect 12
ls "$DST/laws" | wc -l     # expect 5
```

- [ ] **Step 4: Verify byte-for-byte identical to source** (additive-only proof):
```bash
diff -rq /mnt/c/Users/endeg/Documents/kelshi/standard-workflow-engine/engine/stages /root/depth-engine/assets/engine/stages && echo "STAGES IDENTICAL"
diff -rq /mnt/c/Users/endeg/Documents/kelshi/standard-workflow-engine/engine/laws /root/depth-engine/assets/engine/laws && echo "LAWS IDENTICAL"
```
Expected: both print IDENTICAL, no diff output.

- [ ] **Step 5: Run integrity test to verify pass** — `node --test` → integrity green.

- [ ] **Step 6: Commit** — "feat: bundle engine verbatim (E0–E11, L-A–L-E, INITIATOR) + integrity test".

---

### Task 3: Genericize the protocol suite + leakage test

**Files:**
- Create: `assets/protocols/{AI_OPERATING_DISCIPLINE,PROMPT_ENGINEERING,TDD_AND_CODE_INTEGRITY,CONTEXT_HYGIENE,VALIDATION_METHODOLOGY}.md`, `test/leakage.test.js`
- Test: `test/leakage.test.js`

**Interfaces:**
- Produces: `assets/protocols/` with 5 leakage-clean files. Consumed by init + integrity.

- [ ] **Step 1: Write the failing leakage test** — `test/leakage.test.js`:
```js
const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const ASSETS = path.join(__dirname, '..', 'assets');
const PROTO = path.join(ASSETS, 'protocols');
const ENGINE = path.join(ASSETS, 'engine');
const DOMAIN = /kalshi|becker|backtest|taker|maker|fees\.py|shopify|e-?commerce|subreddit|instagram|checkout/i;
const ECOM = /e-?commerce|instagram|subreddit|mobile-first|checkout|shopify|\bcart\b|coffee/i;

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p)); else out.push(p);
  }
  return out;
}
// Return line numbers inside <example>...</example> regions
function exampleLines(text) {
  const lines = text.split('\n');
  const inside = new Set();
  let depth = 0;
  lines.forEach((l, i) => {
    const opens = (l.match(/<example>/g) || []).length;
    const closes = (l.match(/<\/example>/g) || []).length;
    if (depth > 0) inside.add(i + 1);
    depth += opens;
    if (depth > 0) inside.add(i + 1);
    depth -= closes;
  });
  return inside;
}

test('protocols have zero domain leakage', () => {
  const expected = ['AI_OPERATING_DISCIPLINE','PROMPT_ENGINEERING','TDD_AND_CODE_INTEGRITY','CONTEXT_HYGIENE','VALIDATION_METHODOLOGY'];
  for (const name of expected) {
    const file = path.join(PROTO, `${name}.md`);
    assert.ok(fs.existsSync(file), `missing protocol ${name}`);
    const lines = fs.readFileSync(file, 'utf8').split('\n');
    lines.forEach((l, i) => {
      assert.ok(!DOMAIN.test(l), `${name}.md:${i + 1} domain leakage: ${l.trim()}`);
    });
  }
});

test('engine e-commerce terms appear only inside <example> blocks', () => {
  for (const file of walk(ENGINE)) {
    const text = fs.readFileSync(file, 'utf8');
    const ex = exampleLines(text);
    text.split('\n').forEach((l, i) => {
      if (ECOM.test(l)) {
        assert.ok(ex.has(i + 1), `${path.relative(ASSETS, file)}:${i + 1} e-commerce leak outside <example>: ${l.trim()}`);
      }
    });
  }
});
```

- [ ] **Step 2: Run to verify it fails** — `node --test` → leakage FAILs (protocols absent).

- [ ] **Step 3: Copy the two `.template.md` variants verbatim** (already generic):
```bash
SRC=/mnt/c/Users/endeg/Documents/kelshi/standard-workflow-engine/protocols
DST=/root/depth-engine/assets/protocols
mkdir -p "$DST"
cp "$SRC/AI_OPERATING_DISCIPLINE.template.md" "$DST/AI_OPERATING_DISCIPLINE.md"
cp "$SRC/TDD_AND_CODE_INTEGRITY.template.md"   "$DST/TDD_AND_CODE_INTEGRITY.md"
cp "$SRC/PROMPT_ENGINEERING.md"                "$DST/PROMPT_ENGINEERING.md"
cp "$SRC/CONTEXT_HYGIENE.md"                   "$DST/CONTEXT_HYGIENE.md"
cp "$SRC/VALIDATION_METHODOLOGY.md"            "$DST/VALIDATION_METHODOLOGY.md"
```

- [ ] **Step 4: Run leakage test to see exactly which lines leak** — `node --test 2>&1 | grep 'leakage:'`. This lists every offending `file:line`. These are the edit targets. Known offenders from the source audit:
  - `AI_OPERATING_DISCIPLINE.md`: `{{S6:VALIDATION_PROTOCOL}}` placeholder + any residual refs → resolve to plain prose (e.g. "the validation methodology protocol"). (Template body is otherwise generic.)
  - `TDD_AND_CODE_INTEGRITY.md`: the "Kalshi e.g." worked example (§D) → either wrap in a clearly-marked `<example>` block or reword to a neutral illustration; resolve `{{S6/S10}}` placeholders.
  - `PROMPT_ENGINEERING.md`: refs to `IRON_LAW.md`, `../CLAUDE.md`, `../memory/state.md`, `../docs/PERFECTION_RESEARCH_2026-06-22.md` → generic equivalents ("the project's always-loaded instructions", "the run's State file") or removal.
  - `CONTEXT_HYGIENE.md`: the `BECKER_MICROSTRUCTURE_FINDINGS.md` example line → generic ("a durable findings document"); `IRON_LAW §10` → "the always-loaded core instructions".
  - `VALIDATION_METHODOLOGY.md`: **heaviest** — cent-denominated edges (`δ=6¢`, `~110 events/mo`), `fees.py`, `ceil(0.07·C·P·(1−P))`, `Becker NO outcomes`, `E3 buy-NO`, `sub-$50`, `26 mention families`, `analysis/e3_q0251`. Replace each concrete number/name with a generic placeholder + a "calibrate to your domain" note; preserve the domain-general discipline (pre-specify cuts; event-clustering; freeze-before-OOS; cheapest-test-first; edge-vs-bug; sequential/power/pooling concepts). Keep any retained illustration inside a `<example>` block.

- [ ] **Step 5: Edit each offending line** using the Edit tool until the grep is empty. Preserve all domain-GENERAL discipline; only neutralize domain-SPECIFIC content. Re-run `node --test` after each file until the leakage test is green.

- [ ] **Step 6: Sanity-check length** — each genericized protocol should stay within ~15% of its source length (proof the discipline was carried forward, not thinned): `wc -l assets/protocols/*.md`.

- [ ] **Step 7: Commit** — "feat: genericize discipline suite (5 protocols) + leakage test".

---

### Task 4: BOOT.md bridge + zeroed 3-tier memory scaffold

**Files:**
- Create: `assets/BOOT.md`, `assets/memory/{LEDGER,STATE,INDEX,REGISTER}.md`
- Modify: `test/integrity.test.js` (add BOOT + memory checks)

**Interfaces:**
- Produces: `assets/BOOT.md` (paths relative to its own location: `engine/…`, `protocols/…`, `memory/…`), `assets/memory/*` (zeroed). Consumed by init + integrity.

- [ ] **Step 1: Add failing integrity assertions** to `test/integrity.test.js`:
```js
test('BOOT.md present and its internal pointers resolve', () => {
  const boot = path.join(ASSETS_ROOT, 'BOOT.md');   // ASSETS_ROOT = assets/
  assert.ok(fs.existsSync(boot));
  const txt = fs.readFileSync(boot, 'utf8');
  const refs = [...txt.matchAll(/`((?:engine|protocols|memory)\/[^`\s]+\.md)`/g)].map(m => m[1]);
  assert.ok(refs.length >= 5, `BOOT should point at engine/protocols/memory files, got ${refs.length}`);
  for (const ref of new Set(refs)) {
    assert.ok(fs.existsSync(path.join(ASSETS_ROOT, ref)), `BOOT dangling ref: ${ref}`);
  }
});
test('4 zeroed memory files present', () => {
  for (const f of ['LEDGER.md','STATE.md','INDEX.md','REGISTER.md']) {
    assert.ok(fs.existsSync(path.join(ASSETS_ROOT, 'memory', f)), `missing memory/${f}`);
  }
});
```
(Add `const ASSETS_ROOT = path.join(__dirname, '..', 'assets');` near the top.)

- [ ] **Step 2: Run to verify it fails** — `node --test` → new assertions FAIL.

- [ ] **Step 3: Author `assets/BOOT.md`** — the single agent-entry file. Content (full):
```markdown
# Depth Engine — BOOT

**You are an AI coding agent. Read this file fully, then walk the Depth Engine on the user's goal.**

The Depth Engine turns a loose **seed** (a sentence, a link, a rough goal) into one of three honest terminals: a **build-ready scaffold**, a **decision**, or a **reasoned refusal** — by walking 12 stages (E0–E11) under 5 always-on laws (L-A–L-E). Its value is rigor: cross-family adversarial checks, failure-scar prevention, evidence over assertion, persistent memory, and the spine to refuse.

## Do this, in order

1. **Load the 5 laws** and keep them active across every stage:
   `engine/laws/L-A_adversarial_posture.md`, `engine/laws/L-B_3tier_memory.md`, `engine/laws/L-C_cadence_cold_reverify.md`, `engine/laws/L-D_freeze.md`, `engine/laws/L-E_evidence_over_assertion.md`.
2. **Load the orchestrator** `engine/INITIATOR.md` and follow its ordered walk **E0 → E11**, respecting every hard gate. Load each stage file `engine/stages/E0_intake.md … E11_terminal_state.md` as you reach it.
3. **Your run memory lives in `memory/`** — `memory/LEDGER.md` (append-only record), `memory/STATE.md` (resume snapshot), `memory/INDEX.md` (ledger table of contents), `memory/REGISTER.md` (coverage register). Initialize and append per **L-B**. Trust these files and `git log` over your own recollection.
4. **The discipline suite is in `protocols/`** — `AI_OPERATING_DISCIPLINE.md`, `PROMPT_ENGINEERING.md`, `TDD_AND_CODE_INTEGRITY.md`, `CONTEXT_HYGIENE.md`, `VALIDATION_METHODOLOGY.md`. These govern how you research, prompt, and build; E10 renders them forward into whatever the engine emits.
5. **Cross-family checks (L-A) are mandatory.** For every load-bearing verdict, get an overturn attempt from a **different model family** — e.g. run `codex exec` (OpenAI Codex CLI) if you are a Claude-family agent, or vice versa. Never let the author be the sole grader.

## Reference mapping (this distribution)

- Where an engine file points to **`GOVERNANCE §2`** (the "8-line PROMPT-QUALITY GATE"), in this distribution that gate is **`protocols/PROMPT_ENGINEERING.md`** — every prompt you emit must clear its 8 checkable clauses.
- The **"Kalshi referent" / "Origin/rationale"** sections inside engine files are **provenance** — they record which proven system each protocol generalizes. They are context, not instructions. The engine itself is domain-agnostic.
- Engine files also carry top-of-file build-provenance HTML comments (a quality-gate checklist each file cleared). They are evidence of rigor, not tasks for you.

## Start

Ask the user for their **seed** if they have not given one, then begin at **E0 (Intake)**. Set project-type (`build` or `decision`) at **E1** — it determines how E8 declares convergence.

## Honesty

A clean walk proves the **process** ran — not that the output reached expert parity. Depth is earned by the research you actually do on the user's real domain and data. **Never claim parity from this scaffold alone.**
```

- [ ] **Step 4: Author the 4 zeroed memory files.** `assets/memory/LEDGER.md`:
```markdown
# Ledger (Tier 1) — append-only

> The immutable record of this run. Append one entry per action/finding/decision/null-result. Never edit or delete a prior entry (L-B). Entry format:
>
> ```
> L-NNNN
> Date: YYYY-MM-DD
> Type: action | finding | decision | null-result | correction
> <content that lets a fresh context reconstruct what happened and why>
> ```

<!-- Empty. The engine writes L-0001 at E0. -->
```
`assets/memory/STATE.md`:
```markdown
# State (Tier 2) — resume snapshot

> The single mutable "where am I" file. Overwrite in place at each compaction/resume (L-B). Keep it lean — the full record lives in the Ledger.

### Current phase & task
_not started_

### Key conclusions & decisions in force
_none yet_

### Open threads & next actions
_none yet_

### Ledger status
Highest ID in Ledger: (none)

### Blocked items
_none_
```
`assets/memory/INDEX.md`:
```markdown
# Index (Tier 3a) — Ledger table of contents

> One row per Ledger entry, appended as the Ledger grows (L-B).

| ID | Date | Type | Summary |
|----|------|------|---------|
```
`assets/memory/REGISTER.md`:
```markdown
# Coverage Register (Tier 3b) — exhaustiveness guarantee

> One row per tracked item (question / task / risk). Status drives convergence (E8). Append + update status; never delete (L-B).

| Item | Type | Status | Evidence (Ledger ID) | Notes |
|------|------|--------|----------------------|-------|
```

- [ ] **Step 5: Run integrity test to verify pass** — `node --test` → all integrity green.

- [ ] **Step 6: Commit** — "feat: BOOT.md bridge + zeroed 3-tier memory scaffold".

---

### Task 5: init core logic (copy planner + executor)

**Files:**
- Create: `src/files.js`, `src/init.js`, `test/init.test.js`
- Test: `test/init.test.js`

**Interfaces:**
- Consumes: `assets/` (Tasks 2–4).
- Produces: `src/files.js` → `{ ASSETS_DIR, listAssetFiles(): string[], isMemoryFile(rel): boolean }`; `src/init.js` → `init(targetDir: string, opts?: {force?: boolean}): { created, unchanged, skipped, updated: string[] }` and `planFile(srcAbs, destAbs, rel, force): 'create'|'unchanged'|'skip-exists'|'update'`.

- [ ] **Step 1: Write the failing init test** — `test/init.test.js`:
```js
const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { init } = require('../src/init');

function tmp() { return fs.mkdtempSync(path.join(os.tmpdir(), 'de-')); }
const DE = (d) => path.join(d, 'depth-engine');

test('init creates the full payload', () => {
  const d = tmp();
  const r = init(d);
  assert.ok(fs.existsSync(path.join(DE(d), 'engine', 'INITIATOR.md')));
  assert.strictEqual(fs.readdirSync(path.join(DE(d), 'engine', 'stages')).length, 12);
  assert.strictEqual(fs.readdirSync(path.join(DE(d), 'engine', 'laws')).length, 5);
  assert.strictEqual(fs.readdirSync(path.join(DE(d), 'protocols')).length, 5);
  assert.ok(fs.existsSync(path.join(DE(d), 'BOOT.md')));
  assert.strictEqual(fs.readdirSync(path.join(DE(d), 'memory')).length, 4);
  assert.ok(r.created.length > 25);
});

test('init is idempotent (second run creates nothing)', () => {
  const d = tmp();
  init(d);
  const r2 = init(d);
  assert.strictEqual(r2.created.length, 0);
  assert.ok(r2.unchanged.length > 25);
});

test('memory files are never overwritten, even with --force', () => {
  const d = tmp();
  init(d);
  const state = path.join(DE(d), 'memory', 'STATE.md');
  fs.writeFileSync(state, 'USER RUN DATA');
  init(d, { force: true });
  assert.strictEqual(fs.readFileSync(state, 'utf8'), 'USER RUN DATA');
});

test('framework file: skipped on diff without force, refreshed with force', () => {
  const d = tmp();
  init(d);
  const boot = path.join(DE(d), 'BOOT.md');
  const original = fs.readFileSync(boot, 'utf8');
  fs.writeFileSync(boot, 'HAND EDIT');
  const r1 = init(d);                       // no force
  assert.strictEqual(fs.readFileSync(boot, 'utf8'), 'HAND EDIT');
  assert.ok(r1.skipped.includes('BOOT.md'));
  const r2 = init(d, { force: true });      // force
  assert.strictEqual(fs.readFileSync(boot, 'utf8'), original);
  assert.ok(r2.updated.includes('BOOT.md'));
});

test('init touches only depth-engine/, not sibling files', () => {
  const d = tmp();
  fs.writeFileSync(path.join(d, 'MY_APP.txt'), 'keep me');
  init(d);
  assert.strictEqual(fs.readFileSync(path.join(d, 'MY_APP.txt'), 'utf8'), 'keep me');
});
```

- [ ] **Step 2: Run to verify it fails** — `node --test` → init tests FAIL ("Cannot find module '../src/init'").

- [ ] **Step 3: Implement `src/files.js`:**
```js
const fs = require('node:fs');
const path = require('node:path');

const ASSETS_DIR = path.join(__dirname, '..', 'assets');

function listAssetFiles() {
  const out = [];
  (function walk(dir, rel) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const abs = path.join(dir, entry.name);
      const relPath = rel ? path.join(rel, entry.name) : entry.name;
      if (entry.isDirectory()) walk(abs, relPath);
      else out.push(relPath);
    }
  })(ASSETS_DIR, '');
  return out.sort();
}

function isMemoryFile(relPath) {
  return relPath.split(path.sep)[0] === 'memory';
}

module.exports = { ASSETS_DIR, listAssetFiles, isMemoryFile };
```

- [ ] **Step 4: Implement `src/init.js`:**
```js
const fs = require('node:fs');
const path = require('node:path');
const { ASSETS_DIR, listAssetFiles, isMemoryFile } = require('./files');

function planFile(srcAbs, destAbs, relPath, force) {
  if (!fs.existsSync(destAbs)) return 'create';
  if (fs.readFileSync(srcAbs).equals(fs.readFileSync(destAbs))) return 'unchanged';
  if (isMemoryFile(relPath)) return 'skip-exists';   // memory is sacrosanct
  return force ? 'update' : 'skip-exists';
}

function init(targetDir, { force = false } = {}) {
  const rootDest = path.join(targetDir, 'depth-engine');
  const results = { created: [], unchanged: [], skipped: [], updated: [] };
  for (const relPath of listAssetFiles()) {
    const srcAbs = path.join(ASSETS_DIR, relPath);
    const destAbs = path.join(rootDest, relPath);
    const action = planFile(srcAbs, destAbs, relPath, force);
    if (action === 'create' || action === 'update') {
      fs.mkdirSync(path.dirname(destAbs), { recursive: true });
      fs.copyFileSync(srcAbs, destAbs);
    }
    ({ create: results.created, unchanged: results.unchanged, 'skip-exists': results.skipped, update: results.updated })[action].push(relPath);
  }
  return results;
}

module.exports = { init, planFile };
```

- [ ] **Step 5: Run tests to verify pass** — `node --test` → all init tests green.

- [ ] **Step 6: Commit** — "feat: init core (non-destructive, idempotent, memory-protected)".

---

### Task 6: CLI wiring (init command + summary output)

**Files:**
- Modify: `src/cli.js`
- Test: `test/cli.test.js` (new)

**Interfaces:**
- Consumes: `init()` from Task 5.
- Produces: full `run(argv)` handling `init`, `--force`, `--dir <path>`, `--help`, `--version`.

- [ ] **Step 1: Write the failing CLI test** — `test/cli.test.js`:
```js
const { test } = require('node:test');
const assert = require('node:assert');
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const BIN = path.join(__dirname, '..', 'bin', 'depth-engine.js');
function tmp() { return fs.mkdtempSync(path.join(os.tmpdir(), 'de-cli-')); }

test('CLI init --dir drops payload and prints summary, exit 0', () => {
  const d = tmp();
  const out = execFileSync('node', [BIN, 'init', '--dir', d], { encoding: 'utf8' });
  assert.ok(fs.existsSync(path.join(d, 'depth-engine', 'BOOT.md')));
  assert.match(out, /created/i);
  assert.match(out, /BOOT\.md|depth-engine\/BOOT\.md|Read/); // next-step hint
});

test('CLI --help exits 0 and mentions init', () => {
  const out = execFileSync('node', [BIN, '--help'], { encoding: 'utf8' });
  assert.match(out, /init/);
});
```

- [ ] **Step 2: Run to verify it fails** — `node --test test/cli.test.js` → FAIL (no summary printed / init not wired).

- [ ] **Step 3: Rewrite `src/cli.js`** (full):
```js
const path = require('node:path');
const pkg = require('../package.json');
const { init } = require('./init');

const HELP = `depth-engine — scaffold the Depth Engine into your project.

Usage:
  depth-engine init [--dir <path>] [--force]

Options:
  --dir <path>   Target project directory (default: current directory)
  --force        Refresh framework files that were hand-edited (never touches memory/)
  --help, -h     Show this help
  --version, -v  Show version

After init, tell your AI agent:  "Read depth-engine/BOOT.md and follow it."`;

function run(argv) {
  const args = argv.slice(2);
  if (args.includes('--version') || args.includes('-v')) { console.log(pkg.version); return 0; }
  if (args.length === 0 || args.includes('--help') || args.includes('-h')) { console.log(HELP); return 0; }
  if (args[0] !== 'init') {
    console.error(`depth-engine: unknown command '${args[0]}'. Try 'depth-engine init' or '--help'.`);
    return 1;
  }
  const force = args.includes('--force');
  const di = args.indexOf('--dir');
  const targetDir = di >= 0 && args[di + 1] ? path.resolve(args[di + 1]) : process.cwd();
  try {
    const r = init(targetDir, { force });
    const dest = path.join(targetDir, 'depth-engine');
    console.log(`depth-engine: scaffolded into ${dest}`);
    console.log(`  created: ${r.created.length}   unchanged: ${r.unchanged.length}   skipped: ${r.skipped.length}   updated: ${r.updated.length}`);
    if (r.skipped.length) console.log(`  (skipped ${r.skipped.length} existing file(s); re-run with --force to refresh framework files — memory is always preserved)`);
    console.log(`\nNext: open your AI coding agent in this project and say:\n  "Read depth-engine/BOOT.md and follow it."`);
    return 0;
  } catch (e) {
    console.error(`depth-engine init failed: ${e.message}`);
    return 1;
  }
}

module.exports = { run };
```

- [ ] **Step 4: Run tests to verify pass** — `node --test` → all green (smoke + integrity + leakage + init + cli).

- [ ] **Step 5: Commit** — "feat: wire init command with summary + next-step hint".

---

### Task 7: CI workflow

**Files:**
- Create: `.github/workflows/ci.yml`

- [ ] **Step 1: Create `.github/workflows/ci.yml`:**
```yaml
name: CI
on:
  push:
    branches: [ main ]
  pull_request:
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci || npm install --no-package-lock
      - run: npm test
```

- [ ] **Step 2: Verify locally** — `npm test` runs clean (CI mirrors this).

- [ ] **Step 3: Commit** — "ci: run node --test (integrity + leakage gate) on push/PR".

---

### Task 8: Documentation

**Files:**
- Create: `README.md`, `docs/CONCEPTS.md`, `docs/GETTING-STARTED.md`, `docs/USAGE.md`, `docs/EXAMPLES.md`, `docs/FAQ.md`, `CONTRIBUTING.md`, `CHANGELOG.md`

- [ ] **Step 1: Write `README.md`** — what / why / prerequisites (an AI coding agent; Node ≥18 for the installer) / install (`npx depth-engine init` or clone+`node bin/depth-engine.js init` since private) / **60-second quickstart** (init → "Read depth-engine/BOOT.md and follow it" → give your seed) / a short "what you get" file map / the **honesty stamp verbatim** / link to docs. Keep it beginner-first, no jargon dumps.

- [ ] **Step 2: Write `docs/CONCEPTS.md`** — the 12 stages (E0–E11) each in one plain-language sentence; the 5 laws (L-A–L-E) each in one sentence; the 2 modes (build = total-aspect-coverage; decision = decision-saturation); the 3 terminals (build-ready / decision / refusal). A newcomer should grasp the shape without reading engine internals.

- [ ] **Step 3: Write `docs/GETTING-STARTED.md`** — a full worked walkthrough on a tiny sample seed (e.g. "help me decide: SQLite vs Postgres for a hobby app" — decision mode, non-domain-loaded). Show: init, the boot instruction, what E0/E1 produce, the first memory writes, where the cross-family check happens, and what a terminal looks like. This IS the documented smoke walk.

- [ ] **Step 4: Write `docs/USAGE.md`** — driving it with (a) **Claude Code** (open project, "Read depth-engine/BOOT.md and follow it"), (b) the **generic/any-agent** path (same instruction, any agent), (c) **Codex CLI** as the cross-family L-A verifier (`codex exec` for overturn attempts). Note the resume ritual (point the agent back at BOOT.md + memory/STATE.md).

- [ ] **Step 5: Write `docs/EXAMPLES.md`** — one **build** example (synthetic, e.g. "a CLI todo app") and one **decision** example (synthetic, e.g. "monorepo vs polyrepo"), each showing the end-to-end SHAPE (seed → stages touched → terminal), explicitly labeled synthetic/illustrative.

- [ ] **Step 6: Write `docs/FAQ.md`** — honest Q&A: "What does it actually do?" / "What does it NOT guarantee?" (plumbing-vs-parity, verbatim stamp) / "Why are there 'Kalshi referent' sections in the engine files?" (provenance, permitted) / "Do I need two AI models?" (L-A cross-family — recommended; Codex CLI documented) / "Is it safe to re-run init?" (yes; non-destructive, memory-protected) / "Can I edit the engine files?" (they're frozen; additive-only if you must).

- [ ] **Step 7: Write `CONTRIBUTING.md`** — how to add/modify a stage/law using `engine/_TEMPLATE.md`; the additive-only rule; run `npm test` (leakage + integrity must stay green); the leakage rule.

- [ ] **Step 8: Write `CHANGELOG.md`** — Keep-a-Changelog format; `## [0.1.0] - 2026-06-30` initial release entry summarizing the bundle.

- [ ] **Step 9: Commit** — "docs: README + CONCEPTS/GETTING-STARTED/USAGE/EXAMPLES/FAQ + CONTRIBUTING + CHANGELOG".

---

### Task 9: Verify end-to-end + cross-check (codex)

**Files:** none (verification task); may fix findings across `src/**`, `assets/**`, docs.

- [ ] **Step 1: Full test run** — `npm test`; expected: all suites green (smoke, integrity, leakage, init, cli). Paste the summary line.

- [ ] **Step 2: Real pack + install dry run** — prove install→init works without the repo:
```bash
cd /root/depth-engine && npm pack
mkdir -p /tmp/de-consumer && cd /tmp/de-consumer && npm init -y >/dev/null
npm install /root/depth-engine/depth-engine-0.1.0.tgz
npx depth-engine init
test -f depth-engine/BOOT.md && echo "BOOT PRESENT" && ls depth-engine
```
Expected: init prints the summary + next-step; `depth-engine/BOOT.md` + engine + protocols + memory present.

- [ ] **Step 3: Idempotency + memory-protection on the real install** — re-run `npx depth-engine init`; edit `depth-engine/memory/STATE.md`; re-run with `--force`; confirm STATE.md preserved.

- [ ] **Step 4: Leakage re-grep on the INSTALLED copy** (not just source):
```bash
grep -rniE 'kalshi|becker|backtest|taker|fees\.py' /tmp/de-consumer/depth-engine/protocols && echo "LEAK!" || echo "protocols clean"
```

- [ ] **Step 5: gstack:codex cross-check** — run `/codex` review over `src/**`, `bin/**`, `test/**`, and the init/leakage logic. Ask it specifically to try to break: the memory-protection guarantee, the idempotency claim, path handling (`--dir` with spaces/relative), and the leakage regex (false-negatives). Record findings.

- [ ] **Step 6: Fix any real findings** via TDD (failing test first), re-run `npm test`. Verify codex findings in the code before acting (do not relay unverified).

- [ ] **Step 7: Commit** — "test: verify install→init dry run + codex cross-check fixes".

---

### Task 10: Ship (tag v0.1.0 + handoff)

**Files:** Modify `CHANGELOG.md` if needed; create `HANDOFF.md`.

- [ ] **Step 1: Write `HANDOFF.md`** — the honest state: what's done (the 90%+), what's operator-gated (running `npm publish` after flipping `private:false` or targeting a private registry; pushing to a private remote; deciding public-vs-private long-term), and the plumbing-vs-parity reminder.

- [ ] **Step 2: Final `npm test`** green + `npm pack` succeeds + clean `git status`.

- [ ] **Step 3: Tag** — `git tag -a v0.1.0 -m "Depth Engine v0.1.0 — initial private distribution"`.

- [ ] **Step 4: Report** — summarize the deliverable, the verification evidence, and the exact operator publish steps.

---

## Self-Review

**Spec coverage:** §1–§10 each map to tasks — packaging (T1), engine verbatim (T2), genericized suite + leakage (T3), BOOT + memory (T4), init non-destructive/idempotent (T5–T6), CI (T7), docs incl. honesty (T8), verify + codex (T9), ship (T10). Manual smoke walk = GETTING-STARTED (T8 S3). No gaps.

**Placeholder scan:** JS tasks carry full code + full tests. Content tasks (T3 genericization, T8 docs) specify exact source files, exact known leakage targets, and the test gate that must go green — the only correct way to spec content-cleaning without transcribing 850 lines. No "TODO/handle-edge-cases" left.

**Type consistency:** `init(targetDir, {force})` and its `{created,unchanged,skipped,updated}` result shape are consistent across T5 (impl) and T6 (cli). `planFile` return set `create|unchanged|skip-exists|update` maps 1:1 to the result buckets. `listAssetFiles`/`isMemoryFile` signatures consistent T5↔usage. `run(argv):number` consistent T1↔T6.
