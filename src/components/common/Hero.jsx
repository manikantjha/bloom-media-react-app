import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { HeroWrapper } from "../../assets/styles/home/HeroWrapper";
import { BASE_URL } from "../../constants/config";

export default function Hero(props) {
  const { heroTitle, heroDescription, btnText, heroImg, isHome } = props;
  return (
    <HeroWrapper>
      <img className="home-hero" src={heroImg} alt="hero" />
      <Box className="image-overlay" />
      <Box className="hero-message">
        <Container maxWidth="xl">
          <Typography variant="h2" className="messageTitle">
            {heroTitle}
          </Typography>
          <Typography variant="body1" className="messageDescription">
            {heroDescription}
          </Typography>
          {isHome ? (
            <a href="#contact-home" style={{ textDecoration: "none" }}>
              <Button variant="contained" size="large">
                {btnText}
              </Button>
            </a>
          ) : (
            <Link to={`${BASE_URL}/contact`} style={{ textDecoration: "none" }}>
              <Button variant="contained" size="large">
                {btnText}
              </Button>
            </Link>
          )}
        </Container>
      </Box>
    </HeroWrapper>
  );
}
