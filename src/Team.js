import React from 'react';
import {
    AppRegistry,
    Text,
    Button,
    StyleSheet,
    Image,
    View
} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#FFF',

    },


    im_team: {

        width: 110,
        height: 100,
        margin: 6,
        marginTop: 10,
    },
});
const Team = () => {

   

    return (
        <View style={styles.container}>

      <Image style={styles.im_team}
       source={{uri: 'http://nfnlabs.in/images/team/sonaal.png'}}/>

      <Image style={styles.im_team}
       source={{uri:'http://nfnlabs.in/images/team/rajesh.png'}}/>

      <Image style={styles.im_team}
       source={{uri:'http://nfnlabs.in/images/team/aby.png'}}/>

      <Image style={styles.im_team}
       source={{uri:'http://nfnlabs.in/images/team/ranjith.png'}}/>

      <Image style={styles.im_team}
       source={{uri:'http://nfnlabs.in/images/team/ranjith.png'}}/>

      <Image style={styles.im_team}
       source={{uri:'http://nfnlabs.in/images/team/adithya.png'}}/>

      <Image style={styles.im_team}
       source={{uri:'http://nfnlabs.in/images/team/Dhivya.png'}}/>

      <Image style={styles.im_team}
       source={{uri:'http://nfnlabs.in/images/team/jaison.png'}}/>

      <Image style={styles.im_team}
       source={{uri:'http://nfnlabs.in/images/team/rathish.png'}}/>

      <Image style={styles.im_team}
       source={{uri:'http://nfnlabs.in/images/team/ravi.png'}}/>

       <Image style={styles.im_team}
       source={{uri:'http://nfnlabs.in/images/team/aby.png'}}/>

       <Image style={styles.im_team}
       source={{uri:'http://nfnlabs.in/images/team/ravi.png'}}/>

       <Image style={styles.im_team}
       source={{uri:'http://nfnlabs.in/images/team/anas.png'}}/>

      <Image style={styles.im_team}
       source={{uri:'http://nfnlabs.in/images/team/ashik.png'}}/>       


      </View>
    );

}
Team.navigationOptions = {
    title: 'Team'
};
export default Team
