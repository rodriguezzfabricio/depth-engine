const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const ASSETS = path.join(__dirname, '..', 'assets');
const PROTO = path.join(ASSETS, 'protocols');
const ENGINE = path.join(ASSETS, 'engine');

// Hard-domain tokens that must NEVER appear in a genericized discipline protocol
// (or in BOOT / memory). Broadened after a cross-family review to cover trading
// and e-commerce vocabulary — but deliberately excludes over-generic words that
// appear in legitimate generic examples (payment, cart, checkout, shipping).
const DOMAIN = /kalshi|becker|backtest|shopify|subreddit|instagram|fees\.py|e3_q0251|¢|ceil\(0\.0|\bbuy-no\b|taker\/maker|maker\/taker|maker-taker|e-?commerce|\btrading\b|prediction market|order.?book|\bmarket maker\b|storefront|merchant|\bSKU\b|\bPDP\b|limit order/i;

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

// Blank out the contents of every CLOSED <example>...</example> span, preserving
// line count so file:line reporting stays accurate. A term is exempt ONLY if it
// sits inside a properly-closed block. Content beside inline tags on the same
// line, and anything following a dangling (unclosed) <example>, is NOT exempt —
// closing the same-line and unbalanced-tag bypasses.
function blankExamples(text) {
  return text.replace(/<example>[\s\S]*?<\/example>/g, (m) => m.replace(/[^\n]/g, ' '));
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

test('engine e-commerce/fixture terms appear only inside closed <example> blocks', () => {
  for (const file of walk(ENGINE)) {
    const scrubbed = blankExamples(fs.readFileSync(file, 'utf8'));
    scrubbed.split('\n').forEach((l, i) => {
      assert.ok(!ECOM.test(l), `${path.relative(ASSETS, file)}:${i + 1} e-commerce leak outside <example>: ${l.trim()}`);
    });
  }
});

test('blankExamples resists same-line and unbalanced-tag bypasses', () => {
  // content beside an inline empty block stays visible (same-line bypass closed)
  assert.match(blankExamples('real checkout leak <example></example>'), /checkout/);
  assert.match(blankExamples('<example></example> real cart leak'), /cart/);
  // a dangling <example> (no close) exempts nothing that follows it
  assert.match(blankExamples('intro <example> then checkout with no close'), /checkout/);
  // a genuine multi-line block IS blanked, surrounding text preserved, line count intact
  const block = 'before\n<example>\ncheckout inside\n</example>\nafter';
  const scrubbed = blankExamples(block);
  assert.doesNotMatch(scrubbed, /checkout/);
  assert.match(scrubbed, /before/);
  assert.match(scrubbed, /after/);
  assert.strictEqual(block.split('\n').length, scrubbed.split('\n').length);
});
