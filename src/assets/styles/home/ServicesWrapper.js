import { Box, styled } from "@mui/material";

export const ServicesWrapper = styled(Box)`
  background-color: #212121;
  padding: 32px;
  .title {
    color: #ffffff;
    /* text-align: center; */
    margin-bottom: 32px;
    font-weight: bold;
    font-size: 6rem;
  }
  .service-card {
    height: 400px;
    overflow: hidden;
  }
  .service-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
