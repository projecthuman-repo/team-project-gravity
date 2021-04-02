import React from "react";
import {View, Text, TextInput, TouchableWithoutFeedback, Image, SafeAreaView} from "react-native";
import Styles from "../../style/Style";
import {BottomButton} from "../components/Buttons";

export default function StitchedPlaceholder({ navigation }) {
 
    const pressHandler = () => {
        navigation.navigate("CommunityList")
    }

    return(
        <SafeAreaView style={Styles.SafeAreaViewStyle}>
            <View style={Styles.MiddleOfScreen}>
                <Text style={Styles.RedSubtitle}> Placeholder for the "Let's Get You Stitched In!" Sequence </Text>
            
                <Text>&nbsp;&nbsp;</Text>

                <BottomButton text="View Communities" function={() => pressHandler()} />
            </View>
        </SafeAreaView>
    );
}