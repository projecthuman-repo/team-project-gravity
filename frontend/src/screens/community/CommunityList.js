import React from "react";
import {View, Text, Button, ScrollView, SafeAreaView, Image, TouchableWithoutFeedback, TouchableHighlight, Alert} from "react-native";
import Styles from "../../style/Style";
import {SmallTile, LargeTile} from "../components/community_explore/Tiles"

export default function CommunityList({ navigation }) {

    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac. Ultrices dui sapien eget mi proin sed libero enim sed. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Lacus vel facilisis volutpat est velit egestas dui. Dignissim cras tincidunt lobortis feugiat vivamus at. Sit amet nulla facilisi morbi tempus. Massa tempor nec feugiat nisl pretium fusce id. Nulla porttitor massa id neque. At risus viverra adipiscing at in tellus. Turpis cursus in hac habitasse. Sed faucibus turpis in eu. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Et malesuada fames ac turpis egestas sed tempus. Odio facilisis mauris sit amet. Id porta nibh venenatis cras sed felis eget velit aliquet. Amet justo donec enim diam. Venenatis tellus in metus vulputate."

    const goToCommunity = () => {
        navigation.navigate("Community")
    }

    const createProposal = () => {
        navigation.navigate("CreateProposal")
    }

    const filter = () => {
        navigation.navigate("CommunityFiltration")
    }

    return(
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
            <View style={{flexDirection: "row", marginHorizontal: 20, paddingBottom: 10}}>
                <Text style={Styles.BlackTitle}>Community List</Text>
                
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Profile")}>
                    <Image style={{height: 26, width: 26, marginLeft: "44%"}} source={require('../../images/profileIcon.png')} />
                </TouchableWithoutFeedback>
            </View>
            

            <View>
                <Text style={Styles.RedSubtitle}>Communities by location</Text>
            </View>

            <View style={{height:130, marginTop: 20}}>
                <ScrollView horizontal={true}>
                    <TouchableHighlight onPress={filter}>
                        <SmallTile imageUri={require('../../images/community_list/small/toronto.jpg')} name="Toronto" />
                    </TouchableHighlight>

                    <TouchableHighlight onPress={filter}>                
                        <SmallTile imageUri={require('../../images/community_list/small/vancouver.jpg')} name="Vancouver" />
                    </TouchableHighlight>  

                    <TouchableHighlight onPress={filter}>
                        <SmallTile imageUri={require('../../images/community_list/small/nyc.jpg')} name="NYC" />
                    </TouchableHighlight>

                    <TouchableHighlight onPress={filter}>
                        <SmallTile imageUri={require('../../images/community_list/small/la.jpg')} name="LA" />
                    </TouchableHighlight>
                </ScrollView>
            </View>

            <View style={{paddingTop: 20, backgroundColor: 'white', height: '67%'}}>
                <Text style={Styles.RedSubtitle}>All communities</Text>
                <ScrollView style={{paddingTop: 10, paddingLeft: 20, paddingRight: 20}}>
                    <TouchableHighlight onPress={goToCommunity}>
                        <LargeTile imageUri={require('../../images/community_list/large/uoft.jpg')} name="UofT" description={lorem} />
                    </TouchableHighlight>

                    <TouchableHighlight onPress={goToCommunity}>
                    <LargeTile imageUri={require('../../images/community_list/large/western.jpg')} name="Western" description={lorem} />
                    </TouchableHighlight>

                    <TouchableHighlight onPress={goToCommunity}>
                    <LargeTile imageUri={require('../../images/community_list/large/mcmaster.png')} name="McMaster" description={lorem} />
                    </TouchableHighlight>
                </ScrollView>
            </View>

            <View style={{marginVertical: 9, marginHorizontal: 20}}>
                <TouchableWithoutFeedback onPress={createProposal}>
                    <View style={{justifyContent: "center", alignItems: "center", backgroundColor: "#fa5f6a", width: "100%", height: 45, borderRadius: 10}}>
                        <Text style={{color: "white", fontWeight: "500", fontSize: 20}}> Create Proposal </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    )
}