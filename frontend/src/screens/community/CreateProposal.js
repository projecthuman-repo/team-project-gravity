import React, {useState} from "react";
import {View, Text, TouchableWithoutFeedback, TouchableHighlight, Image, SafeAreaView, TextInput, Platform} from "react-native";
import Styles from "../../style/Style";
import {BackArrow, BottomButton, CameraButtonWithTitle} from "../components/Buttons"
import {Title, DetailsBlock} from "../components/Text";
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost'


const CREATE_PROPOSAL = gql`
mutation CreateCommunityProposal($userID:ID, $communityID:ID, $communityProposalName: String, $communityProposalDescription: String){
  createCommunityProposal(userID:$userID, communityID: $communityID, communityProposalName: $communityProposalName, communityProposalDescription: $communityProposalDescription) {
    communityProposalID
    communityProposalName
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

export default function CreateProposal ({ navigation }) {


    // let userID = "33"
    // let communityID = "3"

    //uncomment when not testing
    const userID = navigation.getParam("userID")
    //micas for testing so remove after
    // const userID = "12"
    const communityID = navigation.getParam("communityID")

    console.log("USERID", userID);
    console.log(communityID);

    let communityProposalName = "okay"
    let communityProposalDescription = "proposal about proposals"
    let bucketname = "2"
    const type ="communityProposal"
    let file=""

    const [nameEvent, setNameEvent] = useState('')
    const [descriptionEvent, setDescriptionEvent] = useState('')

    const [addFileUpload, { loading, error }] = useMutation(ADD_FILE_UPLOAD);
    const [filenameReturned, setFilenameReturned] = useState('')
    const choosePhoto = async () => {
        const {data} = await (addFileUpload({
            variables: {bucketname, file, type },
          }))
        console.log(data.addFileUpload.filename)
        const newFilename = data.addFileUpload.filename
        console.log(newFilename)
        setFilenameReturned(newFilename)
        console.log("hey" + filenameReturned)
    }

    console.log(userID)

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
   




    const [createCommunityProposal, { proposalLoading, proposalError }] = useMutation(CREATE_PROPOSAL);

    const submit = async () => {
      if (Platform.OS === 'web'){
        if(descriptionEvent.nativeEvent && nameEvent.nativeEvent){
          const communityProposalDescription = descriptionEvent.nativeEvent.text
          const communityProposalName = nameEvent.nativeEvent.text
          const {data} = await (createCommunityProposal({
              variables: { userID, communityID, communityProposalName, communityProposalDescription },
            }))
          console.log(data.createCommunityProposal.communityProposalID)
          alert("Proposal was published")
          navigation.navigate("CommunityList")
        }
        else{
          alert("Fill out name and description")
        }
      }
      else{
        if(descriptionEvent && nameEvent){
          const communityProposalDescription = descriptionEvent
          const communityProposalName = nameEvent
          const {data} = await (createCommunityProposal({
            variables: { userID, communityID, communityProposalName, communityProposalDescription },
          }))
        console.log(data.createCommunityProposal.communityProposalID)
        alert("Proposal was published")
        navigation.navigate("CommunityList")
      }
        else{
          alert("Specify a name and description")
        }
      }
    }

    const modifyRoles = () => {
        navigation.navigate("ModifyRoles")
    }

    // The text things are for spaces, not sure of a better way to do it
    return(
        <SafeAreaView style={Styles.SafeAreaViewStyle}>
            <BackArrow function={() => navigation.navigate("Community")} />

            <Title title="Create Proposal"/>
        
            <TouchableHighlight onPress={choosePhoto}>
                    <View>
                        <Image style={Styles.icon} source={require('../../images/camera.png')}/>
                    </View>
            </TouchableHighlight>

            {/* <DetailsBlock toSetName={setName} toSetDescriptionpls={setDescription}/> */}
            
            {Platform.OS === 'web' ? 
            <View>
            <Text style={Styles.RedSubtitle}> Community Proposal Name: </Text>
            <Text> </Text>
            <TextInput style={{height: "15%", width: "60%"}} multiline={true} placeholder="Enter community name here" onChange={text => setNameEvent(text)}></TextInput>
            <Text>&nbsp;</Text>

            
            <Text style={Styles.RedSubtitle}> Community Proposal Description: </Text>
            <Text> </Text>
            <TextInput style={{height: "15%", width: "60%"}} multiline={true} placeholder="Enter community description in this field" onChange={text => setDescriptionEvent(text)}></TextInput>
            <Text>&nbsp;</Text>
            </View>
            :
            <View>
            <Text style={Styles.RedSubtitle}> Community Proposal Name: </Text>
            <Text> </Text>
            <TextInput style={{height: "15%", width: "60%"}} multiline={true} placeholder="Enter community name here" onChangeText={text => setNameEvent(text)}></TextInput>
            <Text>&nbsp;</Text>

            
            <Text style={Styles.RedSubtitle}> Community Proposal Description: </Text>
            <Text> </Text>
            <TextInput style={{height: "15%", width: "60%"}} multiline={true} placeholder="Enter community description in this field" onChangeText={text => setDescriptionEvent(text)}></TextInput>
            <Text>&nbsp;</Text>
            </View>
            }

            <Text style={Styles.RedSubtitleLeftPadded}>Help Needed</Text>
            <TouchableWithoutFeedback onPress={() => modifyRoles()}>
                <Text style={{marginLeft: 35, color: "#1881fa", fontSize: 15, paddingTop: 2, fontWeight: "600"}}>Modify Roles</Text>
            </TouchableWithoutFeedback>

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