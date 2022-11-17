import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SectionWrapperNew } from "../../assets/styles/CommonStyles";

export default function HomeNewRowThree() {
  const navigate = useNavigate();
  return (
    <SectionWrapperNew
      sx={{
        position: "relative",
        height: { xs: "40vh", md: "70vh" },
        width: "auto",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
        <img
          src="/assets/images/home-page-row-three.png"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box sx={{ height: "100%", width: "100%", position: "relative" }}>
        <Button
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            color: "white",
            fontSize: { xs: "1.25rem", md: "2rem" },
          }}
          onClick={(e) => {
            navigate("/services");
          }}
        >
          Explore
        </Button>
        <Button
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            color: "white",
            fontSize: { xs: "1.25rem", md: "2rem" },
          }}
          onClick={(e) => {
            navigate("/about");
          }}
        >
          About
        </Button>
      </Box>
    </SectionWrapperNew>
  );
}
