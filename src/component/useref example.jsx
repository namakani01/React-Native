import React,{useState,useEffect,useRef} from "react";
import {View, Text,StyleSheet, TextInput } from "react-native";


const Example = ()=>
{
    const[inputvalue , setInputvalue] = useState("")

    const inputRef = useRef(null);

    
    useEffect(() => {
        inputRef.current = inputvalue;
      }, [inputvalue]);


    return(
        <View style= {styles.vie}>
            <TextInput ref = {inputRef} style = {styles.cont}  value= {inputvalue} onChangeText={(text)=>setInputvalue(text)}></TextInput>
            <Text style = {styles.text}>Current Value : {inputvalue}</Text>
            <Text style = {styles.text}>Previous Value : {inputRef.current}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    vie : 
    {
       margin : 30,
       
    },
    cont :
    {
        borderWidth : 1.5,
    },
    text : 
    {
       fontSize : 15,
       fontWeight : '500',
       paddingTop  :20,
       marginTop : 14
       
    }
})


export default Example;