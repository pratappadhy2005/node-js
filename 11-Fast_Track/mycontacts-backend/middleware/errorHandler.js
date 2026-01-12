const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    switch (statusCode) {
        case constants.NOT_FOUND:
            res.json({ title: "Not Found", status: "error", message: err.message || "Internal server error", stackTrace: err.stack });
            break;
        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation Failed", status: "error", message: err.message || "Internal server error", stackTrace: err.stack });
            break;
        case constants.INTERNAL_SERVER_ERROR:
            res.json({ title: "Internal Server Error", status: "error", message: err.message || "Internal server error", stackTrace: err.stack });
            break;
        case constants.UNAUTHORIZED:
            res.json({ title: "Unauthorized", status: "error", message: err.message || "Internal server error", stackTrace: err.stack });
            break;
        case constants.FORBIDDEN:
            res.json({ title: "Forbidden", status: "error", message: err.message || "Internal server error", stackTrace: err.stack });
            break;
        case constants.INTERNAL_SERVER_ERROR:
            res.json({ title: "Internal Server Error", status: "error", message: err.message || "Internal server error", stackTrace: err.stack });
            break;
        default:
            console.log("No case matched");
            break;
    }
}

module.exports = errorHandler;