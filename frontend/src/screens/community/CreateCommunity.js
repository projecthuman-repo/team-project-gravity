import React, {useState} from "react";
import {View, Text, TouchableWithoutFeedback, TouchableHighlight, Image, SafeAreaView, TextInput, Platform} from "react-native";
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
    const communityID = navigation.getParam("communityID");
  
    let bucketname = "3"
    let file=""
    const type = "community"

    const [nameEvent, setNameEvent] = useState('')
    const [descriptionEvent, setDescriptionEvent] = useState('')


    const [addFileUpload, { loading, error }] = useMutation(ADD_FILE_UPLOAD);

    if (Platform.OS === 'web'){
      if(descriptionEvent.nativeEvent && nameEvent.nativeEvent.text){
          console.log(descriptionEvent.nativeEvent.text, nameEvent.nativeEvent.text)
      }    
    }
    else{
        if(nameEvent && descriptionEvent){
            console.log(nameEvent, descriptionEvent)
        }
        
    }
   

    const choosePhoto = async () => {
        const {data} = await (addFileUpload({
            variables: { type, bucketname, file },
          }))
        console.log(data.addFileUpload.filename)
    }

    const [createCommunity, { communityLoading, communityError }] = useMutation(CREATE_COMMUNITY);

    const submit = async () => {
      if (Platform.OS === 'web'){
        if(descriptionEvent.nativeEvent && nameEvent.nativeEvent){
          const communityDescription = descriptionEvent.nativeEvent.text
          const communityName = nameEvent.nativeEvent.text
          const {data} = await (createCommunity({
              variables: { userID, communityName, communityDescription },
            }))
          console.log(data.createCommunity.communityID)
          alert("Community was created")
          navigation.navigate("CommunityList", {userID:userID})
        }
        else{
          alert("Specify a name and description")
        }
      }
      else{
        if(descriptionEvent && nameEvent){
            const communityDescription = descriptionEvent
            const communityName = nameEvent
            const {data} = await (createCommunity({
              variables: { userID, communityName, communityDescription },
            }))
          console.log(data.createCommunity.communityID)
          alert("Community was created")
          navigation.navigate("CommunityList", {userID:userID})
        }
        else{
          alert("Specify a name and description")
        }
      }
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

            {Platform.OS === 'web' ? 
            <View>
            <Text style={Styles.RedSubtitle}> Community Name: </Text>
            <Text> </Text>
            <TextInput style={{height: "15%", width: "60%"}} multiline={true} placeholder="Enter community name here" onChange={text => setNameEvent(text)}></TextInput>
            <Text>&nbsp;</Text>

            <Text style={Styles.RedSubtitle}> Community Description: </Text>
            <Text> </Text>
            <TextInput style={{height: "15%", width: "60%"}} multiline={true} placeholder="Enter community description in this field" onChange={text => setDescriptionEvent(text)}></TextInput>
            <Text>&nbsp;</Text>
            </View>
            :
            <View>
            <Text style={{paddingTop: 30, marginHorizontal: 20, color: '#f85f69', fontSize: 16, fontWeight: '700'}}>Community Name: </Text>
            <Text> </Text>
            <TextInput style={{marginHorizontal: 20, height: "15%", width: "60%"}} multiline={true} placeholder="Name" onChangeText={text => setNameEvent(text)}></TextInput>
            <Text>&nbsp;</Text>

            
            <Text style={{marginHorizontal: 20, color: '#f85f69', fontSize: 16, fontWeight: '700'}}>Community Description: </Text>
            <Text> </Text>
            <TextInput style={{marginHorizontal: 20, height: "15%", width: "60%"}} multiline={true} placeholder="Description" onChangeText={text => setDescriptionEvent(text)}></TextInput>
            <Text>&nbsp;</Text>
            </View>
            }



            <View style={{marginTop: 10, marginBottom: 60}}>
                <Text style={Styles.RedSubtitleLeftPadded}>Tags</Text>
            </View>

          <BottomButton text="Create" function={submit} />
        </SafeAreaView>
    )
}