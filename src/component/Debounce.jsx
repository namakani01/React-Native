import {View, Text, FlatList, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const Debounce = () => {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  //   console.log('>>', search);

  const data = [
    'apple',
    'banana',
    'cherry',
    'mango',
    'orange',
    'grape',
    'watermelon',
  ];

  // const filteredproducts = data.filter(item => {
  //   return item.toLocaleLowerCase().includes(search);
  // });

  // const debounce = (callback, d) => {
  //   let timer;

  //   return function () {
  //     if (timer) {
  //       clearTimeout(timer);
  //     }

  //     timer = setTimeout(() => {
  //       callback();
  //     }, d);
  //   };
  // };

  const [timer, setTimer] = useState(0);

  const onChangeText = text => {
    setSearch(text);
    console.log('aaaaa', timer);
    clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        const filtered = data.filter(item =>
          item.toLowerCase().includes(text.toLowerCase()),
        );

        setFilteredProducts(filtered);
      }, 1000),
    );
    console.log('after', timer);
  };

  console.log('<<', filteredProducts);

  return (
    <View>
      <TextInput
        value={search}
        onChangeText={onChangeText}
        placeholder="Search..."
        style={styles.textinput}></TextInput>

      <FlatList
        data={filteredProducts}
        renderItem={({item}) => <Text>{item}</Text>}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  textinput: {
    borderWidth: 2,
    marginHorizontal: 20,
    marginVertical: 20,
    paddingLeft: 13,
  },
});

export default Debounce;
