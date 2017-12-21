import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import common from '../style/common';
import loginStyle from '../style/login';
import * as userAction from '../../redux/actions/user/user';
import * as shortAction from '../../redux/actions/shortMessage/shortMessage';
import LoginForm from './loginPage/loginForm';
import RegFrom from './loginPage/shortMessageFrom';

class loginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabState: 'login'
        };
    }
    static navigationOptions = ({ navigation }) => ({
        title: '登录',
        headerBackTitle: '返回',
        headerTruncatedBackTitle: '回退',
        headerRight: (
            <TouchableOpacity
                style={{ flexDirection: 'row' }}
                onPress={() => navigation.navigate('Main')}
            >
                <Text
                    style={{ color: '#FF7400', marginRight: 10, fontSize: 16 }}
                >
                    注册
                </Text>
            </TouchableOpacity>
        ),
        headerLeft: (
            <TouchableOpacity style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'black', marginLeft: 10, fontSize: 16 }}>
                    返回
                </Text>
            </TouchableOpacity>
        ),
        alignSelf: 'center'
    });
    computedTabBar(type) {
        return this.state.tabState === type
            ? 'rgb(255, 152, 0)'
            : 'transparent';
    }
    onChangeTab(tab) {
        this.setState({ tabState: tab });
    }
    render() {
        return (
            <View style={[common.wrapper, loginStyle.loginWrap]}>
                <View style={loginStyle.navigation}>
                    <TouchableOpacity
                        style={[
                            loginStyle.btnWrap1,
                            {
                                borderBottomColor: this.computedTabBar('login'),
                                borderBottomWidth: 3,
                                paddingVertical: 5
                            }
                        ]}
                        onPress={() => {
                            this.onChangeTab('login');
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                height: 20,
                                color: '#666666'
                            }}
                        >
                            账号登录
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            loginStyle.btnWrap1,
                            {
                                borderBottomColor: this.computedTabBar('reg'),
                                borderBottomWidth: 3,
                                paddingVertical: 5
                            }
                        ]}
                        onPress={() => {
                            this.onChangeTab('reg');
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                height: 20,
                                color: '#666666'
                            }}
                        >
                            短信快捷登录
                        </Text>
                    </TouchableOpacity>
                </View>
                {(() => {
                    switch (this.state.tabState) {
                        case 'login':
                            return (
                                <LoginForm
                                    login={this.props.login}
                                    status={this.props.status}
                                    navigation={this.props.navigation}
                                    data={this.props.user}
                                    erro={this.props.erro}
                                />
                            );
                        case 'reg':
                            return (
                                <RegFrom
                                    shortlogin={this.props.shortlogin}
                                    shortstatus={this.props.shortstatus}
                                    navigation={this.props.navigation}
                                    shortisSuccess={this.props.shortisSuccess}
                                    shortuser={this.props.shortuser}
                                    shorterro={this.props.shorterro}
                                    SmsCodelogin={this.props.SmsCodelogin}
                                    forgetusername={this.props.forgetusername}
                                    nameSuccess={this.props.nameSuccess}
                                    smsCode={this.props.smsCode}
                                />
                            );
                    }
                })()}
            </View>
        );
    }
}
loginPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    // isLoggedIn: PropTypes.bool,
    // user: PropTypes.object,
    // status: PropTypes.string,
};

loginPage.defaultProps = {
    // isLoggedIn: false,
    // user: {},
    // status: null,
};

export default connect(
    state => ({
        // key为组建的props属性 Value为组建的State
        status: state.user.status,
        isSuccess: state.user.isSuccess,
        user: state.user.user,
        erro: state.user.erro,
        smsCode: state.shortMessage.smsCode,
        shortstatus: state.shortMessage.shortstatus,
        shortisSuccess: state.shortMessage.shortisSuccess,
        shortuser: state.shortMessage.shortuser,
        shorterro: state.shortMessage.shorterro
    }),
    dispatch => ({
        login: (a, b) => dispatch(userAction.login(a, b)),
        shortlogin: (a, b) => dispatch(shortAction.shortlogin(a, b)),
        SmsCodelogin: a => dispatch(shortAction.SmsCodelogin(a)),
        forgetusername: () => dispatch(shortAction.forgetusername()),
        nameSuccess: () => dispatch(shortAction.nameSuccess())
    })
)(loginPage);
