import { useState } from "react";
import API from "../Api";
import { useNavigate } from "react-router-dom";


export default function CreateTodo() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        title: "",
        completed: false
    });
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.post("/create-todo", form);
        alert("created!");
    };

    if (!showForm) {
        return (
            <div className="flex justify-center mt-6">
                <button
                    onClick={() => setShowForm(true)}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
                >
                    + Add New Todo
                </button>
                <button
                    onClick={() => navigate('/get-todo')}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
                >
                    View Todo
                </button>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md w-80 space-y-4"
        >
            <h2 className="text-2xl font-bold text-center"> To DO</h2>

            <input
                className="w-full p-2 border rounded"
                placeholder="ToDo Name"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
            />

            <div className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    id="completed"
                    className="w-5 h-5 cursor-pointer"
                    checked={form.completed}
                    onChange={(e) => setForm({ ...form, completed: e.target.checked })}
                />
                <label htmlFor="completed" className="cursor-pointer select-none">
                    Mark as completed
                </label>
            </div>

            <div className="flex space-x-2 pt-2">
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                    Create
                </button>
                <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="w-full bg-gray-400 text-white py-2 rounded hover:bg-gray-500 transition"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}