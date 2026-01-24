// modeul.exports -> exports
// require -> import
// Node JS using Common JS Module System

const firstModule = require('./first-module');

console.log(firstModule.add(1, 2));
console.log(firstModule.sub(1, 2));
console.log(firstModule.div(1, 2));


try {
    console.log('Dividing 1 by 0');
    console.log(firstModule.div(1, 0));
} catch (error) {
    console.log(error.message);
}
