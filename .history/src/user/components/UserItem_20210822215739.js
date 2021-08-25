import React from "react";
import "./UserItem.css";

function UserItem(props) {
  return (
    <div key={props.id}>
      <p>ID : {props.ID}</p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
}

export default UserItem;
