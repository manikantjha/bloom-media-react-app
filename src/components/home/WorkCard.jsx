import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { WorkCardWrapper } from "../../assets/styles/home/WorkCardWrapper";

export default function WorkCard(props) {
  const {
    // item,
    index,
  } = props;
  return (
    <WorkCardWrapper>
      <Box className="work-image-wrapper">
        <img
          src="https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="work-image"
        />
      </Box>
      <Box className="overlay" />
      <Box className="work-title-action">
        <Typography
          variant="h5"
          noWrap
          sx={{
            fontSize: { xs: "1rem", md: "2rem" },
            fontWeight: { xs: "bold", md: "normal" },
          }}
        >
          Work Title Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Ipsa, rem!
        </Typography>
        <Button variant="outlined">
          <Link
            to={`/work/${index}`}
            style={{ color: "white", textDecoration: "none" }}
          >
            Explore
          </Link>
        </Button>
      </Box>
    </WorkCardWrapper>
  );
}
