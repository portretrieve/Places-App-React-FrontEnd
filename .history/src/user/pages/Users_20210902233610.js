import React, { useEffect, useState } from "react";
import UsersList from "../components/UsersList";

function Users() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    (async function () {
      const response = await fetch("http://localhost:5000/api/users");

      const responseData = await response.json();

      setLoadedUsers(responseData);
    })();
  }, []);

  return <UsersList items={USERS} />;
}

export default Users;
