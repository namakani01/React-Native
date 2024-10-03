import React from 'react';
import {
  Text,
  View,
  Button,
  Alert,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import Textapp from './src/component/Text';
import {Buttonapp1, Buttonapp2} from './src/component/Button';
import {Textinput1} from './src/sample';
import {Hello} from './src/component/Users';
import Sample from './src/sample';
import {User} from './src/sample';
import {Imagebackgrnd} from './src/sample';
import ImageCompo from './src/component/ImageCompo';
import {Loader} from './src/sample';
import {Parent, Child} from './src/component/props';
import {Words, styles} from './src/component/style';
import externalstyle from './src/component/externalstyle';
import {Textinputbox, styless} from './src/component/textinput';
import {Flatlist, st} from './src/component/flatlist';
import {Model} from './src/component/Modal';
import {Pressables, sty} from './src/component/pressable';
import {TouchHiglight, styl} from './src/component/Touchablehighlight';
import {Touchopacity, str} from './src/component/Touchableopacity';
import Seclist from './src/component/SectionList';
import Custom from './src/component/customlist';
import {Sample2, s} from './src/component/sample2';
import Statusbar from './src/component/statusbar';
import {Swi, stm} from './src/component/switch';
import {Flex, t} from './src/component/flex';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { App1} from './src/component/Navigation';
import { App2 } from './src/component/Tabnavigation';
import { KeyAvoidingView } from './src/component/KeyboardavoidingView';
import Effect from './src/component/UseEffect Hooks';
import { Component1,Component2 } from './src/component/prop';
import { App3 ,A1,A2} from './src/component/UseEffectCleanUp';
import Reff from './src/component/Useref';
import Example from './src/component/useref example';
import Form from './src/component/Form';
import Dropdown from './src/component/Dropdown';
import Practise from './src/component/practise';



const App = () => {
  return (
    // <ScrollView>
    //   <Textapp></Textapp>

    //   <Buttonapp1></Buttonapp1>

    //   <Textinput1></Textinput1>

    //   <Hello></Hello>

    //   <ImageCompo></ImageCompo>

    //   <Buttonapp2></Buttonapp2>

    //   <User></User>

    //   <Imagebackgrnd></Imagebackgrnd>

    //   <Loader></Loader>

    //   <Parent></Parent>

    //   <Words></Words>

    //   <Text style={externalstyle.xyz}>Hello World</Text>

    //   <Textinputbox></Textinputbox>

    //   <Flatlist></Flatlist>

    //   <Pressables></Pressables>

    //   <TouchHiglight></TouchHiglight>

    //   <Touchopacity></Touchopacity>

    //   <Custom></Custom>

    //   <Seclist></Seclist>

    //   <Sample2></Sample2>

    //   <Statusbar></Statusbar>

    //   <Swi></Swi>

    //   <Model></Model>

    //   <Flex></Flex>
    
    // </ScrollView>

    // <Component1></Component1>

    // <App1></App1>

      // <App2></App2>

//  <Effect></Effect> 

 // <App3></App3>

//  <Reff></Reff>

// <Example></Example> 

     <Form></Form>
    
//  <Dropdown></Dropdown> 



//  <Practise></Practise> 

  
  );
};


export default App;
