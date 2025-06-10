import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protectroute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({
                message: 'Unauthorized - No token provided',
            });
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);
        if (!decode) {
            return res.status(401).json({
                message: 'Unauthorized - Invalid token',
            });
        }

        req.user = await User.findById(decode.userId).select('-password');

        if (!req.user) {
            return res.status(401).json({
                message: 'Unauthorized - User not found',
            });
        }

        next();
    } catch (error) {
        console.log("Err");
        return res.status(500).json({
            message: 'Internal server error',
        });
    }
}