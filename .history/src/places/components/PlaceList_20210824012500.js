import React from "react";

import Card from "../../shared/UIElements/Card";
import "./PlaceList.css";

function PlaceList(props) {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places found. Maybe create one?</h2>
        </Card>
      </div>
    );
  }
}

export default PlaceList;
