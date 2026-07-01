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
  assert.ok(r.created.length > 25, `expected >25 created, got ${r.created.length}`);
});

test('init is idempotent (second run creates/updates/skips nothing)', () => {
  const d = tmp();
  init(d);
  const r2 = init(d);
  assert.strictEqual(r2.created.length, 0);
  assert.strictEqual(r2.updated.length, 0);
  assert.strictEqual(r2.skipped.length, 0);
  assert.ok(r2.unchanged.length > 25);
});

test('a symlinked framework destination is never written through (memory stays safe)', () => {
  const d = tmp();
  init(d);
  const boot = path.join(DE(d), 'BOOT.md');
  const state = path.join(DE(d), 'memory', 'STATE.md');
  fs.writeFileSync(state, 'PROTECTED RUN STATE');
  fs.rmSync(boot);
  fs.symlinkSync(state, boot); // BOOT.md -> memory/STATE.md
  const r = init(d, { force: true });
  assert.strictEqual(fs.readFileSync(state, 'utf8'), 'PROTECTED RUN STATE');
  assert.ok(fs.lstatSync(boot).isSymbolicLink(), 'symlink should be left intact');
  assert.ok(r.skipped.includes('BOOT.md'));
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
  const r1 = init(d);
  assert.strictEqual(fs.readFileSync(boot, 'utf8'), 'HAND EDIT');
  assert.ok(r1.skipped.includes('BOOT.md'));
  const r2 = init(d, { force: true });
  assert.strictEqual(fs.readFileSync(boot, 'utf8'), original);
  assert.ok(r2.updated.includes('BOOT.md'));
});

test('init touches only depth-engine/, not sibling files', () => {
  const d = tmp();
  fs.writeFileSync(path.join(d, 'MY_APP.txt'), 'keep me');
  init(d);
  assert.strictEqual(fs.readFileSync(path.join(d, 'MY_APP.txt'), 'utf8'), 'keep me');
});
