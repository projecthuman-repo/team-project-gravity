import React from "react";
import {View, Text, TextInput, TouchableWithoutFeedback, Image, SafeAreaView} from "react-native";
import Styles from "../../style/Style";

export default function Bio({ navigation }) {
 
    const pressHandler = () => {
        navigation.navigate("StitchedPlaceholder")
    }

    const redirect = () => {
        navigation.navigate("Placeholder")
    }

    return(
        <SafeAreaView style={{backgroundColor: "white", height: "100%", width: "100%"}}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("ProfileHeader")}>
                <Image style={{height: 40, width: 40, marginLeft: 30, marginTop: 25}} source={require('../../images/arrow.png')} />
            </TouchableWithoutFeedback>

            <View style={Styles.MiddleOfScreen}>
                <Text style={Styles.RedSubtitle}> What Makes You, YOU? </Text>
                <Text> </Text>
                <TextInput style={{height: "15%", width: "60%"}} multiline={true} placeholder="Enter user bio in this field"></TextInput>
                <Text>&nbsp;</Text>

                <Text style={Styles.RedSubtitle}> Where Else Are You? </Text>
                <Text>&nbsp;</Text>
                <TouchableWithoutFeedback onPress={redirect}>
                    <View style={Styles.SmallButton}>
                        <Text style={Styles.ButtonText} numberOfLines={1}> Migrate from FaceBook </Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={redirect}>
                    <View style={Styles.SmallButton}>
                        <Text style={Styles.ButtonText} numberOfLines={1}> Migrate from Twitter </Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={redirect}>
                    <View style={Styles.SmallButton}>
                        <Text style={Styles.ButtonText} numberOfLines={1}> Migrate from Instagram </Text>
                    </View>
                </TouchableWithoutFeedback>

                <Text>&nbsp;&nbsp;</Text>

                <TouchableWithoutFeedback onPress={pressHandler}>
                    <View style={Styles.NextButton}>
                        <Text style={Styles.ButtonText}> LET'S GET YOU STITCHED IN! </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    );
}