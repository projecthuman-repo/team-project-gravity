import React from "react";
import {View, Text, TextInput, TouchableWithoutFeedback} from "react-native";
import Styles from "../style/Style";

//import { KeycloakProvider } from '@react-keycloak/web'
//import keycloak from '../keycloak'

import { useKeycloak } from '@react-keycloak/web';

export default function Login({ navigation }) {
	// Using array destructuring
	const [keycloak, initialized] = useKeycloak();
  
    const loginButtonPressed = () => {
        // pass
    }

    return(
        <View style={Styles.MiddleOfScreen}>
			<Text>
				{`User is ${!keycloak.authenticated ? 'NOT ' : ''}authenticated`}
			</Text>
			
			{!!keycloak.authenticated && (
			<Button onPress={() => keycloak.logout()} title="Logout" />
			)}
			
            <Text style={Styles.Title}> Login </Text>

            <Text> </Text>

            <TextInput style={Styles.Textbox} placeholder=" Username" />

            <Text> </Text>

            <TextInput style={Styles.Textbox} placeholder=" Password" secureTextEntry="true" />

            <Text> </Text>

            <TouchableWithoutFeedback onPress={loginButtonPressed}>
                <View style={Styles.Button}>
                    <Text style={Styles.ButtonText}> LOGIN </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}