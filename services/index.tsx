// import gql from "graphql-tag";
import { gql, useQuery } from "@apollo/client";

export const POSTS = gql`
  query getPost {
    posts {
      id
      data {
        title
        body {
          html
        }
      }
      comments {
        id
        data {
          body
        }
      }
    }
  }
`;

export const GETS_COMMENT = gql`
  query getComment {
    comments {
      id
      data {
        body
      }
    }
  }
`;

export const GETS_COMMENT_AND_POST = gql`
  query getComment {
    comments {
      id
      data {
        body
      }
      post {
        id
      }
    }
  }
`;

export const GETS_USER = gql`
  query getUser {
    users(status: all) {
      id
      data {
        email
        first_name
        phone
      }
    }
  }
`;

