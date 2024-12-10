import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useMemo, useState} from 'react';

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const factorial = input => {
    console.log('calculating ...');
    let result = 1;
    for (let i = 1; i <= input; i++) {
      result = result * i;
    }
    return result;
  };

  const fact = useMemo(() => {
    return factorial(input);
  }, [input]);

  return (
    <View>
      <Text style={{fontSize: 17, marginTop: 10}}>The count is {count}</Text>

      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={{
          backgroundColor: 'grey',
          marginTop: 20,
          marginRight: 300,
          padding: 5,
        }}>
        <Text style={{color: 'white', textAlign: 'center'}}>Click me</Text>
      </TouchableOpacity>

      <TextInput
        value={input}
        style={{borderWidth: 2, marginTop: 15}}
        onChangeText={text => setInput(text)}></TextInput>

      <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>{fact}</Text>
    </View>
  );
};

export default UseMemo;
