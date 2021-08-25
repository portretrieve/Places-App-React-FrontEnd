import React from "react";

import Input from "../../shared/FormElements/Input";
import "./NewPlace.css";

function NewPlace() {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        placeholder={`Enter the Title`}
      />
      <Input type="text" label="Title" />
    </form>
  );
}

export default NewPlace;
