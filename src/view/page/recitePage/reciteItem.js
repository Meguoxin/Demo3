import React, { Component } from 'react';

import { Text, View, TouchableOpacity, Image } from 'react-native';
import reciteStyles from '../../style/recite';

export default class reciteItem extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <View style={reciteStyles.reciteItemWrap}>
                <TouchableOpacity style={reciteStyles.reciteItembtn}>
                    <View style={reciteStyles.reciteMain}>
                        <Text
                            style={reciteStyles.reciteitemSize}
                            numberOfLines={1}
                        >
                            {this.props.word}
                        </Text>
                    </View>
                    <View style={reciteStyles.reciteMain}>
                        <Text style={reciteStyles.translate} numberOfLines={1}>
                            {this.props.cm}
                        </Text>
                    </View>
                    <Image
                        style={reciteStyles.reciteitemimage}
                        source={{
                            uri:
                                'http://facebook.github.io/react/img/logo_og.png'
                        }}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
