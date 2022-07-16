import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { HeroWrapper } from "../../assets/styles/home/HeroWrapper";

export default function Hero(props) {
  const { heroTitle, heroDescription, btnText, heroImg } = props;
  return (
    <HeroWrapper>
      <img className="home-hero" src={heroImg} alt="hero" />
      <Box className="image-overlay" />
      <Box className="hero-message">
        <Typography variant="h2" className="messageTitle">
          {heroTitle}
        </Typography>
        <Typography variant="body1" className="messageDescription">
          {heroDescription}
        </Typography>
        <Button variant="contained" size="large">
          {btnText}
        </Button>
      </Box>
    </HeroWrapper>
  );
}
