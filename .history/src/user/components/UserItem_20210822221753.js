import React from "react";
import "./UserItem.css";

function UserItem(props) {
  return (
    <li className="user-item" key={props.id}>
      <div className="user-item__content">
        <div className="user-item__image">
          <img src={props.image} alt={props.name} />
        </div>
        <p>ID : {props.id}</p>
        <p>Image : {props.image}</p>
        <p>Name : {props.name}</p>
        <p>Place Count : {props.placeCount}</p>
      </div>
    </li>
  );
}

export default UserItem;
