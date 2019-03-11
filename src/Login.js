import React from "react";
import { LoginContainer, Input } from "./components/styledComponents";

function Login() {
  return (
    <LoginContainer>
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
    </LoginContainer>
  );
}

export default Login;
