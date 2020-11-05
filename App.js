import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from './navigations/TabNavigator';
import AboutStackScreen from './navigations/AboutStackScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="About" component={AboutStackScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}