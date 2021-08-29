import React from "react";

import Card from "../../shared/UIElements/Card";
import Input from "../../shared/FormElements/Input";

function Authenticate() {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Form Submitted...");
  };

  return (
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
    </form>
  );
}

export default Authenticate;
