import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Welcome } from "./components/Welcome";
import { About } from "./components/About";
import { Dashboard } from "./components/Dashboard";
import { Breadcrumb } from "./components/Breadcrumb";
import "./styles.css";
import { ProductDetail } from "./components/ProductDetail";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Breadcrumb />
        <main>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard/*" element={<Dashboard />}></Route>
            <Route
              path="/dashboard/:productId"
              element={<ProductDetail />}
            ></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}
