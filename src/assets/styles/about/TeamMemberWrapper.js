import { Box, styled } from "@mui/material";

export const TeamMemberWrapper = styled(Box)(({ theme }) => ({
  textAlign: "center",
  "& .image-wrapper": {
    height: "200px",
    width: "200px",
    marginBottom: "16px",
    borderRadius: "50%",
    overflow: "hidden",
  },
  "& .image-wrapper img": {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  "& .team-member-name": {
    fontWeight: "bold",
    fontSize: "1.25rem",
  },
  [theme.breakpoints.down("md")]: {
    "& .image-wrapper": {
      height: "115px",
      width: "115px",
      marginBottom: "8px",
    },
    "& .team-member-name": {
      fontWeight: "bold",
      fontSize: "1.05rem",
    },
  },
}));
