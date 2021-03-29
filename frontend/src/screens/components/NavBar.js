import React, { Component } from 'react';
import {View, Text, FlatList, TouchableOpacity, TextInput} from "react-native";
import Styles from "../../style/Style";
// import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
// import Icon from 'react-native-vector-icons/Ionicons';  
import Home from "../Home";
import CreateCommunity from "../community/CreateCommunity";
import { createAppContainer } from "react-navigation";


const Tab = createMaterialBottomTabNavigator({
    Profile: { screen: CreateCommunity,  
        navigationOptions:{  
            tabBarLabel:'Profile',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    {/* <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>   */}
                </View>),  
            activeColor: '#000000',  
            inactiveColor: 'purple',  
            barStyle: { backgroundColor: '#fa5f6a' },  
        }  
    },  
    Home: { screen: Home,  
        navigationOptions:{  
            tabBarLabel:'',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    {/* <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>   */}
                </View>),
            activeColor: '#000000',  
            inactiveColor: 'purple',  
            barStyle: { backgroundColor: '#fa5f6a' , borderRadius: 5},  
        }  
    }, 
});
class NavBar extends Component {    
    render() {
        return (
            <View style={{alignItems: "center"}}>          
                <Text style={{color: "black", fontSize: 26, fontWeight: '700', textAlign: "center", paddingTop: 10, paddingBottom: 5}}>{this.props.title}</Text>
            </View> 
        )
    }

}

export default createAppContainer(Tab);  