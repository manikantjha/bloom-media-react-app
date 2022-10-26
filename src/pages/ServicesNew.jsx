import { Box } from "@mui/system";
import React from "react";
import HeroNew from "../components/commonNew/Hero";
import ServicesNewRowThree from "../components/servicesNew/ServicesNewRowThree";

export default function ServicesNew() {
  return (
    <div>
      <HeroNew imgSrc="/assets/images/services-hero.png" imgAlt="" />
      <Box sx={{ height: { xs: 93, md: 186 }, bgcolor: "#32949C" }} />
      <ServicesNewRowThree />
    </div>
  );
}
