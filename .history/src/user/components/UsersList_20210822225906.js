import React from "react";

import "./UsersList.css";
import UserItem from "./UserItem";
import Card from "../../shared/UIElements/Card";

function UsersList(props) {
  if (props.items.length === 0) {
    return <div className="center">No Users Found</div>;
  }
  return (
    <div>
      <h1 className="center">Users List</h1>
      <ul className="users-list">
        {props.items.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
