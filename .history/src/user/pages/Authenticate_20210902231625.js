import React, { useState, useContext } from "react";

import Card from "../../shared/UIElements/Card";
import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from "../../shared/Util/validator";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";
import "./Auth.css";

function Authenticate() {
  const AUTH = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: { value: "", isValid: false },
      password: { value: "", isValid: false }
    },
    false
  );

  const authSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (isLoginMode) {
      try {
        const response = await fetch("http://localhost:5000/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
          })
        });

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setIsLoading(false);
        AUTH.login();
      } catch (err) {
        setIsLoading(false);
        setErrorState(
          err.message || "Something went wrong with login please try again."
        );
      }
    } else {
      event.preventDefault();
      try {
        const response = await fetch("http://localhost:5000/api/users/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
          })
        });

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        console.log(responseData);
        setIsLoading(false);
        AUTH.login();
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        setErrorState(
          err.message || "Something went wrong with sign-up please try again."
        );
      }
    }
  };

  const switchModeHandler = (event) => {
    if (!isLoginMode) {
      setFormData(
        { ...formState.inputs, name: undefined },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const errorHandler = () => {
    setErrorState(null);
  };

  return (
    <React.Fragment>
      <ErrorModal error={errorState} onClear={errorHandler} />
      <Card className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        {isLoginMode ? <h2>Login</h2> : <h2>Sign-Up</h2>}
        <form className="place-form" onSubmit={authSubmitHandler}>
          {!isLoginMode && (
            <Input
              element="input"
              id="name"
              type="text"
              label="Your Name"
              validators={[VALIDATOR_REQUIRE]}
              errorText="Enter Your Name"
              placeholder="Enter Your name for Sign-Up"
              onInput={inputHandler}
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
        <Button inverse onClick={switchModeHandler}>
          SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"} MODE
        </Button>
      </Card>
    </React.Fragment>
  );
}

export default Authenticate;
