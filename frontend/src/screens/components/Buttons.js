import React, { Component } from 'react';
import Styles from "../../style/Style";
import {View, Text, TouchableWithoutFeedback, Image, TouchableHighlight} from "react-native";

class BackArrow extends Component {
    render() {
        return (
            <View>
                <TouchableWithoutFeedback onPress={this.props.function}>
                    <Image style={{height: 40, width: 40, marginLeft: 30, marginTop: 25}} source={require('../../images/arrow.png')} />
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

class BottomButton extends Component {
    render() {
        return (
            <View style={{marginHorizontal: 20, position: "absolute", bottom: 33, width: "90%"}}>
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

export {
    BackArrow,
    BottomButton,
    CameraButton,
    CameraButtonWithTitle
}