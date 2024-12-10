import React, {useEffect, useRef} from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';

const Reff = () => {
  const inputRef = useRef('');     


  // console.log(">>>",inputRef)      //  {current : ''}

  const abc = () => {
    inputRef.current.focus();
    inputRef.current.setNativeProps({
      borderColor : 'red'
    })
  };

  return (
    <View style={s.cont}>
      <TextInput ref={inputRef} style={s.input} ></TextInput>
      <Button title="Click" onPress={abc}></Button>
    </View>
  );
};

const s = StyleSheet.create({
  cont: {
    margin: 15,
  },
  input: {
    borderWidth: 2,
    margin: 25,
  },
});

export default Reff;
