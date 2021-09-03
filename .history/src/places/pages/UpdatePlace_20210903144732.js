import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import Card from "../../shared/UIElements/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/Util/validator";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-Hook";
import "./PlaceForm.css";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/UIElements/ErrorModal";

function UpdatePlace() {
  const { isLoading, errorState, sendRequest, clearError } = useHttpClient();
  const [loadedPlace, setLoadedPlace] = useState();
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false
      },
      description: {
        value: "",
        isValid: false
      }
    },
    false
  );

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/places/" + placeId
        );

        setLoadedPlace(responseData.foundPlace);
        setFormData(
          {
            title: {
              value: responseData.foundPlace.title,
              isValid: true
            },
            description: {
              value: responseData.foundPlace.description,
              isValid: true
            }
          },
          true
        );
      } catch (error) {}
    };

    fetchPlace();
  }, [sendRequest, placeId, setFormData]);

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!loadedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Cound not find place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <React.Fragment>
      <ErrorModal error={errorState} onClear={clearError} />
      <form className="place-form" onSubmit={placeSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          placeholder={`Enter the Title`}
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
          initialValue={formState.inputs.title.value}
          initialValidity={formState.inputs.title.isValid}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (at least 5 charecters)."
          onInput={inputHandler}
          initialValue={formState.inputs.description.value}
          initialValidity={formState.inputs.description.isValid}
        />
        <Button type="submit" disabled={!formState.isValid}>
          UPDATE PLACE
        </Button>
      </form>
    </React.Fragment>
  );
}

export default UpdatePlace;
