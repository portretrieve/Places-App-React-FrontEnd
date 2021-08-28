import React, { useCallback, useReducer } from "react";

import Input from "../../shared/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/Util/validator";
import "./NewPlace.css";

const formReducer = (state, action) => {};

function NewPlace() {
  const [formState, dispatch] = useReducer(formReducer, {
    formInputs: {
      titleInput: {
        titleValue: "",
        isTitleValid: false
      },
      descriptionInput: {
        descriptionValue: "",
        isDescriptionValid: false
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
