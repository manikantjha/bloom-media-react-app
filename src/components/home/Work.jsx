import {
  Box,
  Button,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import {
  BtnWrapper,
  SectionTitleWrapper,
} from "../../assets/styles/CommonStyles";
import { WorkWrapper } from "../../assets/styles/home/WorkWrapper";
import WorkCard from "./WorkCard";

export default function Work() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <WorkWrapper>
      <SectionTitleWrapper>
        <Typography variant="h2" className="title">
          Our Work
        </Typography>
        <Typography variant="body1" className="short-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, a.
        </Typography>
      </SectionTitleWrapper>
      <Grid container spacing={isTablet ? 2 : 4}>
        {[...Array(4)].map((item, index) => (
          <Grid item key={index} xs={6} sm={4} md={4} lg={3}>
            <WorkCard />
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
    </WorkWrapper>
  );
}
