import { gql } from "@apollo/client";

export const POSTS_QUERY = gql`
  query Posts($search: String) {
    posts(search: $search) {
      id
      title
      content
      author {
        username
      }
      likes {
        id
      }
      comments {
        id
      }
      createdAt
    }
  }
`;

export const GET_POST = gql`
  query getPost($id: ID!) {
    getPost(id: $id) {
      title
      content
      author {
        username
      }
      likes {
        author {
          id
        }
        id
      }
      comments {
        id
        author {
          username
        }
        content
      }
      createdAt
    }
  }
`;
