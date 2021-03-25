import React from "react";
import {View, Text, TouchableWithoutFeedback, TouchableHighlight, Image, SafeAreaView, TextInput} from "react-native";

import Styles from "../../style/Style";
import {BottomButton} from "../components/Buttons"

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
            <TouchableWithoutFeedback onPress={() => navigation.navigate("CommunityList")}>
                <Image style={{height: 40, width: 40, marginLeft: 30, marginTop: 25}} source={require('../../images/arrow.png')} />
            </TouchableWithoutFeedback>

            <Text style={{color: "black", fontSize: 26, fontWeight: '700', textAlign: "center", paddingTop: 10, paddingBottom: 10}}>Create Proposal</Text>

            <Text style={Styles.RedSubtitleLeftPadded}>Add Photos</Text>
        
            <TouchableHighlight onPress={() => choosePhoto}>
                <View>
                    <Image style={Styles.icon} source={require('../../images/camera.png')}/>
                </View>
            </TouchableHighlight>

            <Text style={Styles.RedSubtitleLeftPadded}>Details</Text>

            <View style={{marginHorizontal: 35, paddingVertical: 8}}>
                <TextInput style={{height: 35, width: "100%", borderColor: "black", borderWidth: 1, alignSelf: "center", borderRadius: 6}} multiline={true} placeholder="  Name"></TextInput>
            </View>
            <View style={{marginHorizontal: 35, paddingVertical: 5}}>
                <TextInput style={{height: 170, width: "100%", borderColor: "black", borderWidth: 1, alignSelf: "center", borderRadius: 6}} multiline={true} placeholder="  Description"></TextInput>
            </View>

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