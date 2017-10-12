const fetch = require('snekfetch');
const { BASE_URL, DEFINITION, randomArrayItem } = require('./Constants');

class Urban {
  static first(query) {
    return Urban.search(query)
      .then((body) => new DEFINITION(body.list[0], body));
  }

  static random(query = null) {
    if (!query) {
      return Urban.getRandom()
        .then((body) => new DEFINITION(body.list[0], body));
    } else {
      return Urban.search(query)
        .then((body) => new DEFINITION(randomArrayItem(body.list), body));
    }
  }

  static all(query) {
    return Urban.search(query)
      .then((body) => body.list.map((d) => new DEFINITION(d, body)));
  }

  static search(query, page = 1) {
    return new fetch('GET', `${BASE_URL}/define?page=${page}&term=${query}`)
      .then(({ body }) => body && body.result_type != 'no_results' ? body : Promise.reject(TypeError('No results')));
  }

  static getRandom() {
    return new fetch('GET', `${BASE_URL}/random`)
      .then(({ body }) => body && body.result_type != 'no_results' ? body : Promise.reject(TypeError('No results')));
  }
}

module.exports = Object.assign(Urban.first, {
  all: Urban.all,
  search: Urban.search,
  random: Urban.random,
  definition: DEFINITION,
  version: require('../package.json').version });
