'use strict';

import React from 'react';
import {
  StyleSheet,
  PixelRatio,
  Dimensions,
} from 'react-native';

const cell_w = Dimensions.get('window').width;
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },

    navbar: {
        flexDirection: 'row',
        borderBottomColor: '#000000',
        borderBottomWidth: 1/PixelRatio.get(),
    },
    justAlign: {
        alignItems: 'center', 
        justifyContent: 'center',
    },
    modal: {
        height: 100,
        width: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: 10
    }
});

module.exports = styles;
