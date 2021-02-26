import React from "react";
import {View, Text, Button, TextInput} from "react-native";
import Styles from "../Style";

export default function Login({ navigation }) {

    const pressHandler = () => {
        // pass
    }

    return(
        <View style={Styles.MiddleOfScreen}>
            <Text> Login </Text>
            <Text> </Text>
            <TextInput style={Styles.Textbox} placeholder="Username" />
            <Text> </Text>
            <TextInput style={Styles.Textbox} placeholder="Password" secureTextEntry="true"/>
            <Text> </Text>
            <Button title="Login" onPress={pressHandler}/>
        </View>
    );
}