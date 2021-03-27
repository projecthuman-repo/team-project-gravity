import React from "react";
import {View, Text, TextInput, TouchableWithoutFeedback, Image} from "react-native";
import Styles from "../../style/Style";
import {BottomButton} from "../components/Buttons";

export default function Placeholder({ navigation }) {
        
    const pressHandler = () => {
        navigation.navigate("Community")
    }

    return(
        <View style={Styles.MiddleOfScreen}>
            <Text style={Styles.RedSubtitle}> Placeholder For Proposal Stuff </Text>
            <Text> </Text>

            <BottomButton text="Return To Community" function={() => pressHandler()} />
        </View>
    );
}