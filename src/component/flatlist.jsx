import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const Flatlist = () => {
  const items = [
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
  ];
  return (
    <View style = {{paddingTop : 20}}>
      <Text> Flat List</Text>
      <FlatList
        data={items}
        renderItem={({item}) => (
          
            <Text style = {st.sty}>{item.name}</Text>
        )}
        scrollEnabled={false}/>
    </View>
  );
};


const st = StyleSheet.create({
  sty : {
    fontSize : 20,
    color : 'green',
    padding : 5,
    textAlign : 'center',

  }
})

export {Flatlist,st};
