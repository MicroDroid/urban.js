class Definition extends Object {
  constructor({
    defid,
    word,
    definition,
    example,
    permalink,
    thumbs_up,
    author,
    thumbs_down,
  }, { tags, sounds }) {
    super();

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
              * Definition permalink.
              * @type {string}
              */
    this.URL = permalink;

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

    /**
              * Definition tags.
              * @type {array<string>}
              */
    this.tags = Array.from(new Set(tags)) || null;

    /**
              * Definition sounds.
              * @type {array<string>}
              */
    this.sounds = sounds || null;
  }
}

module.exports = Definition;
