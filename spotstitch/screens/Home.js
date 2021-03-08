import React from "react";
import {View, Text, TouchableWithoutFeedback, Image} from "react-native";

import Styles from "../style/Style";

export default function Home({ navigation }) {
    
    const goToLogin = () => {
        navigation.navigate("Login")
    }

    const goToSignup = () => {
        navigation.navigate("Signup")
    }

    const goToCommunity = () => {
        navigation.navigate("Community")
    }
    
    // The text things are for spaces, not sure of a better way to do it
    return(
        <View style={Styles.MiddleOfScreen}>
            
            <Text style={Styles.Title}> Home Page </Text>
            <View style={Styles.logoContainer}>
                <Image style={Styles.logo} source={require('../assets/logo.jpeg')}></Image>
            </View>

            <TouchableWithoutFeedback onPress={goToLogin}>
                <View style={Styles.Button}>
                    <Text style={Styles.ButtonText}> LOGIN </Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={goToSignup}>
                <View style={Styles.Button}>
                    <Text style={Styles.ButtonText}> SIGN UP </Text>
                </View>
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback onPress={goToCommunity}>
                <View style={Styles.Button}>
                    <Text style={Styles.ButtonText}> SEE A COMMUNITY </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}