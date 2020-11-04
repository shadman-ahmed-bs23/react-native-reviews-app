import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack'; 

import Home from '../screens/Home'; 
import ReviewDetails from '../screens/ReviewDetails';

const HomeStack = createStackNavigator(); 

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6d50ad',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center',
        },
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="ReviewDetails" component={ReviewDetails} />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen; 