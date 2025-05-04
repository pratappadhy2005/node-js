const fs = require('fs');
const os = require('os');

console.log('CPUs: ', os.cpus().length);

//Blocking Code
// fs.writeFileSync('./hello.txt', 'Hello World');

fs.writeFile('./test.txt', 'Hello World', (err) => {
    if (err) {
        console.log(err);
    }
});

fs.readFile('./test.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
});