import { Box, styled } from "@mui/material";

export const ContactWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#424242",
  padding: theme.spacing(4),
  "& .form-wrapper": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  "& .form-wrapper .form-inner-wrapper": {
    // width: "50%",
    display: "flex",
    flexDirection: "column",
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
    "& .form-wrapper .form-inner-wrapper": {
      // width: "100%",
    },
  },
}));
