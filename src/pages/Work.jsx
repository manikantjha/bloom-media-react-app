import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { WorkWrapper } from "../assets/styles/home/WorkWrapper";
import Hero from "../components/common/Hero";
import WorkCard from "../components/home/WorkCard";

export default function Work() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Hero
        heroImg="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        heroTitle="Our Recent Work"
        heroDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dolor sequi distinctio dicta sit cupiditate voluptatem quis ipsam vel dolores. Harum dolor sequi distinctio dicta sit cupiditate voluptatem quis ipsam vel dolores."
        btnText="Lets Talk"
      />
      <WorkWrapper>
        <Grid container spacing={isTablet ? 2 : 4}>
          {[...Array(12)].map((item, index) => (
            <Grid item key={index} xs={6} sm={4} md={4} lg={3}>
              <WorkCard />
            </Grid>
          ))}
        </Grid>
      </WorkWrapper>
    </div>
  );
}
