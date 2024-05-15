import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/index';
const Stack = createNativeStackNavigator();
import {RouterNames} from '../config';
const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouterNames.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default MyStack;
