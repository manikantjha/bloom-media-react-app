import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import {
  BtnWrapper,
  SectionTitleWrapper,
  SectionWrapper,
} from "../../assets/styles/CommonStyles";
import { ContactWrapper } from "../../assets/styles/home/ContactWrapper";

export default function Contact() {
  return (
    <ContactWrapper id="contact-home">
      <SectionWrapper>
        <Container maxWidth="md">
          <SectionTitleWrapper>
            <Typography variant="h2" className="title">
              Contact Us
            </Typography>
            <Typography variant="body1" className="short-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum,
              nobis?
            </Typography>
          </SectionTitleWrapper>
          <Box className="form-wrapper">
            <Box className="form-inner-wrapper">
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="filled"
                    InputLabelProps={{ sx: { color: "#bdbdbd" } }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="filled"
                    InputLabelProps={{ sx: { color: "#bdbdbd" } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="filled"
                    InputLabelProps={{ sx: { color: "#bdbdbd" } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    minRows={4}
                    label="Message"
                    variant="filled"
                    InputLabelProps={{ sx: { color: "#bdbdbd" } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <BtnWrapper>
                    <Button variant="contained" size="large">
                      Submit
                    </Button>
                  </BtnWrapper>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </SectionWrapper>
    </ContactWrapper>
  );
}
