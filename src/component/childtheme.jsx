import {View, Text} from 'react-native';
import React, {useContext} from 'react';

import {data} from './Theme';

const Childtheme = () => {
  const theme = useContext(data);

  return (
    <View
      style={{
        marginTop: 10,
        backgroundColor: theme === true ? 'white' : 'black',
        height: 400,
      }}>
      <Text
        style={{
          color: theme === true ? 'black' : 'white',
          textAlign: 'center',
          marginTop: 40,
          fontSize: 20,
        }}>
        childtheme
      </Text>
    </View>
  );
};

export default Childtheme;
