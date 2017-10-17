/* global test expect */
const urban = require('../src');

test('Fetching random urban definition', () => expect(urban.random())
  .resolves.toBeInstanceOf(urban.Definition));

test('Searching \'hello\' urban definition', () => urban('hello')
  .then((d) => {
    expect(d).toBeInstanceOf(urban.Definition);
    expect(d.word).toBe('hello');
    expect(d.tags).not.toBeNull();
  }));

test('Searching top \'hello\' urban definition', () => urban.top('hello')
  .then((d) => {
    expect(d).toBeInstanceOf(urban.Definition);
    expect(d.word).toBe('hello');
    expect(d.tags).not.toBeNull();
  }));

test('Fetching \'69266\' (hello) urban definition', () => urban.fetch('69266')
  .then((d) => {
    expect(d).toBeInstanceOf(urban.Definition);
    expect(d.word).toBe('hello');
    expect(d.tags).not.toBeNull();
  }));

test('Searching \'fsiojgjsgjsgihsghghjsh\' urban definition (success if not found)', () =>
  expect(urban('fsiojgjsgjsgihsghghjsh'))
    .rejects.toBeInstanceOf(TypeError));

test('Fetching random specific urban definition', () => urban.random('hello')
  .then((d) => {
    expect(d).toBeInstanceOf(urban.Definition);
    expect(d.word).toMatch(/hello/i);
    expect(d.tags).not.toBeNull();
  }));

test('Fetching all specific urban definitions', () => urban.all('hello')
  .then((d) => {
    expect(d).toBeInstanceOf(Array);
    expect(d[0]).toBeInstanceOf(urban.Definition);
    expect(d[0].word).toMatch(/hello/i);
    expect(d[0].tags).not.toBeNull();
  }));
