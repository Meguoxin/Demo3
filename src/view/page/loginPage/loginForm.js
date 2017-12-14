import React, { Component } from 'react';

import {
    Text,
    View,
    TextInput,
    Alert,
    TouchableHighlight,
    TouchableOpacity,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import loginStyle from '../../style/login';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userpwd: '',
            eyes: true,
            acolor: false
        };
        this.handleLogin = this.handleLogin.bind(this);
    }
    onChangeeyes() {
        this.setState({ eyes: !this.state.eyes });
    }
    onChangpwdstate() {
        if (this.state.eyes === true) {
            return true;
        }
        return false;
    }
    computedcolor() {
        if (this.state.username && this.state.userpwd) {
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
    handleLogin() {
        // Keyboard.dismiss();
        if (!this.state.username || !this.state.userpwd) {
            Alert.alert('提示', '用户名或密码不能为空！', [
                {
                    text: '好的'
                }
            ]);
            return;
        }
        this.props.login(this.state.username, this.state.userpwd);
    }
    render() {
        const { login, status, erro } = this.props;

        const text = this.state.eyes
            ? require('../../../resource/icons/眼睛.png')
            : require('../../../resource/icons/闭眼.png');
        // var text2 = syspwd ?"": "两次密码输入不一致";
        return (
            <View style={loginStyle.loginMain}>
                <View style={loginStyle.formStyle}>
                    <View style={loginStyle.formInputWarp}>
                        <View
                            style={[
                                loginStyle.formInput,
                                loginStyle.formInputSplit
                            ]}
                        >
                            <TextInput
                                placeholder="手机号/邮箱/账户名"
                                style={[loginStyle.loginInput, { padding: 0 }]}
                                autoFocus
                                clearButtonMode="always"
                                maxLength={50}
                                onChangeText={text => {
                                    this.setState({ username: text });
                                }}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={loginStyle.formInput}>
                            <TextInput
                                style={[loginStyle.loginInput, { padding: 0 }]}
                                secureTextEntry={this.onChangpwdstate()}
                                clearButtonMode="never"
                                placeholder="6-12位密码"
                                keyboardType= 'numeric'
                                maxLength={20}
                                onChangeText={text => {
                                    this.setState({ userpwd: text });
                                }}
                                underlineColorAndroid="transparent"
                            />
                            <TouchableOpacity
                                style={loginStyle.eyes}
                                onPress={() => this.onChangeeyes()}
                            >
                                <Image
                                    onClick={() => {
                                        this.onChangeeyes();
                                    }}
                                    style={loginStyle.image}
                                    source={text}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={loginStyle.feedback}>
                    <Text style={loginStyle.errorfont}>{erro}</Text>
                </View>
                <View style={loginStyle.btn}>
                    <LinearGradient
                        colors={['#FFAA00', '#FF9800']}
                        style={[loginStyle.btnWrap]}
                    >
                        <TouchableHighlight
                            style={[loginStyle.btnWrap3, this.computedcolor()]}
                            underlayColor="#FF9800"
                            onPress={() => {
                                this.handleLogin();
                            }}
                        >
                            <Text
                                style={[
                                    loginStyle.loginBtn1,
                                    this.computedzidcolor()
                                ]}
                            >
                                {status}
                            </Text>
                        </TouchableHighlight>
                    </LinearGradient>
                </View>
                <View style={loginStyle.btn}>
                    <TouchableOpacity
                        style={loginStyle.btnWrap2}
                        onPress={() =>
                            this.props.navigation.navigate('Forgetpw')
                        }
                    >
                        <Text style={loginStyle.loginforget}>忘了密码？</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
