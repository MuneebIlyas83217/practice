import User from "../model/user.js";
import bcrypt from "bcrypt"

export const register=async (req,res)=> {
    try{
    console.log("BODY 👉", req.body);

        const { name,  email, password } = req.body;

        if (!name ||  !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashPassword=await bcrypt.hash(password,8)

        const user = await User.create({
            name,
            email,
            password:hashPassword
        });

        res.status(201).json({
            message: "User registered successfully",
            user
        });

    } catch (error) {
        console.error("ERROR 👉", error.message);
        res.status(500).json({ message: error.message });
    }


}


export const login=async (req,res)=> {
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


export const reset=async (req,res)=> {
    try{
    console.log("BODY 👉", req.body);

        const {  email, password,New } = req.body;

        if ( !email || !password || !New) {
            return res.send({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });

        
        const existingPassword=await bcrypt.compare(password,existingUser.password)

        if (!existingUser || !existingPassword ) {

            return res.send({ message: "INVALID gmail or password" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(New,salt)

            existingUser.password=New;
            await existingUser.save();
        // const Newhash=await bcrypt.hash(existingUser.password,8)
        // const salt2 = await bcrypt.genSalt(10);
        // const hash=await bcrypt.hash(existingUser.password,salt)
            return res.send({message:"Password changed"})

    } catch (error) {
        console.error("ERROR 👉", error.message);
        res.send({ message: "INVALID CREDENTIALS" });
    }


}

