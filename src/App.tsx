import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Login } from "./pages/Login";
import { Forget } from "./pages/Forget";
import { Registration } from "./pages/Registration";
import { ResetPwd } from "./pages/ResetPwd";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/forget" element={<Forget />} />
      <Route path="/reset" element={<ResetPwd />} />
    </Routes>
  );
}

export default App;
