import React from "react";
import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    {
      id: 1,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
      name: "Devesh",
      places: 2
    },
    {
      id: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
      name: "Sumit",
      places: 4
    },
    {
      id: 3,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
      name: "Priyanka",
      places: 6
    },
    {
      id: 4,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
      name: "Prasang",
      places: 8
    }
  ];

  return <UsersList items={USERS} />;
}

export default Users;
