import React from "react";

import Card from "../../shared/UIElements/Card";
import PlaceItem from "./PlaceItem";
import Button from "../../shared/FormElements/Button";
import "./PlaceList.css";

function PlaceList(props) {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places found. Maybe create one?</h2>
          <Button to="/places/new">Share Button</Button>
        </Card>
      </div>
    );
  }

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
          onDelete={deleteHandler}
        />
      ))}
    </ul>
  );
}

export default PlaceList;