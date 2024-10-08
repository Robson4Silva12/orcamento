import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./Pages/Login"

export function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/home"
                element={<Home />
                }
            />
            <Route
                path="/login"
                element={<Login />
                }
            />
        </Routes>
    );
}