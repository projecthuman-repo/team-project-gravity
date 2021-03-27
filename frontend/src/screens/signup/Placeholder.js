import React from "react";
import {View, Text, TextInput, TouchableWithoutFeedback, Image} from "react-native";
import Styles from "../../style/Style";
import {BottomButton} from "../components/Buttons";

export default function Placeholder({ navigation }) {
        
    const pressHandler = () => {
        navigation.navigate("Home")
    }

    return(
        <View style={Styles.MiddleOfScreen}>
            <Text style={Styles.RedSubtitle}> Placeholder For Social Media Migration </Text>
            <Text> </Text>

            <BottomButton text="Return To Home" function={() => pressHandler()} />
        </View>
    );
}