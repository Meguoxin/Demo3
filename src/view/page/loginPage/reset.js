import React, { Component } from 'react';

import {
    Text,
    View,
    TextInput,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import loginStyle from '../../style/login';
import common from '../../style/common';

class reset extends Component {
    static navigationOptions = () => ({
        title: '重置密码',
        headerBackTitle: '返回',
        headerTruncatedBackTitle: '回退',
        alignSelf: 'center'
    });
    constructor(props) {
        super(props);
        this.state = {
            verification: true,
            username: '',
            userpwd: '',
            syspwd: true
        };
        this.computedTabColor = this.computedTabColor.bind(this);
        this.computedcolor = this.computedcolor.bind(this);
        this.computezidcolor = this.computezidcolor.bind(this);
        this.UpColorverification = this.UpColorverification.bind(this);
        this.logout = this.logout.bind(this);
    }
    computedTabColor(boo) {
        this.setState({ tabColor: boo });
    }
    computedcolor() {
        if (
            this.state.username.length > 6 &&
            this.state.userpwd.length > 6 &&
            this.state.username === this.state.userpwd
        ) {
            return {};
        }
        return { backgroundColor: '#CCCCCC' };
    }
    computezidcolor() {
        if (
            this.state.username.length > 6 &&
            this.state.userpwd.length > 6 &&
            this.state.username === this.state.userpwd
        ) {
            return { color: '#FFFFFF' };
        }
        return { color: '#666666' };
    }
    UpColorverification() {
        if (!this.state.verification) {
            // 禁用状态
            this.computedTabColor(true);
        } else {
            this.computedTabColor(false);
        }
    }
    // ComponentUpdate生命周期方法
    logout() {
        if (
            this.state.username === this.state.userpwd &&
            (this.state.username && this.state.userpwd)
        ) {
            this.setState({ syspwd: true });
            return this.props.navigation.navigate('Login');
        }

        this.setState({ syspwd: false });
    }
    render() {
        const { syspwd } = this.state;
        const text2 = syspwd ? '' : '密码不一致，请重新输入';
        return (
            <View style={[common.wrapper, loginStyle.loginWrap]}>
                <View style={loginStyle.loginMain1}>
                    <View style={loginStyle.formStyle1}>
                        <View style={loginStyle.formInputWarp}>
                            <View
                                style={[
                                    loginStyle.formInput,
                                    loginStyle.formInputSplit
                                ]}
                            >
                                <TextInput
                                    ref="login_name"
                                    placeholder="请输入6-12位新密码"
                                    style={[
                                        loginStyle.loginInput,
                                        { padding: 0 }
                                    ]}
                                    maxLength={20}
                                    autoFocus
                                    secureTextEntry
                                    clearButtonMode="always"
                                    onChangeText={text => {
                                        this.setState({ username: text });
                                    }}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View style={loginStyle.formInput}>
                                <TextInput
                                    ref="login_psw"
                                    style={[
                                        loginStyle.loginInput,
                                        { padding: 0 }
                                    ]}
                                    maxLength={20}
                                    secureTextEntry
                                    clearButtonMode="always"
                                    placeholder="再次输入新密码"
                                    underlineColorAndroid="transparent"
                                    onChangeText={text => {
                                        this.setState({ userpwd: text });
                                    }}
                                    onFocus={() => {
                                        this.UpColorverification();
                                    }}
                                    onBlur={() => {
                                        this.computedTabColor(true);
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={loginStyle.feedback}>
                        <Text style={loginStyle.errorfont}>{text2}</Text>
                    </View>
                    <View style={loginStyle.btn}>
                        <LinearGradient
                            colors={['#FFAA00', '#FF9800']}
                            style={[loginStyle.btnWrap]}
                        >
                            <TouchableHighlight
                                style={[
                                    loginStyle.btnWrap3,
                                    this.computedcolor()
                                ]}
                                underlayColor="#FF9800"
                                onPress={() => this.logout()}
                            >
                                <Text
                                    style={[
                                        loginStyle.loginBtn1,
                                        this.computezidcolor()
                                    ]}
                                >
                                    确定
                                </Text>
                            </TouchableHighlight>
                        </LinearGradient>
                    </View>
                    <View style={loginStyle.btn}>
                        <TouchableOpacity style={loginStyle.btnWrap2}>
                            <Text style={loginStyle.forget}>
                                出现问题？请前去
                                <Text style={{ color: '#2A2A2A' }}> 反馈</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default connect(state => ({
    status: state.user.status,
    isSuccess: state.user.isSuccess,
    user: state.user.user
}))(reset);
