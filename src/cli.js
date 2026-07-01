const pkg = require('../package.json');

function run(argv) {
  const args = argv.slice(2);
  if (args.includes('--version') || args.includes('-v')) {
    console.log(pkg.version);
    return 0;
  }
  const cmd = args[0];
  if (cmd !== 'init') {
    console.error(`depth-engine: unknown command${cmd ? ` '${cmd}'` : ''}. Try 'depth-engine init'.`);
    return 1;
  }
  return 0;
}

module.exports = { run };
