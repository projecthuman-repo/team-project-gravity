import React from "react";
import {View, Text, TouchableWithoutFeedback, Image, ScrollView} from "react-native";
import Styles from "../style/CommunityStyle.js";

export default function Community({ navigation }) {

    const seeMembers = () => {
        navigation.navigate("TorontoFoodBankMembers")
    }

    const createAProposal = () => {
        navigation.navigate("CreateAProposal")
    }

    const seeTags = () => {
        navigation.navigate("Tags")
    }

    return(
        <View>
            <View style={Styles.MiddleOfScreen}>
                <Text style={Styles.CommunityTitle}> Toronto Food Bank </Text>

                <TouchableWithoutFeedback onPress={seeMembers}>
                        <Text style={Styles.SeeMembers}> See Members </Text>
                </TouchableWithoutFeedback>
            </View> 
            
            <View style={Styles.ProposalsView}>
                <Text style={Styles.miniTitle}> Proposals </Text>
                <ScrollView style={Styles.ScrollView}>
                    <Text style={Styles.ScrollViewText} numberOfLines={1}> Expand reach to Hamilton and other areas outside the city.</Text>
                    <Text style={Styles.ScrollViewText} numberOfLines={1}> Provide aid to shelters in the downtown core.</Text>
                    <Text style={Styles.ScrollViewText} numberOfLines={1}> Awareness campaign for hunger in single parent families.</Text>
                    <Text style={Styles.ScrollViewText} numberOfLines={1}> Education campaign for healthy eating habits in low 
                                                                           income neighbourhoods.</Text>
                </ScrollView>
            </View>

            <View style={Styles.RecentActivityView}>
                <Text style={Styles.miniTitle}>Recent Activity </Text>
            </View>

            <View style={Styles.Tags}>
                <Text style={Styles.miniTitle}>Tags</Text>
                    <View style={Styles.Button}>
                        <TouchableWithoutFeedback onPress={seeTags}>
                            <Text style={Styles.ButtonText}> Nutrition </Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={Styles.CreateProposal}>
                    <TouchableWithoutFeedback onPress={createAProposal}>
                        <Text style={Styles.CreateProposalText}> Create a Proposal </Text>
                    </TouchableWithoutFeedback>
                    </View>
            </View>
        </View>

    );

}