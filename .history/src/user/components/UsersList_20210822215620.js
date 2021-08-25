import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";

function UsersList(props) {
  if (props.items.length === 0) {
    return <div className="center">No Users Found</div>;
  }
  return (
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
