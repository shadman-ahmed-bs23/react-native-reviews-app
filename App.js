import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingsStackScreen from './navigations/SettingsStackScreen';
import TabNavigator from './navigations/TabNavigator';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Contact" component={SettingsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}