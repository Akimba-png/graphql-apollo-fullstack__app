import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema.js';
import cors from 'cors';
import 'dotenv/config';

let count = 3;
const posts = [
  {
    id: 1,
    title: 'first title',
    text: 'first text',
  },
  {
    id: 2,
    title: 'second title',
    text: 'second text',
  }
];

const USERS = [
  {id: 1, name: 'Vasya', email: 'vasya@mail.net', password: 'qwerty', age: 25, posts},
  {id: 2, name: 'Pete',  email: 'pete@mail.net', password: '123456', age: 30, posts},
];

// Весь код выше - моковые начальные данные
// Ниже расположен код инициализации GraphQL сервера
const port = process.env.SERVER_PORT || 5000;

const root = {
  getUsers() {
    return USERS;
  },
  getUser({id}) {
    return USERS.find(user => user.id === id);
  },
  createUser({user}) {
    const candidate = { id: count++, ...user};
    USERS.push(candidate);
    return candidate;
  }
};

const app = express();
app.use(cors({
  credentials: true,
}));
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  rootValue: root,
}))

app.listen(port, () => console.log(`server is listening on port ${port}`));

