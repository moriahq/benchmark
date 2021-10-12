/**
 * start without prompt
 */
require('dotenv').config();

const path = require('path');
const fs = require('fs');
const { start } = require('./remote-bench');

// Returns JS Files in folder without extensions
function getJSFiles(folder) {
  const filePath = path.join(__dirname, '..', folder);
  return fs.readdirSync(filePath).filter(file => file.includes('.js')).map(file => path.parse(file).name);
}

const benchmarks = getJSFiles('benchmarks');

start(
  { all: true, connections: 10, pipelining: 1, duration: 10 },
  [ 'pg' ],
  benchmarks,
).then(() => process.exit(0));
