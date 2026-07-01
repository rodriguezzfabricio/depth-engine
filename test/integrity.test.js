const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const ASSETS_ROOT = path.join(__dirname, '..', 'assets');
const ENGINE = path.join(ASSETS_ROOT, 'engine');

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
  for (const id of ['A', 'B', 'C', 'D', 'E']) {
    assert.ok(laws.some(f => f.startsWith(`L-${id}_`)), `missing L-${id}`);
  }
});

test('INITIATOR, README, _TEMPLATE present', () => {
  for (const f of ['INITIATOR.md', 'README.md', '_TEMPLATE.md']) {
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
