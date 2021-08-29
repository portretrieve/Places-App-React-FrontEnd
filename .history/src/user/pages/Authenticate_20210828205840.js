import React from "react";

function Authenticate() {
  return (
    <div>
      <form action="">
        <p>We will authenticate you here</p>
        <label htmlFor="email">Enter Your email</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="password">Enter Your Password</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default Authenticate;
