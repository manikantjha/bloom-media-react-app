import { Box, styled } from "@mui/material";

export const TeamWrapper = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(4)} 0px ${theme.spacing(4)}`,
  backgroundColor: "#424242",
  color: "#ffffff",
  "& .team-member-wrapper": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
