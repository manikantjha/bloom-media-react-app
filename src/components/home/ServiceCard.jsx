import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { ServiceCardWrapper } from "../../assets/styles/home/ServiceCardWrapper";

export default function ServiceCard() {
  return (
    <ServiceCardWrapper>
      <Box className="service-image-wrapper">
        <img
          src="https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="service-image"
        />
      </Box>
      <Box className="overlay" />
      <Box className="service-title-action">
        <Typography variant="h6" noWrap>
          Service Title Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Ipsa, rem!
        </Typography>
        <Button variant="outlined">Explore</Button>
      </Box>
    </ServiceCardWrapper>
  );
}
