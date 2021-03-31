import React, { useState } from "react";
import {View, Text, TouchableWithoutFeedback, Image, Alert, Platform} from "react-native";
import Auth0 from 'react-native-auth0';
import useUser from '../hooks/queries/useUser';

import Styles from "../style/Style";

export default function Home({ navigation }) {
    
    const [accessToken, setAccessToken] = useState('');
    const [userID, setUserID] = useState('');
    const mobile_credentials = require('../auth0-configuration-mobile');
    const auth0 = new Auth0(mobile_credentials);

    const user = useUser(userID);

    const goToCommunityList = () => {
        //TODO: update userId to be something like "guest" which indicates no one has signed in
        // then anywhere that Platform.OS is used, replace with check to see if userId === 'guest'
        navigation.navigate("Signup")
    }
    
    const checkUserExists = () => {
        if (userID !== '') {
            navigation.navigate("CommunityList", {userID: userID})
        } else {
            navigation.navigate("Picture")
        }
    }

    const getUserID = async () => {
        const url = `https://${mobile_credentials.domain}/userinfo`;

        var header = new Headers();
        header.append('Authorization', `Bearer ${accessToken}`);

        const request = new Request(url, {
            method: 'GET',
            headers: header,
        });
        const res = await fetch(request);
        const userInfo = await res.json();
        return userInfo.sub;
    }

    const onLogin = async () => {
        try {
            const credentials = await auth0.webAuth.authorize({scope: 'openid profile email'});
            Alert.alert('AccessToken: ' + credentials.accessToken);
            setAccessToken(credentials.accessToken);

            const subUserID = await getUserID();

            setUserID(subUserID.replace("auth0|", ""));
            
            checkUserExists();

        } catch(err) {
            console.log(err);
        }
    };
    
    // The text things are for spaces, not sure of a better way to do it
    return(
        <View style={Styles.MiddleOfScreen}>
            <View style={Styles.logoContainer}>
                <Image style={Styles.logo} source={require('../images/logo.jpeg')}></Image>
            </View>

            {Platform.OS === 'web' ? null :
            <TouchableWithoutFeedback onPress={() => onLogin()}>
                <View style={Styles.Button}>
                    <Text style={Styles.ButtonText}> LOGIN </Text>
                </View>
            </TouchableWithoutFeedback>
            }
            <TouchableWithoutFeedback onPress={goToCommunityList}>
                <View style={Styles.Button}>
                    <Text style={Styles.ButtonText}> CONTINUE AS GUEST </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}
