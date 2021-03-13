import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

// KeyCloak
import * as React from 'react';

import {
  RNKeycloak,
  ReactNativeKeycloakProvider,
} from '@react-keycloak/native';

const keycloak = new RNKeycloak({
  url: 'http://keycloak-server/auth',
  realm: 'kc-realm',
  clientId: 'web',
});

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        }
    },
    Login: {
        screen: Login
    },
    Signup: {
        screen: Signup
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);