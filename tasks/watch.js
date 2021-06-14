'use strict';

const chokidar = require('chokidar');
const shell = require('shelljs');

// CSS Watch Task
chokidar.watch('src/scss/**/*').on('change', () => {
  shell.exec('npm run sass');
});

