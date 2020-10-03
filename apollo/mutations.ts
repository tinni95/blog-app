import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($username: String!) {
    login(username: $username) {
      token
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($content: String!, $title: String!) {
    createPost(content: $content, title: $title) {
      id
    }
  }
`;
