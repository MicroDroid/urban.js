<p align="center">
  <img href="https://github.com/SnekJS/urban.js" src="https://github.com/SnekJS/urban.js/blob/master/assets/Urban.js.png?raw=true" alt="Urban.js logo"/>
</p>

<p align="right">
  <img href="https://travis-ci.org/SnekJS/urban.js" src="https://travis-ci.org/SnekJS/urban.js.svg?branch=master" alt="Travis-CI Status"/>
</p>

*NOTE: module hasn't been yet replaced on npm so it's recommended to install from github*
`npm i SnekJS/urban.js`

```js
const urban = require('urban.js');
```

| Methods                |           returns               |                         description                       |
|------------------------|---------------------------------|-----------------------------------------------------------|
| urban('string')        | `=> Promise<Definition>`        | Gets first definition from urban matching provided query  |
| urban.random()         | `=> Promise<Definition>`        | Gets random definition from urban                         |
| urban.random('string') | `=> Promise<Definition>`        | Gets random definition from urban matching provided query |
| urban.all('string'[, page=1])    | `=> Promise<Array<Definition>>` | Gets all definitions from given page matching provided query  |
| urban.search('string'[, page=1]) | `=> Promise<api response>` | Gets raw response from api without any formating       |

## Example output
*NOTE: `urban.random()` method doesn't have tags and sounds*

```js
  Definition {
  id: 69266,
  word: 'hello',
  definition: 'what you say when your talking casually with friends and your mom walks in the room',
  example: 'What the hell(mom enters)-o mom.',
  urbanURL: 'http://hello.urbanup.com/69266',
  author: 'mad at the world',
  thumbsUp: 3297,
  thumbsDown: 936,
  tags: [ 'hi', 'hey', 'greeting', 'yo', 'goodbye' ],
  sounds: [ 'http://media.urbandictionary.com/sound/hello-7503.mp3',
  'http://media.urbandictionary.com/sound/hello-9778.mp3',
  'http://media.urbandictionary.com/sound/hello-9897.mp3',
  'http://media.urbandictionary.com/sound/hello-10454.mp3',
  ...]
  }
```
