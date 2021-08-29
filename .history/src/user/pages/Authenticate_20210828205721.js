import React from "react";

function Authenticate() {
  return (
    <div>
      <p>We will authenticate you here</p>
      <label htmlFor="email">Enter Your email</label>
      <input type="email" id="email" name="email" required />
      <br />
      <label htmlFor="password">Enter Your Password</label>
      <input type="password" id="password" name="password" required />
    </div>
  );
}

export default Authenticate;
