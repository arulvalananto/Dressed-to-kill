import React, { useState } from "react";
import "./SignIn.scss";

import { signInWithGoogle } from "../../firebase";

import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

const SignIn = () => {
    const initialState = {
        email: "",
        password: "",
    };
    const [credentials, setCredentials] = useState(initialState);

    const submitHandler = (e) => {
        e.preventDefault();
    };
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    return (
        <div className="signin">
            <h1>I already have an account</h1>
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
                <div className="buttons">
                    <Button>Sign In</Button>
                    <Button onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In With Google
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
