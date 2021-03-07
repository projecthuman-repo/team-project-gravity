import React from "react";
import {View, Text, TextInput, TouchableWithoutFeedback, Image} from "react-native";
import Styles from "../style/Style";

export default function Login({ navigation }) {

    const loginButtonPressed = () => {
        navigation.navigate("Home")
    }

    return(
       
        <View style={Styles.container}>
            <View style={Styles.logoContainer}>
                <Image style={Styles.logo} source={require('../assets/logo.jpeg')}></Image>
            </View>
            <Text style={Styles.ColoredTitleText}> Login </Text>
            <Text> </Text>
            <Text style={Styles.textOverInput}> email </Text>
            <View style={Styles.Action}>
                <TextInput style={Styles.textInput} autoCapitalize="none"></TextInput>
            </View>
            <Text style={Styles.textOverInput}> password </Text>
            <View style={Styles.Action}>
                <TextInput style={Styles.textInput} secureTextEntry autoCapitalize="none" ></TextInput>
            </View>
            
            <View style={Styles.middle}>
            <TouchableWithoutFeedback onPress={loginButtonPressed}>
                <View style={Styles.Button}>
                    <Text style={Styles.ButtonText}> LOGIN </Text>
                </View>
            </TouchableWithoutFeedback>
            </View>
        </View>
    );
}