import React from "react";
import {View, Text, TextInput, TouchableWithoutFeedback, Image} from "react-native";
import Styles from "../../style/Style";

export default function Placeholder({ navigation }) {
        
    const pressHandler = () => {
        navigation.navigate("Home")
    }

    return(
        <View style={Styles.MiddleOfScreen}>
            <Text style={Styles.RedSubtitle}> Placeholder For Social Media Migration </Text>
            <Text> </Text>

            <TouchableWithoutFeedback onPress={pressHandler}>
                <View style={Styles.NextButton}>
                    <Text style={Styles.ButtonText}> Return to home </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}