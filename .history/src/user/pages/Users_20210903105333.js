import React, { useEffect, useState } from "react";

import UsersList from "../components/UsersList";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-Hook";

function Users() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState();
  const [loadedUsers, setLoadedUsers] = useState([]);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/users");

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedUsers(responseData);
      } catch (err) {
        setErrorState(
          err.message || "Could not get the users. Please try again"
        );
      }
      setIsLoading(false);
    })();
  }, []);

  const errorHandler = () => {
    setErrorState(null);
  };

  return (
    <React.Fragment>
      <ErrorModal error={errorState} onClear={errorHandler} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <UsersList items={loadedUsers} />
    </React.Fragment>
  );
}

export default Users;
