import { ApolloClient, InMemoryCache} from '@apollo/client';
import { BASE_URL } from '../const';

export const setupClient = () => {
  const client = new ApolloClient({
    uri: BASE_URL,
    cache: new InMemoryCache(),
  });
  return client;
};
