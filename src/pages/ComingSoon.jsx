import React from "react";
import Hero from "../components/common/Hero";
import QuickContact from "../components/quickContact/QuickContact";

export default function ComingSoon() {
  return (
    <div>
      <Hero
        heroImg="https://images.unsplash.com/photo-1657672733176-b48c9b0eec0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
        heroTitle="Coming Soon"
        heroDescription="The website is moving towards its final developments and will be live shortly. Can't wait to see you too! Till then..."
        btnText="Breath In... Breathe Out..."
        noBtn
      />
      <QuickContact />
    </div>
  );
}
