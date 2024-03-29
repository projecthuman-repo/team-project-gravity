import React, { Component } from 'react';
import Styles from "../../style/Style";
import {View, Text, TouchableWithoutFeedback, Image, TouchableHighlight, Platform} from "react-native";
import Style from '../../style/Style';

class BackArrow extends Component {
    render() {
        return (
            <View>
                <TouchableWithoutFeedback onPress={this.props.function}>
                    <Image style={{height: 40, width: 40, marginLeft: 20, marginTop: 20}} source={require('../../images/arrow.png')} />
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

class BottomButton extends Component {
    render() {
        return (
            <View style={Styles.BottomButton}>
                <TouchableWithoutFeedback onPress={this.props.function}>
                    <View style={{justifyContent: "center", alignItems: "center", backgroundColor: "#fa5f6a", width: "100%", height: 45, borderRadius: 10}}>
                        <Text style={{color: "white", fontWeight: "500", fontSize: 20}}> {this.props.text} </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

// Create a camera function in here
class CameraButton extends Component {
    render() {
        return (
            <TouchableHighlight onPress={() => {}}>
                <Image style={Styles.icon} source={require('../../images/camera.png')}/>
            </TouchableHighlight>
        )
    }
}

class CameraButtonWithTitle extends Component {
    render () {
        return (
            <View>
                <Text style={Styles.RedSubtitleLeftPadded}>{this.props.title}</Text>
                <TouchableHighlight onPress={() => {}}>
                <Image style={Styles.icon} source={require('../../images/camera.png')}/>
                </TouchableHighlight>
            </View>
        )
    }
}

class ProfileButton extends Component {
    render() {
        return (
            <View style={Styles.ProfileButton}>
            { Platform.OS === 'web' ? null :
                <TouchableWithoutFeedback onPress={this.props.function}>
                    <Image style={{height: 26, width: 26}} source={require('../../images/profileIcon.png')} />
                </TouchableWithoutFeedback>
            }
            </View>
        )
    }
}

export {
    BackArrow,
    BottomButton,
    CameraButton,
    CameraButtonWithTitle,
    ProfileButton
}