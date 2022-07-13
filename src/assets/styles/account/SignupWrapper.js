import { Box, styled } from "@mui/material";

export const SignupWrapper = styled(Box)`
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  .img-logo {
    width: 150px;
    height: 150px;
  }
  .textfield-name {
    margin-bottom: 16px;
  }
  .textfield-user-name {
    margin-bottom: 16px;
  }
  .textfield-password {
    margin-bottom: 16px;
  }
  .button-signup {
    margin-bottom: 4px;
  }
  .button-login {
    margin-top: 4px;
  }
`;
