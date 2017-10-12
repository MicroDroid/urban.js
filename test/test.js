/* global test expect */
const urban = require('../src');

test('Fetching random urban definition', () => expect(urban.random())
  .resolves.toBeInstanceOf(urban.definition));

test('Fetching \'hello\' urban definition', () => urban('hello')
  .then((d) => {
    expect(d).toBeInstanceOf(urban.definition);
    expect(d.word).toBe('hello');
    expect(d.tags).not.toBeNull();
  }));

test('Fetching \'fsiojgjsgjsgihsghghjsh\' urban definition (success if not found)', () =>
  expect(urban('fsiojgjsgjsgihsghghjsh'))
    .rejects.toBeInstanceOf(TypeError));

test('Fetching random specific urban definition', () => urban.random('hello')
  .then((d) => {
    expect(d).toBeInstanceOf(urban.definition);
    expect(d.word).toMatch(/hello/);
    expect(d.tags).not.toBeNull();
  }));

test('Fetching all specific urban definitions', () => urban('hello')
  .then((d) => {
    expect(d).toBeInstanceOf(Array);
    expect(d[0]).toBeInstanceOf(urban.definition);
    expect(d[0].word).toMatch(/hello/);
    expect(d[0].tags).not.toBeNull();
  }));
