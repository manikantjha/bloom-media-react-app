import { Box, styled } from "@mui/material";

export const TeamMemberWrapper = styled(Box)`
  text-align: center;
  .image-wrapper {
    height: 200px;
    width: 200px;
    margin-bottom: 16px;
    border-radius: 50%;
    overflow: hidden;
  }
  .image-wrapper img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
