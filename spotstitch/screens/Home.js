import React from "react";
import {View, Text, Button} from "react-native";
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
            <Text> This is the home page </Text>
            <Text> </Text>
            <Button title="LOGIN" onPress={goToLogin}/>
            <Text> </Text>
            <Button title="SIGNUP" onPress={goToSignup}/>
        </View>
    )
}