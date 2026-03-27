import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Explorer from "./components/Explorer";
import RiskClassifier from "./components/RiskClassifier";
import Glossary from "./components/Glossary";
import About from "./components/About";
import Nav from "./components/Nav";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <BrowserRouter>
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/risk-classifier" element={<RiskClassifier />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
