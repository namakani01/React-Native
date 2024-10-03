import React from "react";
import {View,Button,Text} from 'react-native';
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator()

const Form = ()=>
{
    return(
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options = {{headerTitleAlign : 'center' , headerTintColor : 'purple' , headerStyle : {backgroundColor  : '#fffaf0'} }} name = "Sign Up" component={SignUp}/>
            <Stack.Screen options = {{headerTitleAlign : 'center' , headerTintColor : 'purple' , headerStyle : {backgroundColor  : '#fffaf0'} }} name = 'LogIn' component={LogIn}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}


export default Form;