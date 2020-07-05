import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from "@expo/vector-icons";

import HomeScreen from "./pages/Home";
import InfoScreen from "./pages/Info";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const Tab = createBottomTabNavigator();
const icons = {
  Home: {
    lib: AntDesign,
    name: "home",
  },
  Info: {
    lib: AntDesign,
    name: "infocirlceo",
  }
};

export default function Navigation() {
  const themeContext = useContext(ThemeContext);
  return (
    <Tab.Navigator
    tabBarOptions={{
      style: {
        backgroundColor:themeContext.bottomNavigaton,
        borderTopColor: 'rgba(255, 255, 255, 0.2)',
      },

      activeTintColor: themeContext.activeBottom,
      inactiveTintColor: themeContext.inactiveBottom
    
    }}
      activeColor="#fff"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} color={color} size={20} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home"}}
      />
      <Tab.Screen
        name="Info"
        component={InfoScreen}
        options={{ title: "Info" }}
      />
    </Tab.Navigator>
  );
}
