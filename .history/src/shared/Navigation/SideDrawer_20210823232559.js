import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "css-transition-group";

import "./SideDrawer.css";

function SideDrawer(props) {
  const content = <aside className="side-drawer">{props.children}</aside>;

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
}

export default SideDrawer;
