import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import CategoryPage from "./pages/CategoryPage";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import Certificates from "./pages/Certificates";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />

        {/* ✅ FIXED PARAM NAME */}
        <Route path="/category/:type" element={<CategoryPage />} />

        <Route path="/certificates" element={<Certificates />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificates" element={<Certificates />} />

        {/* PRODUCT DETAILS */}
        <Route path="/product/:name" element={<ProductDetail />} />
      </Routes>

    </Router>
  );
}

export default App;