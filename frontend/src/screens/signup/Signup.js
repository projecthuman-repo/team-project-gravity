import React, {useState} from "react";
import {View, Text, TextInput, TouchableWithoutFeedback, Image, SafeAreaView, StyleSheet, TouchableOpacity} from "react-native";
import Styles from "../../style/Style";
import {BackArrow} from "../components/Buttons";
import useCommunity from '../../hooks/queries/useCommunity'
import useAllCommunities from '../../hooks/queries/useAllCommunities'
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

export default function Signup({ navigation }, props) {
        
    const pressHandler = () => {
        navigation.navigate("Picture")
    }
    
    const [register, { loading2, error2 }] = useMutation(REGISTER);
    const [userIDReturned, setUserIDReturned] = useState('')
    const [Fname, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let userID = "50"
    let bio = "nice"
    let name = "name"

    const submit = async () => {
        const {data} = await (register({
            variables: { userID, bio, name },
          }))
        console.log(data.register.userID)
        const newID = data.register.userID
        console.log(newID)
        setUserIDReturned(newID)
        console.log("hey" + userIDReturned)
      }

    let community = useCommunity("f1f6b9fc-85f5-4cfc-8af7-8d807e09a768")
    //let communities = useAllCommunities()


    const {loading, data, error} = useQuery(gql`
    query {
        findAllCommunities{
            communityName
            communityID
    }
    }
  `, {
    fetchPolicy: 'cache-and-network'
  })

  const communities = R.ifElse(
      queryIsNotNil('findAllCommunities'),
      R.prop('findAllCommunities'),
      R.always([]),
    )(data)

    console.log(communities)

    return(
      <SafeAreaView style={Styles.SafeAreaViewStyle}>
            <BackArrow function={() => navigation.navigate("Home")} />
            {
            //console.log(communities)
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
            <TouchableWithoutFeedback onPress={submit} >
            <View style={Styles.Button}>
                <Text style={Styles.ButtonText}> Add </Text>
            </View>
          </TouchableWithoutFeedback>
            </View>
      </SafeAreaView>
    );
}