import React from "react";
import { Hero } from "./Hero";
import { AboutSection } from "./AboutSection";
import { ProductsSection } from "./ProductsSection";
import { Footer } from "./Footer";

const LandingPage = () => (
  <div className="min-h-screen bg-white">
    <Hero />
    <AboutSection />
    <ProductsSection />
    <Footer />
  </div>
);

export { LandingPage };
