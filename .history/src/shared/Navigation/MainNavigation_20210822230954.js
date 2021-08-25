import React from "react";

import "./MainNavigation.css";
import MainHeader from "./MainHeader";

function MainNavigation(props) {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 className="main-navigation__title">Your Places</h1>
    </MainHeader>
  );
}

export default MainNavigation;
