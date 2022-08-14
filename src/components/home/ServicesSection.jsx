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
import { ServicesWrapper } from "../../assets/styles/home/ServicesWrapper";
import { services } from "../../data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ServicesWrapper>
      <SectionWrapper>
        <Container maxWidth="xl">
          <SectionTitleWrapper>
            <Typography variant="h2" className="title">
              OUR SERVICES
            </Typography>
            <Typography variant="body1" className="short-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              dolore?
            </Typography>
          </SectionTitleWrapper>
          <Grid container spacing={isTablet ? 2 : 4}>
            {services.slice(0, 3).map((item, index) => (
              <Grid item key={index} xs={6} sm={4} md={4} lg={4}>
                <ServiceCard item={item} index={index} />
              </Grid>
            ))}
            <Grid item xs={12}>
              <BtnWrapper>
                <Link to={`/services`} style={{ textDecoration: "none" }}>
                  <Button variant="contained" size="large">
                    See All
                  </Button>
                </Link>
              </BtnWrapper>
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>
    </ServicesWrapper>
  );
}
