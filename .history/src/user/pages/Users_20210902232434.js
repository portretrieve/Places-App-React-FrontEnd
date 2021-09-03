import React, { useEffect } from "react";
import UsersList from "../components/UsersList";

function Users() {
  return <UsersList items={USERS} />;
}

export default Users;
