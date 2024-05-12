import React, { useState } from "react";
import { Input, Button } from "antd";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { LOGIN } from "../GraphQL/Mutations";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser] = useMutation(LOGIN);

  return (
    <div
      style={{
        margin: "20px",
      }}
    >
      <h1 style={{ margin: "8px" }}> Login </h1>
      <Input
        value={email}
        type='email'
        placeholder='Enter your email'
        onChange={(e) => {
          setEmail(e.target.value);
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
        className='btn btn-neutral btn-primary'
        onClick={() => {
          loginUser({
            variables: { email: email, password: password },
            onCompleted: ({ login }) => {
              localStorage.setItem("token", login.token);
            },
          });
          navigate("/");
        }}
        type='primary'
        style={{ margin: "8px" }}
      >
        submit{" "}
      </Button>
      <Link to='/'>
        <Button type='default'> Go back to Home </Button>
      </Link>
    </div>
  );
};
export default Login;
