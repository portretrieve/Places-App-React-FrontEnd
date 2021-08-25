import React from "react";
import "./UserItem.css";

function UserItem(props) {
  return (
    <li className="user-item" key={props.id}>
      <div className="user-item__content">
        <p>ID : {props.id}</p>
        <p>Image : {props.image}</p>
        <p>Name : {props.name}</p>
        <p>Place Count : {props.placeCount}</p>
      </div>

      <br />
    </li>
  );
}

export default UserItem;
