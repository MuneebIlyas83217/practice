import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Logout } from "./pages/Logout";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;