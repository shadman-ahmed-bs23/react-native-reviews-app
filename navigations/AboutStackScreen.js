import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack';

import About from '../screens/About';
import Header from '../shared/header';

const AboutStack = createStackNavigator(); 

const AboutStackScreen = ({navigation}) => {
  return (
    <AboutStack.Navigator
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
      <AboutStack.Screen 
        name="About" 
        component={ About } 
        options={{
          headerTitle: () => <Header navigation={navigation} title="About this app"/>,
        }}
    />
    </AboutStack.Navigator>
  ); 
}

export default AboutStackScreen; 