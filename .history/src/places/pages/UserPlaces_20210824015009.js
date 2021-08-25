import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [{
    id: 'p1',
    title: "Empire State Building",
    description: "Empire State Building",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
        lat: null,
        lng:null
    }
}]

function UserPlaces() {
    return <PlaceList intems={ }/>;
}

export default UserPlaces;
