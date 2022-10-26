import { Box } from "@mui/material";
import React from "react";

export default function HeroNew(props) {
  const { imgSrc, imgAlt, renderButton } = props;
  return (
    <Box
      sx={{
        position: "relative",
        height: "auto",
        width: "100%",
      }}
    >
      <img
        src={imgSrc}
        alt={imgAlt}
        style={{
          width: "100%",
          objectFit: { xs: "cover", md: "cover" },
          display: "block",
        }}
      />
      {renderButton ? renderButton() : null}
    </Box>
  );
}
