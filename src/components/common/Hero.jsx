import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { HeroWrapper } from "../../assets/styles/home/HeroWrapper";

export default function Hero(props) {
  const {
    heroTitle,
    heroDescription,
    btnText,
    heroImg,
    isHome,
    noBtn,
    noOverlay,
  } = props;

  function renderButton() {
    if (noBtn) return;
    if (isHome)
      return (
        <Button variant="contained" size="large">
          {btnText}
        </Button>
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
      {!noOverlay && <Box className="image-overlay" />}
      <Container maxWidth="xl">
        <Box className="hero-message">
          {!!heroTitle && (
            <Typography variant="h2" className="messageTitle">
              {heroTitle}
            </Typography>
          )}
          {!!heroDescription && (
            <Typography variant="body1" className="messageDescription">
              {heroDescription}
            </Typography>
          )}
          {renderButton()}
        </Box>
      </Container>
    </HeroWrapper>
  );
}
