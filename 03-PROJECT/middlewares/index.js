const fs = require("fs");

function logger(fileName) {
    return (req, res, next) => {
        fs.appendFile(fileName, `${Date.now()} - ${req.method} - ${req.url}\n`, (err, data) => {
            if (err) {
                console.log("Error writing to file", err);
            } else {
                console.log("File written successfully");
            }
        });
        next();
    }
}

module.exports = { logger };