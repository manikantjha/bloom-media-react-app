import { useState } from "react";
import { AccountWrapper } from "../assets/styles/account/AccountWrapper";
import Login from "../components/account/Login";
import Signup from "../components/account/Signup";

export default function Account(props) {
  const [login, setLogin] = useState("login");
  const { setIsUserAuthenticated } = props;
  return (
    <AccountWrapper>
      {login === "login" ? (
        <Login
          setLogin={setLogin}
          setIsUserAuthenticated={setIsUserAuthenticated}
        />
      ) : (
        <Signup setLogin={setLogin} />
      )}
    </AccountWrapper>
  );
}
