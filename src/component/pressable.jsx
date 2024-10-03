import React, {useState} from 'react';
import {
  Pressable,
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from 'react-native';

const Pressables = () => {
  
  const [oldvalue, currrentvalue] = useState(0);

  return (
    <View style={{paddingTop: 30}}>
      <Pressable
        onPress={() => {
          currrentvalue(oldvalue + 1);
        }}
        // onLongPress={() => console.log('The text is long presses')}
        // onPressIn={() => console.log('The button is pressed')}
        // onPressOut={() => console.log('The button is released')}   
         >
        <Text style={sty.container}>Pressable</Text>
        <Text style={{fontSize: 20}}>The Pressable  is pressesd : {oldvalue}</Text>
      </Pressable>
    </View>
  );
};

const sty = StyleSheet.create({
  container: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'orange',
    color: 'black',
    borderRadius: 5,
    margin: 20,
  },
});

export {Pressables, sty};
