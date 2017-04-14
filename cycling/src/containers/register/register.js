import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';
import { Actions } from "react-native-router-flux";
export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      FirstName: 'Enter First Name',
      LastName: 'Enter Last Name',
      DateofBirth: 'Enter Date of Birth',
      // date:"2016-05-15"
    };
  }

  render() {


    return (


      <Image source={require('../app/biker.png')} style={{ flex: 1, width: null, height: null, }} >
        <View style={styles.container}>


          <View style={[styles.box1]}>
            <Text >User Sign Up</Text>
          </View>



          <View style={[styles.box2]}>
            <TextInput
              style={{ height: 40, borderColor: 'white', color: 'white' }}
              value={this.state.FirstName}
            />
            <TextInput
              style={{ height: 40, borderColor: 'white', color: 'white' }}
              value={this.state.LastName}
            />

            <TextInput
              style={{ height: 40, borderColor: 'white', color: 'white' }}
              value="Enter your Email As User Name"
            />

            <TextInput
              style={{ height: 40, borderColor: 'white', color: 'white' }}
              value='Enter Password'
            />

            <TextInput
              style={{ height: 40, borderColor: 'white', color: 'white' }}
              value='ReEnter your Password'
            />

            <TextInput
              style={{ height: 40, borderColor: 'white', color: 'white' }}
              value='Select Your Gender'
            />
          </View>


            <View style={[styles.button]}>
              <TouchableHighlight >
                <Text style={styles.buttonText}>Sign Up</Text>
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
    flex: 1,

  },
  box2: {
    flex: 4,

  },
  box3: {
    flex: 5,

  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'yellow'
  },
  paraText: {
    textAlign: 'center',
    fontSize: 10,
    color: 'white'
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 20,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'orange',
    borderColor: 'orange',
    borderWidth: 1,
    borderRadius:20,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});