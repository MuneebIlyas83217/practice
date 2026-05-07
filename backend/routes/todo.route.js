import express from "express";
import { completedTodos, createTodo, deleteTodosbyid, getTodos, getTodosbyid, updatetitle } from "../controller/todo.controller.js";

const router=express.Router();

router.get('/',(req,res)=>{
    res.send("status is ok ");
})

router.post('/create-todo',createTodo)
router.get('/get-todo',getTodos)
router.get('/get-todo/:id',getTodosbyid)
router.delete('/delete-todo/:id',deleteTodosbyid)
router.patch('/update-todo-status/:id',completedTodos)
router.patch('/update-todo-title/:id',updatetitle)


export default router;