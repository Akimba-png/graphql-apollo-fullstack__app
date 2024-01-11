import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema.js';
import 'dotenv/config';

const USERS = [
  {id: 1, name: 'Vasya', password: 'qwerty', age: 25},
  {id: 2, name: 'Pete',  password: '123456', age: 30},
];

const port = process.env.SERVER_PORT || 5000;

const root = {
  getUsers() {
    return USERS;
  },
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  rootValue: root,
}))

app.listen(port, () => console.log(`server is listening on port ${port}`));

