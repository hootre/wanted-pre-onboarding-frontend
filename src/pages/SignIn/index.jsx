import React from "react";
import { SignInStyled } from "./style";
import { Form } from "../../components/Form";

export const SignIn = () => {
  return (
    <SignInStyled>
      <Form type="signIn" />
    </SignInStyled>
  );
};
