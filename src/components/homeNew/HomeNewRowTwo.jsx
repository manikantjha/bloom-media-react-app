import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { SectionWrapperNew } from "../../assets/styles/CommonStyles";

export default function HomeNewRowTwo() {
  return (
    <SectionWrapperNew sx={{ bgcolor: "#212121", color: "#ffffff" }}>
      <Container maxWidth="xl">
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", top: 0, left: 0 }}>
            <img
              src="/assets/images/cross-border-top-left.png"
              alt=""
              style={{ height: 50 }}
            />
          </Box>
          <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
            <img
              src="/assets/images/cross-border-bottom-right.png"
              alt=""
              style={{ height: 50 }}
            />
          </Box>
          <Box sx={{ p: 5 }}>
            <Typography sx={{ fontSize: { xs: 18, md: 26 } }}>
              Bloom is a boutique agency full of creative designers & writers
              who are dead-set on making your brand stand out in the market.
              It's the science of marketing and the art of creating emotional
              resonance through design and copy - yes, that's us!
            </Typography>
            <br />
            <Typography sx={{ fontSize: { xs: 18, md: 26 } }}>
              We don't believe in “one-size-fits-all”. Each brand is unique, and
              so should be their design and messaging. So, If you need a strong
              brand presence, an authentic and creative brand identity, or
              engaging and high-converting marketing campaigns, we're your go-to
              team!
            </Typography>
            <br />
            <Typography sx={{ fontSize: { xs: 18, md: 26 } }}>
              Let's get started!
            </Typography>
          </Box>
        </Box>
      </Container>
    </SectionWrapperNew>
  );
}
