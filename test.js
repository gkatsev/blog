const sh = require('shelljs');

sh.exec(`git diff --name-only ${process.env.TRAVIS_COMMIT_RANGE}`);
