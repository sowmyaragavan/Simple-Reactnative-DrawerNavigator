import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  StyleSheet,
  Image,View
} from 'react-native';
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems : 'center',
    justifyContent:'center',
    backgroundColor :'#FFF',

  },
  
  instructions:{
    textAlign:'center',
    color:'#333333',
    marginBottom:5,
  },
  wallpapers:{
    
    fontSize:20,
    paddingBottom:20,
    textAlign:'center',
    
    

  },
});
const Wallpapers = () => {

    return (
       <View style={styles.container}>
      <Text style={styles.wallpapers}>
      Wallpapers
        </Text>
        </View>
    );
  
}
Wallpapers.navigationOptions = {
	title : 'Wallpapers',
};
export default Wallpapers