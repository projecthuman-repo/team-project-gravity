import React, {useState} from "react";
import {View, Text, TouchableWithoutFeedback, TouchableHighlight, Image, SafeAreaView} from "react-native";
import Styles from "../../style/Style";
import {BackArrow, BottomButton} from "../components/Buttons";
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost'
import * as R from 'ramda'

const ADD_FILE_UPLOAD = gql`
mutation addFileUpload($file: Upload!, $type: String, $bucketname: String) {
    addFileUpload(file: $file, type: $type, bucketname: $bucketname) {
    filename
  }
}
`

export default function ProfileHeader({ navigation }) {

    const userID = navigation.getParam("userID")
    const pressHandler = () => {
        navigation.navigate("Bio", {userID: userID})
    }
    
    // let userID = "33"
    let bucketname = userID
    let file=""
    const type= "user"

    const [addFileUpload, { loading, error }] = useMutation(ADD_FILE_UPLOAD);
    const [filenameReturned, setFilenameReturned] = useState('')

    const choosePhoto = async ({bucketname, type, file}) => {
        const {data} = await (addFileUpload({
            variables: { type, bucketname, file },
          }))
        console.log(data.addFileUpload.filename)
        const newFilename = data.addFileUpload.filename
        console.log(newFilename)
        setFilenameReturned(newFilename)
        console.log("hey" + filenameReturned)
    }

    return(
        <SafeAreaView style={{backgroundColor: "white", height: "100%", width: "100%"}}>
            <BackArrow function={() => navigation.navigate("Picture")} />

            <View style={Styles.MiddleOfScreen}>
                <Text style={Styles.RedSubtitle}> Personalize Your Profile </Text>
                <Text> </Text>
                <View>
                </View>

                <TouchableHighlight onPress={choosePhoto}>
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