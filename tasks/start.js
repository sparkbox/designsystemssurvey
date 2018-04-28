const shell = require('shelljs');
const map = require('lodash/map');

console.log(`Starting site for ${process.env.NODE_ENV || 'development'}`);

const tasks = {
  // The JS and SASS tasks are omitted here because they are covered by
  // the `cachebust:build` task
  production: ['copy', 'patterns', 'cachebust:build', 'server'],

  // The JS task is omitted here, because JS is built out initially by the
  // `watch` task
  development: ['copy', 'patterns', 'sass', 'server', 'watch'],
};

function parallelTasks(env) {
  const list = map(tasks[env], task => `"npm run ${task}" `);

  return `parallelshell ${list.join('')}`;
}

if (process.env.NODE_ENV === 'production') {
  shell.exec(parallelTasks('production'));
} else {
  shell.exec(parallelTasks('development'));
}
