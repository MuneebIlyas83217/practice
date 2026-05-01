import express from "express";
import User from "../model/user.js"; // make sure you create this
import {register,login,reset} from "../controller/auth.controller.js"
// import login from "../controller/login.controller.js"

const router = express.Router();

// Test routes
router.get('/', (req, res) => {
    res.send("Hello Auth");
});

router.get('/home', (req, res) => {
    res.send("Hello Home");
});

// ✅ Register Route

router.post('/register', register);
router.post('/login', login);
router.put('/reset', reset);
    


export default router;