import React from "react";
import {View, SafeAreaView, Image} from "react-native";
import Styles from "../../style/Style";
import {BackArrow, BottomButton} from "../components/Buttons";
import {TitleSubtitleInactive, DisplayTextBlock, CategoricalListInactive} from "../components/Text";

export default function Proposal({ navigation }) {

    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac. Ultrices dui sapien eget mi proin sed libero enim sed. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Lacus vel facilisis volutpat est velit egestas dui. Dignissim cras tincidunt lobortis feugiat vivamus at. Sit amet nulla facilisi morbi tempus. Massa tempor nec feugiat nisl pretium fusce id. Nulla porttitor massa id neque. At risus viverra adipiscing at in tellus. Turpis cursus in hac habitasse. Sed faucibus turpis in eu. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Et malesuada fames ac turpis egestas sed tempus. Odio facilisis mauris sit amet. Id porta nibh venenatis cras sed felis eget velit aliquet. Amet justo donec enim diam. Venenatis tellus in metus vulputate."

    const communityName = navigation.getParam("communityName");
    const communityProposalID = navigation.getParam("communityProposalID");
    const communityProposalName = navigation.getParam("communityProposalName");
    const communityProposalDescription = navigation.getParam("communityProposalDescription");
    console.log(communityName)

    return(
        <SafeAreaView style={Styles.SafeAreaViewStyle}>
            <BackArrow function={() => navigation.navigate("Community")}/>

            <Image style={{height: 100, width: 96, alignSelf: "center"}} source={require('../../images/camera.png')} />

            <TitleSubtitleInactive title={communityProposalName} subtitle={communityName} />

            <DisplayTextBlock title="Details" text={communityProposalDescription} />

            {/* <CategoricalListInactive title="Roles Available" content={[
                {key: "Role 1"},
                {key: "Role 2"},
                {key: "Role 3"},
            ]} /> */}

        </SafeAreaView>
    );
}