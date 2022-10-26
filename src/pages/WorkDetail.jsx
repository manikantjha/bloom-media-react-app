import { Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import HeroNew from "../components/commonNew/Hero";
import WorkDetailRowTwo from "../components/workDetail/WorkDetailRowTwo";
import { works } from "../data/data";

export default function WorkDetail() {
  const { id } = useParams();
  return (
    <div>
      <HeroNew imgSrc={works[id]?.heroImg} />
      <WorkDetailRowTwo />
      {works[id]?.rowImages.map((src, index) => (
        <Box
          key={index}
          sx={{ width: "100%", height: "auto", overflow: "hidden" }}
        >
          <img
            src={src}
            alt=""
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>
      ))}
    </div>
  );
}
