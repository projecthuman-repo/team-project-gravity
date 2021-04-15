import 'react-native-gesture-handler';
import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createNetworkInterface } from '@apollo/client';
import {Platform} from "react-native";
import { createUploadLink } from 'apollo-upload-client'

// require('dotenv').config();
// import {API_URL} from '#env';
// import Config from 'react-native-config';
// console.log("CONFIG");
// console.log(Config);
// console.log(Config.API_URL);

console.log(process.env['NODE_ENV']);
console.log(process.env);
if (process.env['NODE_ENV'] === 'development'){
  console.log("IN IF");
} else if (process.env['NODE_ENV'] === 'staging') {
  console.log("IN STAGING");
}

import Navigator from "./HomeStack"

let link = createUploadLink({uri:`http://localhost:4000/graphql`})
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
