const sh = require('shelljs');
const path = require('path');

const command = `git diff --name-only ${process.env.TRAVIS_COMMIT_RANGE}`;

console.log(command);

const output = sh.exec(command, {async: false, silent: true}).stdout;

const files = output.split('\n');

if (files.every((file) => file.startsWith('docs') || path.extname(file) === '.md')) {
  console.log('!!!!');
} else {
  console.log('????');
}

//console.log('output', output);
