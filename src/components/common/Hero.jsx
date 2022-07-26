import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { HeroWrapper } from "../../assets/styles/home/HeroWrapper";

export default function Hero(props) {
  const { heroTitle, heroDescription, btnText, heroImg, isHome, noBtn } = props;

  function renderButton() {
    if (noBtn) return;
    if (isHome)
      return (
        // <a
        //   // href="#contact-home"
        //   style={{ textDecoration: "none" }}
        // >
        <Button variant="contained" size="large">
          {btnText}
        </Button>
        // </a>
      );
    return (
      <Link to={`/contact`} style={{ textDecoration: "none" }}>
        <Button variant="contained" size="large">
          {btnText}
        </Button>
      </Link>
    );
  }

  return (
    <HeroWrapper>
      <img className="home-hero" src={heroImg} alt="hero" />
      <Box className="image-overlay" />
      <Container maxWidth="xl">
        <Box className="hero-message">
          <Typography variant="h2" className="messageTitle">
            {heroTitle}
          </Typography>
          <Typography variant="body1" className="messageDescription">
            {heroDescription}
          </Typography>
          {renderButton()}
        </Box>
      </Container>
    </HeroWrapper>
  );
}
