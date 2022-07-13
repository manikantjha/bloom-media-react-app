import { Box, styled } from "@mui/material";

export const AboutWrapper = styled(Box)`
  height: 500px;
  width: 100%;
  overflow: hidden;
  background-color: #212121;
  position: relative;
  .about-content {
    position: absolute;
    color: #ffffff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
