import { Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


module.exports = {
    "MiddleOfScreen": {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
        // width: win.width/2,
        width: wp("50%"),
        alignItems: "center",
        marginBottom: 10,
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
        width: wp("100%"),
    },

    "logo": {
        width: wp("40%"),
        height: hp("20%"),
    },

    "logoContainer": {
        alignItems: "center",
        justifyContent: "center",
    },
}