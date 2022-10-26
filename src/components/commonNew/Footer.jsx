import { Box, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import NavLink from "./footer/NavLink";
import { SectionWrapperNew } from "../../assets/styles/CommonStyles";
import { Link, useLocation } from "react-router-dom";
import { getFooterColor } from "../../utils/footerColor";
import FooterLogo from "./footer/FooterLogo";

export default function FooterNew() {
  const path = useLocation();

  return (
    <SectionWrapperNew sx={{ bgcolor: "#212121", p: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ mb: 4 }}>
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: "10rem",
                  lineHeight: "85%",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  color: getFooterColor(path.pathname),
                  m: 0,
                }}
              >
                con
                <br />
                ta
                <br />
                ct
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Box>
              <NavLink linkText="home" link="/" />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <NavLink linkText="about" link="/about" />
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "normal",
                  textTransform: "uppercase",
                  color: "#327CA5",
                  mx: 2,
                }}
              >
                |
              </Typography>
              <NavLink linkText="team" link="/about" />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <NavLink linkText="services" link="/services" />
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "normal",
                  textTransform: "uppercase",
                  color: "#327CA5",
                  mx: 2,
                }}
              >
                |
              </Typography>
              <NavLink linkText="work" link="/work" />
            </Box>
            <Box>
              <NavLink linkText="let't talk" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "start", md: "end" },
              alignItems: "end",
              height: "100%",
              mt: { xs: 1, md: 0 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "flex-start", md: "flex-end" },
              }}
            >
              <Box sx={{ mb: 2 }}>
                <FooterLogo />
              </Box>
              <Box>
                <FacebookIcon
                  sx={{ color: "#757575", mr: 1.5 }}
                  fontSize="large"
                />
                <InstagramIcon
                  sx={{ color: "#757575", mr: 1.5 }}
                  fontSize="large"
                />
                <LinkedInIcon sx={{ color: "#757575" }} fontSize="large" />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </SectionWrapperNew>
  );
}
