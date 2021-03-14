import React from "react";
import {View, Text, TextInput, TouchableWithoutFeedback, Image} from "react-native";
import Styles from "../../style/Style";

export default function StitchedPlaceholder({ navigation }) {
 
    const pressHandler = () => {
        navigation.navigate("CommunityList")
    }

    return(
        <View style={Styles.MiddleOfScreen}>
            <Text style={Styles.RedSubtitle}> Placeholder for the "Let's Get You Stitched In!"" Sequence" </Text>
        
            <Text>&nbsp;&nbsp;</Text>

            <TouchableWithoutFeedback onPress={pressHandler}>
                <View style={Styles.NextButton}>
                    <Text style={Styles.ButtonText}> View Communities </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}