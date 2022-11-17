import { Box, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SectionWrapperNew } from "../../assets/styles/CommonStyles";
import HomeSectionTitle from "../commonNew/HomeSectionTitle";

export default function HomeNewRowFour() {
  const workImages = [
    { url: "assets/images/home-work-1.png", id: 1 },
    { url: "assets/images/home-work-2.png", id: 0 },
  ];
  const navigate = useNavigate();
  return (
    <SectionWrapperNew sx={{ bgcolor: "#212121" }}>
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12}>
          <HomeSectionTitle title="our work" />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {workImages.map((image, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    height: { xs: 290, md: 584 },
                    width: "100%",
                    overflow: "hidden",
                    "&:hover": { cursor: "pointer" },
                  }}
                  onClick={() => {
                    navigate(`/work/${image.id}`);
                  }}
                >
                  <img
                    src={image.url}
                    alt=""
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapperNew>
  );
}
