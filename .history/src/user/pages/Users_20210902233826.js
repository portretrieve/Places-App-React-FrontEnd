import React, { useEffect, useState } from "react";
import UsersList from "../components/UsersList";

function Users() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/users");

        const responseData = await response.json();

        setLoadedUsers(responseData);
        setIsLoading(false);
      } catch (err) {
        setErrorState(
          err.message || "Could not get the users. Please try again"
        );
      }
    })();
  }, []);

  return <UsersList items={USERS} />;
}

export default Users;
