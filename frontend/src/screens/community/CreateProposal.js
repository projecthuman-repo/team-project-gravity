import React, {useState} from "react";
import {View, Text, TouchableWithoutFeedback, TouchableHighlight, Image, SafeAreaView, TextInput} from "react-native";
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
    const userID = navigation.getParam("userID")
    const communityID = navigation.getParam("communityID")

    console.log(userID)
    console.log(communityID)

    // let userID = "33"
    // let communityID = "3"
    let communityProposalName = "okay"
    let communityProposalDescription = "proposal about proposals"
    let bucketname = "2"
    const type ="communityProposal"
    let file=""

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

    const [createCommunityProposal, { proposalLoading, proposalError }] = useMutation(CREATE_PROPOSAL);
    const [communityPropIDReturned, setCommunityPropIDReturned] = useState('')
    const submit = async () => {
        const {data} = await (createCommunityProposal({
            variables: { userID, communityID, communityProposalName, communityProposalDescription },
          }))
        console.log(data.createCommunity.communityProposalID)
        const newID = data.createCommunity.communityProposalID
        console.log(newID)
        setCommunityPropIDReturned(newID)
        console.log("hey" + communityPropIDReturned)
        alert("Proposal was published")
        navigation.navigate("CommunityList")
    }

    const modifyRoles = () => {
        navigation.navigate("ModifyRoles")
    }

    // The text things are for spaces, not sure of a better way to do it
    return(
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
            <BackArrow function={() => navigation.navigate("CommunityList")} />

            <Title title="Create Proposal"/>
        
            <TouchableHighlight onPress={choosePhoto}>
                    <View>
                        <Image style={Styles.icon} source={require('../../images/camera.png')}/>
                    </View>
            </TouchableHighlight>

            <DetailsBlock />

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