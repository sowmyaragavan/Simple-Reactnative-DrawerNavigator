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

// render: function() {
//   var navigationView = (
//     <View style={{flex: 1, backgroundColor: '#fff'}}>
//       <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
//     </View>
//   );
import Team from './src/Team'
import { DrawerNavigator } from 'react-navigation'
import Wallpapers from './src/Wallpapers'
import Home from './src/Home'
export default class DrawerNavigatorExample extends Component {
 
}

const App =DrawerNavigator({
  Home:{screen: Home},
  Team :{ screen: Team},
  Wallpapers:{screen: Wallpapers}
  
});


AppRegistry.registerComponent('DrawerNavigatorExample', () => App);
