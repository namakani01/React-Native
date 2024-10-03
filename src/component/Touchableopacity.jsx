import React from "react";
import {View , TouchableOpacity, StyleSheet,Text } from "react-native";



const Touchopacity = ()=>
{
    return (
        <View style = {{paddingTop : 10}}>
        <TouchableOpacity style = {str.opacity} activeOpacity={0.5}>
            <Text style = {str.con}>TouchableOpacity</Text>
        </TouchableOpacity>
        </View>
    )
}


const str = StyleSheet.create({
    con : {
     textAlign : 'center',
     fontSize : 20,
     color : 'black',
     fontWeight : 'bold'
    },
    opacity : 
    {
       backgroundColor : 'red',
       padding : 20,
       margin : 25,
       borderWidth : 2
    }
})


export {Touchopacity , str}

