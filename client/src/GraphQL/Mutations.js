import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation ($userName: String!, $email: String!, $password: String!) {
    register(userName: $userName, email: $email, password: $password) {
      userName
      email
      password
    }
  }
`;
export const LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
