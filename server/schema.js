import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type User {
    id: ID
    name: String
    password: String
    age: Int
  }

  type Query {
    getUsers: [User]
  }
`);

export { schema };
