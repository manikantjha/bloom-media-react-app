import { useTheme } from "@emotion/react";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import NavbarNewDesktopMenu from "./navbar/NavbarDesktopMenu";
import NavbarNewLogo from "./navbar/NavbarLogo";
import NavbarNewMobileMenu from "./navbar/NavbarMobileMenu";

const pages = [
  { link: `/`, page: "Home" },
  { link: `/about`, page: "About" },
  { link: `/services`, page: "Services" },
  { link: `/work`, page: "Work" },
  { link: `/concious-creative-community`, page: "Community" },
  { link: `/contact`, page: "Contact" },
];

export default function NavbarNew() {
  const theme = useTheme();

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: theme.palette.secondary.main,
          color: `${theme.palette.primary.main} !important`,
          zIndex: 1000,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <NavbarNewLogo />
            <NavbarNewMobileMenu pages={pages} />
            <NavbarNewDesktopMenu pages={pages} />
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
