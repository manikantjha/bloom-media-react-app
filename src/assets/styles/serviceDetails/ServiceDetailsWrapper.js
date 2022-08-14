import { Box, styled } from "@mui/material";

export const ServiceDetailsWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  backgroundColor: "#424242",
  color: "white",
  "& .serviceTitle": {
    fontWeight: "bold",
  },
  "& .serviceDescription": {
    fontSize: "1.25rem",
  },
  "& .serviceImageWrapper": {
    width: "100%",
    overflow: "hidden",
    height: 800,
    "& img": {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
  },
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    "& .serviceImageWrapper": {
      height: 400,
      "& img": {
        height: 400,
        width: "auto",
      },
    },
  },
}));
