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
import common from '../../style/common';
import { connect } from 'react-redux';
import *as loginAction from '../../../redux/actions/user';
import { NavigationActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient'

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Reset'})
    ],
})

class Forgetpw extends Component {
    static navigationOptions = ({navigation})=>({
        title:"找回密码",
        headerBackTitle:'返回',
        headerTruncatedBackTitle:'回退',
        alignSelf:'center'
    });
    constructor(props) {
        super(props);
        this.state = {
            time:60,
            tabState: 0,
            tabColor:true,
            ziColor:true,
            verification:true,
            verificationcolor:{backgroundColor:"#FFAA00"},
            username: "",
            userpwd:"",
            bgColor:{backgroundColor:"#CCCCCC"},
            shortmessage:"获取验证码",
        };
        this.computedcolor = this.computedcolor.bind(this);
        this.computedTabColor = this.computedTabColor.bind(this);
        this.computedzidcolor = this.computedzidcolor.bind(this);
        this.UpColorverification = this.UpColorverification.bind(this);
        this.logout = this.logout.bind(this);
        this.startInterval = this.startInterval.bind(this);
        this.actiontime = this.actiontime.bind(this);
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
        if(this.state.username.length>0&&this.state.userpwd.length>0){
            return {color:"#FFFFFF"}
        }else{
            return {color:"#666666"}
        }
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
                this.setState({verification: true, time: 60, tabColor: false,shortmessage:"重新获取验证码"});
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
    //ComponentUpdate生命周期方法
    logout() {
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
        this.props.loginOut()
        this.props.navigation.navigate("Reset")
    }
    render(){
        const { login,status} = this.props;
        const { time,verification,tabColor } = this.state;
        var text = tabColor ?{color:'#CCCCCC'} : {color:'#FF7400'};
        var text1 = verification ? this.state.shortmessage : `重新发送(${time})`;
        return(
            <View style={[common.wrapper, loginStyle.loginWrap]}>
                <View style={loginStyle.loginMain1}>
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
                                    onFocus={()=>{
                                        this.UpColorverification()
                                    }}
                                    onBlur={()=>{
                                        this.computedTabColor(true)
                                    }}
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
                        <LinearGradient colors={[ '#FFAA00','#FF9800']} style={[loginStyle.btnWrap]}>
                        <TouchableHighlight
                            underlayColor='#FFAA00'
                            style={[loginStyle.btnWrap3,this.computedcolor()]}
                                            onPress={
                                                this.logout.bind(this)
                                            }
                        >
                            <Text style={[loginStyle.loginBtn1,this.computedzidcolor()]}>下一步</Text>
                        </TouchableHighlight>
                        </LinearGradient>
                    </View>
                    <View style={loginStyle.btn}>
                        <TouchableOpacity style={loginStyle.btnWrap2}>
                            <Text style={loginStyle.loginforget} >出现问题？请前去
                                <Text style={{color: '#2A2A2A'}}> 反馈</Text></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default connect ((state) => {
        return {
            status: state.user.status,
            isSuccess: state.user.isSuccess,
            user: state.user.user,
        }
    },
    (dispatch) => ({
        loginOut: () => dispatch(loginAction.loginOut()),
    })
)(Forgetpw)