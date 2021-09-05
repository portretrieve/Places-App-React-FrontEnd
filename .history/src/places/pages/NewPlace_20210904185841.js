import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/Util/validator";
import { useForm } from "../../shared/hooks/form-hook";
import "./PlaceForm.css";
import { useHttpClient } from "../../shared/hooks/http-Hook";
import { AuthContext } from "../../shared/context/auth-context";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ImageUpload from "../../shared/FormElements/ImageUpload";

const NewPlace = () => {
  const auth = useContext(AuthContext);
  const { isLoading, errorState, sendRequest, clearError } = useHttpClient();
  const history = useHistory();
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false
      },
      description: {
        value: "",
        isValid: false
      },
      address: {
        value: "",
        isValid: false
      }
    },
    false
  );

  const placeSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        "http://localhost:5000/api/places",
        "POST",
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
          address: formState.inputs.address.value,
          creator: auth.userId
        }),
        {
          "Content-Type": "application/json"
        }
      );
      history.push("/");
    } catch (error) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={errorState} onClear={clearError}></ErrorModal>
      <form className="place-form" onSubmit={placeSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          placeholder={`Enter the Title`}
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (at least 5 charecters)."
          onInput={inputHandler}
        />
        <Input
          id="address"
          element="input"
          label="address"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter the address."
          onInput={inputHandler}
        />
        <ImageUpload
          id="image"
          onInput={inputHandler}
          errorText="Please provide Image"
        />
        <Button type="submit" disabled={!formState.isValid}>
          ADD PLACE
        </Button>
      </form>
    </React.Fragment>
  );
};

export default NewPlace;
