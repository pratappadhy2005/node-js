const path = require('path');

console.log(path.resolve(__dirname, 'index.js'));
console.log('File Extension:', path.extname(__filename));
console.log('File Name:', path.basename(__filename));

const joinPath = path.join(__dirname, 'index.js');
console.log('Join Path:', joinPath);

const resolvePath = path.resolve(__dirname, 'index.js');
console.log('Resolve Path:', resolvePath);

const normalizePath = path.normalize(__dirname + '/index.js');
console.log('Normalize Path:', normalizePath);