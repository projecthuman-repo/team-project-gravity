import React from "react";
import {View, Text, TextInput, TouchableWithoutFeedback, Image} from "react-native";
import Styles from "../style/Style";

import { useKeycloak } from '@react-keycloak/native';

export default function Login({ navigation }) {
	// Using array destructuring
	const [keycloak, initialized] = useKeycloak();
  
    const loginButtonPressed = () => {
        navigation.navigate("Home")
    }

    return(
        <View style={Styles.container}>
            <View style={Styles.logoContainer}>
                <Image style={Styles.logo} source={require('../assets/logo.jpeg')}></Image>
            </View>
            <Text>
				{`User is ${!keycloak.authenticated ? 'NOT ' : ''}authenticated`}
			</Text>
			
			{!!keycloak.authenticated && (
			<Button onPress={() => keycloak.logout()} title="Logout" />
			)}
            <Text style={Styles.ColoredTitleText}> Login </Text>
            <Text> </Text>
            <Text style={Styles.textOverInput}> email </Text>
            <View style={Styles.Action}>
                <TextInput style={Styles.textInput} autoCompleteType="email" autoCapitalize="none"></TextInput>
            </View>
            <Text style={Styles.textOverInput}> password </Text>
            <View style={Styles.Action}>
                <TextInput style={Styles.textInput} autoCompleteType="password" secureTextEntry autoCapitalize="none"></TextInput>
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