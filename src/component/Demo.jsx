import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

const Demo = () => {
  const data = ['apple', 'ornage', 'mango', 'cherry', 'cat'];

  return (
    <View>
      <TouchableOpacity>
        <View></View>

        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={{backgroundColor: 'grey', margin: 10, padding: 10}}>
              <Text>{item}</Text>
            </View>
          )}></FlatList>
      </TouchableOpacity>
    </View>
  );
};
export default Demo;
