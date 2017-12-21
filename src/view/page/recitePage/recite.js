import React, { Component } from 'react';

import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Platform
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import reciteStyles from '../../style/recite';
import ReciteItem from './reciteItem';
import * as loginAction from '../../../redux/actions/forgetpwd/forgetpw';

class recite extends Component {
    constructor() {
        super();
    }
    _separator = () => <View style={reciteStyles.ItemSeparatorComponent} />;
    render() {
        const { user } = this.props;
        console.log(this.props.user);
        return (
            <View style={reciteStyles.reciteWrap}>
                <View style={reciteStyles.reciteall}>
                    <View style={reciteStyles.reciteList}>
                        <FlatList
                            ItemSeparatorComponent={this._separator}
                            data={this.props.user}
                            renderItem={({ item }) => (
                                <ReciteItem word={item.WP} cm={item.CM} />
                            )}
                        />
                    </View>
                    {/* <View style={reciteStyles.reciteButtonView}> */}
                    {/* <TouchableOpacity style={reciteStyles.reciteButton}> */}
                    {/* <Text style={reciteStyles.reciteButtonWord}> */}
                    {/* 下一步 */}
                    {/* </Text> */}
                    {/* </TouchableOpacity> */}
                    {/* </View> */}
                    {Platform.OS === 'ios' ? (
                        <View style={reciteStyles.IOSbutton}>
                            <TouchableOpacity style={reciteStyles.reciteButton}>
                                <Text style={reciteStyles.reciteButtonWord}>
                                    下一步
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={reciteStyles.ANDROIDbuttonView}>
                            <View style={reciteStyles.ANDROIDbutton}>
                                <TouchableOpacity
                                    style={reciteStyles.reciteButton}
                                >
                                    <Text style={reciteStyles.ANDROIDtitle}>
                                        下一步
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <LinearGradient
                                colors={[
                                    '#c9c9c9',
                                    '#f7f7f7',
                                    '#ffffff',
                                    '#ffffff'
                                ]}
                                style={{ height: 5 }}
                            />
                        </View>
                    )}
                </View>
            </View>
        );
    }
}

export default connect(
    state => ({
        status: state.forget.status,
        isSuccess: state.forget.isSuccess,
        user: state.forget.user
    }),
    dispatch => ({
        loginOut: () => dispatch(loginAction.loginOut()),
        recite: a => dispatch(loginAction.recite(a))
    })
)(recite);
