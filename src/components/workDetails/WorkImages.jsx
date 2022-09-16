import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { WorkImagesWrapper } from "../../assets/styles/workDetails/WorkImagesWrapper";

export default function WorkImages() {
  const isBelowMd = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <WorkImagesWrapper>
      <Container maxWidth="xl">
        <Grid container spacing={isBelowMd ? 2 : 6}>
          <Grid item xs={12}>
            <Box className="workImgLargeWrapper">
              <img
                src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1466&q=80"
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="workImgSmallWrapper">
              <img
                src="https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="workImgSmallWrapper">
              <img
                src="https://images.unsplash.com/photo-1541367777708-7905fe3296c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1495&q=80"
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className="workImgLargeWrapper">
              <img
                src="https://images.unsplash.com/photo-1622227920933-7fcd7377703f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </WorkImagesWrapper>
  );
}
