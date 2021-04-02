import React from "react";
import {View, Text, TextInput, TouchableWithoutFeedback, Image, SafeAreaView} from "react-native";
import Styles from "../../style/Style";
import {BackArrow} from "../components/Buttons";
import {TitleSubtitleInactive, UserList} from "../components/Text";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost'
import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

const queryIsNotNil = R.curry(
    (query, data) => R.both(
      RA.isNotNilOrEmpty,
      R.propSatisfies(RA.isNotNil, query)
    )(data)
)

export default function MemberList ({ navigation }) {

    const communityID = navigation.getParam("communityID");
    const communityName = navigation.getParam("communityName");

    const {loading, data, error} = useQuery(gql`
    query Community($communityID: ID) {
        findCommunitysUsers(communityID: $communityID) {
          userID
          bio
          name
      }
    }
    `, {
        variables: { communityID },
        fetchPolicy: 'cache-and-network'
    })    

    const users = R.ifElse(
        queryIsNotNil('findCommunitysUsers'),
        R.prop('findCommunitysUsers'),
        R.always([]),
    )(data)

    console.log(users)

    return(
        <SafeAreaView style={Styles.SafeAreaViewStyle}>
            <BackArrow function={() =>navigation.navigate("Community")} />

            <TitleSubtitleInactive title="Community Members" subtitle={communityName} />

            <UserList title="Users" content={users} />

            {/* <CategoricalListInactive title="Rank #2" content={[
                {key: "Thersa, Peterson"},
                {key: "Howard, Carr"},
                {key: "Jaqueline, Barnes"},
            ]}/>

            <CategoricalListInactive title="Rank #3" content={[
                {key: "Jane, Fowler"},
            ]}/> */}
        </SafeAreaView>
    );
}