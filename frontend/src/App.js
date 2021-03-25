import 'react-native-gesture-handler';
import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Navigator from "./HomeStack"

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache()
  });
  
  export default function App() {
    return (
    <ApolloProvider client={client}>
        <Navigator />
    </ApolloProvider>
    );
  }