import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Custom = ()=>
{
    const items = [
        {
            id : 1,
            name : "Item 1"
        },
        {
            id : 2,
            name : "Item 2"
        },
        {
            id : 3,
            name : "Item 3"
        },
        {
            id : 4,
            name : "Item 4"
        }
    ]
    return (
        <View>
        <Text>Custom list</Text>
        {
            items.map((value)=> <Text style = {st.container}>{value.name}</Text>) 
        }
       </View>
    )
}


const st = StyleSheet.create({
    container : {
        fontSize : 20

    }
})
export  default Custom;