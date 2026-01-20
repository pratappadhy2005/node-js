const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");


const validateToken = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith("Bearer ")) {
        res.status(401);
        throw new Error("User is Unauthorized");
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(403);
            throw new Error("Forbidden");
        }
        req.user = decoded;
        next();
    });
});

module.exports = validateToken;
