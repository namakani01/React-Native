import React from "react";
import { View,Text,StyleSheet,Alert} from "react-native";


const output = () => {
    Alert.alert('Hello World !!! text is pressed');
  };

  const style = StyleSheet.create({
    Text: {
      color: 'red',
    },
  });

const Textapp = () => {
  return (
    <View>
      <Text onPress={output} style={{fontSize: 30}}>
        Hello World !!!
      </Text>
      <Text style={[style.Text, {fontSize: 20}]}>Hello World!</Text>
    </View>
  );
};




export default Textapp;
