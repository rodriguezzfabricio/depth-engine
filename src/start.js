const fs = require('node:fs');
const path = require('node:path');
const { init } = require('./init');
const { ASSETS_DIR } = require('./files');

function slugifyRunName(name) {
  const slug = String(name || '')
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48)
    .replace(/-+$/g, '');
  return slug || 'run';
}

function timestampFor(date) {
  return date.toISOString().replace(/[-:]/g, '').replace('T', '-').slice(0, 15);
}

function uniqueRunDir(runsDir, baseId) {
  let runId = baseId;
  let suffix = 2;
  while (fs.existsSync(path.join(runsDir, runId))) {
    runId = `${baseId}-${suffix}`;
    suffix += 1;
  }
  return { runId, runDir: path.join(runsDir, runId) };
}

function start(targetDir, { name = 'run', now = new Date() } = {}) {
  const projectDir = path.resolve(targetDir);
  init(projectDir);

  const runsDir = path.join(projectDir, 'depth-engine', 'runs');
  const baseId = `${timestampFor(now)}-${slugifyRunName(name)}`;
  const { runId, runDir } = uniqueRunDir(runsDir, baseId);
  const memoryDir = path.join(runDir, 'memory');
  const artifactsDir = path.join(runDir, 'artifacts');

  fs.mkdirSync(memoryDir, { recursive: true });
  fs.mkdirSync(artifactsDir, { recursive: true });

  for (const file of ['INDEX.md', 'LEDGER.md', 'REGISTER.md', 'STATE.md']) {
    fs.copyFileSync(path.join(ASSETS_DIR, 'memory', file), path.join(memoryDir, file));
  }

  const runBoot = path.join(runDir, 'BOOT.md');
  const frameworkBoot = path.join(projectDir, 'depth-engine', 'BOOT.md');
  fs.writeFileSync(
    runBoot,
    `# Depth Engine — Isolated Run\n\n` +
      `Run ID: \`${runId}\`\n\n` +
      `1. Read \`${frameworkBoot}\` completely and follow it.\n` +
      `2. This run's memory is \`${memoryDir}\`. Treat it as the L-B equivalent of \`depth-engine/memory/\`.\n` +
      `3. Write this run's stage artifacts to \`${artifactsDir}\`. Treat it as the equivalent of \`work/<session-id>/\`.\n` +
      `4. Do not read from or write to the root scaffold memory, \`depth-engine/work/\`, or any other run unless the operator explicitly asks for a comparison.\n` +
      `5. Create this run's immutable \`seed.md\` inside \`${artifactsDir}\` at E0.\n\n` +
      `The path rules in this file override generic memory and work paths in the framework BOOT for this run.\n`,
    'utf8',
  );

  return { runId, runDir, runBoot, memoryDir, artifactsDir };
}

module.exports = { start, slugifyRunName, timestampFor };
