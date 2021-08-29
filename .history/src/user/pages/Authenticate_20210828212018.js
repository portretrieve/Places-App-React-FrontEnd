import React from "react";

import Card from "../../shared/UIElements/Card";
import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import "./Auth.css";

function Authenticate() {
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
          label="Email/Username"
          placeholder="Enter the Username/Email"
          errorText="Enter a valid Username"
          onInput
        />
      </form>
    </Card>
  );
}

export default Authenticate;
