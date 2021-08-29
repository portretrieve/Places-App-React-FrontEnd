import React, { useState } from "react";

import Card from "../../shared/UIElements/Card";
import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from "../../shared/Util/validator";
import { useForm } from "../../shared/hooks/form-hook";
import "./Auth.css";

function Authenticate() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler] = useForm(
    {
      email: { value: "", isValid: false },
      password: { value: "", isValid: false }
    },
    false
  );

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  const switchLoginModeHandler = (event) => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <form className="place-form" onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE]}
          />
        )}
        <Input
          id="email"
          element="input"
          type="email"
          label="E-mail/Username"
          placeholder="Enter the Username/Email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Enter a valid E-mail/Username."
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          placeholder="Enter the password here."
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Enter a valid password."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "LOGIN" : "SIGN UP"}
        </Button>
      </form>
      <Button inverse onClick={switchLoginModeHandler}>
        SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"} MODE
      </Button>
    </Card>
  );
}

export default Authenticate;
