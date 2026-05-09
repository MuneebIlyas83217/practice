import { useState, useEffect } from "react";
import API from "../Api";
import { useNavigate } from "react-router-dom";

export default function ViewTodo() {
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            const to_do = await API.get("/get-todo");
            setTodos(to_do.data);
            // setLoading(false);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleToggleStatus = async (id) => {
        try {
            const response = await API.patch(`/update-todo-status/${id}`);
            setTodos(todos.map(todo => todo._id === id ? response.data : todo));
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };





    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Your To Do List</h2>

            {todos.length === 0 ? (
                <p className="text-center text-gray-500">No tasks found. Try creating some!</p>
            ) : (
                <ul className="space-y-4">
                    {todos.map((todo) => (
                        <li
                            key={todo._id}
                            className={`flex items-center justify-between p-4 border rounded ${todo.completed ? 'bg-gray-50 border-green-200' : 'bg-white'}`}
                        >
                            <div className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => handleToggleStatus(todo._id)}
                                    className="w-5 h-5 cursor-pointer accent-blue-500"
                                />
                                <span className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                                    {todo.title}
                                </span>
                            </div>


                        </li>
                    ))}
                </ul>
            )}
            <div className="mt-6 flex justify-center space-x-4">
                <button
                    onClick={() => navigate('/')}
                    className="px-6 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                >
                    Back
                </button>
            </div>
        </div>
    );
}
