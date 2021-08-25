import React from "react";
import { ReactDOM } from "react";

import "./Modal.css";

function ModalOverlay(props) {
  const content = <div className={`modal ${props.className}` style={ props.style}}></div>;
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
}

function Modal(props) {
  return <div></div>;
}

export default Modal;
