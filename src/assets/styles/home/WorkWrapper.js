import { Box, styled } from "@mui/material";

export const WorkWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#424242",
  paddingLeft: theme.spacing(6),
  paddingRight: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));
