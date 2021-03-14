import React from "react";
import {View, Text, TouchableWithoutFeedback, TouchableHighlight, Image, SafeAreaView} from "react-native";
import * as ImagePicker from "react-native-image-picker"

import Styles from "../style/Style";

export default function CreateProposal ({ navigation }) {

    const choosePhoto = () => {
        // pick photo
    }

    // The text things are for spaces, not sure of a better way to do it
    return(
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("CommunityList")}>
                <Image style={{height: 40, width: 40, marginLeft: 30, marginTop: 25}} source={require('../assets/arrow.png')} />
            </TouchableWithoutFeedback>

            <Text style={{color: "black", fontSize: 30, fontWeight: '700', textAlign: "center", paddingTop: 10, paddingBottom: 47}}>Create Proposal</Text>

            <Text style={Styles.RedSubtitleLeftPadded}>Add Photos</Text>
        
            <TouchableHighlight onPress={() => choosePhoto}>
                <View>
                    <Image style={Styles.icon} source={require('../assets/camera.png')}/>
                </View>
            </TouchableHighlight>

        </SafeAreaView>
    )
}