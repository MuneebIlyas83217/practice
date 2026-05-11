import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import CreateTodo from "./pages/CreateTodo";
import { Logout } from "./pages/Logout";
import GetTodo from "./pages/ViewTodo";
import Login from "./pages/Login";

function ProtectedRoute({ children }) {
  const storedUser = localStorage.getItem("authUser");

  if (!storedUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/todo" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/todo"
            element={
              <ProtectedRoute>
                <CreateTodo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/get-todo"
            element={
              <ProtectedRoute>
                <GetTodo />
              </ProtectedRoute>
            }
          />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
