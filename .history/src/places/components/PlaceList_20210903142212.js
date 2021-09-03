import React from "react";

import Card from "../../shared/UIElements/Card";
import PlaceItem from "./PlaceItem";
import Button from "../../shared/FormElements/Button";
import "./PlaceList.css";

function PlaceList(props) {
  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          createdId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
}

export default PlaceList;
