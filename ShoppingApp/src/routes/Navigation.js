import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {home, AllProducts, Details} from '../screens/index';
import MyStack from './MyStack';
import {RouterNames} from '../config';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouterNames.Home} component={home} />
      <Stack.Screen name={RouterNames.AllProducts} component={AllProducts} />
      <Stack.Screen name={RouterNames.MyStack} component={MyStack} />
      <Stack.Screen name={RouterNames.Details} component={Details} />
    </Stack.Navigator>
  );
};

export default Navigation;
