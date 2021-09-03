import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";
import { useHttpClient } from "../../shared/hooks/http-Hook";

function UserPlaces() {
  const [userPlaces, setUserPlaces] = useState([]);
  const { isLoading, errorState, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/places/user/" + auth.userId
        );

        setUserPlaces(responseData.foundPlacesByUserId);
      } catch (error) {}
    };

    getUsers();
  }, [sendRequest, auth.userId]);

  return (
    <React.Fragment>
      <PlaceList items={userPlaces} />
    </React.Fragment>
  );
}

export default UserPlaces;
