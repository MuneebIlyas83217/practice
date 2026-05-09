import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import CreateTodo from "./pages/CreateTodo";
import { Logout } from "./pages/Logout";
import GetTodo from "./pages/ViewTodo";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateTodo />} />
          <Route path="/get-todo" element={<GetTodo />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;