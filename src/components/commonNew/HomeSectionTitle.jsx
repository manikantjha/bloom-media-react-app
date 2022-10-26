import { Box, Typography } from "@mui/material";
import React from "react";

export default function HomeSectionTitle(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "baseline" }}>
      <Box
        sx={{
          height: { xs: "2.5rem", md: "6rem" },
          width: { xs: 16, md: "32px" },
          bgcolor: "orange",
          mr: 2,
        }}
      />
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "3rem", md: "8rem" },
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "white",
        }}
      >
        {props.title}
      </Typography>
    </Box>
  );
}
