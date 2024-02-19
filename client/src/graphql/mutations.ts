import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation AddUser($user: UserInput) {
    createUser(user: $user) {
      id name email
    }
  }
`;
