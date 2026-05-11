import express from "express";
import db from './config/db.js'
import authRoutes from './routes/auth.route.js';
import dotenv from "dotenv"
import cors from "cors"
import todoRoutes from "./routes/todo.route.js"


dotenv.config();
const app = express();
db();

app.use(cors())
app.use(express.json())

const port = 3000;

app.use('/auth',authRoutes) // localhost:3000/auth
app.use('/todo',todoRoutes) // localhost:3000/todo




app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})