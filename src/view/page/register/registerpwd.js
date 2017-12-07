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

class registerpwd extends Component {
    static navigationOptions = ({navigation})=>({
        title:"注册",
        headerBackTitle:'返回',
        headerTruncatedBackTitle:'回退',
        alignSelf:'center'
    });
    constructor(props){
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
            syspwd:true
        };
        this.logout = this.logout.bind(this);
        this.computedcolor = this.computedcolor.bind(this);
        this.computedTabColor = this.computedTabColor.bind(this);
        this.computedzidcolor = this.computedzidcolor.bind(this);
        this.UpColorverification = this.UpColorverification.bind(this);
    }

    computedTabColor(boo){
        this.setState({tabColor: boo});
    }
    computedcolor(){
        if((this.state.username.length>6&&this.state.userpwd.length>6)&&(this.state.username===this.state.userpwd)){
            return {}
        }else{
            return {backgroundColor:"#CCCCCC"}
        }
    }
    computedzidcolor(){
        if((this.state.username.length>6&&this.state.userpwd.length>6)&&(this.state.username===this.state.userpwd)){
            return {color:"#FFFFFF"}
        }else{
            return {color:"#666666"}
        }
    }
    actiontime(){
        if(this.state.verification){
            // 开启计时器
        }
    }
    /*     onChangeverification() {
     this.setState({verification: !this.state.verification})
     } */
    UpColorverification(){
        if(!this.state.verification){
            // 禁用状态
            this.computedTabColor(true)
        }else {
            this.computedTabColor(false)
        }
    }
    logout() {
        if((this.state.username===this.state.userpwd)&&(this.state.username&&this.state.userpwd)&&(this.state.username.length>6&&this.state.userpwd.length>6)){
            this.setState({syspwd: true})
            return this.props.navigation.navigate("Login")
        }
        else{
            this.setState({syspwd: false})
            return;
        }
    }
    render(){
        const { login,status} = this.props;
        const { time,verification,tabColor,syspwd} = this.state;
        var text = tabColor ?{color:'#CCCCCC'} : {color:'#FF7400'};
        var text1 = verification ?"获取验证码": `重新发送(${time})`;
        var text2 = syspwd ?"": "两次密码输入不一致";
        return(
            <View style={[common.wrapper, loginStyle.loginWrap]}>
                <View style={loginStyle.loginMain2}>
                    <View style={loginStyle.formStyle}>
                        <View style={loginStyle.formInputWarp}>
                            <View style={[loginStyle.formInput, loginStyle.formInputSplit]}>
                                <TextInput
                                    ref="login_name"
                                    placeholder='设置6-12位新密码'
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
                                    clearButtonMode="always"
                                    placeholder='再次输入新密码'
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
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={loginStyle.errorfont}>{text2}</Text>
                    </View>
                    <View style={loginStyle.btn}>
                        <LinearGradient colors={[ '#FFAA00','#FF9800']} style={[loginStyle.btnWrap]}>
                        <TouchableHighlight style={[loginStyle.btnWrap3,this.computedcolor()]}  underlayColor='#FFAA00'
                                            onPress={
                                                this.logout
                                            }
                        >
                            <Text style={[loginStyle.loginBtn1,this.computedzidcolor()]}>确定</Text>
                        </TouchableHighlight>
                        </LinearGradient>
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
    })
)(registerpwd)