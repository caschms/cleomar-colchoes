import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

// Main landing page component
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;