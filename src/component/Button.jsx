import React from "react";
import { Button } from "react-native";




const output = () => {
    Alert.alert('Button is pressed');
  };

const Buttonapp1 = ()=>
{
    return (
        <Button title="Click Me" onPress={output}></Button>
    )
}

const Buttonapp2 = ()=>
{
    return (
        <Button
        color={'green'}
        title="Press me"
        onPress={() => Alert.alert('Button is clicked')}></Button>
    )
}


export {Buttonapp1,Buttonapp2};