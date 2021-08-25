import React from "react";
import "./UserItem.css";

function UserItem(props) {
  if (props.userList.length === 0) {
    return <div className="center">No Users Found</div>;
  }

  return <div>UserItem</div>;
}

export default UserItem;
