const urban = require('../urban.js');
const line = '\n' + '-'.repeat(40);

const print = urBan => console.log(
    `${urBan.id} | ${urBan.word}\n\n${urBan.definition}` +
    line);

console.log(line);

urban.random()
    .then(print);

urban('hello')
    .then(print);

urban.all('hello')
    .then(u => print(u[0]));

urban.random('hello')
    .then(print);
