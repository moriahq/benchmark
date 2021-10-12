'use strict';

module.exports = {
  getRequests: () => [{
    path: '/parse/classes/TestObject',
    method: 'POST',
    body: JSON.stringify({ testValue: 1 }),
  }]
};
