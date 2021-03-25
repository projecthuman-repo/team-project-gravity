import React from "react";
import {View, Text, TextInput, TouchableWithoutFeedback, Image, SafeAreaView} from "react-native";
import Styles from "../../style/Style";

export default function MemberList ({ navigation }) {

    return(
        <SafeAreaView style={{backgroundColor: "white", height: "100%", width: "100%"}}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Community")}>
                <Image style={{height: 40, width: 40, marginLeft: 30, marginTop: 25}} source={require('../../images/arrow.png')} />
            </TouchableWithoutFeedback>

            <View style={{alignItems: "center"}}>          
                <Text style={{color: "black", fontSize: 26, fontWeight: '700', textAlign: "center", paddingTop: 10, paddingBottom: 5}}>Community Members</Text>
                <Text style={{color: '#f85f69', fontSize: 18, fontWeight: "600", paddingBottom: 30}}>Toronto Food Bank</Text>
            </View>  
            <View style={{marginHorizontal: 20}}>
                <Text style={{fontWeight: "bold"}}>Rank #1</Text>
                <Text>Carlos, Ward</Text>
                <Text>Johnny, Kelly</Text>
                <Text>Martha, Long</Text>
                <Text>Rachel, Williamson</Text>
                <Text>Earl, Turner</Text>

                <Text style={{fontWeight: "bold", paddingTop: 30}}>Rank #2</Text>
                <Text>Thersa, Peterson</Text>
                <Text>Howard, Carr</Text>
                <Text>Jaqueline, Barnes</Text>

                <Text style={{fontWeight: "bold", paddingTop: 30}}>Rank #3</Text>
                <Text>Jane, Fowler</Text>
            </View>
        </SafeAreaView>
    );
}