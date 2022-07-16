import { Box, styled } from "@mui/material";

export const ServicesWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#212121",
  padding: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));
