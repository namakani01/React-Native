import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {data} from './useContext';

const ChildA = () => {
  const name = useContext(data);

  return (
    <View>
      <Text>Child A</Text>
      <Text>{name}</Text>
    </View>
  );
};

export default ChildA;
