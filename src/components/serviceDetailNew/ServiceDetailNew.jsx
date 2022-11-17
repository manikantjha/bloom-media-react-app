import { Box, Button, Grid, Hidden, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { serviceDescription, serviceImgs } from "../../data/data";

export default function ServiceDetailNew() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <Box sx={{ bgcolor: "#424242", pb: "80px" }}>
      <Container maxWidth="xl">
        <Hidden mdDown>
          <Box sx={{ py: 8 }}>
            <Grid container spacing={2}>
              {serviceImgs.map((img, index) => (
                <Grid
                  key={`${index} ${img[1]} ${Math.random()}`}
                  item
                  xs={12}
                  md={3}
                >
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ bgcolor: "#212121" }}
                    onClick={() => {
                      navigate(`/service/${index}`);
                    }}
                  >
                    {img[1] && img[1]}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Hidden>
        <Grid container spacing={2}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 290, md: 600 },
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={serviceImgs[id][0]}
                    alt=""
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography
                  variant="h2"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: { xs: "2rem", md: "4rem" },
                  }}
                >
                  {serviceImgs[id][1]}
                </Typography>
                <div style={{ color: "white" }}>{serviceDescription[id]}</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Hidden mdUp>
          <Box sx={{ py: 8 }}>
            <Grid container spacing={2}>
              {serviceImgs.map((img, index) => (
                <Grid key={index} item xs={12} md={3}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ bgcolor: "#424242" }}
                    onClick={() => {
                      navigate(`/service/${index}`);
                    }}
                  >
                    {img[1] && img[1]}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Hidden>
      </Container>
    </Box>
  );
}
