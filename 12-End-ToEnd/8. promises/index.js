function delayfn(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

console.log('Start');
delayfn(200).then(() => console.log('after 2 seconds promise resolved'));
console.log('End');


function divideFn(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject('Cannot divide by zero');
        } else {
            resolve(num1 / num2);
        }
    });
}

divideFn(10, 2).then(result => console.log(result)).catch(err => console.error(err));
divideFn(10, 0).then(result => console.log(result)).catch(err => console.error(err));