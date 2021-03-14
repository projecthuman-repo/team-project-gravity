import React from "react";
import {View, Text, TouchableWithoutFeedback, TouchableHighlight, Image} from "react-native";
import Styles from "../../style/Style";

export default function ProfileHeader({ navigation }) {

    const pressHandler = () => {
        navigation.navigate("Bio")
    }

    return(
        <View style={Styles.MiddleOfScreen}>
            <Text style={Styles.RedSubtitle}> Personalize Your Profile </Text>
            <Text> </Text>

            <TouchableHighlight onPress={() => choosePhoto}>
                <View>
                    <Image style={Styles.icon} source={require('../../assets/camera.png')}/>
                </View>
            </TouchableHighlight>
            <Text>Set Your Profile Header</Text>
            <Text>&nbsp;</Text>
            
            <TouchableWithoutFeedback onPress={pressHandler}>
                <View style={Styles.NextButton}>
                    <Text style={Styles.ButtonText}> NEXT </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}