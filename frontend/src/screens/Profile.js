import React, { useState} from "react";
import {View, ScrollView, Text, TouchableWithoutFeedback, Alert, TouchableOpacity, Image, FlatList, SafeAreaView} from "react-native";
import Auth0 from 'react-native-auth0';
import Styles from "../style/Style";
import {BackArrow} from "./components/Buttons";
import {CategoricalListActive} from "./components/Text";
import {BadgeTile} from "./components/ProfileComponents";
import {SmallTile} from "./components/community_explore/Tiles";

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

    const goToCommunity = () => {
        navigation.navigate("Community");
    }

    const displayBadgeName = (n) => {
        console.log(n);
    }
    
    // The text things are for spaces, not sure of a better way to do it
    return(
        <SafeAreaView style={Styles.SafeAreaViewStyle}>
            <ScrollView>
            <View style={[{flexDirection:'row', alignItems:'center'}]}>
                <View style={[{flex:1,flexDirection:'row'}]}>
                    <BackArrow function={() => navigation.navigate("CommunityList")} />
                </View>
                <View style={[{justifyContent:'space-evenly', marginVertical:10}]}>

                    <View style={{marginHorizontal: 20, width: "75%"}}>
                        <TouchableWithoutFeedback onPress={logout}>
                            <View style={{justifyContent: "center", alignItems: "center", backgroundColor: "#fa5f6a", width: "100%", height: 45, borderRadius: 10}}>
                                <Text style={{color: "white", fontWeight: "500", fontSize: 20}}> Logout </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>

            <View style={{alignItems: "center"}}>
                <Image style={Styles.ProfilePicture} source={require("../images/profilePicture.png")}/>
                <Text selectable={false} style={{fontWeight: "bold", fontSize: 24, marginTop: 10}}>Full Name</Text>
            </View>

            <CategoricalListActive title="Badges" content={[]}/>

            <View>
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

            <CategoricalListActive title="Communities" content={[]}/>


            <View style={{height:130}}>
                <ScrollView horizontal={true}>
                    <TouchableOpacity onPress={goToCommunity}>
                        <SmallTile imageUri={require('../images/community_list/small/toronto.jpg')} name="Community 1" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={goToCommunity}>                
                        <SmallTile imageUri={require('../images/community_list/small/vancouver.jpg')} name="Community 2" />
                    </TouchableOpacity>  

                    <TouchableOpacity onPress={goToCommunity}>
                        <SmallTile imageUri={require('../images/community_list/small/nyc.jpg')} name="Community 3" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={goToCommunity}>
                        <SmallTile imageUri={require('../images/community_list/small/la.jpg')} name="Community 4" />
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <CategoricalListActive title="Feed" content={[
                {key: "Feed item 1", link: () => navigation.navigate("Community")},
                {key: "Feed item 2", link: () => navigation.navigate("Community")},
                {key: "Feed item 3", link: () => navigation.navigate("Community")},
                {key: "Feed item 4", link: () => navigation.navigate("Community")}
            ]}/>

            </ScrollView>
        </SafeAreaView>
    );
}