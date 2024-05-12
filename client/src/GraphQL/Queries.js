import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    getAllUsers {
      userName
      id
      email
      password
    }
  }
`;

export const LOGGEDIN_USER = gql`
  query ($token: String!) {
    getUserByToken(token: $token) {
      userName
    }
  }
`;
