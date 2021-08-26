import React from "react";

import Input from "../../shared/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/Util/validator";
import "./NewPlace.css";

function NewPlace() {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        placeholder={`Enter the Title`}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
      />
    </form>
  );
}

export default NewPlace;
