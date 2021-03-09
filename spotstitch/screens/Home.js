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
    
    const goToCommunityList = () => {
        navigation.navigate("CommunityList")
    }
    
    // The text things are for spaces, not sure of a better way to do it
    return(
        <View style={Styles.MiddleOfScreen}>
            
            <View style={Styles.logoContainer}>
                <Image style={Styles.logo} source={require('../assets/logo.jpeg')}></Image>
            </View>

            <Text> </Text>

            <TouchableWithoutFeedback onPress={goToLogin}>
                <View style={Styles.Button}>
                    <Text style={Styles.ButtonText}> LOGIN </Text>
                </View>
            </TouchableWithoutFeedback>

            <Text> </Text>

            <TouchableWithoutFeedback onPress={goToSignup}>
                <View style={Styles.Button}>
                    <Text style={Styles.ButtonText}> SIGN UP </Text>
                </View>
            </TouchableWithoutFeedback>

            <Text> </Text>

            <TouchableWithoutFeedback onPress={goToCommunityList}>
                <View style={Styles.Button}>
                    <Text style={Styles.ButtonText}> COMMUNITY LIST </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}