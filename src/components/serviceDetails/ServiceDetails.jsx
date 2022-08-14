import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { ServiceDetailsWrapper } from "../../assets/styles/serviceDetails/ServiceDetailsWrapper";
import { services } from "../../data/services";
import BloomButton from "../common/BloomButton";

export default function ServiceDetails() {
  const params = useParams();
  const service = services[params.id];

  console.log("service", service);

  return (
    <ServiceDetailsWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h2" className="serviceTitle">
              {service.title}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="serviceImageWrapper">
              <img src={service.image} alt={service.title} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" className="serviceDescription">
              {service.description}
            </Typography>
            <BloomButton sx={{ mt: 4 }}>Let's Talk</BloomButton>
          </Grid>
        </Grid>
      </Container>
    </ServiceDetailsWrapper>
  );
}
