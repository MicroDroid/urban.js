const urban = require('../urban.js');
const line = '\n' + '-'.repeat(40);

console.log(line);
urban.random()
    .then(d => console.log(d.definition + line));

urban('hello')
    .then(d => console.log(d.definition + line));

urban.all('hello')
    .then(a => console.log(a[1].definition + line));

urban.random('hello')
    .then(d => console.log(d.definition + line));
