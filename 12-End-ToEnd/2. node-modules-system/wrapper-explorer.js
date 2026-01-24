console.log('Node JS Wrapper Explorer');

console.log('__filename: in wrapper-explorer.js:', __filename);
console.log('__dirname: in wrapper-explorer.js:', __dirname);

module.exports.greet = function (name) {
    console.log(`Hello ${name}!`);
}