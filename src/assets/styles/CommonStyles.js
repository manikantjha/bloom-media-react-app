import { Box, styled } from "@mui/material";

export const SectionTitleWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
  "& .title": {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "3rem",
    fontWeight: "bold",
  },
  "& .short-description": {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "1.25rem",
    fontWeight: "light",
  },
  [theme.breakpoints.down("md")]: {
    "& .title": {
      fontSize: "1.75rem",
      fontWeight: "bold",
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
