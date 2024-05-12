import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

const LoadUsers = () => {
  const { loading, error, data } = useQuery(LOAD_USERS);
  if (loading) {
    return <div>....Loading</div>;
  }
  if (error) {
    console.log("ERROR: ", error);
  }
  if (data.getAllUsers.length === 0) {
    return <h1 style={{ fontSize: "70px" }}> No Users Registered Yet! </h1>;
  }
  return (
    <div style={{ margin: "20px" }}>
      <h1 style={{ fontSize: "70px" }}> Registered Users </h1>
      {data.getAllUsers.map((user) => {
        return (
          <div style={{ padding: "10px" }}>
            <div>
              <strong style={{ color: "green" }}>Username: </strong>
              {user.userName}
            </div>
            <div>
              <strong style={{ color: "blue" }}>Password: </strong>
              {user.password}
            </div>
            <div>
              <strong style={{ color: "red" }}>Email: </strong>
              {user.email}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default LoadUsers;
