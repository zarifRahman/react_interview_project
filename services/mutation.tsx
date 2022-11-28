import { gql } from "@apollo/client";

export const UPDATE_POST = gql`
  mutation updatePost(
    $id: String!
    $payload: post_update_payload
    $connect: post_input_connection_payload
  ) {
    updatePost(_id: $id, payload: $payload, connect: $connect) {
      id
      comments {
        id
      }
      data {
        title
        body {
          html
        }
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($id: String!, $payload: user_update_payload) {
    updateUser(_id: $id, payload: $payload) {
      id
      data {
        email
        first_name
        phone
      }
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment(
    $id: String!
    $connect: comment_input_connection_payload
    $payload: comment_update_payload
  ) {
    updateComment(_id: $id, connect: $connect, payload: $payload,) {
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


