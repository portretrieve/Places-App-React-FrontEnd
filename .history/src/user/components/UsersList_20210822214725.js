import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";

function UsersList(props) {
  if (props.items.length === 0) {
    return <div className="center">No Users Found</div>;
  }
  return (
    <ul>
          {props.items.map((user) => {
           <li><UserItem/></li>
              
      }
       
      ))}
    </ul>
  );
}

export default UsersList;
