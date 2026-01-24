const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');

// Create data folder if it doesn't exist
if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log('Data folder created successfully');
} else {
    console.log('Data folder already exists');
}

const filePath = path.join(dataFolder, 'data.txt');

//Sync way of creating a file
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, 'Hello, World!');
    console.log('File created successfully');
} else {
    console.log('File already exists');
}

//Read the created file
const fileContent = fs.readFileSync(filePath, 'utf8');
console.log('File content:', fileContent);

//append to the file
fs.appendFileSync(filePath, '\nAppended data!');
console.log('File appended successfully');

//Read the file after appending
const fileContentAfterAppend = fs.readFileSync(filePath, 'utf8');
console.log('File content after append:', fileContentAfterAppend);

//async way of creating a directory only if it doesn't exist
fs.mkdir(path.join(dataFolder, 'async'), { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating async folder:', err);
    } else {
        console.log('Async folder created successfully');
    }
});

if (!fs.existsSync(path.join(dataFolder, 'async'))) {
    console.log('Async folder already exists');
} else {
    console.log('Async folder created successfully');
}

//async way of reading a file using Promises
fs.promises.readFile(filePath, 'utf8')
    .then(data => console.log('File content (async):', data))
    .catch(err => console.error('Error reading file:', err));
