import React from "react";
import Hero from "../components/common/Hero";
import ContactSection from "../components/home/Contact";

export default function Contact() {
  return (
    <div>
      <Hero
        heroImg="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"
        heroTitle="Interested?"
        heroDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dolor sequi distinctio dicta sit cupiditate voluptatem quis ipsam vel dolores. Harum dolor sequi distinctio dicta sit cupiditate voluptatem quis ipsam vel dolores."
        btnText="Lets Talk"
      />
      <ContactSection />
    </div>
  );
}
