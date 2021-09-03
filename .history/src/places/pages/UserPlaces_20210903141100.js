import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";
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
      <PlaceList items={loadedPlaces} />
    </React.Fragment>
  );
}

export default UserPlaces;
