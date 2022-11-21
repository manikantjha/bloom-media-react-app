import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { SectionWrapperNew } from "../../assets/styles/CommonStyles";

export default function AboutUsRowThree() {
  const arrTeam = [
    {
      id: 0,
      name: "MJ",
      designation: "Principal",
      url: "/assets/images/team/member-01.svg",
    },
    {
      id: 1,
      name: "Priya",
      designation: "Creative Director",
      url: "/assets/images/team/member-02.svg",
    },
    {
      id: 2,
      name: "Neeraj",
      designation: "Senior Designer",
      url: "/assets/images/team/member-03.svg",
    },
    {
      id: 3,
      name: "Ayaz",
      designation: "Creative Starategist",
      url: "/assets/images/team/member-04.svg",
    },
    {
      id: 4,
      name: "Aayushi",
      designation: "Social Media Analyst",
      url: "/assets/images/team/member-05.svg",
    },
    {
      id: 5,
      name: "Anushka",
      designation: "Designer & Copywriter",
      url: "/assets/images/team/member-06.svg",
    },
    {
      id: 6,
      name: "Punit",
      designation: "Designer",
      url: "/assets/images/team/member-07.svg",
    },
  ];
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
              {arrTeam.map((member, index) => (
                <Grid item xs={12} md={6} key={member.id}>
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
                        src={member.url}
                        alt={member.name}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <Box sx={{ ml: 2 }}>
                      <Typography sx={{ fontWeight: "bold", color: "white" }}>
                        {member.name}
                      </Typography>
                      <Typography sx={{ fontWeight: "normal", color: "white" }}>
                        {member.designation}
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
