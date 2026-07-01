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
  assert.match(out, /BOOT\.md/); // next-step hint names the boot file
});

test('CLI --help exits 0 and mentions init', () => {
  const out = execFileSync('node', [BIN, '--help'], { encoding: 'utf8' });
  assert.match(out, /init/);
});

test('CLI --version prints the package version', () => {
  const out = execFileSync('node', [BIN, '--version'], { encoding: 'utf8' }).trim();
  assert.match(out, /^\d+\.\d+\.\d+$/);
});

test('CLI unknown command exits non-zero', () => {
  assert.throws(() => execFileSync('node', [BIN, 'frobnicate'], { encoding: 'utf8', stdio: 'pipe' }));
});

test('CLI --dir with missing value errors (does not silently target cwd)', () => {
  assert.throws(() => execFileSync('node', [BIN, 'init', '--dir'], { encoding: 'utf8', stdio: 'pipe' }));
});

test('CLI --dir --force (flag mistaken as value) errors, no "--force" dir created', () => {
  assert.throws(() => execFileSync('node', [BIN, 'init', '--dir', '--force'], { encoding: 'utf8', stdio: 'pipe' }));
});

test('CLI --dir=<path> form is honored', () => {
  const d = tmp();
  execFileSync('node', [BIN, 'init', `--dir=${d}`], { encoding: 'utf8' });
  assert.ok(fs.existsSync(path.join(d, 'depth-engine', 'BOOT.md')));
});
