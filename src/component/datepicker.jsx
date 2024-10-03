import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/Fontisto'

const Datecompo = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);


  return (
    <View style={styl.cont}>
      <Icon name = 'date' size = {19} color = {'purple'} style = {{paddingVertical : 16 , paddingHorizontal : 11}}></Icon>
      <TouchableOpacity style={styl.touchopacity} onPress={() => setOpen(true)}>
        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          minimumDate={new Date("1980-01-01")}
          maximumDate={new Date("2020-12-31")}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setCheck(true);
          }}
          onCancel={() => {
            setOpen(false);

          }}
          ></DatePicker>
        <Text style={styl.txt}>
          {check ? date.toISOString().split('T')[0] : 'Select Date of Birth'}
        </Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styl = StyleSheet.create({
  cont: {
     flexDirection : 'row'  ,
     marginHorizontal  :25 ,
     marginTop : 25,
     borderRadius : 12 , 
     borderColor : 'purple' , 
     borderWidth : 2,
  },
  touchopacity: {
    padding: 15,
    paddingHorizontal : 4,
    borderRadius: 14,
  },
  txt: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
});

export default Datecompo;
