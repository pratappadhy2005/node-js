const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const modifyFileData = data.toUpperCase();
    console.log(modifyFileData);

    fs.writeFile('./output.txt', modifyFileData, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File written successfully');

        fs.readFile('./output.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(data);
        });
    });
});