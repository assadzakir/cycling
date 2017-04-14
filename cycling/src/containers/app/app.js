import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import { Actions } from "react-native-router-flux";
export default class App extends Component {

  render() {

    //    return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>
    //       Home
    //     </Text>

    //       <Text onPress={Actions.rootTabBar}>Go to Home bar</Text>
    //       <Text onPress={Actions.login}>Open modal</Text>
    //   </View>
    // )

    return (
      <Image source={require('./biker.png')} style={{ flex: 1, width: null, height: null, }} >
        <View style={styles.container}>
          <View style={[styles.box1]}>

            <Image source={require('./Untitled-4.png')} style={{ flex: 1, width: 150 }} ></Image>
          </View>
          <View style={[styles.box2]}>
            <Image source={require('./Untitled-3.png')} style={{ flex: 1, width: 150 }} ></Image>
          </View>
          <View style={[styles.box3]}>
            
          <Text style={[styles.titleText]}>Connect With Friends</Text>
          <Text style={[styles.paraText]} >
                Bycycling is more fun with friends.Share
                your events participate with others and get
                upto date about your community</Text>
          </View>
          <View style={[styles.box4]}>
            <TouchableHighlight onPress={Actions.rootTabBar}>
        <Text>Button</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={Actions.register}>
        <Text>Register</Text>
      </TouchableHighlight>
          </View>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },

  box1: {
    flex: 4,

    alignItems: 'center'
  },
  box2: {
    flex: 4,
    alignItems: 'center'
  },
  box3: {
    flex: 3,
  },
  box4: {
    flex: 2,
   
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color:'yellow'
  },
    paraText: {
    textAlign: 'center',
    fontSize: 10,
    color:'white'
  },
});