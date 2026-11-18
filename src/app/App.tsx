
import './App.css'
import Admin from "../pages/admin/Admin"
import Public from "../pages/public/Public"
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router";

function App() {
    const navLinks = [
        { name: "Public", path: "/" },
        { name: "Admin", path: "/admin" }
    ];

    return (
        <BrowserRouter>
            <nav>
                <NavLink to="/" end>
                    Employee page
                </NavLink>
                
                <NavLink to="/admin">
                    Admin page
                </NavLink>
            </nav>

            <Routes>
                <Route path="/" element={<Public />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
