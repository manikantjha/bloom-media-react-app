import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { SectionWrapperNew } from "../../assets/styles/CommonStyles";

export default function AboutUsRowTwo() {
  return (
    <Box>
      <SectionWrapperNew sx={{ bgcolor: "#19597d" }}>
        <Container maxWidth="lg">
          <Typography sx={{ color: "white", fontSize: { xs: 18, md: 26 } }}>
            Bloom is a branding agency full of creative designers & writers who
            are dead-set on making your brand stand out in the market. We're the
            rebels, we don't do everything by the book. Because we believe that
            your brand belongs on skyscrapers, not on bookshelves.
          </Typography>
          <br />
          <Typography sx={{ color: "white", fontSize: { xs: 18, md: 26 } }}>
            When you're ready to discuss your powerful brand idea, you know
            where to find us!
          </Typography>
          <br />
          <Typography sx={{ color: "white", fontSize: { xs: 18, md: 26 } }}>
            We're here when you're ready to talk about your powerful brand idea!
          </Typography>
        </Container>
      </SectionWrapperNew>
      <Box sx={{ bgcolor: "#F1983D", height: 186 }} />
    </Box>
  );
}
