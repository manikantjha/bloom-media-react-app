import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AboutWrapper } from "../../assets/styles/home/AboutWrapper";

export default function About() {
  return (
    <AboutWrapper>
      <Box className="about-content">
        <Typography variant="h1">About Bloom Media</Typography>
      </Box>
    </AboutWrapper>
  );
}
