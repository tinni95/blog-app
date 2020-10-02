import { gql } from "@apollo/client";

export const POSTS_QUERY = gql`
  query Posts($search: String) {
    posts(search: $search) {
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
