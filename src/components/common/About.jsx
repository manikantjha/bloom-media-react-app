import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import {
  SectionTitleWrapper,
  SectionWrapper,
} from "../../assets/styles/CommonStyles";
import { AboutWrapper } from "../../assets/styles/home/AboutWrapper";
import { about } from "../../data/about";

export default function About() {
  return (
    <AboutWrapper>
      <SectionWrapper>
        <Container maxWidth="xl">
          <SectionTitleWrapper>
            <Typography
              variant="h2"
              className="title"
              sx={{ textAlign: "left !important" }}
            >
              {about.title}
            </Typography>
            {/* <Typography variant="body1" className="short-description">
              {aboutShortDescription}
            </Typography> */}
          </SectionTitleWrapper>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                color="white"
                sx={{ fontSize: "1.25rem" }}
              >
                {about.description}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>
    </AboutWrapper>
  );
}
