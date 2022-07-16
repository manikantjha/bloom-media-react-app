import { Box, styled } from "@mui/material";

export const HeroWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "calc(100vh - 64px)",
  width: "100%",
  overflow: "hidden",
  "& .home-hero": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  "& .image-overlay": {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  "& .hero-message": {
    color: "white",
    position: "absolute",
    left: "15%",
    top: "50%",
    transform: "translate(-15%, -50%)",
    width: "40%",
    // textAlign: "center",
  },
  "& .messageTitle": {
    fontSize: "6rem",
    fontWeight: "bold",
  },
  "& .messageDescription": {
    fontSize: "1.25rem",
    fontWeight: "normal",
    marginTop: theme.spacing(2),
  },
  "& .hero-message button": {
    marginTop: theme.spacing(8),
    fontSize: "1.25rem",
    fontWeight: "bold",
    borderRadius: theme.spacing(4),
    textTransform: "capitalize",
  },
  // Tablet View Adjustments
  [theme.breakpoints.down("md")]: {
    height: "calc(80vh - 64px)",
    "& .hero-message": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "80%",
      textAlign: "center",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    "& .messageTitle": {
      fontSize: "4rem",
      fontWeight: "bold",
    },
    "& .messageDescription": {
      fontSize: "1rem",
      fontWeight: "normal",
      marginTop: theme.spacing(2),
    },
    "& .hero-message button": {
      marginTop: theme.spacing(8),
      fontSize: "1rem",
      fontWeight: "bold",
    },
  },
  // Mobile View Adjustments
  [theme.breakpoints.down("sm")]: {
    "& .messageTitle": {
      fontSize: "3rem",
      fontWeight: "bold",
    },
  },
}));
