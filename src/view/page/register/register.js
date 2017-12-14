import React, { Component } from 'react';

import {
    View,
    Text,
    TextInput,
    Alert,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import * as loginAction from '../../../redux/actions/register/register';
import registerStyle from '../../style/register';
import common from '../../style/common';

class Main extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '注册',
        headerBackTitle: '返回',
        headerTruncatedBackTitle: '回退',
        headerRight: (
            <TouchableOpacity
                style={{ flexDirection: 'row' }}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={{ color: 'black', marginRight: 10, fontSize: 16 }}>
                    登录
                </Text>
            </TouchableOpacity>
        ),
        alignSelf: 'center'
    });
    constructor(props) {
        super(props);
        this.state = {
            time: 60,
            tabColor: true,
            verification: true,
            username: '',
            userpwd: '',
            shortmessage: '获取验证码'
        };
        this.computedcolor = this.computedcolor.bind(this);
        this.computedTabColor = this.computedTabColor.bind(this);
        this.computedzidcolor = this.computedzidcolor.bind(this);
        this.UpColorverification = this.UpColorverification.bind(this);
        this.logout = this.logout.bind(this);
        this.startInterval = this.startInterval.bind(this);
        this.actiontime = this.actiontime.bind(this);
    }
    shouldComponentUpdate(nextProps) {
        // 登录完成,切成功登录
        if (nextProps.status === '成功' && nextProps.isSuccess) {
            return false;
        }
        return true;
    }
    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }
    computedcolor() {
        if (this.state.username.length > 0 && this.state.userpwd.length > 0) {
            return {};
        }
        return { backgroundColor: '#CCCCCC' };
    }
    computedzidcolor() {
        if (this.state.username.length > 0 && this.state.userpwd.length > 0) {
            return { color: '#FFFFFF' };
        }
        return { color: '#666666' };
    }
    actiontime() {
        if (
            this.state.verification &&
            this.state.username.length > 0 &&
            !this.state.tabColor
        ) {
            // 开启计时器
            this.props.sendCode(this.state.username).then(res => {
                console.log(res, 'sssssss');
                if (res.State === 1) {
                    this.startInterval();
                } else if (res.Msg === '手机号已存在！') {
                    console.log(res, '手机号已存在！');
                    this.props.RegisterRepeat();
                }
            });
            this.props.nameSuccess();
        } else if (this.state.username.length === 0) {
            this.props.Phonesetnull();
        }
    }
    computedTabColor(boo) {
        this.setState({ tabColor: boo });
    }
    startInterval() {
        // 变文字, 变颜色
        this.setState({ verification: false, tabColor: true });
        this.timer && clearInterval(this.timer);
        let { time } = this.state;
        this.timer = setInterval(() => {
            this.setState({ time: --time });
            if (!time) {
                clearInterval(this.timer);
                this.setState({
                    verification: true,
                    time: 60,
                    tabColor: false,
                    shortmessage: '重新获取验证码'
                });
            }
        }, 1000);
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
        if (!this.state.username || !this.state.userpwd) {
            Alert.alert(
                '提示',
                `用户名或验证码不能为空！${this.props.getShort}`,
                [
                    {
                        text: '好的'
                    }
                ]
            );
            return;
        }
        if (this.state.username.length > 10) {
            this.props.login(this.state.username, this.state.userpwd);
            if (this.state.isSuccess === true) {
                this.props.navigation.navigate('registerpwd');
            }
        } else {
            Alert.alert('提示', '手机号书写错误', [
                {
                    text: '好的'
                }
            ]);
        }
    }
    render() {
        const { status, regerro } = this.props;
        const { time, verification, tabColor } = this.state;
        const text = tabColor ? { color: '#CCCCCC' } : { color: '#FF7400' };
        const text1 = verification
            ? this.state.shortmessage
            : `重新发送(${time})`;
        return (
            <View style={[common.wrapper, registerStyle.registerWrap]}>
                <View style={registerStyle.registerMain}>
                    <View style={registerStyle.registerformStyle}>
                        <View style={registerStyle.registerformInputWarp}>
                            <View
                                style={[
                                    registerStyle.registerformInput,
                                    registerStyle.registerformInputSplit
                                ]}
                            >
                                <TextInput
                                    placeholder="11位中国大陆手机号"
                                    style={[
                                        registerStyle.registerInput,
                                        { padding: 0 }
                                    ]}
                                    autoFocus
                                    maxLength={50}
                                    clearButtonMode="always"
                                    onChangeText={text => {
                                        this.setState({ username: text });
                                    }}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <View style={registerStyle.registerformInput}>
                                <TextInput
                                    style={[
                                        registerStyle.registerInput,
                                        { padding: 0 }
                                    ]}
                                    secureTextEntry={false}
                                    clearButtonMode="never"
                                    placeholder="短信验证码"
                                    maxLength={20}
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
                                <TouchableOpacity
                                    style={registerStyle.registerverification}
                                >
                                    <Text
                                        style={text}
                                        onPress={() => {
                                            this.actiontime();
                                        }}
                                    >
                                        {text1}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={registerStyle.feedback}>
                        <Text style={registerStyle.errorfont}>{regerro}</Text>
                    </View>
                    <View style={registerStyle.registerbtn}>
                        <LinearGradient
                            colors={['#FFAA00', '#FF9800']}
                            style={[registerStyle.registerbtnWrap]}
                        >
                            <TouchableHighlight
                                style={[
                                    registerStyle.registerbtnWrap3,
                                    this.computedcolor()
                                ]}
                                underlayColor="#FF9800"
                                onPress={this.logout}
                            >
                                <Text
                                    style={[
                                        registerStyle.registerBtn,
                                        this.computedzidcolor()
                                    ]}
                                >
                                    {status}
                                </Text>
                            </TouchableHighlight>
                        </LinearGradient>
                    </View>
                    <View style={registerStyle.registerbtn}>
                        <TouchableOpacity
                            style={registerStyle.registerbtnWrap2}
                        >
                            <Text style={registerStyle.registerforget}>
                                注册代表您已经阅读并同意
                                <Text style={{ color: '#2A2A2A' }}>
                                    《朗播用户协议》
                                </Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default connect(
    state => ({
        status: state.register.status,
        isSuccess: state.register.isSuccess,
        user: state.register.user,
        getShort: state.register.getShort,
        regerro: state.register.regerro
    }),
    dispatch => ({
        login: (a, b) => dispatch(loginAction.login(a, b)),
        sendCode: a => dispatch(loginAction.sendCode(a)),
        Phonesetnull: () => dispatch(loginAction.Phonesetnull()),
        nameSuccess: () => dispatch(loginAction.nameSuccess()),
        RegisterRepeat: () => dispatch(loginAction.RegisterRepeat())
    })
)(Main);
