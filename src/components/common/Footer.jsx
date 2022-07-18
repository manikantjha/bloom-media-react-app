import { Box, Container, Grid, List, ListItem } from "@mui/material";
import React from "react";
import { FooterWrapper } from "../../assets/styles/footer/FooterWrapper";
import { BASE_URL } from "../../constants/config";

export default function Footer() {
  return (
    <FooterWrapper>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Box sx={{ height: "60px", overflow: "hidden" }}>
              <img
                src={`${BASE_URL}/logo.svg`}
                alt="logo"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={3}>
            <List sx={{ color: "white" }}>
              <ListItem>Home</ListItem>
              <ListItem>About</ListItem>
              <ListItem>Services</ListItem>
              <ListItem>Work</ListItem>
              <ListItem>Contact</ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={3}>
            <List sx={{ color: "white" }}>
              <ListItem>bloommedia@gmail.com</ListItem>
              <ListItem>+91 55555 55555</ListItem>
              <ListItem>Ahmedabad, India, xxxxxx</ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  );
}
