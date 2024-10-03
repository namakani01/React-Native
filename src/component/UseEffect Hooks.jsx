import React ,{useEffect,useState}from "react";
import {View, Text,Alert, Button, TextInput } from "react-native";

const Effect = ()=>
{
    const [count, setcount] = useState(0)
    const [age, setage] = useState(100)

    useEffect(()=> console.log("inside use effect"),[count])

    return (
        <View>

        <Text style = {{fontSize  : 28,margin:20}}>The count is  :  {count}</Text>
        <Button title="click  me" onPress={()=>setcount(count + 1)}></Button>

        <Text style = {{fontSize  : 28,margin : 20}}>Age is  :  {age}</Text>
        
        <Button title="press me" on onPress={()=>setage(age + 1)}></Button>
        
        </View>
    )
}

export default Effect