import React from "react";
import { FlatList, StyleSheet,Text,View } from "react-native";

 const Sample2 = ()=>
{
    const data2 =  [
    {
        id: 1,
        name: 'apple',
      },
      {
        id: 2,
        name: 'mango',
      },
      {
        id: 3,
        name: 'orange',
      },
      {
        id: 4,
        name: 'kiwi',
      },
      {
        id: 5,
        name: 'watermelon',
      },
      {
        id: 6,
        name: 'Anish',
      },
      {
        id: 7,
        name: 'Bala',
      },
      {
        id: 8,
        name: 'People',
      },
      {
        id: 9,
        name: 'Hello',
      },
      {
        id: 10,
        name: 'Dog',
      },
      
    ];
    return (
      <FlatList 
      data={data2} 
      renderItem={({item})=><Text>{item.name}</Text>}
      scrollEnabled = {false}
      ItemSeparatorComponent = {()=>{
        return(
        <View style={{height:4, backgroundColor: 'grey'}}>
        </View>
      )}}>
      

      </FlatList>
    )
}



const s = StyleSheet.create({
    cont : {
        backgroundColor : 'green'
    }
})

export {Sample2 ,s}