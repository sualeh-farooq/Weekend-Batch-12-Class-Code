import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <BrowserRouter>
  // <App />
  // </BrowserRouter>

  <BrowserRouter>
    <Routes>

        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
    </Routes>
  </BrowserRouter>
);
