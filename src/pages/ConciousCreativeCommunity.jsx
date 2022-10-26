import { Box, Hidden, Typography } from "@mui/material";
import React from "react";
import HeroNew from "../components/commonNew/Hero";
import ConciousCreativeCommunityRowTwo from "../components/conciousCreativeCommunity/ConciousCreativeCommunityRowTwo";

export default function ConciousCreativeCommunity() {
  return (
    <div>
      <Box sx={{ position: "relative" }}>
        <HeroNew imgSrc="/assets/images/ccc.png" imgAlt="" />
        <Hidden mdDown>
          <Typography
            sx={{
              fontSize: { xs: 18, md: 26 },
              color: "white",
              position: "absolute",
              top: "50%",
              left: { xs: "50%", md: "75%" },
              width: { xs: "80%", md: 500 },
              transform: {
                xs: "translate(-50%, -75%)",
                md: "translate(-50%, -75%)",
              },
            }}
          >
            Conscious Creative Community is a community dedicated to preserving
            creativity and fostering artistry. It allows creative writers and
            designers to thrive together. It's an opportunity for them to learn
            from others and progress professionally.
          </Typography>
        </Hidden>
      </Box>
      <Hidden mdDown>
        <Box sx={{ height: 186, bgcolor: "#322F2F" }} />
      </Hidden>
      <Hidden mdUp>
        <Box sx={{ px: 3, py: 6, bgcolor: "#322F2F" }}>
          <Typography
            sx={{
              fontSize: { xs: 18, md: 26 },
              color: "white",
              width: { xs: "80%", md: 500 },
            }}
          >
            Conscious Creative Community is a community dedicated to preserving
            creativity and fostering artistry. It allows creative writers and
            designers to thrive together. It's an opportunity for them to learn
            from others and progress professionally.
          </Typography>
        </Box>
      </Hidden>

      <ConciousCreativeCommunityRowTwo />
    </div>
  );
}
