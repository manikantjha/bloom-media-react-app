import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import {
  SectionTitleWrapper,
  SectionWrapper,
} from "../../assets/styles/CommonStyles";
import { AboutWrapper } from "../../assets/styles/home/AboutWrapper";

export default function About(props) {
  const { aboutTitle, aboutShortDescription, aboutDescription } = props;
  return (
    <AboutWrapper>
      <SectionWrapper>
        <Container maxWidth="xl">
          <SectionTitleWrapper>
            <Typography variant="h2" className="title">
              {aboutTitle}
            </Typography>
            <Typography variant="body1" className="short-description">
              {aboutShortDescription}
            </Typography>
          </SectionTitleWrapper>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              {aboutDescription && (
                <Typography
                  variant="body1"
                  color="white"
                  sx={{ fontSize: "1.25rem" }}
                >
                  {aboutDescription}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              {aboutDescription && (
                <Typography
                  variant="body1"
                  color="white"
                  sx={{ fontSize: "1.25rem" }}
                >
                  {aboutDescription}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>
    </AboutWrapper>
  );
}
