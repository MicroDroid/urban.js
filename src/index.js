const fetch = require('snekfetch');
const Definition = require('./Definition');
const { BASE_URL, ran } = require('./Constants');

const random = () => new fetch('GET', `${BASE_URL}/random`)
  .then(({ body }) => body && body.result_type != 'no_results' ? body : Promise.reject(TypeError('No results')));

function first(query) {
  return Urban.search(query)
    .then((body) => new Definition(body.list[0], body));
}

const Urban = {
  Definition,
  version: require('../package.json').version,

  random(query = null) {
    if (!query) {
      return random()
        .then((body) => new Definition(body.list[0], body));
    } else {
      return Urban.search(query)
        .then((body) => new Definition(ran(body.list), body));
    }
  },

  fetch(id) {
    return new fetch('GET', `${BASE_URL}/define?&defid=${id}`)
      .then(({ body }) => body && body.result_type != 'no_results' ?
        new Definition(body.list[0], body) : Promise.reject(TypeError('No results')));
  },

  all(query, page) {
    return Urban.search(query, page)
      .then((body) => body.list.map((d) => new Definition(d, body)));
  },

  search(query, page = 1) {
    return new fetch('GET', `${BASE_URL}/define?page=${page}&term=${query}`)
      .then(({ body }) => body && body.result_type != 'no_results' ? body : Promise.reject(TypeError('No results')));
  },
};

module.exports = Object.assign(first, Urban);
