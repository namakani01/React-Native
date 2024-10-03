import React, { useEffect, useState } from "react";
import {View, Button, Text, TextInput } from "react-native";


const Practise = ()=>
{
    const[count , setCount] = useState(0)
    const[name ,setName] = useState({firstname : ''  , lastname : ''})

    return (
        // <View>

        // <Text style ={{fontSize : 25}}>{count}</Text>

        // <View style ={{padding : 20}}>
        // <Button title="Increment" o onPress={()=>setCount(count + 1)}></Button>
        // </View>

        // <View style ={{padding : 20}}>
        // <Button title="Decrement" onPress={()=>setCount(count - 1)}></Button>
        // </View>

        // <View style ={{padding : 20}}>
        // <Button title="Reset" onPress={()=>setCount(0)}></Button>
        // </View>

        // <View style ={{padding : 20}}>
        // <Button title="Increment by 5" onPress={()=>setCount(prevCount => prevCount  + 5)}></Button>
        // </View>

        //  </View>


    //    <View>
    //    <TextInput style = {{borderWidth : 2 , margin  :10 , width  :160}} value ={name.firstname}  onChangeText={(text)=>setName({firstname : text})}></TextInput>
    //    <TextInput style = {{borderWidth : 2 , margin  :10 , width : 160}} value ={name.lastname}  onChangeText={(text)=>setName({lastname : text})}></TextInput>
    //    {/* {console.log(name)} */}
    //    <Text>The firstname : {name.firstname}</Text>
    //    <Text>The lastname : {name.lastname}</Text>
    //    <Text>{JSON.stringify(name)}</Text>
    //    </View>


    <Text>ecsc</Text>
    )
}


export default Practise;