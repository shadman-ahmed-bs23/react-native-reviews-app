import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 

import About from '../screens/About'; 
import Settings from '../screens/Settings'; 
import Header from '../shared/header';

const SettingsStack = createStackNavigator(); 

const SettingsStackScreen = ({ navigation }) => {
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
      <SettingsStack.Screen 
        name="Settings" 
        component={Settings} 
        options={{
          headerTitle: () => <Header navigation={navigation} title="Settings" />, 
        }}
      />
      <SettingsStack.Screen 
        name="About" 
        component={About} 
      />
    </SettingsStack.Navigator>
  )
}

export default SettingsStackScreen; 