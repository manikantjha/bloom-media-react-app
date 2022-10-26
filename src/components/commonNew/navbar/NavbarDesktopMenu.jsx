import { Box, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavbarNewDesktopMenu(props) {
  const { pages } = props;
  const path = useLocation();

  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      {pages.map((page, index) => {
        return (
          <Link
            key={page.page}
            to={page.link}
            style={{ textDecoration: "none" }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                my: 2,
                color: "white",
                textDecoration:
                  path.pathname === page.link ? "underline" : "none",
                display: "block",
                mr: index < pages.length - 1 ? 4 : 0,
              }}
            >
              {page.page}
            </Typography>
          </Link>
        );
      })}
    </Box>
  );
}
