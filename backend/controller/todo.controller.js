import Todo from "../model/todo.js";

export const createTodo = async (req, res) => {
    try {
        const { title, completed } = req.body;

        if (!title) {
            return res.status(400).json({ message: "Title field is required" });
        }

        const newTodo = await Todo.create({
            user: req.user._id,
            title,
            completed: completed || false
        });

        return res.status(201).json({
            success: true,
            todo: newTodo
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({ user: req.user._id }).sort({ createdAt: -1 });
        return res.json(todos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getTodosbyid = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findOne({ _id: id, user: req.user._id });

        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        return res.json(todo);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteTodosbyid = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findOneAndDelete({ _id: id, user: req.user._id });

        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        return res.json({ message: "deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const completedTodos = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findOne({ _id: id, user: req.user._id });

        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        todo.completed = !todo.completed;
        await todo.save();

        return res.json(todo);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updatetitle = async (req, res) => {
    try {
        const { title } = req.body;
        const { id } = req.params;
        const todo = await Todo.findOne({ _id: id, user: req.user._id });

        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        todo.title = title;
        await todo.save();

        return res.json(todo);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
