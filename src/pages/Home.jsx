import React from "react";
import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Hero from "../components/common/Hero";
import Services from "../components/home/Services";
import Work from "../components/home/Work";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Work />
      <Services />
      <Contact />
    </div>
  );
}
