import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Link } from "react-router-dom";

export default function NavbarNewMobileMenu(props) {
  const { pages } = props;
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          width: "100%",
          textAlign: "right",
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
        >
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: {
              xs: "block",
              md: "none",
              ml: 2,
              "& .MuiMenu-paper": {
                backgroundColor: "#424242",
                minWidth: 200,
              },
            },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page.page} onClick={handleCloseNavMenu}>
              <Link
                to={page.link}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{
                    textDecoration: "none !important",
                    color: "white !important",
                  }}
                >
                  {page.page}
                </Typography>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </div>
  );
}
