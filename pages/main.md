<p align="center">
   ![Urban.js logo](https://github.com/SnekJS/urban.js/blob/master/assets/Urban.js.small.png?raw=true)
</p>

<p align="right">
  <img href="https://travis-ci.org/SnekJS/urban.js" src="https://travis-ci.org/SnekJS/urban.js.svg?branch=master" alt="Travis-CI Status"/>
</p>

*NOTE: module hasn't been yet replaced on NPM so it's recommended to install from GitHub*
`npm i SnekJS/urban.js`

```js
const urban = require('urban.js');

urban('hello').then(console.log) /*
Definition {
id: 69266,
word: 'hello',
thumbsUp: 3297,
thumbsDown: 936,
author: 'mad at the world',
URL: 'http://hello.urbanup.com/69266',
example: 'What the hell(mom enters)-o mom.',
definition: 'what you say when your talking casually with friends and your mom walks in the room',
tags: [ 'hi', 'hey', 'greeting', 'yo', 'goodbye' ],
sounds: [
'http://media.urbandictionary.com/sound/hello-7503.mp3',
'http://media.urbandictionary.com/sound/hello-9778.mp3',
'http://media.urbandictionary.com/sound/hello-9897.mp3',
'http://media.urbandictionary.com/sound/hello-10454.mp3',
...]
} */
```
