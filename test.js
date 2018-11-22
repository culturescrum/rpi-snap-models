const snap = require('./dist/index');

const pm3 = new snap.Pi3Model('test', 'test', '16', 'test');

console.log(JSON.stringify(pm3));