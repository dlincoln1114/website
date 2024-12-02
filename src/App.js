import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div />
        <NavBar />
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="Product" element={<Product />} />
          <Route path="About" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
