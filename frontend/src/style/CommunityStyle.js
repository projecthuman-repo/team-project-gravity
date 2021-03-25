import { Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { withRouter } from 'react-router';

export default {
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
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 30,
        marginLeft: 20,
        marginBottom: 10,
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
        marginLeft: 20
    },

    
    "ButtonText": {
        color: "white",
        fontFamily: "Asap-Regular",
    },

    "SeeMembers": {
        color: "#1464f6",
        fontFamily: "Asap-Regular",
        fontSize: 18,
    },

    "ScrollView": {
        marginLeft: 20,
        marginRight: 30,
    },

    "ScrollViewText": {
        color: "#1464f6",   
        fontSize: 14,
        paddingBottom: 6,
        marginRight: 30,
    },

    "RecentActivityView": {
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