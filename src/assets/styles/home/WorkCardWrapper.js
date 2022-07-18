import { Box, styled } from "@mui/material";

export const WorkCardWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.spacing(2),
  overflow: "hidden",
  "& .work-image-wrapper": {
    height: 400,
    width: "100%",
    backgroundColor: "#bdbdbd",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  "& .work-image": {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  "& .work-title-action": {
    position: "absolute",
    bottom: "5%",
    left: "50%",
    transform: "translate(-50%,-5%)",
    color: "white",
    width: "80%",
    textAlign: "center",
  },
  "& .work-title-action button": {
    marginTop: theme.spacing(2),
    textTransform: "capitalize",
    background: `
      linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.75)) padding-box, 
      linear-gradient(45deg, #2d9599, #a7226e, #ec2848, #f26b37, #f7db4e) border-box`,
    borderRadius: "50em",
    border: "2px solid transparent",
    color: "white",
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
    "& .work-image-wrapper": {
      height: 350,
    },
  },
  [theme.breakpoints.down("lg")]: {
    "& .work-image-wrapper": {
      height: 300,
    },
  },
  [theme.breakpoints.down("md")]: {
    "& .work-image-wrapper": {
      height: 250,
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& .work-image-wrapper": {
      height: 200,
    },
  },
}));
