import 'react-native-gesture-handler';
import React from 'react';

import Navigator from "./HomeStack"

// KeyCloak
//import * as React from 'react';

import {
  RNKeycloak,
  ReactNativeKeycloakProvider,
} from '@react-keycloak/native';

const keycloak = new RNKeycloak({
  url: 'http://keycloak-server/auth',
  realm: 'kc-realm',
  clientId: 'web',
});



export default function App() {
  return (
	<ReactNativeKeycloakProvider
      authClient={keycloak}
      initOptions={{ redirectUri: 'myapp://Profile' }}
    >
    <Navigator />
    </ReactNativeKeycloakProvider>

  );
}