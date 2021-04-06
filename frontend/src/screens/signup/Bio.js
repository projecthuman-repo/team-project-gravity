import React, { useState } from "react";
import {View, Text, TextInput, TouchableWithoutFeedback, Button, Image, Platform, SafeAreaView} from "react-native";
import Styles from "../../style/Style";
import {BackArrow, BottomButton} from "../components/Buttons";
import { useMutation, useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost'
import * as R from 'ramda'
import * as RA from 'ramda-adjunct'

const queryIsNotNil = R.curry(
    (query, data) => R.both(
      RA.isNotNilOrEmpty,
      R.propSatisfies(RA.isNotNil, query)
    )(data)
  )

const REGISTER = gql`
mutation Register($userID:ID, $bio: String, $name: String){
  register(userID:$userID, bio: $bio, name: $name) {
    userID
    bio
    name
  }
}`

export default function Bio({ navigation }) {

    let userID = navigation.getParam("userID");
 
    const redirect = async () => {
        navigation.navigate("Placeholder")
    }

    const [nameEvent, setNameEvent] = useState('')
    const [bioEvent, setBioEvent] = useState('')

    console.log(userID)
    if (Platform.OS === 'web'){
        if(bioEvent.nativeEvent && nameEvent.nativeEvent.text){
            console.log(nameEvent.nativeEvent.text, bioEvent.nativeEvent.text)
        }    
    }
    else{
        // if(nameEvent && bioEvent){
            console.log("NAME AND BIO EVENT");
            console.log(nameEvent, bioEvent)
        // }
        
    }

    const [register, { loading, error }] = useMutation(REGISTER);
    const submit = async (stitched) => {
        if (Platform.OS === 'web'){
            if(nameEvent.nativeEvent && bioEvent.nativeEvent){
                const bio = bioEvent.nativeEvent.text
                const name = nameEvent.nativeEvent.text
                const {data} = await (register({
                    variables: { userID, bio, name },
                }))
                console.log(data.register.bio)
                if(stitched){
                    navigation.navigate("StitchedPlaceholder",  {userID: userID})
                }
                else{
                    navigation.navigate("Placeholder",  {userID: userID})
                }
            }
            else{
                alert("Input a name and bio to continue")
            }
        }
        else{
            if(nameEvent && bioEvent){
                const bio = bioEvent
                const name = nameEvent
                const {data} = await (register({
                    variables: { userID, bio, name },
                }))
                console.log(data.register.bio)
                if(stitched){
                    navigation.navigate("StitchedSeam",  {userID: userID})
                }
                else{
                    navigation.navigate("Placeholder",  {userID: userID})
                }
            }
            else{
                alert("Input a name and bio to continue")
            }
        }

      }

    return(
        <SafeAreaView style={Styles.SafeAreaViewStyle}>
            <BackArrow function={() => navigation.navigate("ProfileHeader")} />

            <View style={Styles.MiddleOfScreen}>
                <Text style={Styles.RedSubtitle}> What's Your Name? </Text>
                <Text> </Text>
                
                {Platform.OS === 'web' ? 
                <View>
                <TextInput style={{height: "15%", width: "60%"}} multiline={true} placeholder="Enter your name here" onChange={text => setNameEvent(text)}></TextInput>
                <Text>&nbsp;</Text>

                <Text style={Styles.RedSubtitle}> What Makes You, YOU? </Text>
                <Text> </Text>
                <TextInput style={{height: "15%", width: "60%"}} multiline={true} placeholder="Enter user bio in this field" onChange={text => setBioEvent(text)}></TextInput>
                <Text>&nbsp;</Text>

                <Text style={Styles.RedSubtitle}> Where Else Are You? </Text>
                <Text>&nbsp;</Text>
                </View>

                : 
                <View>
                <TextInput style={{height: "15%", width: "60%"}} multiline={true} placeholder="Enter your name here" onChangeText={text => setNameEvent(text)}></TextInput>
                <Text>&nbsp;</Text>

                <Text style={Styles.RedSubtitle}> What Makes You, YOU? </Text>
                <Text> </Text>
                <TextInput style={{height: "15%", width: "60%"}} multiline={true} placeholder="Enter user bio in this field" onChangeText={text => setBioEvent(text)}></TextInput>
                <Text>&nbsp;</Text>

                <Text style={Styles.RedSubtitle}> Where Else Are You? </Text>
                <Text>&nbsp;</Text>
                </View>
                }
                {// TODO: these TouchableWithoutFeedback need to be set to call submit(true) on a function for button press
                }
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
            <BottomButton text="Let's Get You Stitched In!" function={() => submit(true)} />
        </SafeAreaView>
    );
}