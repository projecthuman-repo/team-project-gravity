import React, { useState } from "react";
import {View, Text, TouchableWithoutFeedback, Image, Alert, Platform, SafeAreaView} from "react-native";
import Auth0 from 'react-native-auth0';
import useUser from '../hooks/queries/useUser';

import * as RA from 'ramda-adjunct';

import Styles from "../style/Style";

export default function Home({ navigation }) {
    
    // SUPRESS WARNINGS
    console.disableYellowBox = true;

    const [accessToken, setAccessToken] = useState('');
    const [userID, setUserID] = useState('');
    const mobile_credentials = require('../auth0-configuration-mobile');
    const auth0 = new Auth0(mobile_credentials);

    const checkUserExists = () => {
        if (user.bio) {
            navigation.navigate("CommunityList", {userID: userID})
        } else {
            navigation.navigate("Picture", {userID: userID})
        }
    }

    const user = useUser(userID);
    if (RA.isNotNil(user)) {
        checkUserExists();
    }

    const goToCommunityList = () => {
        //TODO: update userId to be something like "guest" which indicates no one has signed in
        // then anywhere that Platform.OS is used, replace with check to see if userId === 'guest'
        navigation.navigate("CommunityList")
    }


    //micas for testing so remove after
    const goToPicture = () => {
        navigation.navigate("Picture",  {userID: "12"})
    }

    //micas for testing so remove after
    const dummyuid = () => {
        navigation.navigate("CommunityList",  {userID: "1"})
    }

    const getUserID = async () => {
        const url = `https://${mobile_credentials.domain}/userinfo`;

        var header = new Headers();
        header.append('Authorization', `Bearer ${accessToken}`);
        header.append('Accept', 'application/json');

        const request = new Request(url, {
            method: 'GET',
            headers: header,
        });
        const res = await fetch(request);
        try {
            console.log(res.status);
            const userInfo = await res.json();
            return userInfo.sub;
        } catch(err) {
            console.log("JSON ERR");
            console.log(err);
        }
    }

    const onLogin = async () => {
        try {
            // await auth0.webAuth.clearSession({});
            const credentials = await auth0.webAuth.authorize({scope: 'openid profile email'});
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
        <SafeAreaView style={Styles.SafeAreaViewStyle}>
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
                {//micas for testing so remove after 
                }               
                {/* <TouchableWithoutFeedback onPress={dummyuid}>
                    <View style={Styles.Button}>
                        <Text style={Styles.ButtonText}> FOR TESTING </Text>
                    </View>
                </TouchableWithoutFeedback> */}
            </View>
        </SafeAreaView>
    )
}
