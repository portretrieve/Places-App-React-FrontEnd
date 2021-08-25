import React from "react";
import "./UserItem.css";

function UserItem(props) {
  return (
    <div key={props.id}>
      <p>ID : {props.id}</p>
      <p>Image : {props.image}</p>
      <p></p>
      <p></p>
    </div>
  );
}

export default UserItem;
