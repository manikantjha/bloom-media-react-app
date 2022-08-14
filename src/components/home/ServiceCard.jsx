import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ServiceCardWrapper } from "../../assets/styles/home/ServiceCardWrapper";

export default function ServiceCard(props) {
  const { item, index } = props;

  return (
    <ServiceCardWrapper>
      <Box className="service-image-wrapper">
        <img src={item?.image} alt={item?.title} className="service-image" />
      </Box>
      <Box className="overlay" />
      <Box className="service-title-action">
        <Typography
          variant="h5"
          noWrap
          sx={{
            fontSize: { xs: "1rem", md: "2rem" },
            fontWeight: { xs: "bold", md: "normal" },
          }}
        >
          {item?.title}
        </Typography>
        <Button variant="outlined">
          <Link
            to={`/service/${index}`}
            style={{ color: "white", textDecoration: "none" }}
          >
            Explore
          </Link>
        </Button>
      </Box>
    </ServiceCardWrapper>
  );
}
