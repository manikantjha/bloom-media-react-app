import { Container, Typography } from "@mui/material";
import React from "react";
import {
  SectionTitleWrapper,
  SectionWrapper,
} from "../../assets/styles/CommonStyles";
import { AboutWrapper } from "../../assets/styles/home/AboutWrapper";

export default function About(props) {
  const { aboutTitle, aboutShortDescription } = props;
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
        </Container>
      </SectionWrapper>
    </AboutWrapper>
  );
}
