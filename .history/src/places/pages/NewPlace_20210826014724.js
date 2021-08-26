import React, { useCallback } from "react";

import Input from "../../shared/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/Util/validator";
import "./NewPlace.css";

function NewPlace() {
  const titleInputHandler = (id, value, isValid) => {};

  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        placeholder={`Enter the Title`}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={titleInputHandler}
      />
    </form>
  );
}

export default NewPlace;
