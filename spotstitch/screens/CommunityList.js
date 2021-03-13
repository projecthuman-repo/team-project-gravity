import React from "react";
import {View, Text, Button, ScrollView, SafeAreaView, Image} from "react-native";
import Styles from "../style/Style";
import {SmallTile, LargeTile} from "./components/community_explore/Tiles"

export default function CommunityList({ navigation }) {

    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac. Ultrices dui sapien eget mi proin sed libero enim sed. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Lacus vel facilisis volutpat est velit egestas dui. Dignissim cras tincidunt lobortis feugiat vivamus at. Sit amet nulla facilisi morbi tempus. Massa tempor nec feugiat nisl pretium fusce id. Nulla porttitor massa id neque. At risus viverra adipiscing at in tellus. Turpis cursus in hac habitasse. Sed faucibus turpis in eu. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Et malesuada fames ac turpis egestas sed tempus. Odio facilisis mauris sit amet. Id porta nibh venenatis cras sed felis eget velit aliquet. Amet justo donec enim diam. Venenatis tellus in metus vulputate."

    return(
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
            <Text style={Styles.BlackTitle}>Community List</Text>
            <Text> </Text>

            <View>
                <Text style={Styles.RedSubtitle}>Communities by location</Text>
            </View>

            <View style={{height:130, marginTop: 20}}>
                <ScrollView horizontal={true}>
                    <SmallTile imageUri={require('../assets/community_list/small/toronto.jpg')} name="Toronto" />

                    <SmallTile imageUri={require('../assets/community_list/small/vancouver.jpg')} name="Vancouver" />

                    <SmallTile imageUri={require('../assets/community_list/small/nyc.jpg')} name="NYC" />

                    <SmallTile imageUri={require('../assets/community_list/small/la.jpg')} name="LA" />
                </ScrollView>
            </View>

            <View style={{paddingTop: 20, backgroundColor: 'white', height: '75%'}}>
                <Text style={Styles.RedSubtitle}>All communities</Text>
                <ScrollView style={{paddingTop: 10, paddingLeft: 20, paddingRight: 20}}>
                    <LargeTile imageUri={require('../assets/community_list/large/uoft.jpg')} name="UofT" description={lorem} />

                    <LargeTile imageUri={require('../assets/community_list/large/western.jpg')} name="Western" description={lorem} />

                    <LargeTile imageUri={require('../assets/community_list/large/mcmaster.png')} name="McMaster" description={lorem} />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}