import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

function NavLinks(props) {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/"></NavLink>
      </li>
      <li>
        <NavLink to="/"></NavLink>
      </li>
      <li>
        <NavLink to="/"></NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
