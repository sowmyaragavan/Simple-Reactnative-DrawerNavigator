import React from 'react';
import {
    AppRegistry,
    Text,
    Button,
    StyleSheet,
    ToolbarAndroid,
    Image,
    View
} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    abt: {

        fontSize: 20,
        paddingBottom: 20,
        textAlign: 'center',
    },
    toolbar: {
        height: 56,
        backgroundColor: '#4883da',
    },

});
const Home = (props) => {
    const { navigate } = props.navigation;
    return (

        <View style={styles.container}>    
    <View>
      <Text style={styles.abt}>
         Home
        </Text>
        </View>
        </View>
    );

}
Home.navigationOptions = {
    title: 'Home'
};
export default Home
