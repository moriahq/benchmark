#!/usr/bin/env node
'use strict';

/**
 * benchmark remote parse-server instance
 */
const ora = require('ora');
const path = require('path');
const { saveToFile, cliTable, buildOptions } = require('./utils');
const { run } = require('./http-benchmark');

const runTest = async (opts, serverName, benchmarks) => {
  const spinner = ora(`Started ${serverName}`).start();

  const results = [];
  for (let i = 0; i < benchmarks.length; i += 1) {
    let testName;
    try {
      const benchmark = require(path.join(__dirname, '..', 'benchmarks', benchmarks[i]));
      testName = `${serverName} ${benchmarks[i]}`;
      const requests = await benchmark.getRequests();

      spinner.color = 'yellow';
      spinner.text = `Working ${testName}`;

      const result = await run(buildOptions(opts, requests));

      results.push({ [testName] : Object.assign({}, result, { cpu: 'N/A', ram: 0 }) });

      spinner.text = `Results saved for ${testName}`;
      spinner.succeed();
    } catch (error) {
      spinner.text = `Failed saved for ${testName}`;
      spinner.fail();
      console.error(error);
    }
  }

  return results;
};

const start = async (opts, servers, benchmarks, data = [], index = 0) => {
  try {
    if (servers.length === index) {
      cliTable(data);
      saveToFile(opts.output, data);
      return;
    }
    const results = await runTest(opts, servers[index], benchmarks);
    data.push(...results);
    index += 1;
    return start(opts, servers, benchmarks, data, index);
  } catch (error) {
    return console.error(error);
  }
};

module.exports = { start, runTest };
