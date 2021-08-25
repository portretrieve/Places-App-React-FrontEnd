import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [{
    id: 'p1',
    title: "Empire State Building",
    description: "Empire State Building",
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/399px-Empire_State_Building_%28aerial_view%29.jpg',
    address: "20 W 34th St, New York, NY 10001, United States",
    creator:null,
    location: {
        lat: 40.7484405,
        lng:-73.9856644
    }
}]

function UserPlaces() {
    return <PlaceList items={ }/>;
}

export default UserPlaces;
