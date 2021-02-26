import React from "react";
import {View, Text, TouchableWithoutFeedback} from "react-native";

import Styles from "../Style";

export default function Home({ navigation }) {
    
    const goToLogin = () => {
        navigation.navigate("Login")
    }

    const goToSignup = () => {
        navigation.navigate("Signup")
    }
    
    // The text things are for spaces, not sure of a better way to do it
    return(
        <View style={Styles.MiddleOfScreen}>
            <Text style={Styles.Title}> Home Page </Text>

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
        </View>
    )
}