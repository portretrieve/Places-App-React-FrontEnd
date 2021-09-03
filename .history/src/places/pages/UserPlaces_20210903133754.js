import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";
import { useHttpClient } from "../../shared/hooks/http-Hook";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building-1",
    description: "Empire State Building : Part 1",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/399px-Empire_State_Building_%28aerial_view%29.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    creator: "u1",
    location: {
      lat: 40.7484405,
      lng: -73.9856644
    }
  },
  {
    id: "p2",
    title: "Empire State Building-2",
    description: "Empire State Building : Part 2",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/399px-Empire_State_Building_%28aerial_view%29.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    creator: "u2",
    location: {
      lat: 40.7484405,
      lng: -73.9856644
    }
  }
];

function UserPlaces() {
  const { isLoading, errorState, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;
  const filteredPlaces = DUMMY_PLACES.filter(
    (place) => place.creator === userId
  );
  return <PlaceList items={filteredPlaces} />;
}

export default UserPlaces;
