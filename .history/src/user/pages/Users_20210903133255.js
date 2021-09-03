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
        const responseData = await sendRequest(
          "http://localhost:5000/api/users"
        );

        setLoadedUsers(responseData);
      } catch (err) {}
    })();
  }, [sendRequest]);

  console.log(loadedUsers);

  return (
    <React.Fragment>
      <ErrorModal error={errorState} onClear={clearError} />
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
