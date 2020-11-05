import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Header from '../shared/header';
import HomeStackScreen from './HomeStackScreen';
import SettingsStackScreen from "./SettingsStackScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStackScreen} />
      <Drawer.Screen 
        name="About" 
        component={SettingsStackScreen} 
        options={{
          headerTitle: () => <Header />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
