import React from "react";
import {View, Text, TouchableWithoutFeedback, Image, ScrollView, SafeAreaView} from "react-native";
import Styles from "../../style/CommunityStyle";
import {BackArrow, BottomButton} from "../components/Buttons";
import {TitleSubtitleActive, ProposalList, CategoricalListActive} from "../components/Text";
import useCommunity from '../../hooks/queries/useCommunity';
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

export default function Community({ navigation }) {
    
    const communityID = navigation.getParam("communityID");
    const userID = navigation.getParam("userID");
    console.log(communityID);
    console.log(userID); 

    const community = useCommunity(communityID);

    const {loading, data, error} = useQuery(gql`
    query Community($communityID: ID) {
        findallCommunityProposals(communityID: $communityID) {
            communityProposalName
            communityProposalID
            communityProposalDescription
        }
      }
    `, {
        variables: { communityID },
        fetchPolicy: 'cache-and-network'
    })    

    const proposals = R.ifElse(
        queryIsNotNil('findallCommunityProposals'),
        R.prop('findallCommunityProposals'),
        R.always([]),
    )(data)

    console.log(proposals)

    let communityName;
    if (RA.isNotNil(community) ){
        communityName = community.communityName
    }

    const createAProposal = () => {
        navigation.navigate("CreateProposal", {communityID: communityID, userID: userID})
    }

    const seeTags = () => {
        navigation.navigate("Tags", {userID: userID})
    }

    return(
        <SafeAreaView style={{backgroundColor: "white", height: "100%"}}>
            <BackArrow function={() => navigation.navigate("CommunityList")} />

            <TitleSubtitleActive title={communityName} subtitle="Members" link={() => navigation.navigate("MemberList", {communityID: communityID, communityName: communityName})}/>
            
            <ProposalList title="Proposals" content={proposals} navigation={navigation} communityName={communityName} />

            <CategoricalListActive title="Recent Activity" content={[
            ]}/>

            <View style={Styles.Tags}>
                <Text style={Styles.miniTitle}>Tags</Text>
                <View style={Styles.Button}>
                    <TouchableWithoutFeedback onPress={seeTags}>
                        <Text style={Styles.ButtonText}> Nutrition </Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>

            <BottomButton text="Create Proposal" function={() => createAProposal()} />
        </SafeAreaView>

    );

}