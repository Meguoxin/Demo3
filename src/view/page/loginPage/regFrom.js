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
            time:60,
            tabColor:true,
            ziColor:true,
            username: "",
            userpwd:"",
            bgColor:{backgroundColor:"#CCCCCC"},
            secends: 60,
            verification:true,
            verificationcolor:{backgroundColor:"#FFAA00"},
        };
        this.handleLogin = this.handleLogin.bind(this);
    }
    actiontime(){
        if(this.state.verification){
            // 开启计时器
            this.startInterval();
        }
    }
    startInterval(){
        // 变文字, 变颜色
        this.setState({verification: false, tabColor: true})
        this.timer && clearInterval(this.timer)
        let {time} = this.state;
        this.timer = setInterval(()=>{
            this.setState({time: --time})
            if(!time){
                clearInterval(this.timer);
                this.setState({verification: true, time: 60, tabColor: false});
            }
        }, 1000)
    }
    UpColorverification(){
        if(!this.state.verification){
            // 禁用状态
            this.computedTabColor(true)
        }else {
            this.computedTabColor(false)
        }
    }
    componentWillUnmount(){
        this.timer && clearInterval(this.timer)
    }
    computedTabColor(boo){
        this.setState({tabColor: boo});
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
        const { time,verification,tabColor } = this.state;
        var text = this.state.tabColor ?{color:'#CCCCCC'} : {color:'#FF7400'};
        var text1 = verification ?"获取验证码": `重新发送(${time})`;
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
                                onFocus={()=>{this.UpColorverification()}}
                                onBlur={()=>{this.computedTabColor(true)}}
                            />
                            <TouchableOpacity style={loginStyle.verification}>
                                <Text style={text} onPress={()=>{
                                    this.actiontime()
                                }}>{text1}</Text>
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