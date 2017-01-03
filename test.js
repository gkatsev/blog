const sh = require('shelljs');

const command = `git diff --name-only ${process.env.TRAVIS_COMMIT_RANGE}`;

console.log(command);

const output = sh.exec(command, {async: false}).stdout;

console.log('output', output);
