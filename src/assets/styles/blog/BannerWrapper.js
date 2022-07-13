import { Box, styled } from "@mui/material";

export const BannerWrapper = styled(Box)`
  position: relative;
  .img-wrapper {
    width: 100%;
    height: 60vh;
    overflow: hidden;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
