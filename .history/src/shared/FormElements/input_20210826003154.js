import React, { useReducer } from "react";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: true
      };

    default:
      return state;
  }
};

const InputContent = ({
  elementName,
  elementId,
  elementType,
  elementPlaceholder,
  textareaRows
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false
  });

  const changeHandler = (event) => {
    dispatch({ type: "CHANGE", val: event.target.value });
  };

  return <React.Fragment>{}</React.Fragment>;
};

function Input(props) {
  const element = () => {
    return elementName === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        value={inputState.value}
      />
    );
  };

  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}

      {!inputState.isValid && <p></p>}
    </div>
  );
}

export default Input;
