import React, { Component } from 'react';
import {View, Text, Image, TouchableHighlight, ScrollView} from "react-native";

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

class SmallTileList extends Component {
    render() {
        var tiles = [];

        for (let i = 0; i < this.props.content.length; i++) {
            tiles.push(
                <TouchableHighlight onPress={this.props.content[i].link}>
                    <SmallTile name={this.props.content[i].name} imageUri={this.props.content[i].image}/>
                </TouchableHighlight>
            )
        }

        return (
            <View style={{height:130, marginTop: 20}}>
                <ScrollView horizontal={true}>
                    { tiles }
                </ScrollView>
            </View>
        )
    }
}

class LargeTileList extends Component {
    render() {
        const navigation = this.props.navigation;
        var tiles = [];

        for (let i = 0; i < this.props.content.length; i++) {
            tiles.push(
                <TouchableHighlight onPress={() => navigation.navigate("Community", {communityID: this.props.content[i].communityID})}>
                    <LargeTile name={this.props.content[i].communityName} imageUri={this.props.content[i].image} description={this.props.content[i].communityDescription} />
                </TouchableHighlight>
            )
        }

        return (
            <View style={{marginBottom: 20}}>
                <ScrollView style={{paddingTop: 10, paddingLeft: 20, paddingRight: 20}}>
                    { tiles }
                </ScrollView>
            </View>
        )
    }
}

export {
    SmallTile,
    LargeTile,
    SmallTileList,
    LargeTileList
}