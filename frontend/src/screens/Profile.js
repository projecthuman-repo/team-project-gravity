import React, { useState} from "react";
import {View, Text, TouchableWithoutFeedback, Image, FlatList, SafeAreaView, Alert} from "react-native";
import Auth0 from 'react-native-auth0';
import Styles from "../style/Style";
import {BackArrow} from "./components/Buttons";
import {CategoricalListActive} from "./components/Text";

export default function Home({ navigation }) {

    var mobile_credentials = require('../auth0-configuration-mobile');
    const auth0 = new Auth0(mobile_credentials);

    const logout = () => {
        auth0.webAuth
            .clearSession({})
            .then(success => {
                Alert.alert('Logged out!');
                navigation.navigate("Home")
            })
            .catch(error => {
                console.log(error);
                console.log('Log out cancelled');
        });
    }
    
    // The text things are for spaces, not sure of a better way to do it
    return(
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
            <BackArrow function={() => navigation.navigate("CommunityList")} />

            <View style={{alignItems: "center"}}>
                <Image style={Styles.ProfilePicture} source={require("../images/profilePicture.png")}/>

                <Text selectable={false} style={{fontWeight: "bold", fontSize: 24, marginTop: 10}}>Full Name</Text>

                <View style={Styles.ReputationContainer}>
                    <Text selectable={false} style={Styles.ReputationText}>20 Reputation</Text>
                </View>
            </View>

            <CategoricalListActive title="My Communities" content={[
                {key: "Community 1", link: () => navigation.navigate("Community")},
                {key: "Community 2", link: () => navigation.navigate("Community")},
                {key: "Community 3", link: () => navigation.navigate("Community")},
                {key: "Community 4", link: () => navigation.navigate("Community")}
            ]}/>

            <View style={{marginHorizontal: 20, borderColor: "#778899", borderTopWidth: 1, paddingTop: 15}}>
                <Text selectable={false} style={Styles.ColoredTitleText}>Recent Activity</Text>
                <FlatList
                    data={[
                        {key: 'Someone liked your post!'},
                        {key: 'Your proposal was upvoted!'},
                        {key: 'You earned a badge!'},
                    ]}
                    renderItem={({item}) => <Text selectable={false} style={Styles.CommunityListItem}>{item.key}</Text>}
                />
            </View>

            <View style={{marginHorizontal: 20, position: "absolute", bottom: 30, width: "90%"}}>
                <TouchableWithoutFeedback onPress={logout}>
                    <View style={{justifyContent: "center", alignItems: "center", backgroundColor: "#fa5f6a", width: "100%", height: 45, borderRadius: 10}}>
                        <Text style={{color: "white", fontWeight: "500", fontSize: 20}}> Logout </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    );
}