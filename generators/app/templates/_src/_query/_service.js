const Logger = require('../logger');
const _ = require('lodash');

const QueryService = {
  worker
};

function worker(query) {
  try {
    const queryWorked = (_.mapKeys(query, (v, k) => _.camelCase(k)));
    const keys = Object.keys(queryWorked);

    keys.forEach((key) => {
      if (queryWorked[key] && typeof queryWorked[key] !== 'object') {
        const value = queryWorked[key].split(',');

        if (value.length > 1) {
          queryWorked[key] = { $in: value };
        }

        if (queryWorked[key] === 'false') {
          queryWorked[key] = false;
        }
        if (queryWorked[key] === 'true') {
          queryWorked[key] = true;
        }
      }
    });
    Logger.info('[<%= name %>] => [query/service.js] => [worker] => Working query: %j', queryWorked);
    return queryWorked;
  } catch (ex) {
    Logger.error(`[<%= name %>] => [query/service.js] => [worker] => ${ex}.`);
    throw new Error(ex);
  }
}

module.exports = function factory() {
  return QueryService;
};
