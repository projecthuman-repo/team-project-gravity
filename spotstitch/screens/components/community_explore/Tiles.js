import React, { Component } from 'react';
import {View, Text, Image} from "react-native";

class SmallTile extends Component {
    render() {
        return (
            <View style={{height: 130, width:130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd'}}>
                <View style={{flex: 2}}>
                    <Image source={this.props.imageUri} 
                    style={{flex:1, width: null, height:null, resizeMode: 'cover'}}/>
                </View>

                <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
                    <Text>{this.props.name}</Text>
                </View>
            </View>
        )
    }
}

class LargeTile extends Component {
    render() {
        return (
            <View style={{paddingBottom: 15}}>
                <View style={{height: 400, width: '100%', borderWidth: 0.5, borderColor: '#dddddd'}}>
                    <View style={{flex: 2}}>
                        <Image source={this.props.imageUri} 
                        style={{flex:1, width: null, height:null, resizeMode: 'cover'}}/>
                    </View>

                    <View style={{flex: 1, paddingLeft: 7, paddingTop: 7, paddingRight: 7}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{this.props.name}</Text>

                        <Text numberOfLines={6}>{this.props.description}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export {
    SmallTile,
    LargeTile
}