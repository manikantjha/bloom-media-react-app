import React from "react";
import Hero from "../components/common/Hero";

export default function Home() {
  return (
    <div>
      <Hero
        heroImg="https://images.unsplash.com/photo-1657672733176-b48c9b0eec0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
        heroTitle="Comming Soon"
        heroDescription="The website is moving towards its final developments and will be live shortly. Can't wait to see you too! Till then..."
        btnText="Breath In... Breathe Out..."
        noBtn
      />
      {/* <About
        aboutTitle="About Bloom Media"
        aboutShortDescription="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, maxime!"
        showBtn
        aboutBtnText="Let's Talk"
      />
      <Work />
      <Services /> */}
      {/* <Contact /> */}
    </div>
  );
}
