import React, { useCallback, useReducer } from "react";

import Input from "../../shared/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/Util/validator";
import "./NewPlace.css";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.formInputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.formInputs[inputId].isValid;
        }
      }
      return {
        ...state,
        [action.inputId]: { value: action.value, isValid: action.isValid }
      };
      break;

    default:
      return state;
      break;
  }
};

function NewPlace() {
  const [formState, dispatch] = useReducer(formReducer, {
    formInputs: {
      titleInput: {
        value: "",
        isValid: false
      },
      descriptionInput: {
        value: "",
        isValid: false
      }
    },
    isFormValid: false
  });

  const titleInputHandler = useCallback((id, value, isValid) => {}, []);

  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        placeholder={`Enter the Title`}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={titleInputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 charecters)."
        onInput={descriptionInputHandler}
      />
    </form>
  );
}

export default NewPlace;
