import React from "react";
import {View, Text,SafeAreaView} from "react-native";
import Styles from "../../style/Style";
import {LargeTileList, SmallTileList} from "../components/community_explore/Tiles";
import {BottomButton, ProfileButton} from "../components/Buttons";
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

export default function CommunityList({ navigation }) {

    const userID = navigation.getParam("userID");

    console.log(userID)

    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac. Ultrices dui sapien eget mi proin sed libero enim sed. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Lacus vel facilisis volutpat est velit egestas dui. Dignissim cras tincidunt lobortis feugiat vivamus at. Sit amet nulla facilisi morbi tempus. Massa tempor nec feugiat nisl pretium fusce id. Nulla porttitor massa id neque. At risus viverra adipiscing at in tellus. Turpis cursus in hac habitasse. Sed faucibus turpis in eu. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Et malesuada fames ac turpis egestas sed tempus. Odio facilisis mauris sit amet. Id porta nibh venenatis cras sed felis eget velit aliquet. Amet justo donec enim diam. Venenatis tellus in metus vulputate."

    const createCommunity = () => {
        navigation.navigate("CreateCommunity", {userID: userID})
    }

    const filter = () => {
        navigation.navigate("CommunityFiltration", {userID: userID})
    }
    
    const {loading, data, error} = useQuery(gql`
    query {
        findAllCommunities{
            communityName
            communityID
            communityDescription
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

    // For the largeTileList elements, specifically the navigation part, we should pass in the id instead of title. Retrieve all information from the db via the id and display everything via api requests
    return(
        <SafeAreaView style={Styles.SafeAreaViewStyle}>
            <View style={{flexDirection: "row", marginHorizontal: 20, paddingBottom: 10}}>
                <Text style={Styles.BlackTitle}>Community List</Text>

                <ProfileButton function={() => navigation.navigate("Profile", {userID: userID})}/>
            </View>
            
            <View>
                <Text style={Styles.RedSubtitle}>Communities by location</Text>
            </View>

            <View style={{marginLeft: 20}}>
                <SmallTileList content={[
                    {name: "Toronto", link: filter, image: require('../../images/community_list/small/toronto.jpg')},
                    {name: "Vancouver", link: filter, image: require('../../images/community_list/small/vancouver.jpg')},
                    {name: "NYC", link: filter, image: require('../../images/community_list/small/nyc.jpg')},
                    {name: "LA", link: filter, image: require('../../images/community_list/small/la.jpg')},
                ]} />
            </View>

            <View style={{paddingTop: 20, backgroundColor: 'white', height: '67%'}}>
                <Text style={Styles.RedSubtitle}>All communities</Text>
                
                <LargeTileList content={communities} navigation={navigation} userID = {userID}/>
            </View>

            <View style={Styles.WebViewPadding}></View>

            <BottomButton text="Create Community" function={() => createCommunity()} />
        </SafeAreaView>
    )
}