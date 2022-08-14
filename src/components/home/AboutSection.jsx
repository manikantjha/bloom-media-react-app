import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { SectionTitleWrapper } from "../../assets/styles/CommonStyles";
import { AboutSectionWrapper } from "../../assets/styles/home/AboutSectionWrapper";
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
                sx={{ textAlign: { xs: "center", md: "left !important" } }}
              >
                WHO IS BLOOM MEDIA?
              </Typography>
            </SectionTitleWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" className="aboutSectionDescription">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,
              explicabo veniam! Soluta rem voluptatibus magnam totam nihil
              recusandae quae ut illum earum excepturi explicabo assumenda at
              praesentium optio eius voluptatem, reprehenderit laboriosam vitae
              id perferendis, quaerat ad. Repellendus unde eos, animi ipsam
              libero consectetur suscipit iste, earum, in molestiae magnam!
            </Typography>
            <Typography variant="body1" className="aboutSectionDescription">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,
              explicabo veniam! Soluta rem voluptatibus magnam totam nihil
              recusandae quae ut illum earum excepturi explicabo assumenda at
              praesentium optio eius voluptatem, reprehenderit laboriosam vitae
              id perferendis, quaerat ad. Repellendus unde eos, animi ipsam
              libero consectetur suscipit iste, earum, in molestiae magnam!
            </Typography>
            <BloomButton className="aboutSectionBtn">Let's Talk</BloomButton>
          </Grid>
          {/* <Grid item xs={12} md={6}>
            <Box className="aboutSectionImgWrapper">
              <img
                src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                alt="about"
              />
            </Box>
          </Grid> */}
        </Grid>
      </Container>
    </AboutSectionWrapper>
  );
}
