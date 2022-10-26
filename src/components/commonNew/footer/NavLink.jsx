import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function NavLink(props) {
  if (!props.link) return null;
  return (
    <Link
      to={props.link}
      style={{
        textDecoration: "none",
        color: "#757575",
      }}
    >
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: "normal",
          textTransform: "uppercase",
          color: "#757575",
        }}
      >
        {props.linkText}
      </Typography>
    </Link>
  );
}
