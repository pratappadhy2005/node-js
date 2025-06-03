export const signup = async (req, res) => {
    try {
        const { fullName, username, password, email } = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists" });
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ error: "Email already exists" });
        }

        if (password.length < 6) {
            return res.status(400).json({ error: "Password must be at least 6 characters long" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            email,
        });

        if (newUser) {
            //generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
            res.status(201).json({ message: "User created successfully" });
        } else {
            res.status(400).json({ error: "User not created" });
        }

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const login = async (req, res) => {
    res.json({
        data: "Login API is working"
    })
};

export const logout = async (req, res) => {
    res.json({
        data: "Logout API is working"
    })
};