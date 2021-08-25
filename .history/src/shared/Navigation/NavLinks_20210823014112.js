import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

function NavLinks(props) {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">ALL USERS</NavLink>
      </li>
      <li>
        <NavLink to="/">MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/">ADD PLACE</NavLink>
      </li>
      <li>
        <NavLink to="/">AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
