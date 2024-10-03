import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Ionicons'

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setvalue] = useState('');
  const [item, setitem] = useState([
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
  ]);


  const [error , setError] = useState(null)
  const [check , setCheck] = useState(true)

  const handleSubmit = () => 
    {
    if (value === '') {
      setError('Please select an option.');
      setCheck(false)
    }
     else {
      setError('');
      setCheck(true)
    }
  };

  return (
    <View>
    <View style={styless.cont}>
      <Icon name = 'male-female' size = {19} color = {'purple'} style = {{paddingVertical : 16 , paddingHorizontal : 8 }}></Icon>
      <DropDownPicker
        style={styless.dropdown}
        dropDownContainerStyle={{borderColor: 'purple', backgroundColor:'#fffaf0' ,borderWidth: 2 , width : 323}}
        selectedItemLabelStyle = {{fontSize : 15 , fontWeight : '400'}}
        placeholder="Select the Gender"
        placeholderStyle = {{fontSize : 17, textAlign : 'left',fontWeight : '500'}}
        open={open}
        setOpen={setOpen}
        value={value}
        setValue={setvalue}
        items={item}
        selectedItemContainerStyle={{color:'pink', backgroundColor:'pink'}}
        setItems={setitem}
        onPress={handleSubmit} >
        </DropDownPicker>
    </View>
    <View>
        {error ? <Text style={{color : 'red',fontWeight : '500', marginHorizontal : 25 , marginTop : 10}}>{error}</Text>: null}
        </View>
    </View>
  
  );
};


const styless = StyleSheet.create({
  cont: {
    zIndex : 1,
    flexDirection : 'row',
    borderRadius : 12 , 
    borderLeftColor : 'red',
    borderColor : 'purple' , 
    borderWidth : 2,
    marginHorizontal :25, 
    marginTop : 25,
  },
  dropdown : {
    borderRadius: 17, 
    backgroundColor : '#fffaf0',
    width : 317,
    height : 30,
    borderWidth : 0 , 
  },
});

export default Dropdown;
