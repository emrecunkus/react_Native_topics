import React, { Component } from 'react';  
import { AppRegistry, Text, TextInput, View } from 'react-native';  
  
export default class PizzaTranslator extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {text: ''};  
    }  
  
    render() {  
        return (  
            <View style={{padding: 10}}>  
                <TextInput  
                    style={{height: 40,backgroundColor: 'azure', fontSize: 20}}  
                    placeholder="Type here to translate!"  
                    onChangeText={(text) => this.setState({text})}  
                />  
                <Text style={{padding: 100, fontSize: 50}}>  
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}  
                </Text>*  
            </View>  
        );  
    }  
}  