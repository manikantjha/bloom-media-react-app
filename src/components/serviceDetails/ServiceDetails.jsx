import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { ServiceDetailsWrapper } from "../../assets/styles/serviceDetails/ServiceDetailsWrapper";
import { services } from "../../data/services";
import BloomButton from "../common/BloomButton";

export default function ServiceDetails() {
  const params = useParams();
  const service = services[params.id];

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
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                "&:active": { color: "white" },
                "&:visited": { color: "white" },
              }}
            >
              <BloomButton sx={{ mt: 4 }}>Let's Talk</BloomButton>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </ServiceDetailsWrapper>
  );
}
