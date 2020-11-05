import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack'; 

import Home from '../screens/Home'; 
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/header';

const HomeStack = createStackNavigator(); 

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6d50ad',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <HomeStack.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerTitle: () => <Header navigation={navigation} title="Series Review" />, 
          }}
        />
      <HomeStack.Screen 
        name="ReviewDetails" 
        component={ReviewDetails} 
        options={{
          title: "Review Details"
        }}
      />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen; 