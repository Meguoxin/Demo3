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
    Image
} from 'react-native';
import loginStyle from '../../style/login';
// import TimerButton from '../timeing';

export default class regFrom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabState: 0,
            tabColor:true,
            ziColor:true,
            username: "",
            userpwd:"",
            bgColor:{backgroundColor:"#CCCCCC"},
            secends: 60,
        };
        this.handleLogin = this.handleLogin.bind(this);
    }
    computedTabColor(boo){
        this.setState({tabColor: boo});
        if(boo===false||this.state.userpwd.length>0){
        }
    }
    computedcolor(){
        if(this.state.username.length>0&&this.state.userpwd.length>0){
            return {backgroundColor:"#FFAA00"}
        }else{
            return {backgroundColor:"#CCCCCC"}
        }
    }
    computezidcolor(){
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
                '用户名或验证码不能为空！',
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
        var text = this.state.tabColor ?{color:'#CCCCCC'} : {color:'#FF7400'};
        return(
            <View style={loginStyle.loginMain}>
                <View style={loginStyle.formStyle}>
                    <View style={loginStyle.formInputWarp}>
                        <View style={[loginStyle.formInput, loginStyle.formInputSplit]}>
                            <TextInput
                                ref="login_name"
                                placeholder='手机号'
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
                                secureTextEntry={false}
                                clearButtonMode="never"
                                placeholder='验证码'
                                underlineColorAndroid={'transparent'}
                                onChangeText={(text) => {
                                    this.setState({userpwd: text});
                                }}
                                onFocus={()=>{this.computedTabColor(false)}}
                                onBlur={()=>{this.computedTabColor(true)}}
                            />
                            <TouchableOpacity style={loginStyle.verification}>
                            <Text style={text}>获取验证码</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={loginStyle.btn}>
                    <TouchableHighlight style={[loginStyle.btnWrap,this.computedcolor()]}  underlayColor='#FFAA00'
                                        onPress={()=>{this.handleLogin()}}>
                        <Text style={[loginStyle.loginBtn1,this.computezidcolor()]}>{status}</Text>
                    </TouchableHighlight>
                </View>
                <View style={loginStyle.btn}>
                    <TouchableOpacity style={loginStyle.btnWrap2}>
                        <Text style={loginStyle.loginforget} >忘了密码？</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}