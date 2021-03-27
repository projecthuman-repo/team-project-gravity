import React from "react";
import {View, Text, TouchableWithoutFeedback, Image, FlatList, SafeAreaView} from "react-native";
import Styles from "../style/Style";
import {BackArrow} from "./components/Buttons";
import {CategoricalListActive} from "./components/Text";

export default function Home({ navigation }) {
    
    const goToLogin = () => {
        navigation.navigate("Login")
    }

    const logout = () => {
        navigation.navigate("Home")
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