'use strict';

module.exports = {
  getRequests: async () => {
    return [{
      path: `/parse/health`,
      method: 'GET',
    }];
  }
};
