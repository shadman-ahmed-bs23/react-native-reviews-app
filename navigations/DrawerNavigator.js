import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";

import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import About from '../screens/About';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
