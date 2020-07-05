import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppLoading } from "expo";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Ubuntu_700Bold, useFonts } from "@expo-google-fonts/ubuntu";

import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";
import light from "./src/themes/light";
import dark from "./src/themes/dark";
import Header from "./src/components/Header";

import Routes from "./src/routes";
export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <ThemeProvider theme={darkTheme ? dark : light}>
        <StatusBar
          barStyle={darkTheme ? "light-content" : "dark-content"}
          backgroundColor={darkTheme ? "#222" : "#f1f2f3"}
          translucent
        />
        <Header
          onDarkModeChange={() => {
            setDarkTheme(!darkTheme);
          }}
          darkModeValue={darkTheme}
        />

        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}
