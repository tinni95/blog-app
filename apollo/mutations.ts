import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($username: String!) {
    login(username: $username) {
      token
    }
  }
`;
