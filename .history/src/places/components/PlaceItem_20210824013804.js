import React from "react";

import "./PlaceItem.css";

function PlaceItem(props) {
  return (
    <li className="place-item">
      <div className="place-item__image">
        <img src={props.imageUrl} alt="" />
      </div>
    </li>
  );
}

export default PlaceItem;
