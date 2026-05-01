import express from "express";
import db from './config/db.js'
import authRoutes from './routes/auth.route.js';
import docsRoutes from './routes/docs.route.js';
import dotenv from "dotenv"
dotenv.config();
const app = express();
app.use(express.json())
const port = 3000;
db();

app.get('/home',authRoutes)
app.get('/docs',docsRoutes)
app.use('/auth',authRoutes)



app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})