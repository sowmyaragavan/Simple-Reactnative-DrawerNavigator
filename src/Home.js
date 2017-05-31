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
  home:{
    
    fontSize:20,
    paddingBottom:20,
    textAlign:'center',
    
    

  },
});

const Home = () => {
    return (

      <View style={styles.container}>
     <Text style={styles.home}>
     Home
        </Text>
        </View>

    );
  
}
Home.navigationOptions = {
  title : 'Home',
};
export default Home