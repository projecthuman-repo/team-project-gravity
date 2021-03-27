import React from "react";
import {View, Text, TouchableWithoutFeedback, TouchableHighlight, Image, SafeAreaView, TextInput} from "react-native";
import Styles from "../../style/Style";
import {BackArrow, BottomButton, CameraButtonWithTitle} from "../components/Buttons"
import {Title, DetailsBlock} from "../components/Text";

export default function CreateCommunity ({ navigation }) {

    const choosePhoto = () => {
        // pick photo
    }

    const createCommunity = () => {
        alert("Community was created")
        navigation.navigate("CommunityList")
    }

    // The text things are for spaces, not sure of a better way to do it
    return(
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
            <BackArrow function={() => navigation.navigate("CommunityList")} />

            <Title title="Create Community"/>

            <CameraButtonWithTitle title="Add Photos" />

            <DetailsBlock />

            <View style={{marginTop: 10, marginBottom: 60}}>
                <Text style={Styles.RedSubtitleLeftPadded}>Tags</Text>
            </View>

            <BottomButton text="Create" function={() => createCommunity()} />
        </SafeAreaView>
    )
}