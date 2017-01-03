const sh = require('shelljs');
const path = require('path');

// by default we want to run against the current commit
let command = `git diff-tree --no-commit-id --name-only -r ${process.env.TRAVIS_COMMIT}`

// if we're not on master
if (process.env.TRAVIS_BRANCH !== 'master') {
  command = `git diff --name-only master`;
}

console.log('Running the following command: ', command);

const output = sh.exec(command, {async: false, silent: true}).stdout;

const files = output.split('\n').filter(Boolean);

console.log(files);
if (files.every((file) => file.startsWith('docs') || path.extname(file) === '.md')) {
  console.log('!!!!');
} else {
  console.log('????');
}

//console.log('output', output);
