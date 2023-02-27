import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tasks from "../Pages/Tasks";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import ProtectedRoute from "./Private";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Tasks />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
