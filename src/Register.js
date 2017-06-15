import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    Button,
    StyleSheet,
    TextInput,
    Picker,
    Alert,
    
    Image,
    View
} from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF',
      },
    contact: {
        width: 400,
        height: 100,
        marginTop: 14,
      },
    btnRegister: {
        margin: 30,
        padding: 20,
      },
    tInRegister: {
        fontSize: 16,
        marginLeft: 16,
        marginRight: 16,
      },
    textStyle: {
        fontSize: 14,
        marginLeft: 16,
     },
    btn_radio:{
      marginLeft: 14,
    }

   });


class Register extends Component 
{
    constructor(props) 
    {
        super(props)
        this.state = { name: '', email: '', mobile: '', descripton: '',optionSelected:1}
    }
    
    onRegisterPress() {
        Alert.alert("Profile has been Registered")
    }

    onSelect(index)
    {
    this.setState({
      optionSelected: index + 1
    });
    }
    
    render() {

      return (

         <View style={styles.container}>
         <View style={styles.contact}>

         <Text style={styles.textStyle}> Name </Text>
         <TextInput style={styles.tInRegister} onChangeText={(text)=> this.setState({name: text})} />

         <Text style={styles.textStyle}> Email </Text>
         <TextInput style={styles.tInRegister} 
          onChangeText={(text)=> this.setState({email: text})} />

         <Text style={styles.textStyle}> Mobile </Text>
         <TextInput style={styles.tInRegister} 
          onChangeText={(text)=> this.setState({mobile: text})} />

         <Text style={styles.textStyle}> Area of Interest </Text>  

         <RadioGroup
         onSelect = {this.onSelect.bind(this)} defaultSelect={this.state.optionSelected - 1} >

         <RadioButton style={styles.btn_radio}  value={'item1'} >
         <Text>Android</Text>
         </RadioButton>
 
         <RadioButton  style={styles.btn_radio} value={'item2'}>
         <Text>IOS</Text>
         </RadioButton>
 
         <RadioButton style={styles.btn_radio}  value={'item3'}>
         <Text>Web</Text>
         </RadioButton>

         <RadioButton style={styles.btn_radio}  value={'item3'}>
         <Text>Backend</Text>
         </RadioButton>
         </RadioGroup>

         <Text style={styles.textStyle}> Experience </Text>  

         <RadioGroup
          onSelect = {this.onSelect.bind(this)} defaultSelect={this.state.optionSelected - 1} >
         <RadioButton style={styles.btn_radio} value={'item1'} >
         <Text>Fresher</Text>
         </RadioButton>
 
         <RadioButton style={styles.btn_radio} value={'item2'}>
         <Text>Less than 3 YRS</Text>
         </RadioButton>
 
         <RadioButton style={styles.btn_radio} value={'item3'}>
         <Text>Greater than 3 YRS</Text>
         </RadioButton>
         </RadioGroup>
         
         <Button style={styles.btnRegister}
           onPress={this.onRegisterPress}
           title="Register"
           color = '#42a5f5'/>
   
          </View>
          </View>


      )
    }
}

Register.navigationOptions = {
    title: 'Register'
};
export default Register