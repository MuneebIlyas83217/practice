import express from "express";
import User from "../model/user.js"; // make sure you create this
import {register,login,reset} from "../controller/auth.controller.js"
// import login from "../controller/login.controller.js"

const router = express.Router();


// ✅ Register Route

router.post('/register', register);
router.post('/login', login);
router.put('/reset', reset);
// router.put("/user/:id", async (req, res) => {
//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );

//     res.json(updatedUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
    


export default router;