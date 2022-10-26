import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import HeroNew from "../components/commonNew/Hero";

export default function WorkNew() {
  const works = ["/assets/images/work-1.png", "/assets/images/work-2.png"];
  const navigate = useNavigate();
  return (
    <div>
      <HeroNew imgSrc="/assets/images/our-work-hero.png" imgAlt="" />
      <Box sx={{ height: { xs: 93, md: 186 }, bgcolor: "#F1983D" }} />
      <Box>
        {works.map((work, index) => (
          <Box
            key={index}
            sx={{
              Width: "100%",
              height: "100%",
              overflow: "hidden",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/work/${index}`)}
          >
            <img
              src={work}
              alt={`work-${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        ))}
      </Box>
    </div>
  );
}
