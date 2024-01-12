import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema.js';
import 'dotenv/config';

const posts = [
  {
    id: 0,
    title: 'first title',
    text: 'first text',
  },
  {
    id: 1,
    title: 'second title',
    text: 'second text',
  }
];

const USERS = [
  {id: 1, name: 'Vasya', password: 'qwerty', age: 25, posts},
  {id: 2, name: 'Pete',  password: '123456', age: 30, posts},
];

const port = process.env.SERVER_PORT || 5000;

const root = {
  getUsers() {
    return USERS;
  },
  getUser({id}) {
    return USERS.find(user => user.id === id);
  }
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  rootValue: root,
}))

app.listen(port, () => console.log(`server is listening on port ${port}`));

