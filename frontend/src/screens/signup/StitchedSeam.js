import React from "react";
import {View, Text, TextInput, TouchableWithoutFeedback, Image, SafeAreaView, TouchableHighlight} from "react-native";
import Styles from "../../style/Style";
import {BottomButton} from "../components/Buttons";
import {TitleSubtitleInactive} from "../components/Text";
import {StitchedTiles} from "../components/community_explore/Tiles";

export default function StitchedSeam({ navigation }) {
    const pressHandler = () => {
        navigation.navigate("CommunityList")
    }
    // const userID = navigation.getParam("userID");
    const userID = 1;

    const content = [
        {
            header: "Recreation",
            description: "In what ways do you want to connect with fun activities?"
        },
        {
            header: "Social",
            description: "In what ways do you want to connect with fun activities?"
        },
        {
            header: "Social",
            description: "In what ways do you want to connect with fun activities?"
        },
        {
            header: "Social",
            description: "In what ways do you want to connect with fun activities?"
        },
        {
            header: "Social",
            description: "In what ways do you want to connect with fun activities?"
        },
        {
            header: "Social",
            description: "In what ways do you want to connect with fun activities?"
        }
    ]

    return(
        <SafeAreaView style={Styles.SafeAreaViewStyle}>
            <View style={Styles.MiddleOfScreen}>
            <Text>&nbsp;&nbsp;</Text>
            <Text>&nbsp;&nbsp;</Text>
                <TitleSubtitleInactive subtitle="Find your seam" title="Let's get you stitched in!" ></TitleSubtitleInactive>
    
                
            
                <StitchedTiles content={content} navigation={navigation} userID={userID}></StitchedTiles>

                <BottomButton text="View Communities" function={() => pressHandler()} />
            </View>
        </SafeAreaView>
    );
}