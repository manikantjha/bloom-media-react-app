import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { TeamWrapper } from "../../assets/styles/about/TeamWrapper";
import TeamMember from "./TeamMember";

export default function Team() {
  return (
    <TeamWrapper>
      <Box>
        <Typography variant="h2" className="title">
          Team
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {[...Array(8)].map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
            className="team-member-wrapper"
          >
            <TeamMember />
          </Grid>
        ))}
      </Grid>
    </TeamWrapper>
  );
}
