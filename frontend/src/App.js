import 'react-native-gesture-handler';
import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createNetworkInterface } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client'

import Navigator from "./HomeStack"

const link = createUploadLink({uri:'http://localhost:4000/graphql'})
// const link = createUploadLink({uri:'http://10.0.2.2:4000/graphql'})

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
  });
  
  export default function App() {
    return (
    <ApolloProvider client={client}>
        <Navigator />
    </ApolloProvider>
    );
  }
