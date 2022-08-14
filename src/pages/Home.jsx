import React from "react";
import Hero from "../components/common/Hero";
import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";
import ServicesSection from "../components/home/ServicesSection";
import WorkSection from "../components/home/WorkSection";
import { home } from "../data/home";

export default function Home() {
  return (
    <div>
      <Hero
        heroImg={home.hero.image}
        heroTitle={home.hero.title}
        heroDescription={home.hero.description}
        noBtn
      />
      <AboutSection />
      <WorkSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
