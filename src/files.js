const fs = require('node:fs');
const path = require('node:path');

const ASSETS_DIR = path.join(__dirname, '..', 'assets');

// Recursively list every file under assets/, returning sorted relative paths.
function listAssetFiles() {
  const out = [];
  (function walk(dir, rel) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const abs = path.join(dir, entry.name);
      const relPath = rel ? path.join(rel, entry.name) : entry.name;
      if (entry.isDirectory()) walk(abs, relPath);
      else out.push(relPath);
    }
  })(ASSETS_DIR, '');
  return out.sort();
}

// A file under memory/ is "sacrosanct" — the running engine writes its state
// there, so init must never overwrite it (even with --force). Case-insensitive
// so a mis-cased asset can't slip past this on a case-insensitive filesystem.
function isMemoryFile(relPath) {
  return relPath.split(path.sep)[0].toLowerCase() === 'memory';
}

module.exports = { ASSETS_DIR, listAssetFiles, isMemoryFile };
