import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Community from "./screens/Community"
import TorontoFoodBankMembers from './screens/TorontoFoodBankMembers';

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
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);