import { Platform, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const webWidth = 0.4;
const buttonWidth = 0.6;
const bottomButtonWidth = 0.9;

export default {
    "SafeAreaViewStyle": {
        backgroundColor: "white",
        position: "absolute",
        height: "100%",
		
		...Platform.select({
			ios: {
				width: "100%",
                marginLeft: "0%",
			},
			android: {
				width: "100%",
                marginLeft: "0%",
			},
			default: {
				width: (webWidth*100).toString() + "%",
                marginLeft: "28%",
			}
		})
    },

    "WebViewPadding": {
        backgroundColor: "white",
        height: "100%",
		
		...Platform.select({
			ios: {
				height: "0%"
			},
			android: {
				height: "0%"
			},
			default: {
				height: "100px"
			}
		})
    },

    "MiddleOfScreen": {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    "TopMiddleOfScreen": {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
    },

    "middle": {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 80,
    },

    "Textbox": {
        fontFamily: "Asap-Regular",
        height: 40,
        borderColor: "gray",
        borderWidth: 1
    },

    "Title": {
        fontFamily: "Asap-Regular",
        fontSize: 30,
        fontWeight: "bold",
    },

    "Button": {
        fontFamily: "Asap-Regular",
        backgroundColor: "#fa5f6a",
        padding: 10,
        // padding: wp("10%"),
        borderRadius: 5,
        // textAlign: "center",
        alignItems: "center",
        marginBottom: 10,

        ...Platform.select({
			ios: {
				width: (buttonWidth*100).toString() + "%"
			},
			android: {
				width: (buttonWidth*100).toString() + "%"
			},
			default: {
				width: ((webWidth * buttonWidth * 1.4)*100).toString() + "%"
			}
		}),
    },

    "BottomButton": {
        ...Platform.select({
			ios: {
                position: "absolute",
				width: (bottomButtonWidth*100).toString() + "%",
                left: (((1-bottomButtonWidth)/2)*100).toString() + "%",
                bottom: 33,
			},
			android: {
                position: "absolute",
				width: (bottomButtonWidth*100).toString() + "%",
                left: (((1-bottomButtonWidth)/2)*100).toString() + "%",
                bottom: 33,
			},
			default: {
				width: ((webWidth * bottomButtonWidth)*100).toString() + "%",
                left: ((webWidth + webWidth/2 - bottomButtonWidth/2)*100).toString() + "%",
			}
		}),
    },

    "SmallButton": {
        fontFamily: "Asap-Regular",
        backgroundColor: "#fa5f6a",
        padding: 7,
        // padding: wp("10%"),
        borderRadius: 5,
        // textAlign: "center",
        // width: win.width/2,
        width: 100,
        alignItems: "center",
        marginBottom: 10,
        marginLeft: 10
    },

    "NextButton": {
        fontFamily: "Asap-Regular",
        backgroundColor: "#fa5f6a",
        borderRadius: 5,
        paddingTop: 10,
        height: 40,
        width: 250,
        alignItems: "center",
        marginBottom: 10,
    },

    "ProfileButton": {
        position: "absolute",
        right: 0,
    },

    "ButtonText": {
        color: "white",
        fontFamily: "Asap-Regular",
    },

    "Action": {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5, 
        marginLeft: 30,
        width: wp("90%"),
    },

    "textInput": {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: '#05375a',
    },

    "ColoredTitleText": {
		color: '#f85f69',
		fontSize: 22,
        fontWeight: 'bold',
        paddingLeft: 32,
    },

    "BlackTitle": {
		color: 'black',
		fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
    },

    "RedSubtitle": {
		color: '#f85f69',
        fontSize: 20,
        fontWeight: '600',
        paddingHorizontal: 20,
    },

    "RedSubtitleLeftPadded": {
		color: '#f85f69',
        fontSize: 16,
        fontWeight: '700',
        paddingLeft: 35,
        marginTop: 20
    },
    
    "textOverInput": {
        color: 'grey',
        fontSize: 16,
        paddingLeft: wp("5%"),
        marginTop: 15,
    },

    "container": {
        backgroundColor: "white",
        flex: 1,
        height: hp("100%"),
        
        ...Platform.select({
			ios: {
				width: wp("100%")
			},
			android: {
				width: wp("100%")
			},
			default: {
				width: wp((webWidth*100).toString() + '%')
			}
		})
    },

    "logo": {
        ...Platform.select({
			ios: {
				width: wp("40%"),
                height: hp("20%"),
                marginTop: "0%",
			},
			android: {
				width: wp("40%"),
                height: hp("20%"),
                marginTop: "0%",
			},
			default: {
				width: wp(((webWidth*0.8)*100).toString() + "%"),
                height: hp(((webWidth*0.9)*100).toString() + "%"),
                marginTop: "50%"
			}
		})
    },

    "icon": {
        width: 128,
        height: 128,
        alignSelf: "center",
        borderColor: "#808080",
        borderWidth: 1
    },

    "logoContainer": {
        alignItems: "center",
        justifyContent: "center",
    },

    "VerticalScrollMenu": {
        paddingHorizontal: 20,
    },

    // Profile page
    "ProfilePicture": {
		width: 150,
		height: 150,
	},

    "ProfileNameText": {
        color: '#f85f69',
        fontSize: 26,
		fontWeight: 'bold',     
    },
	
	"ReputationContainer": {
		backgroundColor: '#f85f69',
        borderRadius: 10,
        borderStyle: 'solid',
        padding: 10,
        marginTop: 20,
        marginBottom: 40,
        width: "80%"
	},

    "ReputationText": {
		color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center"
	},
	
	"ColoredTitleText": {
		color: '#f85f69',
		fontSize: 18,
		fontWeight: 'bold',
	},
	
	"CommunityListItem": {
        color: "#1464f6", 
		fontSize: 14,
        fontWeight: "bold",
        paddingTop: 5
    },

    "CommunityListItemUncolored": {
        color: "black", 
		fontSize: 14,
        paddingTop: 1
    },
}