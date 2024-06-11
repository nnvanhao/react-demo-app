// src/App.js
import React from "react";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Toaster richColors position="top-right" />
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail-movie" element={<MovieDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
