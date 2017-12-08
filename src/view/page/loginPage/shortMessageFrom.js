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
import LinearGradient from 'react-native-linear-gradient'

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
        if(this.state.verification&&this.state.username.length>0){
            // 开启计时器
            this.props.SmsCodelogin(this.state.username).then(
                res =>{
                    console.log(res,"sssssss")
                    if(res.State === 1){
                        this.startInterval();
                    }
                }
            );
            this.props.nameSuccess();
        }
        else if(this.state.username.length === 0){
            this.props.forgetusername();
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
    componentWillUnmount(){
        this.timer && clearInterval(this.timer)
    }
    UpColorverification(){
        if(!this.state.verification){
            // 禁用状态
            this.computedTabColor(true)
        }else {
            this.computedTabColor(false)
        }
    }
    computedTabColor(boo){
        this.setState({tabColor: boo});
    }
    computedcolor(){
        if(this.state.username.length&&this.state.userpwd.length){
            return {}
        }else{
            return {backgroundColor:"#CCCCCC"}
        }
    }
    computedzidcolor(){
        if(this.state.username.length&&this.state.userpwd.length){
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
        this.props.shortlogin(this.state.username,this.state.userpwd)
    }
    render() {
        const { shortstatus,syspwd,shorterro} = this.props;
        const { time,verification,tabColor } = this.state;
        var text = this.state.tabColor ?{color:'#CCCCCC'} : {color:'#FF7400'};
        var text1 = verification ?"获取验证码": `重新发送(${time})`;
        // var text2 = syspwd ?"": "两次密码输入不一致";
        return(
            <View style={loginStyle.loginMain}>
                <View style={loginStyle.formStyle}>
                    <View style={loginStyle.formInputWarp}>
                        <View style={[loginStyle.formInput, loginStyle.formInputSplit]}>
                            <TextInput
                                ref="login_name"
                                placeholder='11位中国大陆手机号'
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
                                placeholder='短信验证码'
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
                <View style={loginStyle.feedback}>
                    <Text style={loginStyle.errorfont}>{shorterro}</Text>
                </View>
                <View style={loginStyle.btn}>
                    <LinearGradient colors={[ '#FFAA00','#FF9800']} style={[loginStyle.btnWrap]}>
                        <TouchableHighlight style={[loginStyle.btnWrap3,this.computedcolor()]}  underlayColor='#FF9800'
                                            onPress={()=>{this.handleLogin()}}>
                            <Text style={[loginStyle.loginBtn1,this.computedzidcolor()]}>{shortstatus}</Text>
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