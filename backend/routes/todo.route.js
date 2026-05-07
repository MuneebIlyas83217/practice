import express from "express";
import { createTodo } from "../controller/todo.controller.js";

const router=express.Router();

router.get('/',(req,res)=>{
    res.send("status is ok ");
})

router.post('/create-todo',createTodo)

export default router;