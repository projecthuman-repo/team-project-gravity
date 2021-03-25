import React from "react";
import {View, Text, TouchableWithoutFeedback, TouchableHighlight, Image, SafeAreaView} from "react-native";
import Styles from "../../style/Style";

export default function ProfileHeader({ navigation }) {

    const pressHandler = () => {
        navigation.navigate("Bio")
    }

    const choosePhoto = () => {
        // pick photo
    }

    return(
        <SafeAreaView style={{backgroundColor: "white", height: "100%", width: "100%"}}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Picture")}>
                <Image style={{height: 40, width: 40, marginLeft: 30, marginTop: 25}} source={require('../../images/arrow.png')} />
            </TouchableWithoutFeedback>

            <View style={Styles.MiddleOfScreen}>
                <Text style={Styles.RedSubtitle}> Personalize Your Profile </Text>
                <Text> </Text>

                <TouchableHighlight onPress={() => choosePhoto}>
                    <View>
                        <Image style={Styles.icon} source={require('../../images/camera.png')}/>
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
        </SafeAreaView>
    );
}