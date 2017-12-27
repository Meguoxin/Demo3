import React, { Component } from 'react';

import {
    Text,
    View,
    TextInput,
    Alert,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RNFS from 'react-native-fs';
import loginStyle from '../../style/login';
// import TimerButton from '../timeing';

export default class regFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 60,
            tabColor: true,
            username: '',
            userpwd: '',
            verification: true,
        };
        this.handleLogin = this.handleLogin.bind(this);
    }
    downloadFile() {
        // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)

        // 图片
        // const downloadDest = `${RNFS.MainBundlePath}/${((Math.random() * 1000) | 0)}.jpg`;
        // const formUrl = 'http://img.kaiyanapp.com/c7b46c492261a7c19fa880802afe93b3.png?imageMogr2/quality/60/format/jpg';

        // 文件
        // const downloadDest = `${RNFS.MainBundlePath}/${((Math.random() * 1000) | 0)}.zip`;
        // const formUrl = 'http://files.cnblogs.com/zhuqil/UIWebViewDemo.zip';

        // 视频
        // const downloadDest = `${RNFS.MainBundlePath}/${((Math.random() * 1000) | 0)}.mp4`;
        // http://gslb.miaopai.com/stream/SnY~bbkqbi2uLEBMXHxGqnNKqyiG9ub8.mp4?vend=miaopai&
        // https://gslb.miaopai.com/stream/BNaEYOL-tEwSrAiYBnPDR03dDlFavoWD.mp4?vend=miaopai&
        // const formUrl = 'https://gslb.miaopai.com/stream/9Q5ADAp2v5NHtQIeQT7t461VkNPxvC2T.mp4?vend=miaopai&';

        // 音频
        const downloadDest = `${RNFS.MainBundlePath}/${((Math.random() * 1000) | 0)}.mp3`;
        // http://wvoice.spriteapp.cn/voice/2015/0902/55e6fc6e4f7b9.mp3
        const formUrl = 'http://wvoice.spriteapp.cn/voice/2015/0818/55d2248309b09.mp3';

        const options = {
            fromUrl: formUrl,
            toFile: downloadDest,
            background: true,
            begin: (res) => {
                console.log('begin', res);
                console.log('contentLength:', res.contentLength / 1024 / 1024, 'M');
            },
            progress: (res) => {

                let pro = res.bytesWritten / res.contentLength;

                this.setState({
                    progressNum: pro,
                });
            }
        };
        try {
            const ret = RNFS.downloadFile(options);
            ret.promise.then(res => {
                console.log('success', res);

                console.log('file://' + downloadDest)

            }).catch(err => {
                console.log('err', err);
            });
        }
        catch (e) {
            console.log(error);
        }

    }
    writeFile() {
        // create a path you want to write to
        const path = RNFS.MainBundlePath + '/test.txt';

        // write the file
        RNFS.writeFile(path, '这是一段文本，YES', 'utf8')
            .then((success) => {
                console.log('path', path);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    readFile() {
        // create a path you want to delete
        const path = RNFS.MainBundlePath + '/test.txt';

        return RNFS.readFile(path)
            .then((result) => {
                console.log(result);

                this.setState({
                    readTxtResult: result,
                })
            })
            .catch((err) => {
                console.log(err.message);

            });
    }

    actiontime() {
        if (
            this.state.verification &&
            this.state.username.length > 0 &&
            !this.state.tabColor
        ) {
            // 开启计时器
            this.props.SmsCodelogin(this.state.username).then(res => {
                console.log(res, 'sssssss');
                if (res.State === 1) {
                    this.startInterval();
                }
            });
            this.props.nameSuccess();
        } else if (this.state.username.length === 0) {
            this.props.forgetusername();
        }
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
                    tabColor: false
                });
            }
        }, 1000);
    }
    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }
    UpColorverification() {
        if (!this.state.verification) {
            // 禁用状态
            this.computedTabColor(true);
        } else {
            this.computedTabColor(false);
        }
    }
    computedTabColor(boo) {
        this.setState({ tabColor: boo });
    }
    computedcolor() {
        if (this.state.username.length && this.state.userpwd.length) {
            return {};
        }
        return { backgroundColor: '#CCCCCC' };
    }
    computedzidcolor() {
        if (this.state.username.length && this.state.userpwd.length) {
            return { color: '#FFFFFF' };
        }
        return { color: '#666666' };
    }
    handleLogin() {
        // Keyboard.dismiss();
        if (!this.state.username || !this.state.userpwd) {
            Alert.alert('提示', '用户名或验证码不能为空！', [
                {
                    text: '好的'
                }
            ]);
            return;
        }
        this.props.shortlogin(this.state.username, this.state.userpwd);
    }
    render() {
        const { shortstatus, shorterro } = this.props;
        const { time, verification } = this.state;
        const text = this.state.tabColor
            ? { color: '#CCCCCC' }
            : { color: '#FF7400' };
        const text1 = verification ? '获取验证码' : `重新发送(${time})`;
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
                                ref="login_name"
                                placeholder="11位中国大陆手机号"
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
                                ref="login_psw"
                                style={[loginStyle.loginInput, { padding: 0 }]}
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
                            <TouchableOpacity style={loginStyle.verification}>
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
                <View style={loginStyle.feedback}>
                    <Text style={loginStyle.errorfont}>{shorterro}</Text>
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
                                {shortstatus}
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
