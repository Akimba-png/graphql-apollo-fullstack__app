import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { ApolloProvider } from '@apollo/client';
import { setupClient } from './graphql/setup-api';
import './index.css';

const client = setupClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
