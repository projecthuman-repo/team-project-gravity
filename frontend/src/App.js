import 'react-native-gesture-handler';
import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createNetworkInterface } from '@apollo/client';
import {Platform} from "react-native";
import { createUploadLink } from 'apollo-upload-client'

let url = "https://staging.spotstitch.herokuapp.com/graphql"
if (process.env['NODE_ENV'] === 'development'){
  console.log("LOCAL")
  url = "http://localhost:4000/graphql"
}

import Navigator from "./HomeStack"

let link = createUploadLink({uri:url})
if (Platform.OS === 'android') {
  link = createUploadLink({uri:'http://10.0.2.2:4000/graphql'})
}

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
