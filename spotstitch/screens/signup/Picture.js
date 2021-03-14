import React from "react";
import {View, Text, TouchableWithoutFeedback, TouchableHighlight, Image} from "react-native";
import Styles from "../../style/Style";
import * as ImagePicker from "react-native-image-picker"
import Style from "../../style/Style";

export default function Picture({ navigation }) {
        
    const pressHandler = () => {
        navigation.navigate("ProfileHeader")
    }

    const choosePhoto = () => {
        // pick photo
    }

    return(
        <View style={Styles.MiddleOfScreen}>
            <Text style={Styles.RedSubtitle}> Let's See You </Text>
            <Text> </Text>

            <TouchableHighlight onPress={() => choosePhoto}>
                <View>
                    <Image style={Styles.icon} source={require('../../assets/camera.png')}/>
                </View>
            </TouchableHighlight>
            <Text>Set a Profile Picture</Text>
            <Text>&nbsp;</Text>

            <TouchableWithoutFeedback onPress={pressHandler}>
                <View style={Styles.NextButton}>
                    <Text style={Styles.ButtonText}> NEXT </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}