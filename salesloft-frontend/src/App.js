import React from 'react';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Header from './components/Header';
import Main from './components/Main';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: 'http://localhost:4000/graphql',
  resolvers: {},
});

cache.writeData({
  data: {
    page: 1,
    perPage: 25,
    totalCount: 0,
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Main />
    </ApolloProvider>
  );
}

export default App;
