import { Typography } from "@mui/material";
import React from "react";
import { AboutWrapper } from "../../assets/styles/about/AboutWrapper";

export default function Details() {
  return (
    <AboutWrapper>
      <Typography variant="h2" className="about-content">
        Description
      </Typography>
    </AboutWrapper>
  );
}
