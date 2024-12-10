import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Debounce1 = () => {
  const [count, setCount] = useState(0);
  const [trigger, setTrigger] = useState(0);

  const [timer, setTimer] = useState(0);

  const debounce = (callback, delay) => {
    return function () {
      clearTimeout(timer);
      console.log('start', timer);
      setTimer(
        setTimeout(() => {
          callback();
        }, delay),
      );

      console.log('aaa', timer);
    };
  };

  const Debounced = debounce(() => {
    setTrigger(trigger + 1);
  }, 5000);

  const handlepress = () => {
    setCount(count + 1);
    Debounced();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{backgroundColor: 'grey', padding: 5}}
        onPress={() => handlepress()}>
        <Text style={{color: 'white', fontSize: 16}}>Press me</Text>
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 17,
          marginTop: 12,
        }}>{`Button pressesd ${count} times`}</Text>

      <Text
        style={{
          fontSize: 17,
          marginTop: 12,
        }}>{`Triggered ${trigger} times`}</Text>
    </View>
  );
};

export default Debounce1;
