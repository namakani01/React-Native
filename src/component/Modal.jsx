import React, {useState} from 'react';
import {View, Modal, Button, StyleSheet, Text} from 'react-native';

const Model = () => {
  const [name, setname] = useState(false);
  return (
    <View style={sty.container}>
      <Button onPress={() => setname(!name)} color={'green'} title="Modal">
      </Button>
      <Modal
        animationType="fade"
        visible={name}
        onRequestClose={() => {
          setname(!name);
        }}>
          <Text style = {sty.text}>
            Hellooooo
          </Text>
      </Modal>
    </View>
  );
};

const sty = StyleSheet.create({
  container: {
    paddingTop: 30,
    width: 350,
    alignItems: 'center',
    paddingLeft: 50,
  },
  text :
  {
    paddingBottom: 25,
    fontWeight: 'bold', 
    fontSize: 30,
    margin : 130,
    color : 'red'
  }
});

export {Model};
