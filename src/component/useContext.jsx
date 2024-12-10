import {View, Text} from 'react-native';
import React, {createContext} from 'react';
import ChildA from './childA';

export const data = createContext();

const UseContext = () => {
  return (
    <View>
      <data.Provider value={'Hello'}>
        <ChildA></ChildA>
      </data.Provider>
    </View>
  );
};

export default UseContext;
