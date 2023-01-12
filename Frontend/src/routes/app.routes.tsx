import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormRegisterHotel } from "../Pages/RegisterHotel";
import { CreateAccount } from "../Pages/CreateAccount";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<CreateAccount />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/register-hotel" element={<FormRegisterHotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}
