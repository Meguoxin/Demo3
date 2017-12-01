import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import styles from '../style/counter';



export default class counter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { counter, increment, decrement, change, guo, jian} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{counter}</Text>
        <TouchableOpacity onPress={increment} style={styles.button}><Text>up</Text></TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.button}><Text>down</Text></TouchableOpacity>
        <TouchableOpacity onPress={change} style={styles.button}><Text>change</Text></TouchableOpacity>
        <TouchableOpacity onPress={guo} style={styles.button}><Text>guoxin</Text></TouchableOpacity>
        <TouchableOpacity onPress={jian} style={styles.button}><Text>jian3</Text></TouchableOpacity>
      </View>
    )
  }
}