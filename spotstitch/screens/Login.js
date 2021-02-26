import React from "react";
import {View, Text, TextInput, TouchableWithoutFeedback} from "react-native";
import Styles from "../Style";

export default function Login({ navigation }) {

    const loginButtonPressed = () => {
        // pass
    }

    return(
        <View style={Styles.MiddleOfScreen}>
            <Text style={Styles.Title}> Login </Text>

            <Text> </Text>

            <TextInput style={Styles.Textbox} placeholder=" Username" />

            <Text> </Text>

            <TextInput style={Styles.Textbox} placeholder=" Password" secureTextEntry="true" />

            <Text> </Text>

            <TouchableWithoutFeedback onPress={loginButtonPressed}>
                <View style={Styles.Button}>
                    <Text style={Styles.ButtonText}> LOG IN </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}