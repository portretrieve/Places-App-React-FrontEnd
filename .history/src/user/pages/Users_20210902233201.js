import React, { useEffect, useState } from "react";
import UsersList from "../components/UsersList";

function Users() {
  useEffect(() => {
    (async function () {
      const response = await fetch("http://localhost:5000/api/users");

      const responseData = await response.json();
    })();
  }, []);

  return <UsersList items={USERS} />;
}

export default Users;
