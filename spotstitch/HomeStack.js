import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Community from "./screens/Community"
import TorontoFoodBankMembers from './screens/TorontoFoodBankMembers';
import CommunityList from "./screens/CommunityList";

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
    },
  
    Community: {
        screen: Community
    },
  
    TorontoFoodBankMembers: {
        screen: TorontoFoodBankMembers
    },
      
    CommunityList: {
        screen: CommunityList,
        navigationOptions: {
            header: null,
        }
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);