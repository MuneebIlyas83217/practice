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