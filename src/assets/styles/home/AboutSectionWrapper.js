import { Box, styled } from "@mui/material";

export const AboutSectionWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  backgroundColor: theme.palette.secondary.main,
  "& .aboutSectionTitle": {
    fontWeight: "bold",
    color: "white",
    marginBottom: theme.spacing(2),
  },
  "& .aboutSectionDescription": {
    color: "white",
    fontSize: `1.25rem`,
    marginBottom: theme.spacing(2.5),
    [theme.breakpoints.down("md")]: {
      fontSize: `1rem`,
    },
  },
  "& .aboutSectionBtn": {
    marginTop: theme.spacing(2.5),
  },
  "& .aboutSectionImgWrapper": {
    width: "100%",
    height: "100%",
    overflow: "hidden",

    borderRadius: theme.spacing(2),
    "& img": {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
  },
  // Tablet
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));
