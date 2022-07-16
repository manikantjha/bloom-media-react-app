import React from "react";
import About from "../components/common/About";
import Contact from "../components/home/Contact";
import Hero from "../components/common/Hero";
import Services from "../components/home/Services";
import Work from "../components/home/Work";

export default function Home() {
  return (
    <div>
      <Hero
        heroImg="https://images.unsplash.com/photo-1657672733176-b48c9b0eec0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
        heroTitle="Bloom Media"
        heroDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur impedit quisquam similique quis voluptatibus pariatur porro iure ratione iusto officia distinctio libero delectus odit, quibusdam dolores inventore, atque optio veritatis."
        btnText="Lets Talk"
      />

      <About
        aboutTitle="About Bloom Media"
        aboutShortDescription="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, maxime!"
        showBtn
        aboutBtnText="Let's Talk"
      />
      <Work />
      <Services />
      <Contact />
    </div>
  );
}
