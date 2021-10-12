/**
 * start without prompt
 */
require('dotenv').config();

const { start } = require('./remote-bench');

start(
  { all: true, connections: 10, pipelining: 1, duration: 10 },
  [ 'pg' ],
  [ 'get', 'post' ],
).then(() => process.exit(0));
