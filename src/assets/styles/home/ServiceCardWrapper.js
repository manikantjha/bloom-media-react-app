import { Box, styled } from "@mui/material";

export const ServiceCardWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.spacing(2),
  overflow: "hidden",
  "& .service-image-wrapper": {
    height: 400,
    width: "100%",
    backgroundColor: "#bdbdbd",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  "& .service-image": {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  "& .service-title-action": {
    position: "absolute",
    bottom: "5%",
    left: "50%",
    transform: "translate(-50%,-5%)",
    color: "white",
    width: "80%",
    textAlign: "center",
  },
  "& .service-title-action button": {
    marginTop: theme.spacing(2),
    borderRadius: theme.spacing(4),
    textTransform: "capitalize",
  },
  "& .overlay": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.65))",
  },
  [theme.breakpoints.down("xl")]: {
    "& .service-image-wrapper": {
      height: 350,
    },
  },
  [theme.breakpoints.down("lg")]: {
    "& .service-image-wrapper": {
      height: 300,
    },
  },
  [theme.breakpoints.down("md")]: {
    "& .service-image-wrapper": {
      height: 250,
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& .service-image-wrapper": {
      height: 200,
    },
  },
}));
