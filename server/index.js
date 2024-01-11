import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import 'dotenv/config';

const port = process.env.SERVER_PORT || 5000;

const app = express();
app.use('/graphql', graphqlHTTP({
  graphiql: true,
}));

app.listen(port, () => console.log(`server is listening on port ${port}`));

