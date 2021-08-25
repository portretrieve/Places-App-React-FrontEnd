import React from "react";
import "./UserItem.css";

function UserItem(props) {
  return (
    <li className="user-item" key={props.id}>
      <div className="user-item__content">
        <div className="user-item__image">
          <img src={props.image} alt={props.name} style={{ width: "300px" }} />
        </div>
        <div className="user-item__info"></div>
        <h2>Name : {props.name}</h2>
        <p>
          Place Count : {props.placeCount}{" "}
          {props.placeCount === 1 ? "Place" : "Places"}
        </p>
      </div>
    </li>
  );
}

export default UserItem;
