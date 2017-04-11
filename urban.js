const snekfetch = require('snekfetch');
const api = 'https://api.urbandictionary.com/v0';
const ArrayRandom = array => array[Math.floor(Math.random() * array.length)];

function search(query, page = 1) {
    return new snekfetch('GET', `${api}/define?page=${page}&term=${query}`)
    .then(res => res.body)
    .then(body => body.result_type == 'no_results' ? null : body);
}

function first(query) {
    return search(query)
    .then(body => body ?
      Object.assign(new Definition(body.list[0]), {
          tags: Array.from(new Set(body.tags)),
          sounds: body.sounds
      }) : null);
}

function all(query) {
    return search(query)
    .then(body => body ?
      Object.assign(body.list.map(d => new Definition(d)), {
          tags: Array.from(new Set(body.tags)),
          sounds: body.sounds
      }) : null);
}

function random(query = null) {
    if (!query) return new snekfetch('GET', `${api}/random`)
    .then(res => res.body)
    .then(body => body.result_type == 'no_results' ? null : new Definition(body.list[0]));
    else return search(query)
    .then(body => body ?
      Object.assign(new Definition(ArrayRandom(body.list)), {
          tags: Array.from(new Set(body.tags)),
          sounds: body.sounds
      }) : null);
}

class Definition {
    constructor({
    defid,
    word,
    definition,
    example,
    permalink,
    thumbs_up,
    author,
    thumbs_down
  }) {

    /**
     * ID of definition.
     * @type {number}
     */
        this.id = defid;

    /**
     * Word used for definition.
     * @type {string}
     */
        this.word = word;

    /**
     * Definition itself.
     * @type {string}
     */
        this.definition = definition;

    /**
     * Definition example.
     * @type {string}
     */
        this.example = example;

    /**
     * Definition URL.
     * @type {string}
     */
        this.urbanURL = permalink;

    /**
     * Definition author name.
     * @type {string}
     */
        this.author = author;

    /**
     * Definition thumbs up.
     * @type {number}
     */
        this.thumbsUp = thumbs_up;

    /**
     * Definition thumbs down.
     * @type {number}
     */
        this.thumbsDown = thumbs_down;
    }
}

module.exports = Object.assign(first, {
    all,
    random,
    search,
    version: require('./package.json').version
});