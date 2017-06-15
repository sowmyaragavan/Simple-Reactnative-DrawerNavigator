/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';



import { DrawerNavigator } from 'react-navigation'
import { StackNavigator } from 'react-navigation'
import Home from './src/Home'
import Team from './src/Team'
import CareersPortal from './src/CareersPortal'
import Register from './src/Register'

export default class DrawerNavigatorExample extends Component {
	render()
	{
 const { navigation } =this.props;
      
      return (
        <Home navigation={ navigation }/> );
}
}

const DrawerApp =DrawerNavigator({
  Home:{screen:Home},
  Team :{ screen: Team},
  CareersPortal:{screen: CareersPortal},
  
});

const App= StackNavigator({
  Home :{ screen: DrawerApp},
  Register:{ screen :Register},

});
// DrawerApp.navigationOptions = {
//   title: 'Home',
//   };


AppRegistry.registerComponent('DrawerNavigatorExample', () => App);
