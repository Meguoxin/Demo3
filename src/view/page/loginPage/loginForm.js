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
import { NavigationActions } from 'react-navigation';
// import {login} from '../../../redux/actions/user';
import orgetpw from '../loginPage/forgetpw';
import LinearGradient from 'react-native-linear-gradient'

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Login'})
    ],
})
export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            userpwd:"",
            eyes:true
        };
        this.handleLogin = this.handleLogin.bind(this);
    }
    onChangeeyes() {
        this.setState({eyes: !this.state.eyes})
    }
    onChangpwdstate(){
        if(this.state.eyes===true){
            return true
        }else{
            return false
        }
    }
    computedcolor(){
        if(this.state.username&&this.state.userpwd){
            return {}
        }else{
            return {backgroundColor:"#CCCCCC"}
        }
    }
    computedzidcolor(){
        if(this.state.username.length>0&&this.state.userpwd.length>0){
            return {color:"#FFFFFF"}
        }else{
            return {color:"#666666"}
        }
    }
    handleLogin(){
        // Keyboard.dismiss();
        if(!this.state.username||!this.state.userpwd){
            Alert.alert(
                '提示',
                '用户名或密码不能为空！',
                [{
                    text: '好的'
                }]
            );
            return;
        }
        this.props.login()
    }
    render() {
        const { login,status} = this.props;
        var text = this.state.eyes ?require('../../../resource/icons/眼睛.png') : require('../../../resource/icons/闭眼.png');
        return (
            <View style={loginStyle.loginMain}>
                <View style={loginStyle.formStyle}>
                    <View style={loginStyle.formInputWarp}>
                        <View style={[loginStyle.formInput, loginStyle.formInputSplit]}>
                            <TextInput
                                ref="login_name"
                                placeholder='手机号/邮箱/账户名'
                                style={[loginStyle.loginInput,{padding:0}]}
                                autoFocus={true}
                                clearButtonMode="always"
                                onChangeText={(text) => {
                                    this.setState({username: text});
                                }}
                                underlineColorAndroid={'transparent'}
                            />
                        </View>
                        <View style={loginStyle.formInput}>
                            <TextInput
                                ref="login_psw"
                                style={[loginStyle.loginInput,{padding:0}]}
                                secureTextEntry={this.onChangpwdstate()}
                                clearButtonMode="never"
                                placeholder='6-12位密码'
                                onChangeText={(text) => {
                                    this.setState({userpwd: text});
                                }}
                                underlineColorAndroid={'transparent'}
                            >
                            </TextInput>
                            <TouchableOpacity  style={loginStyle.eyes} onPress={()=>this.onChangeeyes()}>
                            <Image
                                onClick={()=>{
                                    this.onChangeeyes()
                                }}
                                style={loginStyle.image}
                                source={text}
                            />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={loginStyle.btn}>
                    <LinearGradient colors={[ '#FFAA00','#FF9800']} style={[loginStyle.btnWrap]}>
                    <TouchableHighlight
                        style={[loginStyle.btnWrap3,this.computedcolor()]}
                        underlayColor='#FFAA00'
                                        onPress={()=>{
                                            this.handleLogin()
                                        }}>
                        <Text style={[loginStyle.loginBtn1,this.computedzidcolor()]} >{status}</Text>
                    </TouchableHighlight>
                    </LinearGradient>
                </View>
                <View style={loginStyle.btn}>
                    <TouchableOpacity style={loginStyle.btnWrap2}
                        onPress={()=>
                            this.props.navigation.navigate("Forgetpw")
                        }
                    >
                        <Text style={loginStyle.loginforget} >忘了密码？</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
