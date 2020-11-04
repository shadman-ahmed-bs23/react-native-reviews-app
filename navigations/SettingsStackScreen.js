import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 

import About from '../screens/About'; 
import Settings from '../screens/Settings'; 

const SettingsStack = createStackNavigator(); 

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6d50ad',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
        },
      }}
    >
      <SettingsStack.Screen name="Settings" component={Settings} />
      <SettingsStack.Screen name="About" component={About} />
    </SettingsStack.Navigator>
  )
}

export default SettingsStackScreen; 