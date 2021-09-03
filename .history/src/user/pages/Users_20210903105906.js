import React, { useEffect, useState } from "react";

import UsersList from "../components/UsersList";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-Hook";

function Users() {
  const [loadedUsers, setLoadedUsers] = useState([]);

  const { isLoading, errorState, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    (async function () {
      try {
        const response = await sendRequest("http://localhost:5000/api/users");

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
