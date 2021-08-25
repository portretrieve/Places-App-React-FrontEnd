import React from "react";
import "./UserItem.css";
import Avatar from "../../shared/UIElements/Avatar";
import { Link } from "react-router-dom";

function UserItem(props) {
  return (
    <li className="user-item" key={props.id}>
          <div className="user-item__content">
              <Link>
        <div className="user-item__image">
          <Avatar image={props.image} alt={props.name} />
        </div>
        <div className="user-item__info">
          <h2>{props.name}</h2>
          <h3>
            {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
          </h3>
        </div><Link>
      </div>
    </li>
  );
}

export default UserItem;
