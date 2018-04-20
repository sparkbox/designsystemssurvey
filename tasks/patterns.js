const downpour = require('@sparkbox/downpour');
const hbsHelpers = require('handlebars-helpers');

const helpers = {
  add: hbsHelpers().add,
  subtract: hbsHelpers().subtract,
  divide: hbsHelpers().divide,
  eq: hbsHelpers().eq,
  multiply: hbsHelpers().multiply,
  floor: hbsHelpers().floor,
  ceil: hbsHelpers().ceil,
  round: hbsHelpers().round,
  sum: hbsHelpers().sum,
  avg: hbsHelpers().avg,
  markdown: hbsHelpers().markdown,
};

const downpourOptions = {
  src: {
    data: {
      basedir: 'src/drizzle/data',
      glob: 'src/drizzle/data/**/*.yaml',
    },
    pages: {
      basedir: 'src/drizzle/pages',
      glob: 'src/drizzle/pages/**/*.{hbs,md,html}',
    },
    patterns: {
      basedir: 'src/drizzle/patterns',
      glob: 'src/drizzle/patterns/**/*.{hbs,md,yaml,html}',
    },
    templates: {
      basedir: 'src/drizzle/templates',
      glob: 'src/drizzle/templates/**/*.{hbs,md,html}',
    }
  },
  dest: {
    pages: './dist/',
    patterns: './dist/patterns',
    css: './dist/css',
    js: './dist/js',
  },
  helpers: {
    default: function() {
      for (var i = 0; i < arguments.length - 1; i++) {
        if (typeof arguments[i] === 'string') return arguments[i];
      }
      return '';
    }
  }
};

Object.assign(downpourOptions, { helpers });
downpour(downpourOptions);
