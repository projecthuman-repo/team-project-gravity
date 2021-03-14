import React from "react";
import {View, Text, TouchableWithoutFeedback, Image, FlatList, SafeAreaView} from "react-native";

import Styles from "../style/Style";

export default function Home({ navigation }) {
    
    const goToLogin = () => {
        navigation.navigate("Login")
    }
    
    // The text things are for spaces, not sure of a better way to do it
    return(
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("CommunityList")}>
                <Image style={{height: 40, width: 40, marginLeft: 30, marginTop: 25}} source={require('../assets/arrow.png')} />
            </TouchableWithoutFeedback>

            <View style={{alignItems: "center"}}>
                <Image style={Styles.ProfilePicture} source={require("../assets/profilePicture.png")}/>

                <Text selectable={false} style={{fontWeight: "bold", fontSize: 24, marginTop: 10}}>Full Name</Text>

                <View style={Styles.ReputationContainer}>
                    <Text selectable={false} style={Styles.ReputationText}>20 Reputation</Text>
                </View>
            </View>

            <View style={{paddingBottom: 15, marginHorizontal: 20}}>
                <Text selectable={false} style={Styles.ColoredTitleText}>My Communities</Text>
                <FlatList
                    data={[
                        {key: 'Community 1'},
                        {key: 'Community 2'},
                        {key: 'Community 3'},
                        {key: 'Community 4'},
                    ]}
                    renderItem={({item}) => <Text selectable={false} style={Styles.CommunityListItem}>{item.key}</Text>}
                />
            </View>

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

           
        </SafeAreaView>
    );
}