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

export const CREATE_COMMENT = gql`
  mutation CreateComment($content: String!, $postId: ID!) {
    createComment(content: $content, postId: $postId) {
      id
    }
  }
`;

export const LIKE = gql`
  mutation Like($commentId: ID, $postId: ID) {
    like(commentId: $commentId, postId: $postId) {
      id
    }
  }
`;

export const UNLIKE = gql`
  mutation UnLike($commentId: ID, $postId: ID) {
    unLike(commentId: $commentId, postId: $postId) {
      id
    }
  }
`;
