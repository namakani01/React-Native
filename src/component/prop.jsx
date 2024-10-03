import React from "react";
import { Text, View } from "react-native";

const Component1 = ()=>
{
    const a = 30;
    return (
        <View>
        <Text>Hello</Text>
         <Component2 age = {a}></Component2>   
        </View>
    )
}


const Component2 = (props)=>
{
    return (
        <View>
            <Text style = {{fontSize:25}}>{props.age}</Text>
        </View>
    )
}

export {Component1,Component2}