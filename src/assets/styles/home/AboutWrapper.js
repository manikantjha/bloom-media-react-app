import { Box, styled } from "@mui/material";

export const AboutWrapper = styled(Box)(({ theme }) => ({
  minHeight: "600px",
  width: "100%",
  backgroundColor: theme.palette.secondary.main,
  // Tablet
  [theme.breakpoints.down("md")]: {
    minHeight: "500px",
  },
}));
