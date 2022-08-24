import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { SectionTitleWrapper } from "../../assets/styles/CommonStyles";
import { AboutSectionWrapper } from "../../assets/styles/home/AboutSectionWrapper";
import { home } from "../../data/home";
import BloomButton from "../common/BloomButton";

export default function AboutSection() {
  return (
    <AboutSectionWrapper>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SectionTitleWrapper sx={{ mb: `0px !important` }}>
              <Typography
                variant="h2"
                className="title"
                sx={{
                  textAlign: { xs: "left !important", md: "left !important" },
                }}
              >
                {home.about.title}
              </Typography>
            </SectionTitleWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" className="aboutSectionDescription">
              {home.about.description}
            </Typography>
            <Link
              to="/contact"
              style={{ textDecoration: "none", "&:active": { color: "white" } }}
            >
              <BloomButton className="aboutSectionBtn">
                {home.about.btnText}
              </BloomButton>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </AboutSectionWrapper>
  );
}
