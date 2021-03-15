import 'react-native-gesture-handler';
import React from 'react';
import {
  RNKeycloak,
  ReactNativeKeycloakProvider,
} from '@react-keycloak/native';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Navigator from "./HomeStack"

const keycloak = new RNKeycloak({
  url: 'http://keycloak-server/auth',
  realm: 'kc-realm',
  clientId: 'web',
});

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

export default function App() {
  return (
  <ApolloProvider client={client}>
	  <ReactNativeKeycloakProvider
      authClient={keycloak}
      initOptions={{ redirectUri: 'myapp://Profile' }}
    >
    <Navigator />
    </ReactNativeKeycloakProvider>
  </ApolloProvider>
  );
}