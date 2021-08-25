import React from "react";
import "./UsersList.css";

function UsersList(props) {
  if (props.userList.length === 0) {
    return <div className="center">No Users Found</div>;
  }
  return <div>UsersList</div>;
}

export default UsersList;
