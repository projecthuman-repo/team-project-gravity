import React from "react";
import {View, Text, Button} from "react-native";
import Styles from "../style/Style";

export default function Signup({ navigation }) {

    const pressHandler = () => {
        navigation.navigate("Login")
    }

    return(
        <View style={Styles.MiddleOfScreen}>
            <Text> This is the signup page </Text>
            <Button title="change page" onPress={pressHandler}/>
        </View>
    );
}