import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import {
  BtnWrapper,
  SectionTitleWrapper,
} from "../../assets/styles/CommonStyles";
import { ServicesWrapper } from "../../assets/styles/home/ServicesWrapper";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ServicesWrapper>
      <SectionTitleWrapper>
        <Typography variant="h2" className="title">
          Services
        </Typography>
        <Typography variant="body1" className="short-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dolore?
        </Typography>
      </SectionTitleWrapper>
      <Grid container spacing={isTablet ? 2 : 4}>
        {[...Array(4)].map((item, index) => (
          <Grid item key={index} xs={6} sm={4} md={4} lg={3}>
            <ServiceCard />
          </Grid>
        ))}
        <Grid item xs={12}>
          <BtnWrapper>
            <Button variant="contained" size="large">
              See All
            </Button>
          </BtnWrapper>
        </Grid>
      </Grid>
    </ServicesWrapper>
  );
}
