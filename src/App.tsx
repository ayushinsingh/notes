import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css'
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Signup from './pages/Signup';
import AppLayout from './pages/AppLayout';

function App() {

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else if(savedTheme === "system") {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("light");
        }
      } else {
        document.documentElement.classList.remove("light");
      }
    }
  }, []);

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App
