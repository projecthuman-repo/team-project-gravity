import React from "react";
import {View, Text, TextInput, TouchableWithoutFeedback, Image, SafeAreaView, Button} from "react-native";
import Styles from "../../style/Style";
import {BackArrow} from "../components/Buttons";
import useCommunity from '../../hooks/queries/useCommunity'
import useRegister from '../../hooks/mutations/useRegister'

export default function Signup({ navigation }) {
        
    const pressHandler = () => {
        navigation.navigate("Picture")
    }
    let community = useCommunity("fd67eee3-9d30-485a-8732-67e66071b0d8")
    let user = useRegister("3", "bio")
    return(
        <SafeAreaView style={Styles.container}>
            <BackArrow function={() => navigation.navigate("Home")} />
            {console.log(community) &&
            console.log(user)
            }
            <View style={Styles.logoContainer}>
                <Image style={Styles.logo} source={require('../../images/logo.jpeg')}></Image>
            </View>
            <Text style={Styles.ColoredTitleText}> Sign Up </Text>
            <Text> </Text>
            <Text style={Styles.textOverInput}> name </Text>
            <View style={Styles.Action}>
                <TextInput style={Styles.textInput} autoCapitalize="none" ></TextInput>
            </View>
            <Text style={Styles.textOverInput}> email </Text>
            <View style={Styles.Action}>
                <TextInput style={Styles.textInput} autoCompleteType="email" autoCapitalize="none"></TextInput>
            </View>
            <Text style={Styles.textOverInput}> password </Text>
            <View style={Styles.Action}>
                <TextInput style={Styles.textInput} secureTextEntry autoCapitalize="none"></TextInput>
            </View>
            <Text style={Styles.textOverInput}> re-type password </Text>
            <View style={Styles.Action}>
                <TextInput style={Styles.textInput} secureTextEntry autoCapitalize="none"></TextInput>
            </View>
            <View style={Styles.middle}>
            <TouchableWithoutFeedback onPress={pressHandler}>
                <View style={Styles.Button}>
                    <Text style={Styles.ButtonText}> SIGN UP </Text>
                </View>
            </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    );
}