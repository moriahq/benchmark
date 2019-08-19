<p align="center">
  <img alt="Parse Platform" src="https://raw.githubusercontent.com/parse-community/benchmark/master/.github/logo-large.png" width="200">
</p>

<h2 align="center">Benchmark for Parse Server</h2>

<p align="center">
    A HTTP/1.1 benchmarking tool for Parse Server backends.
</p>

<p align="center">
    <a href="https://twitter.com/intent/follow?screen_name=parseplatform"><img alt="Follow on Twitter" src="https://img.shields.io/twitter/follow/parseplatform?style=social&label=Follow"></a>
    <a href="https://community.parseplatform.org/"><img alt="Join the conversation" src="https://img.shields.io/discourse/https/community.parseplatform.org/topics.svg"></a>
    <a href="https://github.com/parse-community/benchmark/blob/master/LICENSE"><img alt="License" src="https://img.shields.io/badge/license-BSD-lightgrey.svg"></a>
    <a href=" https://travis-ci.com/parse-community/benchmark"><img alt="Build status" src="https://travis-ci.com/parse-community/benchmark.svg?branch=master"></a>
    <a href="#backers"><img alt="Backers on Open Collective" src="https://opencollective.com/parse-server/backers/badge.svg" /></a>
  <a href="#sponsors"><img alt="Sponsors on Open Collective" src="https://opencollective.com/parse-server/sponsors/badge.svg" /></a>
</p>

<p align="center">
    <a href="http://codecov.io/github/parse-community/benchmark?branch=master"><img alt="Test coverage" src="http://codecov.io/github/parse-community/benchmark/coverage.svg?branch=master"></a>
    <!-- <a href="https://npmjs.org/parse"><img alt="npm version" src="https://badge.fury.io/js/parse.svg"></a> -->
    <!-- <a href="https://cdnjs.com/libraries/parse"><img alt="CDNJS version" src="https://img.shields.io/cdnjs/v/parse.svg"></a> -->
    <!-- <a href="https://greenkeeper.io/"><img alt="Greenkeeper badge" src="https://badges.greenkeeper.io/parse-community/benchmark.svg"></a> -->
</p>
<br>

## Setup Mongodb
```
$ npm install -g mongodb-runner
$ mongodb-runner start
```
***Note:*** *If installation with* `-g` *fails due to permission problems* (`npm ERR! code 'EACCES'`), *please refer to [this link](https://docs.npmjs.com/getting-started/fixing-npm-permissions).*


## Setup Postgres
```
$ psql -c 'create database parse_benchmark;' -U postgres
$ psql -c 'CREATE EXTENSION postgis;' -U postgres -d parse_benchmark
$ psql -c 'CREATE EXTENSION postgis_topology;' -U postgres -d parse_benchmark
```

## Running Benchmark

### Locally
```
$ git clone https://github.com/parse-community/benchmark
$ cd benchmark
$ npm install
$ npm start # shows prompt
$ npm start [-- <args>]  # runs many to many benchmark tests
$ npm start test <server> <benchmark> [-- <args>]  # runs one to one benchmark test
```

### Arguments

```
-c, --connections The number of concurrent connections to use. default: 10.
-p, --pipelining  The number of pipelined requests to use. default: 1.
-d, --duration    The number of seconds to run the autocannnon. default: 10.
-h, --help        output usage information
```

### Environment Variables

```
PARSE_APP_NAME: 'Parse Server Benchmark',
PARSE_APP_ID: 'app-id',
PARSE_JAVASCRIPT_KEY: 'javascript-key',
PARSE_MASTER_KEY: 'master-key',
PARSE_PORT: 1337,
SERVER_URL: 'http://localhost:1337`,
DATABASE_URL: 'postgres://localhost:5432/parse_benchmark',
MONGODB_URI: 'mongodb://localhost:27017/parse_benchmark',
VERBOSE: false,
CLEAR: false, # If set clears database before each test
```

## Debugging

You can track the progress of your benchmark setting the `DEBUG=1` environment variable.

You can generate detailed server logs by setting `VERBOSE=1`.

## TODO

You can track the progress of this project [here](https://github.com/parse-community/benchmark/projects)
