import { Typography } from "@mui/material";
import React from "react";
import { AboutWrapper } from "../../assets/styles/about/AboutWrapper";

export default function Details() {
  return (
    <AboutWrapper>
      <Typography variant="h2">About Bloom Media</Typography>
      <Typography variant="body1" className="about-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A praesentium
        vel earum beatae voluptatem optio id iste eum eligendi. Repellat hic est
        facere laudantium ipsa beatae sint id quisquam aliquid, quaerat natus
        quis, ullam, in ipsum! Vel est deleniti iure, quos unde aliquid nam
        recusandae repellendus sit et voluptatibus deserunt!
      </Typography>
    </AboutWrapper>
  );
}
