import React from "react";
import {StyleSheet, TouchableHighlight, View,Text } from "react-native";


const TouchHiglight = (props)=>
{

    return(
          <View style = {{paddingTop : 30}}> 
            <TouchableHighlight onPress = {()=>console.log("Button is pressed")} underlayColor={'#34ad87'} style ={styl.container}>

                <Text style = {styl.text}>TouchableHighlight</Text>

            </TouchableHighlight>
         </View>
    )
}


const styl = StyleSheet.create({
    container :
    {
        padding : 20,
        color :  'white',
        fontSize : 23,
        textAlign : 'center',
        margin : 30,
        backgroundColor : 'yellow',
        borderWidth  : 3
    },
    text : 
    {
        fontSize : 23,
        textAlign : 'center',
        color : 'black'
    }
})



export {TouchHiglight,styl}