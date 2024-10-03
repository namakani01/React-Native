import React, { useEffect, useState } from "react";
import { Flex } from "./flex";
import { Button ,View,Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();
const App3 = ()=>
{
    return(
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name = 'Home' component={A1}></Stack.Screen>
            <Stack.Screen name = 'A2' component={A2}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
}



const A1 = (props)=>
{   
    
    useEffect(()=>
{
    // const intervalid = setInterval(() => {
    //     console.warn("unmount")
    //     }, 2000);
    
    return ()=> clearInterval(intervalid)
})

    return(
        <View>
            <Text>Hello WorEld</Text>
            <Button title="click" onPress={()=>props.navigation.navigate('A2')}></Button>
        </View>
    )
}


const A2 = ()=>
    {
        return(
            <View>
                <Text>Hello WorEld !!!!</Text>
            </View>
        )
    }

export {App3 ,A1,A2}