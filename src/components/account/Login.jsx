import { Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginWrapper } from "../../assets/styles/account/LoginWrapper";
import { DataContext } from "../../contexts/DataProvider";
import { API } from "../../services/api";

export default function Login(props) {
  const initialLoginState = {
    userName: "",
    password: "",
  };
  const [login, setLogin] = useState(initialLoginState);
  const [error, setError] = useState("");
  const { setAccount } = useContext(DataContext);
  const navigate = useNavigate();

  const { setIsUserAuthenticated } = props;

  function handleTextFieldChange(e) {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  const handleLogin = async () => {
    let response = await API.userLogin(login);

    if (response?.isSuccess) {
      setError("");
      sessionStorage.setItem(
        "accessToken",
        `Bearer ${response.data.accessToken}`
      );
      sessionStorage.setItem(
        "refreshToken",
        `Bearer ${response.data.bearerToken}`
      );
      setAccount({
        userName: response.data.userName,
        name: response.data.name,
      });
      setIsUserAuthenticated(true);
      navigate("/");
    } else {
      setError("Oops! Something went wrong.");
    }
  };

  return (
    <LoginWrapper>
      <img src="./bloom-media-logo.svg" alt="logo" className="img-logo" />
      <TextField
        fullWidth
        label="User Name"
        name="userName"
        onChange={handleTextFieldChange}
        className="textfield-user-name"
      />
      <TextField
        fullWidth
        label="Passowrd"
        name="password"
        onChange={handleTextFieldChange}
        className="textfield-password"
      />
      <Button
        fullWidth
        variant="contained"
        onClick={handleLogin}
        className="button-login"
      >
        Login
      </Button>
      <Typography variant="body1">or</Typography>
      <Button
        fullWidth
        variant="contained"
        onClick={() => props.setLogin("signup")}
        className="button-signup"
        color="secondary"
      >
        SignUp
      </Button>
    </LoginWrapper>
  );
}
