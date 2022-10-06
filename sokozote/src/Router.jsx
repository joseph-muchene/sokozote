import React from "react";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Detail from "./pages/Core/Detail";
import Cart from "./pages/Core/Cart";
import Dashboard from "./pages/Admin/Dashboard";
import UserProfile from "./pages/user/UserProfile";
function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<UserProfile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
