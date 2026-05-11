import { useState } from "react";
import API from "../Api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/register", form);
    localStorage.setItem("authUser", JSON.stringify(res.data.user));
    alert("Registered!");
    navigate("/todo");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-80 space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Register</h2>

      <input
        className="w-full p-2 border rounded"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

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

      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Register
      </button>
    </form>
  );
}
