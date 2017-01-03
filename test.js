const sh = require('shelljs');
const path = require('path');

// by default we want to run against the current commit
let commits = process.env.TRAVIS_COMMIT;
const commitRange = process.env.TRAVIS_COMMIT_RANGE;

// if we're not on master or TRAVIS_COMMIT_RANGE isn't empty, use the range
if (process.env.TRAVIS_BRANCH !== 'master' && commitRange) {
  commits = commitRange;
}

const command = `git diff --name-only ${commits}`;

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
