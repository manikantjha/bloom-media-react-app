import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";

export default function ConciousCreativeCommunityRowTwo() {
  return (
    <Box sx={{ position: "relative", height: { xs: 400, md: 800 } }}>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src="/assets/images/contact-img.png"
          alt="Contact IMG"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: { xs: "75%", md: "40%" },
          transform: "translate(-50%, -50%)",
          bgcolor: "rgba(255,255,255,0.95)",
          padding: 4,
          borderRadius: 1,
        }}
      >
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField placeholder="Name" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField placeholder="Email" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField placeholder="Phone" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" sx={{ bgcolor: "#212121" }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}
