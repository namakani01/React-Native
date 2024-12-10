import React from 'react';
import {View, StyleSheet} from 'react-native';

const Flex = () => {
  return (
    <View style={t.main}>
      <View style={t.box1}>
        <View style={t.innerbox1}></View>
        <View style={t.innerbox1}></View>
      </View>

      <View style={t.box2}></View>
      <View style={t.box3}></View>
    </View>
  );
};

const t = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 20,
    height: 600,
  },
  box1: {
    flexDirection: 'row',
    flex: 5,
    backgroundColor: 'red',
  },
  box2: {
    flex: 2,
    backgroundColor: 'green',
  },
  box3: {
    flex: 3,
    backgroundColor: 'pink',
  },
  innerbox1: {
    flex: 1,
    backgroundColor: 'orange',
    margin: 10,
  },
});

export {Flex, t};
