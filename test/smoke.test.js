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
