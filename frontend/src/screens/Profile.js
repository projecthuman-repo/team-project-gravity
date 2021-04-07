import React, { useState} from "react";
import {View, ScrollView, Text, TouchableWithoutFeedback, Alert, TouchableOpacity, Image, FlatList, SafeAreaView} from "react-native";
import Auth0 from 'react-native-auth0';
import Styles from "../style/Style";
import {BackArrow} from "./components/Buttons";
import {CategoricalListActive} from "./components/Text";
import {SmallTileListProfile, BadgeTile} from "./components/community_explore/Tiles";
import useUser from '../hooks/queries/useUser';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost'
import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

const queryIsNotNil = R.curry(
    (query, data) => R.both(
      RA.isNotNilOrEmpty,
      R.propSatisfies(RA.isNotNil, query)
    )(data)
)

export default function Profile({ navigation }) {

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

    const goToCommunity = () => {
        navigation.navigate("Community");
    }

    const displayBadgeName = (n) => {
        console.log(n);
    }

    const userID = navigation.getParam("userID");
    const user = useUser(userID);
    let name;
    if (RA.isNotNil(user)) {
        name = user.name
    }

    const {loading, data, error} = useQuery(gql`
    query FindUsersCommunities($userID: ID){
        findUsersCommunities(userID: $userID) {
            communityName
            communityID
        }
    }`, {
        variables: { userID },
        fetchPolicy: 'cache-and-network'
    })    

    const communities = R.ifElse(
        queryIsNotNil('findUsersCommunities'),
        R.prop('findUsersCommunities'),
        R.always([]),
    )(data)
    
    // The text things are for spaces, not sure of a better way to do it
    return(
        <SafeAreaView style={Styles.SafeAreaViewStyle}>
            <View style={[{flexDirection:'row', alignItems:'center'}]}>
                <View style={[{flex:1,flexDirection:'row'}]}>
                    <BackArrow function={() => navigation.navigate("CommunityList")} />
                </View>
                <View style={[{justifyContent:'space-evenly', marginVertical:10}]}>

                    <View style={{marginHorizontal: 20, width: "75%"}}>
                        <TouchableWithoutFeedback onPress={logout}>
                            <View style={{justifyContent: "center", alignItems: "center", backgroundColor: "#fa5f6a", width: "100%", height: 40, marginTop: 20, marginRight: 20, borderRadius: 8}}>
                                <Text style={{color: "white", fontWeight: "500", fontSize: 16}}> Logout </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>

            <View style={{alignItems: "center"}}>
                <Image style={Styles.ProfilePicture} source={require("../images/profilePicture.png")}/>
                <Text selectable={false} style={{fontWeight: "bold", fontSize: 24, marginTop: 10}}>{name}</Text>
            </View>

            <Text style={{paddingTop: 30, marginHorizontal: 20, color: '#f85f69', fontSize: 18, fontWeight: '700'}}>Badges</Text>

            <View style={{paddingTop: 20}}>
                <ScrollView horizontal={true}>
                    <TouchableOpacity onPress={displayBadgeName.bind(this, "Badge #1")}>
                        <BadgeTile imageUri={require('../images/badge.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={displayBadgeName.bind(this, "Badge #2")}>
                        <BadgeTile imageUri={require('../images/badge.png')}/>
                    </TouchableOpacity>  

                    <TouchableOpacity onPress={displayBadgeName.bind(this, "Badge #3")}>
                        <BadgeTile imageUri={require('../images/badge.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={displayBadgeName.bind(this, "Badge #4")}>
                        <BadgeTile imageUri={require('../images/badge.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={displayBadgeName.bind(this, "Badge #5")}>
                        <BadgeTile imageUri={require('../images/badge.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={displayBadgeName.bind(this, "Badge #6")}>
                        <BadgeTile imageUri={require('../images/badge.png')}/>
                    </TouchableOpacity>  

                    <TouchableOpacity onPress={displayBadgeName.bind(this, "Badge #7")}>
                        <BadgeTile imageUri={require('../images/badge.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={displayBadgeName.bind(this, "Badge #8")}>
                        <BadgeTile imageUri={require('../images/badge.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={displayBadgeName.bind(this, "Badge #9")}>
                        <BadgeTile imageUri={require('../images/badge.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={displayBadgeName.bind(this, "Badge #10")}>
                        <BadgeTile imageUri={require('../images/badge.png')}/>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <Text style={{paddingTop: 30, marginHorizontal: 20, color: '#f85f69', fontSize: 18, fontWeight: '700'}}>Communities</Text>

            <View style={{marginLeft: 20}}>
                <SmallTileListProfile content={communities} navigation={navigation} userID = {userID} />
            </View>

            <CategoricalListActive title="Feed" content={[
                {key: "Feed item 1", link: () => navigation.navigate("CommunityList")},
                {key: "Feed item 2", link: () => navigation.navigate("CommunityList")},
                {key: "Feed item 3", link: () => navigation.navigate("CommunityList")},
                {key: "Feed item 4", link: () => navigation.navigate("CommunityList")}
            ]}/>

        </SafeAreaView>
    );
}