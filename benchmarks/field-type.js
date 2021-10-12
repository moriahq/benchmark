'use strict';

module.exports = {
  getRequests: async () => {
    return [{
      path: `/parse/classes/FieldType`,
      method: 'GET',
    }];
  }
};
