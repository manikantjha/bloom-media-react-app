import { Box, styled } from "@mui/material";

export const SectionTitleWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(0),
  marginBottom: theme.spacing(10),
  "& .title": {
    color: "#ffffff",
    textAlign: "center",
    // fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(2.5),
  },
  "& .short-description": {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "1.25rem",
    fontWeight: "light",
  },
  // Tablet
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(5),
    "& .title": {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: theme.spacing(1.25),
    },
    "& .short-description": {
      fontSize: "1rem",
      fontWeight: "light",
    },
  },
}));

export const BtnWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
  "& button": {
    fontSize: "1.15rem",
    textTransform: "capitalize",
    fontWeight: "bold",
    borderRadius: theme.spacing(4),
    minWidth: 130,
    backgroundImage:
      "linear-gradient(45deg, #2d9599, #a7226e, #ec2848, #f26b37, #f7db4e)",
    color: "white",
  },
}));

export const BloomButtonWrapper = styled(Box)(({ theme }) => ({
  "& button": {
    fontSize: "1.15rem",
    textTransform: "capitalize",
    fontWeight: "bold",
    borderRadius: theme.spacing(4),
    minWidth: 130,
    backgroundImage:
      "linear-gradient(45deg, #2d9599, #a7226e, #ec2848, #f26b37, #f7db4e)",
    color: "white",
  },
}));

export const SectionWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));
