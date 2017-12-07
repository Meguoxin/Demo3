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

class reset extends Component {
    static navigationOptions = ({navigation})=>({
        title:"重置密码",
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
            syspwd:""
        };
        this.computedTabColor = this.computedTabColor.bind(this);
        this.computedcolor = this.computedcolor.bind(this);
        this.computezidcolor = this.computezidcolor.bind(this);
        this.UpColorverification = this.UpColorverification.bind(this);
        this.logout = this.logout.bind(this);
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
    computezidcolor(){
        if((this.state.username.length>6&&this.state.userpwd.length>6)&&(this.state.username===this.state.userpwd)){
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
        if((this.state.username===this.state.userpwd)&&(this.state.username&&this.state.userpwd)&&(this.state.username.length>6&&this.state.userpwd.length>6)){
            return ()=> this.props.navigation.navigate("Login")
        }else{
            return
        }

    }
    render(){
        const { login,status} = this.props;
        const { time,verification,tabColor } = this.state;
        var text = tabColor ?{color:'#CCCCCC'} : {color:'#FF7400'};
        var text1 = verification ?"获取验证码": `重新发送(${time})`;
        return(
            <View style={[common.wrapper, loginStyle.loginWrap]}>
                <View style={loginStyle.loginMain1}>
                    <View style={loginStyle.formStyle}>
                        <View style={loginStyle.formInputWarp}>
                            <View style={[loginStyle.formInput, loginStyle.formInputSplit]}>
                                <TextInput
                                    ref="login_name"
                                    placeholder='请输入6-12位新密码'
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
                    <View style={loginStyle.btn}>
                        <LinearGradient colors={[ '#FFAA00','#FF9800']} style={[loginStyle.btnWrap]}>
                        <TouchableHighlight style={[loginStyle.btnWrap3,this.computedcolor()]}  underlayColor='#FFAA00'
                                            onPress={
                                                    this.logout()
                                            }

                        >
                            <Text style={[loginStyle.loginBtn1,this.computezidcolor()]}>确定</Text>
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
)(reset)