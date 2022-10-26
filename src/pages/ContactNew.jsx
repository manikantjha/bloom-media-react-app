import React, { useState } from "react";
import HeroNew from "../components/commonNew/Hero";
import QuickContact from "../components/quickContact/QuickContact";

export default function ContactNew() {
  const [open, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!open);
  }

  return (
    <div>
      <HeroNew imgSrc="/assets/images/contact-hero.png" imgAlt="" />
      <QuickContact toggle={toggle} open={open} />
    </div>
  );
}
