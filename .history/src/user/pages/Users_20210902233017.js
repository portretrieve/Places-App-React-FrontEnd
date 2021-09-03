import React, { useEffect } from "react";
import UsersList from "../components/UsersList";

function Users() {
  useEffect(() => {
    (async function () {
      fetch("http://localhost:5000/api/users");
    })();
  }, []);

  return <UsersList items={USERS} />;
}

export default Users;
