import React from "react";
import { useQuery } from "@apollo/client";
import { LOGGEDIN_USER } from "../GraphQL/Queries";

const CurrentLoggedInUser = () => {
  const token = localStorage.getItem("token");
  const { loading, error, data } = useQuery(LOGGEDIN_USER, {
    variables: {
      token: token,
    },
  });
  if (loading) return <div>loading....</div>;
  console.log(data);
  if (data) {
    return <div>{data.getUserByToken.userName}</div>;
  } else return <div> No User Logged In !!!</div>;
};
export default CurrentLoggedInUser;
