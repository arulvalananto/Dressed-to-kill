import React, { useState } from "react";

import { auth, signInWithGoogle } from "../../firebase";

import Button from "../Button/Button.component";
import FormInput from "../FormInput/FormInput.component";

import {
  SigninButtonContainer,
  SigninContainer,
  SigninTitle,
} from "./SignIn.styles";

const SignIn = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [credentials, setCredentials] = useState(initialState);

  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials(initialState);
    } catch (err) {
      console.log(err.messsage);
      alert(err.message);
    }
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <SigninContainer>
      <SigninTitle>I already have an account</SigninTitle>
      <span>Signin with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          type="email"
          name="email"
          value={credentials.email}
          required
          handleChange={changeHandler}
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          value={credentials.password}
          required
          handleChange={changeHandler}
          label="Password"
        />
        <SigninButtonContainer>
          <Button>Sign In</Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </Button>
        </SigninButtonContainer>
      </form>
    </SigninContainer>
  );
};

export default SignIn;
