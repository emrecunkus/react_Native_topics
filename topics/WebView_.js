import React, { Component } from 'react'  
import {  
    View,WebView,StyleSheet,AppRegistry  
} from 'react-native'  
  
export default class WebView_ extends Component {  
    render() {  
        return (  
        <View style = {styles.container}>  
            <WebView  
                source = {{ uri:'https://www.javatpoint.com' }}  
            />  
        </View>  
        )  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    }  
})  
  
AppRegistry.registerComponent('App', () => WebView_) 