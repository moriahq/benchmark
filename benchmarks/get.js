'use strict';

const Parse = require('../src/parse');

module.exports = {
  getRequests: async () => {
    const object = new Parse.Object('TestObject');
    object.set('foo', 'bar');
    await object.save();

    return [{
      path: `/parse/classes/TestObject/${object.id}`,
      method: 'GET',
    }];
  }
};
