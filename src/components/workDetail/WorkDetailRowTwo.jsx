import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { works } from "../../data/data";

export default function WorkDetailRowTwo() {
  const { id } = useParams();
  return (
    <Box sx={{ bgcolor: "#424242" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                p: 4,
              }}
            >
              <img
                src="/assets/images/work-detail-card.png"
                alt="work detail card"
                style={{ height: "auto", width: "100%" }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              px: { xs: 3, md: 6 },
              py: { xs: 0, md: 0 },
              height: "100%",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography>{works[id]?.rowTwoDesc}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              p: { xs: 4, md: 6 },
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Grid container spacing={2} justifyContent="flex-end">
              {works[id]?.rowTwoTags?.map((item, index) => (
                <Grid key={index} item xs={4} md={3} lg={2}>
                  <Box
                    sx={{
                      position: "relative",
                      height: { xs: 84, md: 168 },
                      width: { xs: 84, md: 168 },
                    }}
                  >
                    <img
                      src="/assets/images/bg-circle.png"
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                    <Typography
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        fontWeight: "bold",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
