import React from 'react';
import {Text, View} from 'react-native';

const Cat = () => {
  return <Text>Hello I am Cat</Text>;
};

function cat() {
  return 'meoomwwww';
}

const Hello = () => {
  const name = 'Harish';
  const age = 25;
  return (
    <View style={{paddingTop: 10}}>
      <Cat></Cat>
      <Text style={{fontSize: 20, color: 'orange'}}>{name}</Text>
      <Text>{age}</Text>
      <Text>{cat()}</Text>
    </View>
  );
};


export {Hello} 
