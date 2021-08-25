import React from "react";
import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    { id: 1, image: "First Image", name: "Devesh", placeCount: 2 },
    { id: 2, image: "Second Image", name: "Sumit", placeCount: 4 },
    { id: 3, image: "Third Image", name: "Priyanka", placeCount: 6 },
    { id: 4, image: "Fourth Image", name: "Prasang", placeCount: 8 }
  ];

  return <UsersList items={USERS} />;
}

export default Users;
