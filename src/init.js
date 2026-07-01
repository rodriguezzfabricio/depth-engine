const fs = require('node:fs');
const path = require('node:path');
const { ASSETS_DIR, listAssetFiles, isMemoryFile } = require('./files');

// Decide the action for one asset file given the current target state.
//   create      — target absent → write it
//   unchanged   — target identical to asset → no-op (idempotent)
//   skip-exists — target differs; protected (memory) or not --force → leave it
//   update      — target differs, framework file, --force → refresh it
function planFile(srcAbs, destAbs, relPath, force) {
  // Never write THROUGH a symlinked destination — a symlinked framework file
  // (e.g. depth-engine/BOOT.md -> memory/STATE.md) must not let a --force copy
  // clobber its target. Treat any symlinked destination as protected.
  if (fs.existsSync(destAbs) && fs.lstatSync(destAbs).isSymbolicLink()) return 'skip-exists';
  if (!fs.existsSync(destAbs)) return 'create';
  if (fs.readFileSync(srcAbs).equals(fs.readFileSync(destAbs))) return 'unchanged';
  if (isMemoryFile(relPath)) return 'skip-exists'; // memory is never overwritten
  return force ? 'update' : 'skip-exists';
}

// Scaffold the payload into <targetDir>/depth-engine/. Non-destructive and
// idempotent. Returns the per-bucket list of relative paths.
function init(targetDir, { force = false } = {}) {
  const rootDest = path.join(targetDir, 'depth-engine');
  const results = { created: [], unchanged: [], skipped: [], updated: [] };
  const bucket = {
    create: results.created,
    unchanged: results.unchanged,
    'skip-exists': results.skipped,
    update: results.updated,
  };
  for (const relPath of listAssetFiles()) {
    const srcAbs = path.join(ASSETS_DIR, relPath);
    const destAbs = path.join(rootDest, relPath);
    const action = planFile(srcAbs, destAbs, relPath, force);
    if (action === 'create' || action === 'update') {
      fs.mkdirSync(path.dirname(destAbs), { recursive: true });
      fs.copyFileSync(srcAbs, destAbs);
    }
    bucket[action].push(relPath);
  }
  return results;
}

module.exports = { init, planFile };
