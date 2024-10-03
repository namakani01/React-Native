import React from "react";
import { KeyboardAvoidingView ,StyleSheet,TextInput} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


const KeyAvoidingView = ()=>
{
    return (
       <KeyboardAvoidingView behavior = {Platform.OS === "ios" ? "padding" : "height"} style = {str.keyboard}>
       <TextInput placeholder = 'Enter your name' style = {str.textbox}></TextInput>
       </KeyboardAvoidingView>
    )
}


const str = StyleSheet.create({
   textbox : 
   {
    borderWidth : 3,
    height:50,
    marginTop : 530,
    fontWeight : 'bold',
    fontSize : 17,
    fontFamily : 'monospace',
    padding : 10,
    
   },
   keyboard : 
    {
      marginBottom: 60
    }
}
)



export {KeyAvoidingView , str}