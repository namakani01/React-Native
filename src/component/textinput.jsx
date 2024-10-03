import React, { useState } from "react";
import { StyleSheet, TextInput,View,Text, Button} from "react-native";




const Textinputbox = ()=>
{
    const [name , setname] = useState('')
    return (
        <View style = {{paddingTop: 30}}>
        <Text>The name is : {name}</Text>
        <TextInput style = {styless.ac} placeholder="Enter your name" onChangeText={(text)=>setname(text)} value = {name}></TextInput>
        <Button title = 'clear input value' onPress={()=>setname('')}></Button>
        </View>
    )
}


const styless = StyleSheet.create({
    ac : {
        fontSize : 15,
        borderWidth : 2,
        borderColor : "blue",
        margin : 10
    }
})




export {Textinputbox , styless}


