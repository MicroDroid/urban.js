const fetch = require('snekfetch');
const Definition = require('./Definition');
const { BASE_URL, ran } = require('./Constants');

const random = () => new fetch('GET', `${BASE_URL}/random`)
  .then(({ body }) => body && body.result_type != 'no_results' ? body : Promise.reject(TypeError('No results')));

/**
 * Gets first definition by thumbs up count from 1 page.
 * @method first
 * @param  {string} query Query search for in urban.
 * @returns {Promise<Definition>} Returns Definition
 */
function first(query) {
  return Urban.search(query)
    .then((body) => new Definition(body.list[0], body));
}

const Urban = {
  Definition,
  version: require('../package.json').version,

  /**
 * Gets random definition from urban by query or not
 * @method random
 * @param  {string} [query=null] Get random definition by specific query
 * @returns {Promise<Definition>} Returns random Definition
 */
  random(query = null) {
    if (!query) {
      return random()
        .then((body) => new Definition(body.list[0], body));
    } else {
      return Urban.search(query)
        .then((body) => new Definition(ran(body.list), body));
    }
  },

  /**
 * Fetches Urban Definition by ID
 * @method fetch
 * @param  {string} id ID of definition
 * @returns {Promise<Definition>} Returns fetched Definition
 */
  fetch(id) {
    return new fetch('GET', `${BASE_URL}/define?&defid=${id}`)
      .then(({ body }) => body && body.result_type != 'no_results' ?
        new Definition(body.list[0], body) : Promise.reject(TypeError('No results')));
  },

  /**
 * Gets all definitions from one specific page
 * @method all
 * @param  {string} query Query to fetch with specific definitions
 * @param  {number} [page=1]  From which page to fetch definitions
 * @returns {Promise<Definition[]>} A array of definitions
 */
  all(query, page) {
    return Urban.search(query, page)
      .then((body) => body.list.map((d) => new Definition(d, body)));
  },

  /**
 * Gives raw response from API
 * @method search
 * @param  {string} query Query to search with
 * @param  {number} [page=1] Which page to search in
 * @returns {Promise<Object>} A raw request body from API
 */
  search(query, page = 1) {
    return new fetch('GET', `${BASE_URL}/define?page=${page}&term=${query}`)
      .then(({ body }) => body && body.result_type != 'no_results' ? body : Promise.reject(TypeError('No results')));
  },
};

module.exports = Object.assign(first, Urban);
