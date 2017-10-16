const Docma = require('docma');
const Package = require('./package');

Docma.create()
  .build({
    app: {
      title: Package.name,
      base: '/',
      entrance: 'content:readme',
      routing: 'query',
      server: Docma.ServerType.GITHUB,
    },
    markdown: {
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: false,
      smartypants: false,
      tasks: false,
      emoji: true,
    },
    src: [
      { main: './MAIN.md' },
      { urban: './src/index.js' },
      { definition: './src/Definition.js' },
    ],
    dest: './docs',
    jsdoc: {
      plugins: ['jsdoc-dynamic'],
    },
    template: {
      options: {
        title: Package.name,
        navItems: [
          {
            label: 'Main',
            href: '?content=main',
          },
          {
            label: 'Methods',
            href: '?api=urban',
            iconClass: 'ico-book',
          },
          {
            label: 'Definition',
            href: '?api=definition',
            iconClass: 'ico-book',
          },
          {
            label: 'GitHub',
            href: Package.github,
            target: '_blank',
            iconClass: 'ico-md ico-github',
          },
        ],
      },
    },
  })
  .catch(console.error); // eslint-disable-line no-console
