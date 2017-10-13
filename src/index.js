const fetch = require('snekfetch');
const { BASE_URL, DEFINITION, randomArrayItem } = require('./Constants');

const random = () => new fetch('GET', `${BASE_URL}/random`)
  .then(({ body }) => body && body.result_type != 'no_results' ? body : Promise.reject(TypeError('No results')));

function first(query) {
  return Urban.search(query)
    .then((body) => new DEFINITION(body.list[0], body));
}

const Urban = {
  Definition: DEFINITION,
  version: require('../package.json').version,

  random(query = null) {
    if (!query) {
      return random()
        .then((body) => new DEFINITION(body.list[0], body));
    } else {
      return Urban.search(query)
        .then((body) => new DEFINITION(randomArrayItem(body.list), body));
    }
  },

  all(query, page) {
    return Urban.search(query, page)
      .then((body) => body.list.map((d) => new DEFINITION(d, body)));
  },

  search(query, page = 1) {
    return new fetch('GET', `${BASE_URL}/define?page=${page}&term=${query}`)
      .then(({ body }) => body && body.result_type != 'no_results' ? body : Promise.reject(TypeError('No results')));
  },
};

module.exports = Object.assign(first, Urban);
