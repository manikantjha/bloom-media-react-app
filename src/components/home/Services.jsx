import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { ServicesWrapper } from "../../assets/styles/home/ServicesWrapper";

export default function Services() {
  return (
    <ServicesWrapper>
      <Typography variant="h2" className="title">
        Services
      </Typography>
      <Grid container spacing={4}>
        {[...Array(12)].map((item, index) => (
          <Grid item key={index} xs={12} md={3}>
            <Box className="service-card">
              <img
                src="https://images.pexels.com/photos/937627/pexels-photo-937627.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="service-image"
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </ServicesWrapper>
  );
}
