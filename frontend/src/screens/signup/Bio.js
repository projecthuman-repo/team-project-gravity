import React from "react";
import {View, Text, TextInput, TouchableWithoutFeedback, Image, SafeAreaView} from "react-native";
import Styles from "../../style/Style";
import {BackArrow, BottomButton} from "../components/Buttons";

export default function Bio({ navigation }) {

    const userID = navigation.getParam("userID");
 
    const pressHandler = () => {
        navigation.navigate("StitchedPlaceholder")
    }

    const redirect = () => {
        navigation.navigate("Placeholder")
    }

    const [name, setName] = useState('')
    const [bio, setBio] = useState('')

    return(
        <SafeAreaView style={{backgroundColor: "white", height: "100%", width: "100%"}}>
            <BackArrow function={() => navigation.navigate("ProfileHeader")} />

            <View style={Styles.MiddleOfScreen}>
                <Text style={Styles.RedSubtitle}> What's Your Name? </Text>
                <Text> </Text>
                <TextInput style={{height: "15%", width: "60%"}} multiline={true} placeholder="Enter your name here" onChange={text => setName(text)}></TextInput>
                <Text>&nbsp;</Text>

                <Text style={Styles.RedSubtitle}> What Makes You, YOU? </Text>
                <Text> </Text>
                <TextInput style={{height: "15%", width: "60%"}} multiline={true} placeholder="Enter user bio in this field" onChange={text => setBio(text)}></TextInput>
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
            </View>
            <BottomButton text="Let's Get You Stitched In!" function={() => pressHandler()} />
        </SafeAreaView>
    );
}