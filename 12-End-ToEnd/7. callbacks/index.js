const fs = require('fs');

function person(name, callback) {
    console.log(`My name is ${name}`);
    callback();
}

function address() {
    console.log(`I live in delhi`);
}

person('Pratap', address);

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});