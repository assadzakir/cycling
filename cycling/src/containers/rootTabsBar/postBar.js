import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const Postbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Post Bar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(0,25,55)',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  }
})
export default connect(({routes}) => ({routes}))(Postbar)