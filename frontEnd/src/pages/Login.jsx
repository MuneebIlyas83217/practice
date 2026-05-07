import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post("/login", form);
    localStorage.setItem("token", res.data.token);
    alert("Logged in!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-80 space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Login</h2>

      <input
        className="w-full p-2 border rounded"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        className="w-full p-2 border rounded"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
        Login
      </button>
      <button onClick={()=>navigate("/register") }>Register</button>
    </form>
  );
}