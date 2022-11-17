import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SectionWrapperNew } from "../../assets/styles/CommonStyles";
import { serviceImgs } from "../../data/data";

export default function ServicesNewRowThree() {
  const navigate = useNavigate();
  return (
    <SectionWrapperNew sx={{ bgcolor: "#424242" }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {serviceImgs.map((img, index) => (
            <Grid key={index} item xs={12} md={4} lg={3}>
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 290, md: 600 },
                  overflow: "hidden",
                  "&:hover": { cursor: "pointer" },
                }}
                onClick={() => navigate(`/service/${index}`)}
              >
                <img
                  src={img[0]}
                  alt={img[1]}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapperNew>
  );
}
