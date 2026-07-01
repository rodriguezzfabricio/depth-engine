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

After init, tell your AI coding agent:  "Read depth-engine/BOOT.md and follow it."`;

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
  if (args[0] !== 'init') {
    console.error(`depth-engine: unknown command '${args[0]}'. Try 'depth-engine init' or '--help'.`);
    return 1;
  }

  const force = args.includes('--force');
  let targetDir = process.cwd();
  const eq = args.find((a) => a.startsWith('--dir='));
  const di = args.indexOf('--dir');
  if (eq) {
    const v = eq.slice('--dir='.length);
    if (!v) {
      console.error('depth-engine: --dir requires a path (e.g. --dir=./my-project).');
      return 1;
    }
    targetDir = path.resolve(v);
  } else if (di >= 0) {
    const v = args[di + 1];
    if (!v || v.startsWith('-')) {
      console.error('depth-engine: --dir requires a path value (e.g. --dir ./my-project).');
      return 1;
    }
    targetDir = path.resolve(v);
  }

  try {
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
