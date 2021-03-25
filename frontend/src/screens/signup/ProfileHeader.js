import React from "react";
import {View, Text, TouchableWithoutFeedback, TouchableHighlight, Image, SafeAreaView} from "react-native";
import Styles from "../../style/Style";
import {BackArrow, BottomButton} from "../components/Buttons";

export default function ProfileHeader({ navigation }) {

    const pressHandler = () => {
        navigation.navigate("Bio")
    }

    const choosePhoto = () => {
        // pick photo
    }

    return(
        <SafeAreaView style={{backgroundColor: "white", height: "100%", width: "100%"}}>
            <BackArrow function={() => navigation.navigate("Picture")} />

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
            </View>
            <BottomButton text="Next" function={() => pressHandler()} />
        </SafeAreaView>
    );
}