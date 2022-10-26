import { Button, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import HeroNew from "../components/commonNew/Hero";
import HomeNewRowFive from "../components/homeNew/HomeNewRowFive";
import HomeNewRowFour from "../components/homeNew/HomeNewRowFour";
import HomeNewRowThree from "../components/homeNew/HomeNewRowThree";
import HomeNewRowTwo from "../components/homeNew/HomeNewRowTwo";

export default function HomeNew() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  function renderButton() {
    return (
      <Box
        sx={{
          position: "absolute",
          top: { xs: "50%", md: "75%" },
          left: { xs: "75%", md: "65%" },
          transform: {
            xs: "translate(-75%, -50%)",
            md: "translate(-75%, -65 %)",
          },
        }}
      >
        <Button
          variant="contained"
          size={isMobile ? "small" : "large"}
          sx={{
            bgcolor: "#D4244F",
            "&:hover": { bgcolor: "#D4244F" },
            whiteSpace: "pre",
          }}
          onClick={() => navigate("/services")}
        >
          Let's Start
        </Button>
      </Box>
    );
  }
  return (
    <div>
      <HeroNew
        imgSrc="/assets/images/bloom-home-hero.png"
        imgAlt="Home Hero Image"
        renderButton={renderButton}
      />
      <HomeNewRowTwo />
      <HomeNewRowThree />
      <HomeNewRowFour />
      <HomeNewRowFive />
    </div>
  );
}
