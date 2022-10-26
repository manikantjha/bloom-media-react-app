import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { SectionWrapperNew } from "../../assets/styles/CommonStyles";

export default function AboutUsRowThree() {
  return (
    <SectionWrapperNew sx={{ bgcolor: "#424242", p: 10 }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: { xs: "2.5rem", md: "6rem" },
                color: "#F1983D",
              }}
            >
              League
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {[...Array(6)].map((_, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        height: 150,
                        width: 150,
                        overflow: "hidden",
                        border: "solid #212121 6px",
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Clipart.png"
                        alt=""
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <Box sx={{ ml: 2 }}>
                      <Typography sx={{ fontWeight: "bold", color: "white" }}>
                        Dhavl Patel
                      </Typography>
                      <Typography sx={{ fontWeight: "normal", color: "white" }}>
                        Sr. Animator
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapperNew>
  );
}
