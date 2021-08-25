import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";

function UsersList(props) {
  if (props.items.length === 0) {
    return <h1 className="center">No Users Found</h1>;
  }
  return (
    <div className="center">
      <h1>Users List</h1>
      <div>
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
      </div>
    </div>
  );
}

export default UsersList;
