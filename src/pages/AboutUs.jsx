import React from "react";
import AboutUsRowThree from "../components/aboutUs/AboutUsRowThree";
import AboutUsRowTwo from "../components/aboutUs/AboutUsRowTwo";
import HeroNew from "../components/commonNew/Hero";

export default function AboutUsNew() {
  return (
    <div>
      <HeroNew imgSrc="assets/images/about-us-hero.png" imgAlt="" />
      <AboutUsRowTwo />
      <AboutUsRowThree />
    </div>
  );
}
