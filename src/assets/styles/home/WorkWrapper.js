import { Box, styled } from "@mui/material";

export const WorkWrapper = styled(Box)`
  background-color: #424242;
  padding: 32px;
  .title {
    color: #ffffff;
    /* text-align: center; */
    margin-bottom: 32px;
    font-weight: bold;
    font-size: 6rem;
  }
  .work-card {
    height: 500px;
    width: "100%";
    background-color: #bdbdbd;
  }
  .work-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
