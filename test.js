const sh = require('shelljs');
const path = require('path');

// by default we want to run against the current commit
let command = `git diff-tree --no-commit-id --name-only -r ${process.env.TRAVIS_COMMIT}`

// if we have a range, compare it against master
if (process.env.TRAVIS_COMMIT_RANGE) {
  command = `git diff --name-only ${process.env.TRAVIS_COMMIT_RANGE} master`;
}

const pr = JSON.parse(process.env.TRAVIS_PULL_REQUEST);

console.log(process.env.TRAVIS_BRANCH, process.env.TRAVIS_PULL_REQUEST, process.env.TRAVIS_PULL_REQUEST_BRANCH);

// if we're in a PR, compare the PR against master
if (pr) {
  command = `git diff --name-only ${process.env.TRAVIS_PULL_REQUEST_BRANCH} master`;
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
