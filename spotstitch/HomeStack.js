import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/signup/Signup";
import Picture from "./screens/signup/Picture";
import ProfileHeader from "./screens/signup/ProfileHeader";
import Bio from "./screens/signup/Bio";
import Placeholder from "./screens/signup/Placeholder";
import StitchedPlaceholder from "./screens/signup/StitchedPlaceholder";
import Community from "./screens/community/Community";
import ModifyRoles from "./screens/community/ModifyRoles";
import TorontoFoodBankMembers from './screens/TorontoFoodBankMembers';
import CommunityList from "./screens/community/CommunityList";
import CreateProposal from "./screens/CreateProposal";

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
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },

    Signup: {
        screen: Signup,
        navigationOptions: {
            header: null,
        }
    },

    Picture: {
        screen: Picture,
        navigationOptions: {
            header: null,
        }
    },

    ProfileHeader: {
        screen: ProfileHeader,
        navigationOptions: {
            header: null,
        }
    },

    Bio: {
        screen: Bio,
        navigationOptions: {
            header: null,
        }
    },
  
    Placeholder: {
        screen: Placeholder
    },

    StitchedPlaceholder: {
        screen: StitchedPlaceholder,
        navigationOptions: {
            header: null,
        }
    },

    Community: {
        screen: Community
    },
  
    TorontoFoodBankMembers: {
        screen: TorontoFoodBankMembers,
        
    },
      
    CommunityList: {
        screen: CommunityList,
        navigationOptions: {
            header: null,
        }
    },

    CreateProposal: {
        screen: CreateProposal,
        navigationOptions: {
            header: null,
        }
    },

    ModifyRoles: {
        screen: ModifyRoles,
        navigationOptions: {
            header: null
        }
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);