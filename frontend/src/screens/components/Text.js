import React, { Component } from 'react';
import {View, Text, FlatList, TouchableOpacity} from "react-native";
import Styles from "../../style/Style";

class Title extends Component {
    render() {
        return (
            <View style={{alignItems: "center"}}>          
                <Text style={{color: "black", fontSize: 26, fontWeight: '700', textAlign: "center", paddingTop: 10, paddingBottom: 5}}>{this.props.title}</Text>
            </View> 
        )
    }
}

class TitleSubtitleActive extends Component {
    render() {
        return (
            <View style={{alignItems: "center"}}>          
                <Text style={{color: "black", fontSize: 26, fontWeight: '700', textAlign: "center", paddingTop: 10, paddingBottom: 5}}>{this.props.title}</Text>
                <TouchableOpacity onPress={this.props.link}>
                    <Text style={{color: '#1464f6', fontSize: 18, fontWeight: "600", paddingBottom: 30}}>{this.props.subtitle}</Text>
                </TouchableOpacity>
            </View> 
        )
    }
}

class TitleSubtitleInactive extends Component {
    render() {
        return (
            <View style={{alignItems: "center"}}>          
                <Text style={{color: "black", fontSize: 26, fontWeight: '700', textAlign: "center", paddingTop: 10, paddingBottom: 5}}>{this.props.title}</Text>
                <Text style={{color: '#f85f69', fontSize: 18, fontWeight: "600", paddingBottom: 30}}>{this.props.subtitle}</Text>
            </View> 
        )
    }
}

class CategoricalListActive extends Component {
    render() {
        return (
            <View style={{paddingVertical: 15, marginHorizontal: 20}}>
                <Text selectable={false} style={Styles.ColoredTitleText}>{this.props.title}</Text>
                <FlatList
                    data={this.props.content}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={item.link}>
                            <Text selectable={false} style={Styles.CommunityListItem} numberOfLines={1}>
                                {item.key}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }
}

class CategoricalListInactive extends Component {
    render() {
        return (
            <View style={{paddingVertical: 15, marginHorizontal: 20}}>
                <Text selectable={false} style={Styles.ColoredTitleText}>{this.props.title}</Text>
                <FlatList
                    data={this.props.content}
                    renderItem={({item}) => 
                    <Text selectable={false} style={Styles.CommunityListItemUncolored} numberOfLines={1}>
                        {item.key}
                    </Text>}
                />
            </View>
        )
    }
}

export {
    Title,
    TitleSubtitleActive,
    TitleSubtitleInactive,
    CategoricalListActive,
    CategoricalListInactive
}