import React from 'react';
import {SectionList, View, Text, StyleSheet} from 'react-native';

const Seclist = () => {
  const items = [
    {
      title: 'A',
      data: ['Akash', 'Anil', 'Anish', 'Aman'],
    },
    {
      title: 'B',
      data: ['Bat', 'Ball', 'Bun', 'Bull'],
    },
    {
      title: 'C',
      data: ['Cat', 'Camel', 'Cow', 'Cockroach'],
    },
    {
      title: 'D',
      data: ['Dog', 'Donkey', 'Duck', 'Deer'],
    },
  ];
  return (
    <View>
      <Text style = {{paddingTop:30}}>Section List</Text>
      <SectionList
        style = {{paddingTop : 10}}
        sections={items}
        renderItem={({item}) => <Text style = {s.container}>{item}</Text>}
        renderSectionHeader={({section: {title}}) => <Text style = {s.con}>{title}</Text>}
        // renderSectionFooter={({section : {title}}) => <Text>{title}</Text>}
        scrollEnabled={false}></SectionList>
    </View>
  );
};

const s = StyleSheet.create({
    container : {
        fontSize : 19,
        color : 'orange',
        textAlign : 'center'
    },
    con : {
        backgroundColor : "pink",
        textAlign : 'center',
        fontWeight : 'bold'
    }
})

export default Seclist;



