import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { FooterWrapper } from "../../assets/styles/footer/FooterWrapper";

export default function Footer() {
  return (
    <FooterWrapper>
      <Container maxWidth="xl" sx={{ mb: 6 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: { xs: "45px", md: "60px" },
                overflow: "hidden",
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <img
                src={`/logo.svg`}
                alt="logo"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>
          {/* <Grid item xs={12} md={3}></Grid> */}
          {/* <Grid item xs={12} md={3}>
            <List sx={{ color: "white" }}>
              <ListItem>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Services
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Work
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Contact
                </Link>
              </ListItem>
            </List>
          </Grid> */}
          {/* <Grid item xs={12} md={3}>
            <List sx={{ color: "white" }}>
              <ListItem>bloommedia@gmail.com</ListItem>
              <ListItem>+91 12345 54321</ListItem>
              <ListItem>Ahmedabad, India, 320008</ListItem>
            </List>
          </Grid> */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <Box>
                <Typography variant="body1" color="white" sx={{ mt: 4 }}>
                  Copyright &copy; Bloom Media 2022
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* <Divider sx={{ borderColor: "#424242" }} />
      <Container maxWidth="xl">
        <Box>
          <Typography variant="body1" color="white" sx={{ mt: 4 }}>
            &copy;Bloom Media - 2022
          </Typography>
        </Box>
      </Container> */}
    </FooterWrapper>
  );
}
