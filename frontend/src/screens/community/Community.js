import React from "react";
import {View, Text, TouchableWithoutFeedback, Image, ScrollView, SafeAreaView} from "react-native";
import Styles from "../../style/Style";
import CommunityStyles from "../../style/CommunityStyle";
import {BackArrow, BottomButton} from "../components/Buttons";
import {SmallProposalTileList} from "../components/community_explore/Tiles";
import {TitleSubtitleActive, TitleSubtitleInactive, CategoricalListActive} from "../components/Text";
import useCommunity from '../../hooks/queries/useCommunity';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {gql} from 'apollo-boost'
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
    const community = useCommunity(communityID);

    let communityName;
    if (RA.isNotNil(community) ){
        communityName = community.communityName
    }

    const queries = () => {
        const res1 = useQuery(gql`
        query Community($communityID: ID) {
            findCommunitysUsers(communityID: $communityID) {
              userID
          }
        }
        `, {
            variables: { communityID },
            fetchPolicy: 'cache-and-network'
        });
        const res2 = useQuery(gql`
        query FindAllCommunityProposals($communityID: ID) {
            findallCommunityProposals(communityID: $communityID) {
                communityProposalName
                communityProposalID
                communityProposalDescription
            }
          }
        `, {
            variables: { communityID },
            fetchPolicy: 'cache-and-network'
        });
        return [res1, res2]
    }

    const JOIN_COMMUNITY = gql`
        mutation AddCommunityMember($userID: ID, $communityID: ID) {
            addCommunityMember(userID: $userID, communityID: $communityID, status: user) {
                communityMemberID
            }
        }
    `

    const [{loading: loading1, data: data1}, {loading: loading2, data: data2}] = queries()

    const users = R.ifElse(
        queryIsNotNil('findCommunitysUsers'),
        R.prop('findCommunitysUsers'),
        R.always([]),
    )(data1)

    const proposals = R.ifElse(
        queryIsNotNil('findallCommunityProposals'),
        R.prop('findallCommunityProposals'),
        R.always([]),
    )(data2)

    const userIDs = new Set();
    for (var i = 0; i < users.length; i++) {
        let user = users[i];
        userIDs.add(user.userID);
    }

    const isMember = userIDs.has(userID)

    console.log("-------------------")
    console.log(users)
    console.log(userIDs)
    console.log(isMember)

    const [joinCommunity, {communityLoading, communityError}] = useMutation(JOIN_COMMUNITY);

    const submit = async () => {
        const data = await (joinCommunity({
            variables: {userID: userID, communityID: communityID},
        }));

        navigation.navigate("CommunityList", {userID: userID});
        alert("Community Joined!");
    }


    const createAProposal = () => {
        navigation.navigate("CreateProposal", {communityID: communityID, userID: userID})
    }

    const seeTags = () => {
        navigation.navigate("Tags", {userID: userID})
    }

    if(isMember) {
        return(
            <SafeAreaView style={Styles.SafeAreaViewStyle}>
                <BackArrow function={() => navigation.navigate("CommunityList")} />
    
                <TitleSubtitleActive title={communityName} subtitle="Members" link={() => navigation.navigate("MemberList", {communityID: communityID, communityName: communityName})}/>
    
                <View style={{paddingVertical: 15, marginHorizontal: 20}}>
                    <Text selectable={false} style={Styles.ColoredTitleText}>Proposals</Text> 
                </View>
                
                <SmallProposalTileList content={proposals} navigation={navigation} communityName={communityName} />
    
                <CategoricalListActive title="Recent Activity" content={[
                ]}/>
    
                <View style={CommunityStyles.Tags}>
                    <Text style={CommunityStyles.miniTitle}>Tags</Text>
                    <View style={Styles.SmallButton}>
                        <TouchableWithoutFeedback onPress={seeTags}>
                            <Text style={Styles.ButtonText}>Sample Tag</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
    
                <BottomButton text="Create Proposal" function={() => createAProposal()} />
            </SafeAreaView>
        );
    } else {
        return(
            <SafeAreaView style={Styles.SafeAreaViewStyle}>
                <BackArrow function={() => navigation.navigate("CommunityList")} />

                <TitleSubtitleInactive title={communityName} subtitle="Join the community to see more!" />
    
                <BottomButton text="Join Community" function={submit} />
            </SafeAreaView>
        );
    }

}