import React, { Component } from 'react';

import {
    Text,
    View,
    TextInput,
    Alert,
    TouchableHighlight,
    TouchableOpacity,
    Keyboard,
    Modal,Button
} from 'react-native';
import { connect } from 'react-redux';
import common from '../style/common';
import loginStyle from '../style/login';
import *as userAction from '../../redux/actions/user';
import LoginForm from './loginPage/loginForm';
import RegFrom from './loginPage/regFrom';
import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Main'})
    ]
})

class loginPage extends Component {
    static navigationOptions = ({navigation})=>({
        title:"登录",
        headerBackTitle:'返回',
        headerTruncatedBackTitle:'回退',
        headerRight:
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.navigate("Main")}>
                <Text style={{color:'black',marginRight:10,fontSize:16}}>注册</Text>
            </TouchableOpacity>,
        headerLeft:
            <Button
                title = '返回'
                // backgroundColor: 'black'
            />,
        alignSelf:'center'
    });
    computedTabBar(type){
        return this.state.tabState === type ? "rgb(255, 152, 0)" : "transparent"
    }
    shouldComponentUpdate(nextProps, nextState) {
        // 登录完成,切成功登录
        if (nextProps.status === '成功' && nextProps.isSuccess) {
            this.props.navigation.dispatch(resetAction)
            return false;
        }
        return true;
    }
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            btnFlag: true,
            modalVisible: false,
            disabled : false,
            tabState: 'login'
        };

    }

    onChangeTab(tab) {
        this.setState({tabState: tab})
    }
    render(){
        const { login,status } = this.props;
         return (
            <View style={[common.wrapper, loginStyle.loginWrap]}>
                 <View style={loginStyle.navigation}>
                 <TouchableOpacity style={[loginStyle.btnWrap1,{borderBottomColor: this.computedTabBar('login'),
                     borderBottomWidth: 3, paddingVertical: 5,
                     fontSize: 16,
                     color: '#666666'}]}
                onPress={()=>{this.onChangeTab('login')}}
                 >
                 <Text style={{
                     fontSize: 16,
                     height:20,
                     color: '#666666'}}>账号登录</Text>
                </TouchableOpacity>
                 <TouchableOpacity style={[loginStyle.btnWrap1,{borderBottomColor: this.computedTabBar('reg'),
                     borderBottomWidth: 3, paddingVertical: 5,
                     fontSize: 16,
                     color: '#666666'}]}
                 onPress={()=>{this.onChangeTab('reg')}}
                 delayPressOut={100}
                     >
                     <Text style={{
                         fontSize: 16,
                         height:20,
                         color: '#666666'}}>短信快捷登录</Text>
                 </TouchableOpacity>
                 </View>
                {
                    (()=>{
                        switch(this.state.tabState){
                            case 'login':
                                return (<LoginForm login = {login} status = {status}/>)
                            case 'reg':
                                return (<RegFrom  login = {login} status = {status}/>)
                        }
                    })()
                }
            </View>
        );
    }
}
export default connect ((state) => {
        return {
            //key为组建的props属性 Value为组建的State
            status: state.user.status,
            isSuccess: state.user.isSuccess,
            user: state.user.user,
        }
    },
    (dispatch) => ({
        login: () => dispatch(userAction.login()),
    })
)(loginPage)



