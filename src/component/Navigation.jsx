import React from "react";
import {View,Button,Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator()

const App1 = ()=>{
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ='Screen 1' component={Screen1} options={{headerStyle : {backgroundColor : 'orange'}}}></Stack.Screen>
        <Stack.Screen name = 'Screen 2' component={Screen2}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Screen1 = (props)=>
    {
       return (
        <View>
          <Text style  ={{textAlign : 'center',margin : 50,fontSize:30}}>Hello Screen 1</Text>
          <Button title='go to screen 2' onPress={()=> props.navigation.navigate('Screen 2')}></Button>
        </View>
       )
    }
    
    const Screen2 = ()=>
    {
      return(
        <View>
          <Text style={{textAlign : 'center',margin : 50,fontSize:30}}>Hello Screen 2</Text>
        </View>
      )
    }


export {App1,Screen1,Screen2};