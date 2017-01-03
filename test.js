const sh = require('shelljs');
const path = require('path');

// by default we want to run against the current commit
const SINGLE_COMMIT = `git diff-tree --no-commit-id --name-only -r ${process.env.TRAVIS_COMMIT}`
const COMMIT_RANGE = `git diff --name-only ${process.env.TRAVIS_COMMIT_RANGE} master`;
const PR_DIFF = `git diff --name-only ${process.env.TRAVIS_PULL_REQUEST_BRANCH} master`;

console.log(process.env.TRAVIS_BRANCH, process.env.TRAVIS_PULL_REQUEST, process.env.TRAVIS_PULL_REQUEST_BRANCH, process.env.TRAVIS_COMMIT, process.env.TRAVIS_COMMIT_RANGE);

// if we have a range, compare it against master
//if (process.env.TRAVIS_COMMIT_RANGE) {
//}

//const pr = JSON.parse(process.env.TRAVIS_PULL_REQUEST);


//// if we're in a PR, compare the PR against master
//if (pr) {
//}

//console.log('Running the following command: ', command);

const singleout = sh.exec(SINGLE_COMMIT, {async: false, silent: true}).stdout;
const rangeout = sh.exec(COMMIT_RANGE, {async: false, silent: true}).stdout;
const prout = sh.exec(PR_DIFF, {async: false, silent: true}).stdout;

console.log(SINGLE_COMMIT, '\n', singleout);
console.log(COMMIT_RANGE, '\n', rangeout);
console.log(PR_DIFF, '\n', prout);

sh.exec('git log');

//const files = output.split('\n').filter(Boolean);

//console.log(output, files);
//if (files.every((file) => file.startsWith('docs') || path.extname(file) === '.md')) {
  //console.log('!!!!');
//} else {
  //console.log('????');
//}

//console.log('output', output);
