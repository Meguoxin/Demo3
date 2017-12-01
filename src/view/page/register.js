import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Alert,
    TouchableHighlight,
    TouchableOpacity,
    Keyboard,
    Modal,Button
} from 'react-native';
import { connect } from 'react-redux';
import *as loginAction from '../../redux/actions/user';
import { NavigationActions } from 'react-navigation';
import loginStyle from '../style/login';
import common from '../style/common';

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Login'})
    ],
})

class Main extends Component {
    static navigationOptions = ({navigation})=>({
        title:"注册",
        headerBackTitle:'返回',
        headerTruncatedBackTitle:'回退',
        headerRight:
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.navigate("Login")}>
                <Text style={{color:'black',marginRight:10,fontSize:16}}>登录</Text>
            </TouchableOpacity>,
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
        };
    }
    computedTabColor(boo){
        this.setState({tabColor: boo});
    }
    computedcolor(){
        if(this.state.username.length&&this.state.userpwd.length){
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
    actiontime(){
        if(this.state.verification){
            // 开启计时器
            this.startInterval();
        }
    }
    /*     onChangeverification() {
     this.setState({verification: !this.state.verification})
     } */
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
        this.props.navigation.dispatch(resetAction)
    }
    render(){
        const { login,status} = this.props;
        const { time,verification,tabColor } = this.state;
        var text = tabColor ?{color:'#CCCCCC'} : {color:'#FF7400'};
        var text1 = verification ?"获取验证码": `重新发送(${time})`;
        return (
            <View style={[common.wrapper, loginStyle.loginWrap]}>
                <View style={loginStyle.loginMain1}>
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
                        <TouchableHighlight style={[loginStyle.btnWrap,this.computedcolor()]}  underlayColor='#FFAA00'
                                             onPress={this.logout.bind(this)}
                        >
                            <Text style={[loginStyle.loginBtn1,this.computezidcolor()]}>{status}</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={loginStyle.btn}>
                        <TouchableOpacity style={loginStyle.btnWrap2}>
                            <Text style={loginStyle.loginforget} >注册代表您已经阅读并同意
                                <Text style={{color: '#2A2A2A'}}>《朗播用户协议》</Text></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    }
});
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
)(Main)