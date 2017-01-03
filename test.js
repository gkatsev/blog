const sh = require('shelljs');

sh.exec('git diff master');

console.log(JSON.stringify(process.env, null, 2));
