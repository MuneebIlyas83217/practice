// import { useState, useEffect } from "react";
// import API from "../api";

// export default function UpdateUser() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   // Example: user ID (you can get from props, params, or auth)
//   const userId = ;

//   // 🔹 Fetch existing user data
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await API.get(`/user/${userId}`);
//         setForm({
//           name: res.data.name,
//           email: res.data.email,
//           password: "", // keep empty for security
//         });
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchUser();
//   }, [userId]);

//   // 🔹 Update handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.put(`/user/${userId}`, form);
//       alert("User updated!");
//     } catch (err) {
//       console.error(err);
//       alert("Update failed");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white p-6 rounded-lg shadow-md w-80 space-y-4"
//     >
//       <h2 className="text-2xl font-bold text-center">Update Profile</h2>

//       <input
//         className="w-full p-2 border rounded"
//         placeholder="Name"
//         value={form.name}
//         onChange={(e) => setForm({ ...form, name: e.target.value })}
//       />

//       <input
//         className="w-full p-2 border rounded"
//         placeholder="Email"
//         value={form.email}
//         onChange={(e) => setForm({ ...form, email: e.target.value })}
//       />

//       <input
//         type="password"
//         className="w-full p-2 border rounded"
//         placeholder="New Password (optional)"
//         value={form.password}
//         onChange={(e) => setForm({ ...form, password: e.target.value })}
//       />

//       <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
//         Update
//       </button>
//     </form>
//   );
// }