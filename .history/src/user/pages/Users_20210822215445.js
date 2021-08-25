import React from "react";
import UsersList from "../components/UsersList";

function Users() {
    const USERS = [{id:1, image:"Devesh Image", name="Devesh", placeCount:1}]

  return <UsersList items={USERS} />;
}

export default Users;
