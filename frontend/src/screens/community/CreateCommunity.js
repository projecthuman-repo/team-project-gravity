import React, {useState} from "react";
import {View, Text, TouchableWithoutFeedback, TouchableHighlight, Image, SafeAreaView, TextInput} from "react-native";
import Styles from "../../style/Style";
import {BackArrow, BottomButton, CameraButtonWithTitle} from "../components/Buttons"
import {Title, DetailsBlock} from "../components/Text";
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost'
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import { State } from "react-native-gesture-handler";



const CREATE_COMMUNITY = gql`
  mutation CreateCommunity($userID:ID, $communityName: String, $communityDescription: String){
    createCommunity(userID:$userID, communityName: $communityName, communityDescription: $communityDescription) {
       communityID
      communityName
    }
  }
  `

  const ADD_FILE_UPLOAD = gql`
  mutation addFileUpload($file: Upload!, $type: String, $bucketname: String) {
    addFileUpload(file: $file, type: $type, bucketname: $bucketname) {
      filename
    }
  }
`

export default function CreateCommunity ({ navigation }) {
    const userID = navigation.getParam("userID");
    console.log(userID);
   
    // let userID = "33"
    let communityName = "nice21"
    let communityDescription = "cool community vibes"
    let bucketname = "3"
    let file=""
    const type = "community"

    const [addFileUpload, { loading, error }] = useMutation(ADD_FILE_UPLOAD);
    const [filenameReturned, setFilenameReturned] = useState('')
    // values from text input
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')


    const choosePhoto = async () => {
        const {data} = await (addFileUpload({
            variables: { type, bucketname, file },
          }))
        console.log(data.addFileUpload.filename)
        const newFilename = data.addFileUpload.filename
        console.log(newFilename)
        setFilenameReturned(newFilename)
        console.log("hey" + filenameReturned)
    }

    const [createCommunity, { communityLoading, communityError }] = useMutation(CREATE_COMMUNITY);
    const [communityIDReturned, setCommunityIDReturned] = useState('')

    const submit = async () => {
        const {data} = await (createCommunity({
            variables: { userID, communityName, communityDescription },
          }))
        console.log(data.createCommunity.communityID)
        const newID = data.createCommunity.communityID
        console.log(newID)
        setCommunityIDReturned(newID)
        console.log("hey" + communityIDReturned)
        alert("Community was created")
        navigation.navigate("CommunityList")
      }

      const updateUserEntry = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        console.log("reached")

        if (name == 'name') {
          setName(value)
          console.log(name + value)
        } else if (name == 'description') {
          setDescription(value)
        }
        // this.setState({[name]: value})
    }  
      

    // The text things are for spaces, not sure of a better way to do it
    return(
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
            <BackArrow function={() => navigation.navigate("CommunityList")} />

            <Title title="Create Community"/>

            <TouchableHighlight onPress={choosePhoto}>
                    <View>
                        <Image style={Styles.icon} source={require('../../images/camera.png')}/>
                    </View>
            </TouchableHighlight>

            <DetailsBlock setNamepls={setName} setDescriptionpls={setDescription}/>

            <View style={{marginTop: 10, marginBottom: 60}}>
                <Text style={Styles.RedSubtitleLeftPadded}>Tags</Text>
            </View>
            <TouchableWithoutFeedback onPress={submit} >
            <View style={Styles.Button}>
                <Text style={Styles.ButtonText}> Create </Text>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}