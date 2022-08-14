import { Grid, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { SectionWrapper } from "../assets/styles/CommonStyles";
import { ServicesWrapper } from "../assets/styles/home/ServicesWrapper";
import Hero from "../components/common/Hero";
import ServiceCard from "../components/home/ServiceCard";
import { services } from "../data/services";

export default function Services() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Hero
        heroImg="https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        heroTitle="We Specialize In..."
        heroDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur impedit quisquam similique quis voluptatibus pariatur porro iure ratione iusto officia distinctio libero delectus odit, quibusdam dolores inventore, atque optio veritatis."
        btnText="Lets Talk"
      />
      <ServicesWrapper sx={{ bgcolor: theme.palette.secondary.light }}>
        <SectionWrapper sx={{ px: { xs: 2, md: 10 } }}>
          <Grid container spacing={isTablet ? 2 : 4}>
            {services.map((item, index) => (
              <Grid item key={index} xs={6} sm={4} md={4} lg={3}>
                <ServiceCard item={item} index={index} />
              </Grid>
            ))}
          </Grid>
        </SectionWrapper>
      </ServicesWrapper>
    </div>
  );
}
