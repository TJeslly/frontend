import { Routes, Route, Link, Navigate } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import PaginaRastreo from "./pages/PaginaRastreo";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white">
        <div className="max-w-6xl mx-auto p-4 flex gap-4">
          <Link to="/admin" className="hover:underline">Admin</Link>
          <Link to="/rastreo" className="hover:underline">Rastreo</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/admin" />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/rastreo" element={<PaginaRastreo />} />
      </Routes>
    </div>
  );
}


