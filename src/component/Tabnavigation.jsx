import React from 'react';
import {View, Text, Button} from 'react-native';
import SignUp from './SignUp';
import LogIn from './LogIn';
import {NavigationContainer} from '@react-navigation/native';
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';
import Icon1 from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const App2 = () => {
  // <Icon1 name="login" size={30} color="#900"/>; // Defaults to regular

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 60,
          },
          tabBarLabelStyle :{
            fontSize : 15,
            color : 'red'
          }
        }}>
        <Tab.Screen options={{tabBarIcon: () => <Icon1 name="login" size={30} color="#900" />}} name="Sign Up" component={SignUp}></Tab.Screen>
        <Tab.Screen name="Login" component={LogIn}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export {App2};
