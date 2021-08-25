import React from "react";

const InputContent = ({
  elementId,
  elementType,
  elementPlaceholder,
  textareaRows
}) => {
  return props.element === "input" ? (
    <input id={props.id} type={props.type} placeholder={props.placeholder} />
  ) : (
    <textarea id={props.id} rows={props.rows || 3} />
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
