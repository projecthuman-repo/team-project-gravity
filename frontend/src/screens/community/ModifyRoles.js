import React from "react";
import {View, Text, TextInput, TouchableWithoutFeedback, Image, SafeAreaView} from "react-native";
import Styles from "../../style/Style";

export default function Placeholder({ navigation }) {
        
    const pressHandler = () => {
        navigation.navigate("CreateProposal")
    }

    return(
        <SafeAreaView style={Styles.SafeAreaViewStyle}>
            <View style={Styles.MiddleOfScreen}>
                <Text style={Styles.RedSubtitle}> Placeholder For Modifying Roles </Text>
                <Text> </Text>

                <TouchableWithoutFeedback onPress={pressHandler}>
                    <View style={Styles.NextButton}>
                        <Text style={Styles.ButtonText}> Return to Proposal </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    );
}