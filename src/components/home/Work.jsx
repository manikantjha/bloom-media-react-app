import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { WorkWrapper } from "../../assets/styles/home/WorkWrapper";

export default function Work() {
  return (
    <WorkWrapper>
      <Typography variant="h2" className="title">
        Work
      </Typography>
      <Grid container spacing={4}>
        {[...Array(9)].map((item, index) => (
          <Grid item key={index} xs={12} md={4}>
            <Box className="work-card">
              <img
                src="https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="work-image"
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </WorkWrapper>
  );
}
