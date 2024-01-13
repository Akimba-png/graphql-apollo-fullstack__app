import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type User {
    id: ID
    name: String
    password: String
    age: Int
    posts: [Post]
  }

  type Post {
    id: ID
    title: String
    text: String
  }

  type Query {
    getUsers: [User]
    getUser(id: Int): User
  }

  input UserInput {
    id: ID
    name: String!
    password: String!
    age: Int!
  }

  type Mutation {
    createUser(user: UserInput): User
  }
`);

export { schema };
