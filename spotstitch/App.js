import 'react-native-gesture-handler';
import React from 'react';

import Navigator from "./HomeStack"

import { ReactNativeKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak';

export default function App() {
  return (
	<ReactNativeKeycloakProvider
    authClient={keycloak}
    initOptions={{
      redirectUri: 'myapp://Homepage',
      // if you need to customize "react-native-inappbrowser-reborn" View you can use the following attribute
      inAppBrowserOptions: {
        // For iOS check: https://github.com/proyecto26/react-native-inappbrowser#ios-options
        // For Android check: https://github.com/proyecto26/react-native-inappbrowser#android-options
      },
    }}
  >
    <Navigator />
  </ReactNativeKeycloakProvider>
  );
}
