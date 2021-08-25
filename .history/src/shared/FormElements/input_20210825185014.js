import React from "react";
import "./Input.css";

const InputContent = ({
  elementName,
  elementId,
  elementType,
  elementPlaceholder,
  textareaRows
}) => {
  return elementName === "input" ? (
    <input id={elementId} type={elementType} placeholder={elementPlaceholder} />
  ) : (
    <textarea id={elementId} rows={textareaRows || 3} />
  );
};

function Input(props) {
  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      <InputContent
        elementName={props.element}
        elementId={props.id}
        elementType={props.type}
        elementPlaceholder={props.placeholder}
        textareaRows={props.rows}
      />
    </div>
  );
}

export default Input;
