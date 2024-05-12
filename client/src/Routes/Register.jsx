import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { REGISTER_USER } from "../GraphQL/Mutations";

const Register = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER, {
    variables: {
      userName: userName,
      email: email,
      password: password,
    },
    onCompleted: ({}) => {
      navigate("/");
    },
  });
  if (loading) {
    return <div> submitting...</div>;
  }
  if (error) {
    console.log("error: ", error);
  }

  return (
    <div style={{ margin: "20px" }}>
      <h1 style={{ margin: "8px" }}> Register </h1>

      <Input
        value={email}
        type='text'
        placeholder='Enter your email'
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        style={{ margin: "8px" }}
      ></Input>
      <Input
        value={userName}
        type='text'
        placeholder='Enter your userName'
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        style={{ margin: "8px" }}
      ></Input>
      <Input
        value={password}
        type='password'
        placeholder='Enter your password'
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        style={{ margin: "8px" }}
      ></Input>
      <Button
        className='btn btn-active btn-neutral'
        onClick={() => {
          registerUser();
          navigate("/");
        }}
        type='primary'
        style={{ margin: "8px" }}
      >
        {" "}
        Submit{" "}
      </Button>
      <Button
        className='btn-primary'
        type='default'
        onClick={() => {
          navigate("/");
        }}
      >
        {" "}
        Go back to Home{" "}
      </Button>
    </div>
  );
};
export default Register;
