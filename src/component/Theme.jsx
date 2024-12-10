import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import React, {createContext, useState} from 'react';
import Childtheme from './childtheme';

export const data = createContext();

const Theme = () => {
  const [themevalue, setthemeValue] = useState(true);

  return (
    <View>
      <data.Provider value={themevalue}>
        <Text style={{marginTop: 10, textAlign: 'center', fontSize: 20}}>
          Themecontext
        </Text>
        <Childtheme></Childtheme>

        <TouchableOpacity
          onPress={() => setthemeValue(!themevalue)}
          style={{
            marginTop: 15,
            backgroundColor: 'grey',
            padding: 5,
            marginHorizontal: 100,
          }}>
          <Text
            style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>
            Change theme
          </Text>
        </TouchableOpacity>
      </data.Provider>
    </View>
  );
};

export default Theme;
