import React, { useState } from "react";
import BloomButton from "../components/common/BloomButton";
import Hero from "../components/common/Hero";
import QuickContact from "../components/quickContact/QuickContact";

// bl00mMed!@
export default function ComingSoon() {
  const [open, setIsOpen] = useState(false);
  function renderButton() {
    return (
      <BloomButton variant="contained" size="large" onClick={toggle}>
        Register
      </BloomButton>
    );
  }

  function toggle() {
    setIsOpen(!open);
  }

  return (
    <div>
      <Hero
        heroImg="hero-banner-1.png"
        heroTitle="Coming Soon"
        heroDescription="The website is moving towards its final developments and will be live shortly. Can't wait to see you too! Till then..."
        renderButton={renderButton}
      />
      <Hero
        heroImg="hero-banner-2.jpg"
        noOverlay
        noBtn
        imgProps={{
          backgroundColor: "#424242",
          "& .home-hero": { objectFit: "cover !important" },
        }}
      />
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#424242",
        }}
      >
        {renderButton()}
      </Box> */}
      <QuickContact toggle={toggle} open={open} />
    </div>
  );
}
