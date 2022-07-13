import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { SignupWrapper } from "../../assets/styles/account/SignupWrapper";
import { API } from "../../services/api";

export default function Signup(props) {
  const signupInitialValues = {
    name: "",
    userName: "",
    password: "",
  };

  const [signup, setSignup] = useState(signupInitialValues);
  const [error, setError] = useState("");

  function handleTextFieldChange(e) {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  }

  async function handleSignup() {
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
      setError("");
      setSignup(signupInitialValues);
      props.setLogin("login");
    } else {
      setError("Oops! Something went wrong.");
    }
  }

  return (
    <SignupWrapper>
      <img src="./bloom-media-logo.svg" alt="logo" className="img-logo" />
      <TextField
        fullWidth
        label="Name"
        name="name"
        className="textfield-name"
        onChange={handleTextFieldChange}
      />
      <TextField
        fullWidth
        label="User Name"
        name="userName"
        className="textfield-user-name"
        onChange={handleTextFieldChange}
      />
      <TextField
        fullWidth
        label="Password"
        name="password"
        className="textfield-password"
        onChange={handleTextFieldChange}
      />
      <Button
        fullWidth
        variant="contained"
        onClick={handleSignup}
        className="button-signup"
      >
        SignUp
      </Button>
      <Typography variant="body1">or</Typography>
      <Button
        fullWidth
        variant="contained"
        onClick={() => props.setLogin("login")}
        className="button-login"
        color="secondary"
      >
        Login
      </Button>
      <Typography>{error}</Typography>
    </SignupWrapper>
  );
}
