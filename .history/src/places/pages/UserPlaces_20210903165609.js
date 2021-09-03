import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-Hook";

function UserPlaces() {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const { isLoading, errorState, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/places/user/" + userId
        );

        setLoadedPlaces(responseData.foundPlacesByUserId);
      } catch (error) {}
    };

    fetchPlaces();
  }, [sendRequest, userId]);

  return (
    <React.Fragment>
      <ErrorModal error={errorState} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPlaces && (
        <PlaceList items={loadedPlaces} onDelete={placeDeleteHandler} />
      )}
    </React.Fragment>
  );
}

export default UserPlaces;
