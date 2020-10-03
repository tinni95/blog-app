import { gql } from "@apollo/client";

export const POSTS_QUERY = gql`
  query Posts($search: String) {
    posts(search: $search) {
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
