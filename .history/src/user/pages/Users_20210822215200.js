import React from "react";
import UsersList from "../components/UsersList";

function Users(props) {
  return <UsersList items={props.usersList} />;
}

export default Users;
