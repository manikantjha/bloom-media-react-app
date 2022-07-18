import { Box, styled } from "@mui/material";

export const ServicesWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#424242",
  padding: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));
