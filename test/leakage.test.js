const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const ASSETS = path.join(__dirname, '..', 'assets');
const PROTO = path.join(ASSETS, 'protocols');
const ENGINE = path.join(ASSETS, 'engine');

// Hard-domain tokens that must NEVER appear in a genericized discipline protocol.
// Chosen to have zero false-positive risk in generic prose (no bare "maker"/"checkout").
const DOMAIN = /kalshi|becker|backtest|shopify|subreddit|instagram|fees\.py|e3_q0251|¢|ceil\(0\.0|\bbuy-no\b|taker\/maker|maker\/taker|e-?commerce/i;

// The mission's e-commerce/fixture grep for the engine: allowed ONLY inside <example> blocks.
const ECOM = /e-?commerce|instagram|subreddit|mobile-first|checkout|shopify|\bcart\b|coffee/i;

const PROTOCOLS = [
  'AI_OPERATING_DISCIPLINE',
  'PROMPT_ENGINEERING',
  'TDD_AND_CODE_INTEGRITY',
  'CONTEXT_HYGIENE',
  'VALIDATION_METHODOLOGY',
];

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

// Line numbers (1-based) that fall inside an <example>...</example> region.
function exampleLines(text) {
  const inside = new Set();
  let depth = 0;
  text.split('\n').forEach((l, i) => {
    const opens = (l.match(/<example>/g) || []).length;
    const closes = (l.match(/<\/example>/g) || []).length;
    if (depth > 0) inside.add(i + 1);
    depth += opens;
    if (depth > 0) inside.add(i + 1);
    depth -= closes;
  });
  return inside;
}

test('all 5 protocols present and free of domain leakage', () => {
  for (const name of PROTOCOLS) {
    const file = path.join(PROTO, `${name}.md`);
    assert.ok(fs.existsSync(file), `missing protocol ${name}.md`);
    fs.readFileSync(file, 'utf8').split('\n').forEach((l, i) => {
      assert.ok(!DOMAIN.test(l), `${name}.md:${i + 1} domain leakage: ${l.trim()}`);
    });
  }
});

test('non-engine shipped assets (BOOT, memory) have zero domain leakage', () => {
  const files = [path.join(ASSETS, 'BOOT.md'), ...walk(path.join(ASSETS, 'memory'))];
  for (const file of files) {
    fs.readFileSync(file, 'utf8').split('\n').forEach((l, i) => {
      assert.ok(!DOMAIN.test(l), `${path.relative(ASSETS, file)}:${i + 1} domain leakage: ${l.trim()}`);
    });
  }
});

test('engine e-commerce/fixture terms appear only inside <example> blocks', () => {
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
