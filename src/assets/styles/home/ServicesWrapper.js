import { Box, styled } from "@mui/material";

export const ServicesWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  // paddingLeft: theme.spacing(6),
  // paddingRight: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    // paddingLeft: theme.spacing(2),
    // paddingRight: theme.spacing(2),
  },
}));
