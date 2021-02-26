import React from "react";
import {View, Text, Button} from "react-native";
import Styles from "../Style";

export default function Home({ navigation }) {
    
    const pressHandler = () => {
        navigation.navigate("Login")
    }

    <View style={Styles.MiddleOfScreen}>
        <Text> This is the login page </Text>
        <Button title="change page" onPress={pressHandler}/>
    </View>
}