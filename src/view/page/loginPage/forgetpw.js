import React, { Component } from 'react';

import {
    Text,
    View,
    TextInput,
    Alert,
    TouchableHighlight,
    TouchableOpacity,
    Keyboard,
    Modal,
    Image,StyleSheet,Button
} from 'react-native';
import loginStyle from '../../style/login';

export default class Forgetpw extends Component {
    static navigationOptions = ({navigation})=>({
        title:"找回密码",
        headerBackTitle:'返回',
        headerTruncatedBackTitle:'回退',
        alignSelf:'center'
    });
    constructor(props){
        super(props)

    }
    render(){
        return(
            <View></View>
        )
    }
}