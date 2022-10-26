import { Box, Grid } from "@mui/material";
import React from "react";
import { SectionWrapperNew } from "../../assets/styles/CommonStyles";
import HomeSectionTitle from "../commonNew/HomeSectionTitle";

export default function HomeNewRowFour() {
  return (
    <SectionWrapperNew sx={{ bgcolor: "#212121" }}>
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12}>
          <HomeSectionTitle title="our work" />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: { xs: 406, md: 812 },
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src="assets/images/home-work-1.png"
                  alt=""
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: { xs: 406, md: 812 },
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src="assets/images/home-work-2.png"
                  alt=""
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: { xs: 406, md: 812 },
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src="assets/images/home-work-2.png"
                  alt=""
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: { xs: 406, md: 812 },
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src="assets/images/home-work-1.png"
                  alt=""
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapperNew>
  );
}
