
import User from "../model/user.js";
import bcrypt from "bcrypt"

 const login=async (req,res)=> {
    try{
    console.log("BODY 👉", req.body);

        const {  email, password } = req.body;

        if ( !email || !password) {
            return res.send({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });

        
        const existingPassword=await bcrypt.compare(password,existingUser.password)

        if (existingUser && existingPassword ) {
            return res.send({ message: "Successfully logged in" });
        }

    } catch (error) {
        console.error("ERROR 👉", error.message);
        res.send({ message: "INVALID CREDENTIALS" });
    }


}

export default login;