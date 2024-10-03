import React ,{useState} from "react";
import { Button, Text, View } from "react-native"

// props and state example

const Parent = ()=>
{
    const [name , setname] = useState("Mahesh")
    return (
      <View>
      <Child firstname = {name}> </Child>
      <View style = {{width :400 , alignItems : 'center'}}>
      <Button title="Press" onPress={()=>setname("Suresh")}></Button>
      </View>
      </View>
    )
}


const Child = (props)=>
{
    return (
        <Text style = {{fontSize : 24}}>{props.firstname}</Text>
    )
}

export {Parent,Child}