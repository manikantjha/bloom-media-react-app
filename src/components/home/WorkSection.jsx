import {
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  BtnWrapper,
  SectionTitleWrapper,
  SectionWrapper,
} from "../../assets/styles/CommonStyles";
import { WorkWrapper } from "../../assets/styles/home/WorkWrapper";
// import { BASE_URL } from "../../constants/config";
import WorkCard from "./WorkCard";

export default function WorkSection() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <WorkWrapper>
      <SectionWrapper>
        <Container maxWidth="xl">
          <SectionTitleWrapper>
            <Typography variant="h2" className="title">
              OUR WORK
            </Typography>
            <Typography variant="body1" className="short-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
              a.
            </Typography>
          </SectionTitleWrapper>
          <Grid container spacing={isTablet ? 2 : 4}>
            {[...Array(isTablet ? 4 : 3)].map((item, index) => (
              <Grid item key={index} xs={6} sm={4} md={4} lg={4}>
                <WorkCard />
              </Grid>
            ))}
            <Grid item xs={12}>
              <BtnWrapper>
                <Link to={`/work`} style={{ textDecoration: "none" }}>
                  <Button variant="contained" size="large">
                    See All
                  </Button>
                </Link>
              </BtnWrapper>
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>
    </WorkWrapper>
  );
}
