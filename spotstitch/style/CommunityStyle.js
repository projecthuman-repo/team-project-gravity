import { Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { withRouter } from 'react-router';

module.exports = {
    "MiddleOfScreen": {
        backgroundColor: "white",
        alignItems: "center",
    },

    "ProposalsView": {
        backgroundColor: "white",
    },
    
    "CommunityTitle": {
        fontFamily: "Asap-Regular",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 15,
    },

    "miniTitle": {
        fontFamily: "Asap-Regular",
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 15,
        marginLeft: 30,
        marginBottom: 15,
        color: "#fa5f6a",
        textAlign: "left",
    },
    
    "Button": {
        fontFamily: "Asap-Regular",
        backgroundColor: "#fa5f6a",
        padding: 2,
        borderRadius: 5,
        width: 100,
        alignItems: "center",
        marginBottom: 10,
    },

    
    "ButtonText": {
        color: "white",
        fontFamily: "Asap-Regular",
    },

    "SeeMembers": {
        color: "#1464f6",
        fontFamily: "Asap-Regular",
        fontSize: 20,
    },

    "ScrollView": {
        height: 80,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 5,
    },

    "ScrollViewText": {
        color: "#1464f6",   
        fontSize: 18,
        marginBottom: 6,
        marginRight: 30,
    },

    "RecentActivityView": {
        borderTopWidth: 1,
        borderTopColor: "black",
        backgroundColor: "white",
        paddingBottom: 160,
    },

    "Tags": {
        backgroundColor: "white",
    },

    "CreateProposal": {
        fontFamily: "Asap-Regular",
        backgroundColor: "#fa5f6a",
        padding: 6,
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 10,
        paddingBottom: 10,
    },

    "CreateProposalText": {
        color: "white",
        fontSize: 20
    }

}