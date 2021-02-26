import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const screens = {
    Home: {
        screen: Home
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