import Todo from "../model/todo.js";

export const createTodo = async (req, res) => {

    try {
        const { title } = req.body;
        if (!title) {
            return res.json({ message: "Title field is required" })
        }
        const newTodo = await Todo.create({
            title
        })
        res.json({
            success: true, todo: newTodo
        })

    } catch (error) {
        res.json({ message: error.message })

    }




}
export const getTodos = async (req, res) => {

    try {
        const todos=await Todo.find();
        res.send(todos);
    } catch (error) {
        res.json({ message: error.message })

    }




}
export const getTodosbyid = async (req, res) => {

    try {
        const {id}=req.params;
        const todosid=await Todo.findById(id);
        res.send(todosid);
    } catch (error) {
        res.json({ message: error.message })

    }




}
export const deleteTodosbyid = async (req, res) => {

    try {
        const {id}=req.params;
        const todosid=await Todo.findByIdAndDelete(id);
        res.send("deleted successfully");
    } catch (error) {
        res.json({ message: error.message })

    }




}
export const completedTodos = async (req, res) => {

    try {
        const {id}=req.params;
        const todosid=await Todo.findById(id);
        todosid.completed=!todosid.completed;
        await todosid.save();
        res.send(todosid);
    } catch (error) {
        res.json({ message: error.message })

    }




}
export const updatetitle = async (req, res) => {

    try {
        const {title}= req.body;
        const {id}=req.params;
        const todosid=await Todo.findById(id);
        todosid.title=title;
        await todosid.save();
        res.send(todosid);
    } catch (error) {
        res.json({ message: error.message })

    }




}