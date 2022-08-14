import React from "react";
import Hero from "../components/common/Hero";
import WorkImages from "../components/workDetails/WorkImages";
import WorkInfo from "../components/workDetails/WorkInfo";
export default function WorkDetails() {
  return (
    <div>
      <Hero
        heroImg={
          "https://images.unsplash.com/photo-1562577309-d67db487e6cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        }
        heroTitle="Lorem ipsum dolor sit amet."
        heroDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, quam."
        noBtn
      />
      <WorkInfo />
      <WorkImages />
    </div>
  );
}
