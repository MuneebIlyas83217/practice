import User from "../model/user.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 8);

        const user = await User.create({
            name,
            email,
            password: hashPassword
        });

        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.error("ERROR", error.message);
        return res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const passwordMatches = await bcrypt.compare(password, existingUser.password);

        if (!passwordMatches) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        return res.json({
            message: "Successfully logged in",
            user: {
                id: existingUser._id,
                name: existingUser.name,
                email: existingUser.email
            }
        });
    } catch (error) {
        console.error("ERROR", error.message);
        return res.status(500).json({ message: "INVALID CREDENTIALS" });
    }
};

export const reset = async (req, res) => {
    try {
        const { email, password, New } = req.body;

        if (!email || !password || !New) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(401).json({ message: "INVALID gmail or password" });
        }

        const existingPassword = await bcrypt.compare(password, existingUser.password);

        if (!existingPassword) {
            return res.status(401).json({ message: "INVALID gmail or password" });
        }

        existingUser.password = await bcrypt.hash(New, 8);
        await existingUser.save();

        return res.json({ message: "Password changed" });
    } catch (error) {
        console.error("ERROR", error.message);
        return res.status(500).json({ message: "INVALID CREDENTIALS" });
    }
};
