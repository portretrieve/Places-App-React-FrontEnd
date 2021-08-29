import React from "react";

import Card from "../../shared/UIElements/Card";
import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH
} from "../../shared/Util/validator";
import { useForm } from "../../shared/hooks/form-hook";
import "./Auth.css";

function Authenticate() {
  const [formState, inputHandler] = useForm(
    {
      email: { value: "", isValid: false },
      password: { value: "", isValid: false }
    },
    false
  );

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Form Submitted...");
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <form className="place-form" onSubmit={onSubmitHandler}>
        {/* <form onSubmit={onSubmitHandler}>
        <Card>
          <p>We will authenticate you here</p>
          <label htmlFor="email">Enter Your email</label>
          <input type="email" id="email" name="email" required />
          <br />
          <label htmlFor="password">Enter Your Password</label>
          <input type="password" id="password" name="password" required />
          <br />
          <button type="submit">SUBMIT</button>
        </Card>
      </form>
      <button to="/">CANCEL</button> */}
        <Input
          id="email"
          element="input"
          type="email"
          label="E-mail/Username"
          placeholder="Enter the Username/Email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Enter a valid E-mail/Username"
          onChange={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          placeholder="Enter the password here."
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Enter a valid password."
          onChange={inputHandler}
        />
      </form>
    </Card>
  );
}

export default Authenticate;
