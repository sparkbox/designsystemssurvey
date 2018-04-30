'use strict';

const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    require('autoprefixer')
  ],
  input: ['./dist/css/*.css'],
  replace: true,
  map: !PRODUCTION,
  autoprefixer: {
    browsers: [
      '> 1%',
      'last 5 versions',
      'Firefox > 20',
      'Firefox >= 20',
      'Firefox ESR',
      'Opera 12.1',
    ],
  }
};
