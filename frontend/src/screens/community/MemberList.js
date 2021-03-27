import React from "react";
import {View, Text, TextInput, TouchableWithoutFeedback, Image, SafeAreaView} from "react-native";
import {BackArrow} from "../components/Buttons";
import {TitleSubtitleInactive, CategoricalListInactive} from "../components/Text";

export default function MemberList ({ navigation }) {

    return(
        <SafeAreaView style={{backgroundColor: "white", height: "100%", width: "100%"}}>
            <BackArrow function={() =>navigation.navigate("Community")} />

            <TitleSubtitleInactive title="Community Members" subtitle="Toronto Food Bank" />

            <CategoricalListInactive title="Rank #1" content={[
                {key: "Carlos, Ward"},
                {key: "Johnny, Kell"},
                {key: "Martha, Long"},
                {key: "Rachel, Williamson"},
                {key: "Earl, Turner"},
            ]}/>

            <CategoricalListInactive title="Rank #2" content={[
                {key: "Thersa, Peterson"},
                {key: "Howard, Carr"},
                {key: "Jaqueline, Barnes"},
            ]}/>

            <CategoricalListInactive title="Rank #3" content={[
                {key: "Jane, Fowler"},
            ]}/>
        </SafeAreaView>
    );
}