import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components//ScrollToTop";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Category from "./components/pages/Category";
import Contact from "./components/pages/Contact";
import Navbar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
