import User from "../model/user.js";

export const requireAuth = async (req, res, next) => {
    try {
        const userId = req.header("x-user-id");

        if (!userId) {
            return res.status(401).json({ message: "Authentication required" });
        }

        const user = await User.findById(userId).select("_id name email");

        if (!user) {
            return res.status(401).json({ message: "Invalid user" });
        }

        req.user = user;
        next();
    } catch {
        return res.status(401).json({ message: "Authentication required" });
    }
};
