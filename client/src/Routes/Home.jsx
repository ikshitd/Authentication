import React, { useEffect } from "react";
import LoadUsers from "../Components/LoadUsers";
import { Button } from "antd";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import CurrentLoggedInUser from "../Components/CurrentLoggedInUser";

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar></Navbar>
      <CurrentLoggedInUser></CurrentLoggedInUser>
      <LoadUsers></LoadUsers>
    </div>
  );
};

export default Home;
