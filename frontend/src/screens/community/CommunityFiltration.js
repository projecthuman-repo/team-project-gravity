import React from "react";
import {View, Text, TextInput, TouchableWithoutFeedback, SafeAreaView} from "react-native";
import Styles from "../../style/Style";

export default function Placeholder({ navigation }) {
        
    const pressHandler = () => {
        navigation.navigate("CommunityList")
    }

    return(
        <SafeAreaView style={Styles.SafeAreaViewStyle}>
            <View style={Styles.MiddleOfScreen}>
                <Text style={Styles.RedSubtitle}> Placeholder For Community Filtration </Text>
                <Text> </Text>

                <TouchableWithoutFeedback onPress={pressHandler}>
                    <View style={Styles.NextButton}>
                        <Text style={Styles.ButtonText}> Return to Community List </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    );
}