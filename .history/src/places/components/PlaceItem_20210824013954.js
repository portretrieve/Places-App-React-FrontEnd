import React from "react";

import "./PlaceItem.css";

function PlaceItem(props) {
  return (
    <li className="place-item">
      <div className="place-item__image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="place-item__info">
        <h2>{props.title}</h2>
        <h3>{props.description}</h3>
      </div>
    </li>
  );
}

export default PlaceItem;
