import React, { Component } from 'react';
import {View, Text, Image} from "react-native";

class BadgeTile extends Component {
    render() {
        return (
            <View style={{height: 50, width:50, marginLeft: 10, borderWidth: 0.5, borderColor: '#dddddd'}}>
                <View style={{flex: 2}}>
                    <Image source={this.props.imageUri} 
                    style={{flex:1, width: null, height:null, resizeMode: 'contain'}}/>
                </View>
            </View>
        )
    }
}

export {
    BadgeTile
}