const path = require('node:path');
const pkg = require('../package.json');
const { init } = require('./init');
const { start } = require('./start');

const HELP = `depth-engine — scaffold or start an isolated Depth Engine run.

Usage:
  depth-engine init [--dir <path>] [--force]
  depth-engine start [--dir <path>] [--name <run-name>]

Options:
  --dir <path>   Target project directory (default: current directory)
  --force        Refresh framework files that were hand-edited (never touches memory/)
  --name <name>  Human-readable name for a new isolated run
  --help, -h     Show this help
  --version, -v  Show version

After start, tell your AI coding agent to read the printed run-specific BOOT.md.`;

function optionValue(args, name) {
  const eq = args.find((a) => a.startsWith(`${name}=`));
  const index = args.indexOf(name);
  if (eq) {
    const value = eq.slice(name.length + 1);
    if (!value) throw new Error(`${name} requires a value`);
    return value;
  }
  if (index >= 0) {
    const value = args[index + 1];
    if (!value || value.startsWith('-')) throw new Error(`${name} requires a value`);
    return value;
  }
  return undefined;
}

function run(argv) {
  const args = argv.slice(2);
  if (args.includes('--version') || args.includes('-v')) {
    console.log(pkg.version);
    return 0;
  }
  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    console.log(HELP);
    return 0;
  }
  const command = args[0];
  if (command !== 'init' && command !== 'start') {
    console.error(`depth-engine: unknown command '${command}'. Try 'depth-engine init', 'depth-engine start', or '--help'.`);
    return 1;
  }

  const force = args.includes('--force');
  let targetDir = process.cwd();

  try {
    const dir = optionValue(args, '--dir');
    if (dir) targetDir = path.resolve(dir);

    if (command === 'start') {
      const name = optionValue(args, '--name') || 'run';
      const now = process.env.DEPTH_ENGINE_TEST_NOW
        ? new Date(process.env.DEPTH_ENGINE_TEST_NOW)
        : new Date();
      const r = start(targetDir, { name, now });
      console.log(`depth-engine: started isolated run ${r.runId}`);
      console.log(`Run boot: ${r.runBoot}`);
      console.log(`Memory:   ${r.memoryDir}`);
      console.log(`Artifacts:${r.artifactsDir}`);
      console.log('');
      console.log('Next: tell your AI coding agent to read the Run boot file and follow it.');
      return 0;
    }

    const r = init(targetDir, { force });
    const dest = path.join(targetDir, 'depth-engine');
    console.log(`depth-engine: scaffolded into ${dest}`);
    console.log(`  created: ${r.created.length}   unchanged: ${r.unchanged.length}   skipped: ${r.skipped.length}   updated: ${r.updated.length}`);
    if (r.skipped.length) {
      console.log(`  (skipped ${r.skipped.length} existing file(s); re-run with --force to refresh framework files — memory is always preserved)`);
    }
    console.log('');
    console.log('Next: open your AI coding agent in this project and say:');
    console.log('  "Read depth-engine/BOOT.md and follow it."');
    return 0;
  } catch (e) {
    console.error(`depth-engine init failed: ${e.message}`);
    return 1;
  }
}

module.exports = { run };
