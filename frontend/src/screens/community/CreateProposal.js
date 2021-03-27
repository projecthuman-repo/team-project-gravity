import React from "react";
import {View, Text, TouchableWithoutFeedback, TouchableHighlight, Image, SafeAreaView, TextInput} from "react-native";
import Styles from "../../style/Style";
import {BackArrow, BottomButton, CameraButtonWithTitle} from "../components/Buttons"
import {Title, DetailsBlock} from "../components/Text";

export default function CreateProposal ({ navigation }) {

    const choosePhoto = () => {
        // pick photo
    }

    const createProposal = () => {
        alert("Proposal was published")
        navigation.navigate("CommunityList")
    }

    const modifyRoles = () => {
        navigation.navigate("ModifyRoles")
    }

    // The text things are for spaces, not sure of a better way to do it
    return(
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
            <BackArrow function={() => navigation.navigate("Community")} />

            <Title title="Create Proposal"/>
        
            <CameraButtonWithTitle title="Add Photos" />

            <DetailsBlock />

            <Text style={Styles.RedSubtitleLeftPadded}>Help Needed</Text>
            <TouchableWithoutFeedback onPress={() => modifyRoles()}>
                <Text style={{marginLeft: 35, color: "#1881fa", fontSize: 15, paddingTop: 2, fontWeight: "600"}}>Modify Roles</Text>
            </TouchableWithoutFeedback>

            <View style={{marginTop: 10, marginBottom: 60}}>
                <Text style={Styles.RedSubtitleLeftPadded}>Tags</Text>
            </View>

            <BottomButton text="Submit" function={() => createProposal()} />
        </SafeAreaView>
    )
}