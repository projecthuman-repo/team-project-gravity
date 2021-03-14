import React from "react";
import {View, Text, TextInput, TouchableWithoutFeedback, Image} from "react-native";
import Styles from "../../style/Style";
import ImagePicker from 'react-native-image-picker';

export default function Placeholder({ navigation }) {
        
    const pressHandler = () => {
        navigation.navigate("CommunityList")
    }

    return(
        <View style={Styles.MiddleOfScreen}>
            <Text style={Styles.RedSubtitle}> Placeholder For Modifying Roles </Text>
            <Text> </Text>

            <TouchableWithoutFeedback onPress={pressHandler}>
                <View style={Styles.NextButton}>
                    <Text style={Styles.ButtonText}> Return to Community LIst </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}