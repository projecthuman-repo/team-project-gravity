/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableWithoutFeedback,
    Image,
    SafeAreaView
} from 'react-native';
import Styles from "../style/Style";
import Auth0 from 'react-native-auth0';

var mobile_credentials = require('../auth0-configuration-mobile');
const auth0 = new Auth0(mobile_credentials);


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { accessToken: null,  };
    }

    _onLogin = () => {
        auth0.webAuth
            .authorize({
                scope: 'openid profile email'
            })
            .then(credentials => {
                Alert.alert('AccessToken: ' + credentials.accessToken);
                console.log(credentials);
                this.setState({ accessToken: credentials.accessToken });
                this.props.navigation.navigate("CommunityList")
            })
            .catch(error => console.log(error));
    };

    _onLogout = () => {
        auth0.webAuth
            .clearSession({})
            .then(success => {
                Alert.alert('Logged out!');
                this.setState({ accessToken: null });
            })
            .catch(error => {
                console.log('Log out cancelled');
            });
    };

    render() {
        let loggedIn = this.state.accessToken === null ? false : true;
        return (
        // <View style = { styles.container }>
        //     <Text style = { styles.header }> Auth0Sample - Login </Text>
        //     <Text>
        //         You are{ loggedIn ? ' ' : ' not ' }logged in . </Text>
        //         <Button onPress = { loggedIn ? this._onLogout : this._onLogin }
        //         title = { loggedIn ? 'Log Out' : 'Log In' }/>
        // </View >

        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Home")}>
            <Image style={{height: 40, width: 40, marginLeft: 30, marginTop: 25}} source={require('../images/arrow.png')} />
        </TouchableWithoutFeedback>

        <View style={Styles.container}>
            <View style={Styles.logoContainer}>
                <Image style={Styles.logo} source={require('../images/logo.jpeg')}></Image>
            </View>
            
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
                <TouchableWithoutFeedback onPress={this._onLogin}>
                    <View style={Styles.Button}>
                        <Text style={Styles.ButtonText}> LOGIN </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={Styles.middle}>
                <TouchableWithoutFeedback onPress={this._onLogout}>
                    <View style={Styles.Button}>
                        <Text style={Styles.ButtonText}> LOGOUT </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

export default Login;
