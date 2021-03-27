import React from "react";
import {View, Text, TouchableWithoutFeedback, TouchableHighlight, Image, SafeAreaView} from "react-native";
import Styles from "../../style/Style";
import {BackArrow, BottomButton} from "../components/Buttons";

export default function Picture({ navigation }) {
        
    const pressHandler = () => {
        navigation.navigate("ProfileHeader")
    }

    const choosePhoto = () => {
        // pick photo
    }

    return(
        <SafeAreaView style={{backgroundColor: "white", height: "100%", width: "100%"}}>
            <BackArrow function={() => navigation.navigate("Signup")} />
        
            <View style={Styles.MiddleOfScreen}>
                <Text style={Styles.RedSubtitle}> Let's See You </Text>
                <Text> </Text>

                <TouchableHighlight onPress={() => choosePhoto}>
                    <View>
                        <Image style={Styles.icon} source={require('../../images/camera.png')}/>
                    </View>
                </TouchableHighlight>
                <Text>Set a Profile Picture</Text>
                <Text>&nbsp;</Text>
            </View>
            <BottomButton text="Next" function={() => pressHandler()} />
        </SafeAreaView>
    );
}