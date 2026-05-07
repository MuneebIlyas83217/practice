import todo from "../model/todo.js";

export const createTodo = async (req, res) => {

    try {
        const { title } = req.body;
        if (!title) {
            return res.json({ message: "Title field is required" })
        }
        if (title) {
            return title;
        }
        console.log(title);
        
        const todo = await todo.create({
            title
        })
        await todo.save();
        res.json({
            success: true, todo: todo
        })

    } catch (error) {
        res.json({ message: error.message })

    }




}