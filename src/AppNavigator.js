import { View, Text } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from './screens/Splash';
import HomeScreen from './screens/HomeScreen';
import ItemByCategory from './screens/ItemByCategory';

const Stack =createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='Splash'
        component={Splash}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name='Home'
        component={HomeScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name='ItemByCategory'
        component={ItemByCategory}
        options={{headerShown:true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator