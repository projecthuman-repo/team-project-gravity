import React, { Component } from 'react';
import {View, Text, FlatList, TouchableOpacity, Alert} from "react-native";
import Styles from "../../style/Style";

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
                    <Text selectable={false} style={Styles.CommunityListItem} numberOfLines={1}>
                        {item.key}
                    </Text>}
                />
            </View>
        )
    }
}

export {
    CategoricalListActive,
    CategoricalListInactive
}