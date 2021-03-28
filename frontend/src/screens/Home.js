import React, { useState } from "react";
import {View, Text, TouchableWithoutFeedback, Image, Alert, Platform} from "react-native";
import Auth0 from 'react-native-auth0';

import Styles from "../style/Style";

export default function Home({ navigation }) {
    
    const [accessToken, setAccessToken] = useState('');
    const [userId, setUserId] = useState('');
    const mobile_credentials = require('../auth0-configuration-mobile');
    const auth0 = new Auth0(mobile_credentials);

    const goToCommunityList = () => {
        navigation.navigate("CommunityList")
    }
    
    const checkUserExists = async (subUserId) => {
        const userId = subUserId.replace("auth0|", "");
        setUserId(userId);

        // call query - if a user is returned, then do:
        navigation.navigate("CommunityList")
        // otherwise (if a user is not returned, meaning a new user was created):
        // navigation.navigate("Picture")
    }

    const getUserId = async () => {
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

            const subUserId = await getUserId();
            await checkUserExists(subUserId);

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
            <TouchableWithoutFeedback onPress={onLogin}>
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
