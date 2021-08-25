import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";

function UsersList(props) {
  if (props.items.length === 0) {
    return <h1 className="center">No Users Found</h1>;
  }
  return (
      <h1 className="center">Users List</h1>

      <ul>
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
  );
}

export default UsersList;
