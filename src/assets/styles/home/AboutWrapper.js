import { Box, styled } from "@mui/material";

export const AboutWrapper = styled(Box)(({ theme }) => ({
  height: "600px",
  width: "100%",
  overflow: "hidden",
  backgroundColor: theme.palette.secondary.main,
  position: "relative",
  [theme.breakpoints.down("md")]: {
    height: "500px",
  },
}));
