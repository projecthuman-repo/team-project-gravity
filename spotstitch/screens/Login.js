import React from "react";
import {View, Text, TextInput, TouchableWithoutFeedback, Image, SafeAreaView} from "react-native";
import Styles from "../style/Style";
import { ApolloProvider, ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import { useKeycloak } from '@react-keycloak/native';

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
});

function test(username) {
    client.query({
        query: gql`
        query {
            user(userID: "${username}") {
                userID
            }
        }
    `})
    .then((response) => console.log(response.data))
    .catch((err) => console.error(err))
}

export default function Login({ navigation }) {
	// Using array destructuring
	const [keycloak, initialized] = useKeycloak();
  
    const loginButtonPressed = () => {
        navigation.navigate("CommunityList")
    }

    return(
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
                <Image style={{height: 40, width: 40, marginLeft: 30, marginTop: 25}} source={require('../assets/arrow.png')} />
            </TouchableWithoutFeedback>
            
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
        </SafeAreaView>
    );
}