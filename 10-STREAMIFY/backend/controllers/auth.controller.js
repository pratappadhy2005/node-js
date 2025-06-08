import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    const body = req.body;
    const { fullName, email, password } = body;
    try {
        if (!fullName || !email || !password) {
            return res.status(400).json({
                message: 'All fields are required',
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                message: 'Password must be at least 8 characters long',
            })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: 'Email already exists, please use a different email',
            })
        }

        const idx = Math.floor(Math.random() * 10) + 1;
        const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`

        const newUser = await User.create({
            email,
            password,
            fullName,
            profilePic: randomAvatar,
        });

        //TODO: Createb the user in STREAM as well

        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: '7d',
        })

        res.cookie('token', token, {
            httpOnly: true, //prevent XSS attacks
            secure: process.env.NODE_ENV === "production", //only send cookie over https
            sameSite: 'strict', //prevent CSRF attacks
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        res.status(201).json({
            success: true,
            user: newUser
        })

    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error: error.message,
        })
    }
}

export const login = async (req, res) => {
    res.send('Login Route')
}

export const logout = async (req, res) => {
    res.send('Logout Route')
}
