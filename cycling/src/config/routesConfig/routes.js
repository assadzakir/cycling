import React, { Component } from 'react';
import { Scene, Router,Actions } from 'react-native-router-flux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Provider, connect } from 'react-redux';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

import thunk from 'redux-thunk';
import App from '../../containers/app/app'
import Register from '../../containers/register/register'
import configureStore from '../../store/store';
import Homebar from '../../containers/rootTabsBar/homeBar'
import Eventsbar from '../../containers/rootTabsBar/eventsBar'
import Postsbar from '../../containers/rootTabsBar/postBar'
import Notificationsbar from '../../containers/rootTabsBar/notifcationsBar'
import Userbar from '../../containers/rootTabsBar/usersBar'
import Login from '../../containers/login/login'
const RouterWithRedux = connect()(Router);
const store = configureStore();

const styles = StyleSheet.create({
  navBar: {
    height: 35,
    backgroundColor: 'rgb(0,48,86)', // changing navbar color
    borderBottomColor: 'transparent'
  },
  navTitle: {
    color: 'rgb(236,184,0)', // changing navbar title color
    fontSize: 13,
    bottom:6
  },
  
})
class TabIcon extends React.Component {
  render(){
    var color = this.props.selected ? 'rgb(0,48,86)' : 'rgb(113,163,196)';
    var bgColor = this.props.selected ? 'rgb(236,184,0)' : 'rgb(0,48,86)';
    return (
      <View style={{flex:1, flexDirection:'row', alignItems:'center', alignSelf:'center',backgroundColor:bgColor , "paddingRight": 10, "paddingLeft": 10,transform: [
      { rotate: '15 deg'}
    ]}}>
        <Icon  style={{color: color,transform: [{ rotate: '-15 deg'}]}} name={this.props.iconName} size={15} />
      </View>
    );
  }
}

class RightIcon extends React.Component {
  render(){
    var color ='rgb(236,184,0)';
    return (
     
        <Icon style={{color:color}} name="user" size={15} />

    );
  }
}



export default class Root extends Component {




  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="App" component={App} hideNavBar={true} initial={true} />
            <Scene key="register" component={Register} title="Register" />
            <Scene key="login" direction="vertical" component={Login} title="Login" hideNavBar />
            <Scene key="rootTabBar" tabs={true} tabBarStyle={{ backgroundColor: 'rgb(0,48,86)' , height: 35}}>
              <Scene  onRight={() => { Actions.login() }} rightTitle={'+'} rightButtonTextStyle={{color: 'rgb(236,184,0)',bottom:12}} leftButtonIconStyle={{height:15, width: 10,  tintColor:'rgb(236,184,0)' ,bottom :6}} navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}  title={'Home'}key="Homebar" component={Homebar}  icon={TabIcon} iconName={"home"} initial />
              <Scene  key="Eventsbar" onRight={() => { Actions.login() }} rightTitle={'+'} rightButtonTextStyle={{color: 'rgb(236,184,0)',bottom:12}} leftButtonIconStyle={{height:15, width: 10,  tintColor:'rgb(236,184,0)' ,bottom :6}} navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}  component={Eventsbar} title={'Events'} icon={TabIcon}  iconName={"calendar-plus-o"} />
              <Scene  onRight={() => { Actions.login() }} rightTitle={'+'} rightButtonTextStyle={{color: 'rgb(236,184,0)',bottom:12}} leftButtonIconStyle={{height:15, width: 10,  tintColor:'rgb(236,184,0)' ,bottom :6}} navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}  key="Postsbar" component={Postsbar}  title={'Posts'} icon={TabIcon}  iconName={"bullhorn"} />
              <Scene onRight={() => { Actions.login() }} rightTitle={'+'} rightButtonTextStyle={{color: 'rgb(236,184,0)',bottom:12}} leftButtonIconStyle={{height:15, width: 10,  tintColor:'rgb(236,184,0)' ,bottom :6}} navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}   key="Notificationsbar" component={Notificationsbar} title={'Notifications'} icon={TabIcon}    iconName={"bell"}  />
              <Scene onRight={() => { Actions.login() }} rightTitle={'+'} rightButtonTextStyle={{color: 'rgb(236,184,0)',bottom:12}} leftButtonIconStyle={{height:15, width: 10,  tintColor:'rgb(236,184,0)' ,bottom :6}} navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}  key="Userbar" component={Userbar} title={'Users'} icon={TabIcon}  iconName={"user"} />
            </Scene>
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}





