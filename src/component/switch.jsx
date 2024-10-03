import React, { useState } from "react";
import { StyleSheet, Switch ,Text,View} from "react-native";

const Swi = () =>
{
    const[on ,setOff] = useState(false)
    return (
        <View style={stm.container}>
        <Switch thumbColor = {'blue'} onChange = {()=>setOff(!on)} value = {on}></Switch>
        </View>
    )
}


const stm = StyleSheet.create({
    container : {
        flex:1,
        alignItems:"center",
    }
})

export {Swi,stm};