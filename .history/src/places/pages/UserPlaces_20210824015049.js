import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [{
    id: 'p1',
    title: "Empire State Building",
    description: "Empire State Building",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
        lat: 40.7484405,
        lng:-73.9856644
    }
}]

function UserPlaces() {
    return <PlaceList intems={ }/>;
}

export default UserPlaces;
