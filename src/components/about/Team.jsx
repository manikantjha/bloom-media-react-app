import {
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { TeamWrapper } from "../../assets/styles/about/TeamWrapper";
import { SectionTitleWrapper } from "../../assets/styles/CommonStyles";
import TeamMember from "./TeamMember";

export default function Team() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <TeamWrapper>
      <Container maxWidth="xl">
        <SectionTitleWrapper sx={{ mt: `0px !important` }}>
          <Typography variant="h2" className="title">
            Meet Our Team
          </Typography>
          <Typography variant="body1" className="short-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum,
            nobis?
          </Typography>
        </SectionTitleWrapper>
        <Grid container spacing={isTablet ? 2 : 4}>
          {[...Array(8)].map((item, index) => (
            <Grid
              item
              xs={6}
              sm={6}
              md={3}
              key={index}
              className="team-member-wrapper"
            >
              <TeamMember />
            </Grid>
          ))}
        </Grid>
      </Container>
    </TeamWrapper>
  );
}
