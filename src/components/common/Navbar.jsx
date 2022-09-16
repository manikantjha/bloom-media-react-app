import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";

// const pages = [
//   { link: `/`, page: "Home" },
//   { link: `/about`, page: "About" },
//   { link: `/services`, page: "Services" },
//   { link: `/work`, page: "Work" },
//   { link: `/contact`, page: "Contact" },
// ];

const pages = [
  { link: `/`, page: "Home" },
  { link: `/`, page: "About" },
  { link: `/`, page: "Services" },
  { link: `/`, page: "Work" },
  { link: `/`, page: "Contact" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: theme.palette.secondary.main,
        color: `${theme.palette.primary.main} !important`,
        zIndex: 1000,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <img
            src="/logo.svg"
            alt="logo"
            style={{ width: "100px", height: "auto" }}
          />
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 4 }}>
            {pages.map((page) => (
              <Link
                key={page.page}
                to={page.link}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="subtitle1"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    mr: 4,
                  }}
                >
                  {page.page}
                </Typography>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
