const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const BIN = path.join(__dirname, '..', 'bin', 'depth-engine.js');

function tmp() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'de-start-'));
}

test('start creates an isolated run with fresh memory and a run boot file', () => {
  const project = tmp();
  const out = execFileSync(
    'node',
    [BIN, 'start', '--dir', project, '--name', 'Large UI Refactor'],
    { encoding: 'utf8' },
  );

  const match = out.match(/Run boot:\s+(.+\/BOOT\.md)/);
  assert.ok(match, `expected run boot path in output, got:\n${out}`);

  const runBoot = match[1].trim();
  const runDir = path.dirname(runBoot);
  assert.match(path.basename(runDir), /^\d{8}-\d{6}-large-ui-refactor$/);
  assert.ok(fs.existsSync(path.join(project, 'depth-engine', 'BOOT.md')));
  assert.ok(fs.existsSync(path.join(runDir, 'artifacts')));
  assert.deepStrictEqual(
    fs.readdirSync(path.join(runDir, 'memory')).sort(),
    ['INDEX.md', 'LEDGER.md', 'REGISTER.md', 'STATE.md'],
  );
  assert.match(fs.readFileSync(runBoot, 'utf8'), /Do not read from or write to.*other run/s);
});

test('separate starts never reuse memory, even when their names and timestamps collide', () => {
  const project = tmp();
  const env = { ...process.env, DEPTH_ENGINE_TEST_NOW: '2026-08-25T12:34:56.000Z' };

  const first = execFileSync(
    'node',
    [BIN, 'start', '--dir', project, '--name', 'Refactor'],
    { encoding: 'utf8', env },
  );
  const firstBoot = first.match(/Run boot:\s+(.+\/BOOT\.md)/)[1].trim();
  const firstLedger = path.join(path.dirname(firstBoot), 'memory', 'LEDGER.md');
  fs.appendFileSync(firstLedger, '\nL-0001\nold unrelated memory\n');

  const second = execFileSync(
    'node',
    [BIN, 'start', '--dir', project, '--name', 'Refactor'],
    { encoding: 'utf8', env },
  );
  const secondBoot = second.match(/Run boot:\s+(.+\/BOOT\.md)/)[1].trim();
  const secondLedger = path.join(path.dirname(secondBoot), 'memory', 'LEDGER.md');

  assert.notStrictEqual(firstBoot, secondBoot);
  assert.match(path.dirname(secondBoot), /-refactor-2$/);
  assert.doesNotMatch(fs.readFileSync(secondLedger, 'utf8'), /old unrelated memory/);
});

test('start sanitizes the run name so it cannot escape the runs directory', () => {
  const project = tmp();
  const out = execFileSync(
    'node',
    [BIN, 'start', '--dir', project, '--name', '../../Danger Zone'],
    { encoding: 'utf8' },
  );
  const runBoot = out.match(/Run boot:\s+(.+\/BOOT\.md)/)[1].trim();
  const runsDir = path.join(project, 'depth-engine', 'runs');

  assert.ok(path.dirname(runBoot).startsWith(`${runsDir}${path.sep}`));
  assert.match(path.basename(path.dirname(runBoot)), /^\d{8}-\d{6}-danger-zone$/);
});
