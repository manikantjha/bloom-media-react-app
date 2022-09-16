import { Box, styled } from "@mui/material";

export const WorkImagesWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#424242",
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  "& .workImgLargeWrapper": {
    height: 600,
    width: "100%",
    overflow: "hidden",
    "& img": {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
  },
  "& .workImgSmallWrapper": {
    height: 600,
    width: "100%",
    overflow: "hidden",
    "& img": {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
  },
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    "& .workImgLargeWrapper": {
      height: 300,
    },
    "& .workImgSmallWrapper": {
      height: 300,
    },
  },
}));
